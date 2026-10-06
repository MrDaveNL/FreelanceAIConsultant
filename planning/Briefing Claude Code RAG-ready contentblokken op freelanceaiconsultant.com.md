# Briefing Claude Code: RAG-ready contentblokken op freelanceaiconsultant.com

Oct 6, 2026 · @D. Willemstein

## Opdracht

Bouw op freelanceaiconsultant.com een herbruikbaar RAG-ready contentblok en leg het over alle bestaande en nieuwe pagina's die een koop- of keuzevraag beantwoorden. Elk stuk tekst dat een AI-systeem of zoekmachine uit zo'n blok ophaalt, moet op zichzelf een compleet, correct en citeerbaar antwoord zijn.

Het resultaat bestaat uit vier delen:

- een component dat het blok server-side rendert uit gestructureerde data;
- een databron waarin elk feit één keer staat;
- een geautomatiseerde controle die onvolledige blokken tegenhoudt;
- een rapport per pagina met wat is geplaatst en wat nog data mist.

Werk in twee fasen. Fase 0 is alleen lezen en rapporteren. Begin pas met bouwen na akkoord op dat rapport.

## Context en randvoorwaarden

freelanceaiconsultant.com is een Nederlandstalige site rond één consultant, gericht op de Nederlandse markt. Nieuwe content wordt via Claude Code ontwikkeld vanuit een Excel-contentplanning.

Harde regels, zonder uitzondering:

1. **Het blok komt over de bestaande content heen, als toevoeging.** Bestaande pagina's krijgen het blok erbij. Wat er nu staat blijft staan: niets wordt herschreven, ingekort, verplaatst of verwijderd.
2. **Bestaande SEO-elementen blijven intact.** De beschermde elementen staan in het hoofdstuk "Bestaande pagina's". Elke wijziging daaraan vraagt vooraf akkoord.
3. **Geen verzonnen feiten.** Prijzen, doorlooptijden, resultaten en klantnamen komen uit de databron, de contentplanning of de bestaande pagina. Ontbreekt een waarde, dan meld je dat en vul je niets in.
4. **Prijzen als bandbreedte of "vanaf" per dienst.** Nooit een uurtarief.
5. **Geen aparte pagina's per doelgroepvariant.** Doelgroepen komen binnen één pagina aan bod.
6. **Schrijfregels:** Nederlands, geen em dashes maar een gewoon koppelteken, en nooit het woord "gids" in structuur, URL's of navigatie. Gebruik "kennisbank".
7. **Stack:** stel in fase 0 vast welk framework en welke contentopslag de repo gebruikt. Volg de bestaande conventies en introduceer geen nieuwe dependencies zonder akkoord.

## Fase 0: inventarisatie

In fase 0 wijzig je niets. Je leest de repo en de contentplanning en levert één rapport op in `docs/rag-inventarisatie.md`. Daarna stop je en wacht je op akkoord.

Het rapport beantwoordt:

1. **Stack.** Framework, rendering (statisch, server-side of client-side), contentopslag en hoe componenten en data nu zijn georganiseerd.
2. **Rendering.** Staat de hoofdcontent van een pagina in de ruwe HTML-respons, zonder JavaScript? Toon dit met een `curl` van één pagina per paginatype.
3. **Paginatypes.** Welke types bestaan er en welke staan gepland: diensten, cases, inzichten of kennisbank, werkwijze, over.
4. **SEO-nulmeting.** Leg per bestaande pagina de beschermde elementen vast in `docs/seo-nulmeting/`, één bestand per URL. Dit is de referentie voor elke latere controle.
5. **Plaatsingsplan.** Per bestaande pagina: de vraag die de pagina beantwoordt, de plek van het blok, en welke bestaande kop of alinea al een deel van het blok invult.
6. **Overlap en conflicten.** Per pagina: waar het blok bestaande tekst zou herhalen, en waar een feit op de pagina afwijkt van de databron.
7. **Kandidaten nieuw.** Per geplande pagina: is er genoeg data voor een compleet blok?
8. **Datagaten.** Een lijst met ontbrekende feiten per dienst, zodat die kunnen worden aangeleverd.
9. **Voorstel.** Waar het component en de databron komen, in de conventies van de repo.

