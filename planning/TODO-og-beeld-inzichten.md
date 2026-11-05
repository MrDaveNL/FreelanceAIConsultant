# TODO: OG-beeld per inzicht-artikel

`BlogPosting.image` is bewust weggelaten in de structured data van de inzichten-artikelen
(zie `src/pages/nl/inzichten/[slug].astro`). Er bestaat geen eigen artikelbeeld: elke pagina
valt zonder eigen `image`-prop terug op `site.portrait` (Dave's portretfoto) als og:image, en
die foto is geen geschikt artikelbeeld voor `BlogPosting.image` of social shares.

Nodig: een gegenereerd OG-beeld per artikel (titel + huisstijl, geen stockfoto), voor:
- de 12 bestaande inzichten-artikelen,
- elk nieuw artikel uit de blogplanning (incl. BLOG-01 "Shadow AI").

Zodra dat beeld bestaat: `image`-prop doorgeven aan `BaseLayout` per artikel (voor og:image/
twitter:image) én toevoegen aan `BlogPosting` in de structured data.
