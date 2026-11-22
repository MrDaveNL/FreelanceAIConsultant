# Werkafspraken voor Claude Code

## CMS-branch synchroon houden

Dave bewerkt kennisbankpagina's via `/admin` (Sveltia CMS) op branch `cms`, zie `docs/cms.md`.
Na elke `git push origin main` moet branch `cms` gelijk worden gezet, zodat een volgende
CMS-wijziging niet op een verouderde `main` begint:
```
git push origin main:cms
```
Als een sessie `main` heeft gewijzigd (gepusht), meld dit expliciet aan het eind van het
rapport, inclusief of `cms` al is bijgewerkt.