## Specificatie van het blok

Het blok volgt negen regels. Elke regel is een harde eis voor het component en voor de content die erin komt.

| # | Regel | Eis op deze site |
| --- | --- | --- |
| 1 | Vraagkop | `h2` in vraagvorm, in de woorden van de opdrachtgever, met de dienst bij naam |
| 2 | Antwoord eerst | Eerste alinea van 2 tot 3 zinnen met de volledige conclusie: wat, voor wie, doorlooptijd, vanaf-prijs |
| 3 | Zelfstandige alinea's | Elke alinea noemt de dienst en de afzender voluit, zonder verwijswoorden naar andere alinea's |
| 4 | Complete tabelrijen | Geen lege cel, geen "zie pagina", geen kolom met in elke rij dezelfde waarde |
| 5 | Advies per rij | Elke rij eindigt met de passende dienst of vervolgstap, gelinkt |
| 6 | Vervolgvragen | 1 tot 3 vragen in `h3`, antwoord begint met ja, nee of het getal |
| 7 | Interne links | Elke genoemde dienst, case of kennisbankpagina met eigen URL is gelinkt |
| 8 | Bron en datum | Bronregel plus `time` met `datetime`, alleen bijgewerkt bij echte wijziging |
| 9 | Zichtbaar en server-side | In de ruwe HTML, open weergegeven, geen `details`, tabs of client-side laden |

### Toepassing per paginatype

| Paginatype | Vraagkop gaat over | Tabel bevat |
| --- | --- | --- |
| Dienst | Wat de dienst oplevert en kost | Per pakket: resultaat, doorlooptijd, vanaf-prijs, voor wie |
| Dienstenoverzicht | Welke dienst bij welke situatie past | Per situatie: passende dienst, eerste stap |
| Case | Wat de aanpak opleverde | Per fase: situatie, ingreep, gemeten resultaat |
| Kennisbank | De vraag van het artikel | Alleen als er vergelijkbare opties zijn, anders geen tabel |

Een tabel is niet verplicht. Zijn er minder dan twee complete rijen, dan rendert het blok zonder tabel.

### Referentie-opbouw

Waarden tussen blokhaken zijn velden uit de databron, geen tekst om zelf in te vullen.

```html
<section class="rag-blok">

  <h2>Wat kost [dienst] en wat levert het op?</h2>

  <p>[Dienst] van [afzender] levert [resultaat] op voor [doelgroep].
  Het traject duurt [doorlooptijd] en kost vanaf [vanaf-prijs].</p>

  <table>
    <caption>[Dienst]: pakketten, doorlooptijd en prijs</caption>
    <thead>
      <tr>
        <th scope="col">Pakket</th>
        <th scope="col">Resultaat</th>
        <th scope="col">Doorlooptijd</th>
        <th scope="col">Prijs</th>
        <th scope="col">Past bij</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row"><a href="[url]">[pakket]</a></th>
        <td>[resultaat]</td>
        <td>[doorlooptijd]</td>
        <td>vanaf [prijs]</td>
        <td>[situatie]</td>
      </tr>
    </tbody>
  </table>

  <h3>[Vervolgvraag met de dienst bij naam]?</h3>
  <p>[Ja of nee]. [Antwoord dat dienst en afzender opnieuw noemt.]</p>

  <p class="rag-blok__bron">Bron: [bron]. Bijgewerkt:
  <time datetime="[jjjj-mm]">[maand jaar]</time>.</p>

</section>
```

## Datamodel

Elk feit staat op één plek en elk blok leest daaruit. Een prijs of doorlooptijd die op twee pagina's verschilt, maakt beide onbetrouwbaar voor een AI-systeem.

Gebruik de contentopslag die de repo al heeft. Is die er niet, stel dan in fase 0 een getypeerde databron voor in de taal van de stack. Leg het schema vast met validatie, zodat een ontbrekend verplicht veld de build laat falen.

### Dienst

