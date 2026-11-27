# Deploying freelanceaiconsultant.com

Static Astro build, served by nginx from `/var/www/freelanceaiconsultant/live` on the Hostinger VPS
(Ubuntu). There is no server-side app: the contact form posts straight from the browser to Web3Forms
(see "Contact form" below), so nginx only ever serves files.

**Deploys are automated.** A push to `main` or `cms` is tested by GitHub Actions
(`.github/workflows/main.yml`, `cms-merge.yml`) and only deployed when every check passes; on
`cms` the merge into `main` itself only happens when the tests on the merged result are green
too. See `docs/deploy-automation.md` for the one-time setup (SSH keys, GitHub secrets) and
`docs/cms.md` for how the `cms`-branch merge works. `deploy/deploy.sh` below is the one script
both that automation and a manual run on the server actually execute — it is a real file in this
repo (`deploy/deploy.sh`), not something to create by hand. `cms-publish.ps1` still works as a
manual fallback if the GitHub Actions route is ever unavailable.

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
2. **Directory layout and clone.** `/var/www/freelanceaiconsultant` is itself the git checkout,
   there is no `repo/` subfolder:
   ```
   sudo mkdir -p /var/www/freelanceaiconsultant
   sudo chown -R "$USER" /var/www/freelanceaiconsultant
   git clone -b main <remote-url> /var/www/freelanceaiconsultant
   cd /var/www/freelanceaiconsultant
   mkdir -p releases
   ```
3. **Install dependencies**, including Playwright's browser (the check suite's overflow test drives a
   real headless Chromium):
   ```
   npm ci
   npx playwright install --with-deps chromium
   ```
4. **First build + release**, using `deploy/deploy.sh` (see "Update flow" below) —
   it creates the first `releases/<timestamp>/` and points `live` at it. There is nothing live to
   protect yet, so just run it.
5. **nginx.** Install nginx, add the config, enable it:
   ```
   sudo apt-get install -y nginx
   sudo cp /var/www/freelanceaiconsultant/deploy/nginx-freelanceaiconsultant.conf \
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

`deploy/deploy.sh` is the one script every deploy runs — automated (GitHub Actions, see
`docs/deploy-automation.md`) or manual:

```
bash /var/www/freelanceaiconsultant/deploy/deploy.sh
```

It does `git fetch`/`reset --hard origin/main`, `npm ci`, `npm run build` (astro build + postbuild
checks: `check-frontmatter-yaml`, `check-dist`, `check-sitemap`, `check-nulmeting`, `check-rag`),
then `npm run check` (re-runs those plus `check-nulmeting-en` and `check-overflow`, Playwright/
real headless Chromium). Only once both exit 0 does it copy `dist/` into a new
`releases/<timestamp>/` and repoint the `live` symlink at it with a single atomic rename
(`mv -T live.new live`) — nginx, which reads `live` fresh on every request, never sees a
half-updated symlink, so no `nginx reload` is needed. `set -euo pipefail` stops the script before
touching `live` if the build or any check fails; the site keeps serving the previous release
untouched. The last 5 releases are kept for rollback, the rest pruned.

GitHub Actions reaches this script over SSH, through a key the server's `authorized_keys`
restricts to running exactly this script (see `docs/deploy-automation.md`) — the command sent
over SSH is otherwise ignored.

**Rollback** to a previous release:
```
bash /var/www/freelanceaiconsultant/deploy/rollback.sh        # back one release
bash /var/www/freelanceaiconsultant/deploy/rollback.sh 2       # back two releases
```
Only repoints the `live` symlink; does not touch git, `node_modules`, or `releases/` itself — any
folder still in `releases/` can be restored this way.

## Contact form

`src/components/ContactForm.astro` submits with client-side `fetch()` directly to Web3Forms
(`https://api.web3forms.com/submit`), using the public access key in `src/data/site.js`
(`site.formAccessKey`). Web3Forms access keys are designed to be exposed client-side — that's how the
service works — so this is not a secret and needs no backend. If `formAccessKey` and `formEndpoint`
are both empty, the form falls back to opening a prefilled `mailto:` link instead.

**This works as-is on a static nginx host.** No server process, API route, or environment variable is
needed on the VPS for the form to function — it's a plain POST from the visitor's browser to an
external API. Nothing to set up here beyond serving the static files.
