#!/usr/bin/env bash
# Rollback naar een eerdere release. Handmatig aanroepen als:
#   bash /var/www/freelanceaiconsultant/deploy/rollback.sh [n]
#
# Zonder argument: wijst "live" naar de op-één-na-nieuwste release (de release van vóór de
# laatste deploy.sh-run). Met een getal n: wijst "live" naar de n-op-één-na-nieuwste release
# (n=1 is dus gelijk aan geen argument, n=2 de release daarvoor, enz.) - zo kan verder terug dan
# één stap zonder zelf releases/ te moeten doorzoeken. Raakt alleen de symlink aan, niet git,
# node_modules of de releases zelf: een releases/<timestamp>-map kan altijd opnieuw als doel
# gebruikt worden door deploy.sh opnieuw te draaien.
set -euo pipefail

cd "$(dirname "$0")/.."
REPO_DIR="$(pwd)"
N="${1:-1}"

TARGET="$(cd "$REPO_DIR/releases" && ls -1t | sed -n "$((N + 1))p")"
if [ -z "$TARGET" ]; then
  echo "Geen release gevonden om naar terug te gaan (n=$N, zie releases/)." >&2
  exit 1
fi

ln -sfn "$REPO_DIR/releases/$TARGET" "$REPO_DIR/live.new"
mv -T "$REPO_DIR/live.new" "$REPO_DIR/live"

echo "Teruggerold naar releases/$TARGET."
