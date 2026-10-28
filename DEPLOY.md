# Deploying freelanceaiconsultant.com

Static Astro build, served by nginx from `/var/www/freelanceaiconsultant/live` on the Hostinger VPS
(Ubuntu). There is no server-side app: the contact form posts straight from the browser to Web3Forms
(see "Contact form" below), so nginx only ever serves files.

`live` is a symlink, not a real directory. Each deploy builds into the repo's own `dist/`, runs the
full check suite against it, and only if everything passes copies that `dist/` into a new
`releases/<timestamp>/` folder and repoints `live` at it. A failed build or check leaves `live`
pointing at the previous good release, so the site in front of visitors never changes until a build
has proven itself.

**`main` is the deploy branch.** Feature work happens on other branches and merges into `main`;
the VPS checkout only ever tracks `main`, and `deploy.sh` always pulls `main`.

## First-time setup

1. **Node.** Install Node (the repo was built/tested on Node 24; any current LTS works):
   ```
   curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```
2. **Directory layout and clone:**
   ```
   sudo mkdir -p /var/www/freelanceaiconsultant/releases
   sudo chown -R "$USER" /var/www/freelanceaiconsultant
   git clone -b main <remote-url> /var/www/freelanceaiconsultant/repo
   cd /var/www/freelanceaiconsultant/repo
   ```
3. **Install dependencies**, including Playwright's browser (the check suite's overflow test drives a
   real headless Chromium):
   ```
   npm ci
   npx playwright install --with-deps chromium
   ```
4. **First build + release**, using the exact deploy script from "Update flow" below (`deploy.sh`) —
   it creates the first `releases/<timestamp>/` and points `live` at it. There is nothing live to
   protect yet, so just run it.
5. **nginx.** Install nginx, add the config, enable it:
   ```
   sudo apt-get install -y nginx
   sudo cp /var/www/freelanceaiconsultant/repo/deploy/nginx-freelanceaiconsultant.conf \
       /etc/nginx/sites-available/freelanceaiconsultant.com
   sudo ln -s /etc/nginx/sites-available/freelanceaiconsultant.com /etc/nginx/sites-enabled/
   sudo rm -f /etc/nginx/sites-enabled/default
   sudo nginx -t && sudo systemctl reload nginx
   ```
6. **DNS**: point `freelanceaiconsultant.com` and `www.freelanceaiconsultant.com` A/AAAA records at the
   VPS before requesting a certificate.
7. **SSL** (after DNS resolves to the VPS):
   ```
   sudo apt-get install -y certbot python3-certbot-nginx
   sudo certbot --nginx -d freelanceaiconsultant.com -d www.freelanceaiconsultant.com
   ```
   Certbot edits `/etc/nginx/sites-available/freelanceaiconsultant.com` in place, filling in the
   `listen 443 ssl;` and certificate lines marked with comments in `deploy/nginx-freelanceaiconsultant.conf`.
   It also sets up its own renewal timer — no further action needed for renewals.

## Update flow

Save this as `/var/www/freelanceaiconsultant/repo/deploy.sh` (`chmod +x`) and run it for every deploy:

```bash
#!/usr/bin/env bash
set -euo pipefail

cd /var/www/freelanceaiconsultant/repo
git checkout main
git pull origin main
npm ci

rm -rf dist
npm run build   # astro build + postbuild checks (check-dist, check-nulmeting, check-rag)
npm run check   # re-runs those checks plus check-overflow (Playwright, real headless Chromium)

# Only reached if build and every check above exited 0.
RELEASE=/var/www/freelanceaiconsultant/releases/$(date +%Y%m%d%H%M%S)
cp -a dist "$RELEASE"
ln -sfn "$RELEASE" /var/www/freelanceaiconsultant/live.new
mv -T /var/www/freelanceaiconsultant/live.new /var/www/freelanceaiconsultant/live

# Keep the last 5 releases for rollback, prune the rest.
cd /var/www/freelanceaiconsultant/releases
ls -1t | tail -n +6 | xargs -r rm -rf
```

`mv -T live.new live` is a single rename, so nginx (which reads `live` fresh on every request) never
sees a half-updated symlink — it's either the old release or the new one, nothing in between. No
`nginx reload` is needed after a deploy.

If `npm run build` or `npm run check` exits non-zero, `set -e` stops the script before `live` is
touched — the site keeps serving the previous release untouched.

**Rollback** to the previous release (releases are named by timestamp, so the second-newest is the
one `live` pointed at before the last deploy):
```
cd /var/www/freelanceaiconsultant/releases && ln -sfn "$(pwd)/$(ls -1t | sed -n 2p)" /var/www/freelanceaiconsultant/live.new && mv -T /var/www/freelanceaiconsultant/live.new /var/www/freelanceaiconsultant/live
```

To roll back further, swap `sed -n 2p` for `sed -n 3p` (third-newest), etc. — any folder still in
`releases/` can be restored the same way.

## Contact form

`src/components/ContactForm.astro` submits with client-side `fetch()` directly to Web3Forms
(`https://api.web3forms.com/submit`), using the public access key in `src/data/site.js`
(`site.formAccessKey`). Web3Forms access keys are designed to be exposed client-side — that's how the
service works — so this is not a secret and needs no backend. If `formAccessKey` and `formEndpoint`
are both empty, the form falls back to opening a prefilled `mailto:` link instead.

**This works as-is on a static nginx host.** No server process, API route, or environment variable is
needed on the VPS for the form to function — it's a plain POST from the visitor's browser to an
external API. Nothing to set up here beyond serving the static files.