| Veld | Type | Verplicht |
| --- | --- | --- |
| Naam | Tekst | Ja |
| URL | Pad | Ja |
| Resultaat | Tekst, 1 zin | Ja |
| Doelgroep | Tekst | Ja |
| Doorlooptijd | Tekst | Ja |
| Vanaf-prijs of bandbreedte | Tekst | Ja |
| Pakketten | Lijst van pakket | Nee |
| Laatst gecontroleerd | Datum | Ja |

### Blok

| Veld | Type | Verplicht |
| --- | --- | --- |
| Pagina | Verwijzing | Ja |
| Vraagkop | Tekst, eindigt op vraagteken | Ja |
| Antwoordalinea | Tekst, 2 tot 3 zinnen | Ja |
| Tabelbijschrift en kolommen | Tekst en lijst | Nee |
| Rijen | Lijst, elke cel gevuld | Nee |
| Vervolgvragen | Lijst van 1 tot 3 vraag-antwoordparen | Ja |
| Bron | Tekst of URL | Ja |
| Bijgewerkt | Datum | Ja |

Rijen verwijzen waar mogelijk naar een dienst of pakket en nemen prijs en doorlooptijd daaruit over. Typ die waarden niet opnieuw in het blok.

## Bestaande pagina's: het blok eroverheen, SEO intact

Op een bestaande pagina is het blok een laag erbovenop. De diff van zo'n pagina bevat alleen toevoegingen, tenzij er vooraf akkoord is op iets anders.

### Beschermde elementen

| Element | Regel |
| --- | --- |
| URL, canonical, robots-meta, hreflang | Nooit wijzigen |
| Title en meta description | Nooit wijzigen |
| H1 | Nooit wijzigen, blijft de enige H1 |
| Bestaande H2's en H3's | Tekst, niveau en volgorde blijven gelijk |
| Bestaande bodytekst | Blijft woordelijk staan, op dezelfde plek |
| Interne links en ankerteksten | Blijven gelijk, het blok voegt alleen links toe |
| Structured data | Blijft gelijk, uitbreiden alleen na akkoord |
| Afbeeldingen, alt-teksten en bestandsnamen | Blijven gelijk |
| Laadprestaties | Geen layout shift en geen extra client-side JavaScript |

### Plaatsing en overlap

1. **Plek.** Het blok komt onder de H1 en de bestaande intro, vóór de eerste bestaande H2. Past dat niet bij het paginatype, stel dan in fase 0 een andere plek voor.
2. **Bestaande kop hergebruiken.** Stelt een bestaande kop al dezelfde vraag, dan komt het blok direct onder die kop. Er komt geen tweede kop met dezelfde vraag bij.
3. **Niet herhalen.** De antwoordalinea vat samen in eigen woorden. Kopieer geen bestaande alinea's in het blok, zodat dezelfde tekst niet twee keer op de pagina staat.
4. **Zoekwoordfocus.** De vraagkop sluit aan op het onderwerp van de pagina zelf. Hij mag niet sturen op het hoofdonderwerp van een andere pagina.
5. **Conflicten.** Wijkt een feit in de bestaande tekst af van de databron, pas dan niets aan. Sla de pagina over en meld het conflict.

### Voor- en na-controle

Bouw een script dat per URL dezelfde elementen uitleest als de nulmeting en het verschil toont. Een pagina slaagt als elk beschermd element identiek is en de bestaande bodytekst volledig en in dezelfde volgorde terugkomt.

Alles wat verder gaat dan toevoegen, zoals een kop aanpassen of een alinea inkorten, leg je per pagina voor met de reden en het verwachte effect.

## Implementatiestappen

Na akkoord op fase 0 werk je op een eigen branch, in deze volgorde. Elke stap is een eigen commit.

