#!/usr/bin/env bash
# Routine update van freelanceaiconsultant.com op de VPS. Handmatig aanroepen als:
#   bash /var/www/freelanceaiconsultant/deploy/deploy.sh
#
# Ook het enige commando dat de GitHub Actions deploy-workflow over ssh aanroept (zie
# .github/workflows/deploy-vps.yml en docs/deploy-automation.md): de authorized_keys-regel op de
# server dwingt de deploy-sleutel altijd exact dit script uit te voeren, ongeacht welk commando
# er over ssh wordt meegestuurd.
#
# Bouwt eerst in de bestaande dist/, draait de volledige check-suite, en wijst de "live"-symlink
# pas naar een nieuwe releases/<timestamp>-map als build en checks allebei slagen. Een mislukte
# build of check laat "live" onaangeraakt op de vorige, al bewezen release staan. Bewaart de
# laatste 5 releases (rollback.sh wijst "live" terug naar een eerdere).
set -euo pipefail

cd "$(dirname "$0")/.."
REPO_DIR="$(pwd)"

git fetch origin main
git checkout main
git reset --hard origin/main
npm ci

rm -rf dist
npm run build
npm run check

RELEASE="$REPO_DIR/releases/$(date +%Y%m%d%H%M%S)"
mkdir -p "$REPO_DIR/releases"
cp -a dist "$RELEASE"
ln -sfn "$RELEASE" "$REPO_DIR/live.new"
mv -T "$REPO_DIR/live.new" "$REPO_DIR/live"

# Bewaar de laatste 5 releases, ruim de rest op.
cd "$REPO_DIR/releases"
ls -1t | tail -n +6 | xargs -r rm -rf

echo "Deploy klaar: $RELEASE is nu live."