1. **Schema.** Leg het datamodel vast met validatie. Voeg nog geen content toe.
2. **Component.** Bouw het blok als server-side component volgens de referentie-opbouw. Het rendert geen tabel bij minder dan twee complete rijen en rendert niets zonder vraagkop, antwoordalinea en bron.
3. **Styling.** Gebruik de bestaande design tokens van de site. Brede tabellen scrollen binnen hun eigen container.
4. **Controlescripts.** Bouw de blokcontroles en de voor- en na-controle op SEO-elementen als scripts die lokaal en in de build draaien.
5. **Pilot.** Leg het blok over één bestaande dienstpagina en plaats het op één nieuwe pagina. Stop en laat per pagina de ruwe HTML, de diff en de voor- en na-controle zien.
6. **Uitrol bestaande pagina's.** Werk na akkoord per paginatype, in volgorde van het plaatsingsplan. Elke pagina is een eigen commit, zodat een pagina los is terug te draaien.
7. **Uitrol nieuwe pagina's.** Vul de nieuwe pagina's uit de contentplanning. Sla een pagina over als data ontbreekt en zet die op de lijst met datagaten.
8. **Structured data.** Voeg alleen markup toe die overeenkomt met zichtbare content en die past bij wat de site al gebruikt. Leg het voorstel eerst voor.
9. **Documentatie.** Beschrijf in `docs/rag-blok.md` hoe een nieuw blok wordt toegevoegd en welke controles gelden.

Schrijf de teksten van de antwoordalinea en de vervolgvragen niet zelf als de contentplanning ze niet levert. Lever dan een concept ter beoordeling, gemarkeerd als concept.

## Acceptatiecriteria

Een blok is klaar als het controlescript slaagt en de handmatige punten zijn nagelopen. Het script laat de build falen bij een fout.

### Geautomatiseerd

| Controle | Faalt als |
| --- | --- |
| Vraagkop | De `h2` niet op een vraagteken eindigt of de dienst niet noemt |
| Antwoordalinea | De eerste alinea ontbreekt, of langer is dan 3 zinnen |
| Lege cellen | Een cel leeg is of "zie", "n.v.t." of "volgt" bevat |
| Dode kolommen | Een kolom in elke rij dezelfde waarde heeft |
| Rijkoppen | Een rij geen `th scope="row"` heeft |
| Links | Een entiteit met eigen URL niet gelinkt is, of een link niet 200 geeft |
| Bron en datum | De bronregel of `time` met `datetime` ontbreekt |
| Ruwe HTML | Het blok niet in de HTML-respons zonder JavaScript staat |
| Verborgen content | Het blok in `details`, tabs of een ingeklapt element staat |
| Schrijfregels | De tekst een em dash of het woord "gids" bevat |
| Consistentie | Een prijs of doorlooptijd afwijkt van de databron |
| Beschermde elementen | Title, meta description, canonical, robots-meta, hreflang of H1 afwijkt van de nulmeting |
| Koppenstructuur | Een bestaande kop ontbreekt, is gewijzigd of van volgorde is veranderd, of er een tweede H1 staat |
| Bestaande tekst | De bodytekst uit de nulmeting niet volledig en in dezelfde volgorde terugkomt |
| Bestaande links | Een interne link of ankertekst uit de nulmeting ontbreekt of is gewijzigd |
| Structured data | Bestaande markup is gewijzigd of niet meer valide is |
| Dubbele tekst | Een zin uit de bestaande tekst woordelijk in het blok staat |
| Dubbele vraagkop | Dezelfde vraag op de pagina of op een andere pagina al als kop staat |

### Handmatig

- [ ] Elke alinea klopt als hij los in een antwoord wordt geplakt
- [ ] De antwoordalinea beantwoordt de vraagkop volledig
- [ ] De vervolgvragen zijn echte twijfels van opdrachtgevers
- [ ] Geen feit is verzonnen of afgerond zonder bron
- [ ] Het blok leest op mobiel zonder horizontaal scrollen van de pagina

## Oplevering

Sluit af met een pull request en een rapport in `docs/rag-oplevering.md`. Merge niet zelf.

Het rapport bevat:

- een tabel per pagina: blok geplaatst of overgeslagen, met de reden;
- per bestaande pagina de voor- en na-controle van de beschermde elementen;
- de uitvoer van de controlescripts;
- de lijst met datagaten per dienst;
- de conflicten tussen bestaande tekst en de databron;
- alle teksten die als concept zijn geschreven en nog beoordeeld moeten worden;
- afwijkingen van deze briefing, met de reden.

Bij twijfel over een feit, een prijs of het wijzigen van een beschermd element: stop en vraag het na.
