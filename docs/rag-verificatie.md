# RAG-blokken: verificatie

Stand: 6 oktober 2026 · branch `rag-blokken-fase-0` · er is niets nieuws geplaatst

Dit rapport begint met de eindstand na de laatste correctieronde. De derde en tweede ronde staan daaronder ter referentie.

## Eindstand na de correctieronde

| Status in `docs/rag-concepten.json` | Aantal |
|---|---|
| geverifieerd | 47 |
| concept | 18 |
| wacht op publicatie | 5 |

Daarnaast staan er drie geplaatste pilotblokken, alle drie volledig bevestigd. Geen enkel blok heeft de status "akkoord"; er is daarom niets uitgerold.

## Wat er in deze ronde is gedaan

- **Salarispagina gecorrigeerd** (aparte commit, voor- en na-controle in `docs/rag-wijziging-salarispagina.txt`, nulmeting bijgewerkt): Indeed staat er nu met circa € 57.000 per jaar en peildatum 6 oktober 2026, op basis van salarissen uit vacatures op Indeed. De bandbreedte en het aantal salarissen van Indeed zijn weggelaten, omdat alleen het gemiddelde opnieuw is opgehaald. Het blok volgt de pagina.
- **AVG-pagina: alleen een voorstel.** `docs/rag-voorstel-avg.md` bevat per plek de huidige zin, de voorgestelde zin en het wetsfragment uit de op 6 oktober 2026 opgehaalde tekst van EUR-Lex. De pagina en het blok zijn niet gewijzigd.
- **`/ai-agents`:** de voorgelegde zin is vervallen. De alinea houdt twee zinnen; de afzender staat nu bij de dienst in de slotzin ("de Vendor Review van Dave Willemstein").
- **Geschrapt uit blokken (14 zinnen):** feiten over tools of partijen van derden op pagina's die daar niet over gaan, en de twee zinnen die niet in de primaire bron te vinden waren.
- **Zinnen over tools op de pagina over die tool:** 25 zinnen tegen de documentatie van de leverancier gelegd (hieronder).
- **Het woord "gids"** is in de bronregel toegestaan als eigennaam van een externe bron; de weggehaalde bronnaam staat terug. In eigen tekst blijft het een fout.

**Laag A** slaagt voor alle blokken. **Laag B en C** zijn opnieuw gedraaid voor de twee blokken met een gewijzigde zin (`/ai-agents` en de salarispagina). Uitkomst: 20 zinnen door laag B, 20 bevestigd; 10 nagetrokken in laag C, 1 afwijkend. In de andere blokken is alleen geschrapt.

Blokken met een extern feit blijven "concept", ook als elke zin bevestigd is: jij hebt de uitkomst van de externe controles nog niet beoordeeld.

## Paginazinnen voor jou

Deze zinnen zijn uit het blok geschrapt omdat de primaire bron ze niet dekt. De pagina zelf zegt iets vergelijkbaars en is niet gewijzigd:

- `/kennisbank/ai-voorbeelden`: Zodra een toepassing zelf een besluit over een persoon neemt of een professioneel oordeel vervangt, gelden bij AI voorbeelden zwaardere eisen vanuit de AVG, de AI Act en de eigen sectorregels.
  - voorgelegd en op aanwijzing geschrapt (niet als geheel gedekt door de primaire bronnen (AVG, AI Act)) De hele vervolgvraag "Wanneer gelden bij AI voorbeelden zwaardere eisen?" vervalt.
- `/markten/automotive`: Een chatbot of een tekstgenerator is bij AI in automotive geen hoog-risicotoepassing.
  - voorgelegd en op aanwijzing geschrapt (niet te vinden in de primaire bron (AI Act)) De hele vervolgvraag "Is AI in automotive hoog risico als een dealer er sollicitanten mee selecteert of de kredietwaardigheid van particulieren mee beoordeelt?" vervalt.

## Controle tegen de documentatie van de leverancier (25 zinnen)

| Oordeel | Aantal |
|---|---|
| bevestigd | 22 |
| niet te vinden | 3 |

Bij negen van de bevestigde zinnen dekt de leverancier alleen het feitelijke deel; het advies of oordeel in de zin is van de adviseur en staat niet bij de leverancier. Dat staat hieronder per zin als kanttekening. Niets is naar aanleiding van deze controle geschrapt of herschreven.

- `/kennisbank/chatgpt-voor-bedrijven` · V2.2 · **niet te vinden**: Bij de persoonlijke abonnementen kan OpenAI gesprekken gebruiken om modellen te verbeteren tenzij de gebruiker dat zelf uitzet, en de organisatie heeft geen zicht of zeggenschap over klantgegevens die een medewerker in een persoonlijk account zet.
  - Bron: OpenAI Help Center, How your data is used to improve model performance, onderdeel 'Services for individuals' · https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance · opgehaald 2026-10-06
  - Fragment: When you use our services for individuals, such as ChatGPT and Codex, we may use your content to train our models. You can choose whether your conversations help improve our models. To opt out, turn off Improve the model for everyone under Settings > Data controls in ChatGPT
  - Kanttekening: Deel 1 (training tenzij de gebruiker het uitzet) is letterlijk gedekt door het fragment. Deel 2 (de organisatie heeft geen zicht of zeggenschap over een persoonlijk account) staat niet in de opgehaalde OpenAI-pagina's. openai.com/enterprise-privacy/ zegt alleen het omgekeerde over de zakelijke werkruimte ('Your organization has control over workspaces', 'Workspace admins have control over workspaces and can view, access, export, and delete end user conversations in the workspace'); over persoonlijke accounts doet OpenAI daar geen uitspraak. Het is een eigen gevolgtrekking.
- `/kennisbank/claude-voor-bedrijven` · V2.1 · **niet te vinden**: Nee.
  - Bron: Anthropic, prijspagina Claude · https://claude.com/pricing · opgehaald 2026-10-06
  - Fragment: 
  - Kanttekening: Anthropic doet in de opgehaalde pagina's (claude.com/pricing, claude.com/pricing/enterprise, privacy.claude.com) geen uitspraak dat Pro en Max ongeschikt zijn voor bedrijfsdata. De prijspagina geeft alleen de onderliggende feiten (Model training 'Opt-out', geen centraal beheer; zie V2.2). Het kale 'Nee.' is een eigen oordeel, geen leveranciersfeit.
- `/kennisbank/claude-voor-bedrijven` · V2.3 · **niet te vinden**: Voor Claude voor bedrijven met bedrijfsgegevens zijn alleen Team en Enterprise geschikt (stand september 2026).
  - Bron: Anthropic, prijspagina Claude · https://claude.com/pricing · opgehaald 2026-10-06
  - Fragment: 
  - Kanttekening: Een geschiktheidsoordeel in deze vorm staat niet bij Anthropic. De prijspagina noemt wel de feiten waarop het steunt: Team 'No model training on your content by default' en 'Central billing and administration', tegenover 'Opt-out' en 'No' bij Free, Pro en Max. De zin is een eigen conclusie.
- `/kennisbank/chatgpt-voor-bedrijven` · A1 · **bevestigd**: Voor bedrijfsdata horen de abonnementen Business of Enterprise en geen persoonlijke accounts: bij beide blijft training op invoer en uitvoer volgens OpenAI standaard uit (stand september 2026).
  - Bron: OpenAI Help Center, How your data is used to improve model performance, onderdeel 'Business services and managed workspaces' · https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance · opgehaald 2026-10-06
  - Fragment: By default, we don’t use inputs or outputs from ChatGPT Business, ChatGPT Enterprise, ChatGPT Edu, or our API to improve our models.
  - Kanttekening: Het feitelijke deel (training standaard uit bij Business en Enterprise) is gedekt; ook de prijspagina zegt bij 'Content is used to train our models' voor Business en Enterprise 'No'. Het eerste deel ('horen ... en geen persoonlijke accounts') is een eigen advies en staat niet als uitspraak bij OpenAI.
- `/kennisbank/chatgpt-voor-bedrijven` · A2 · **bevestigd**: ChatGPT kan zelfverzekerd een fout antwoord geven, dus voor alles wat naar een klant, toezichthouder of directie gaat blijft een mens verantwoordelijk voor de controle.
  - Bron: OpenAI Help Center, Does ChatGPT tell the truth? · https://help.openai.com/en/articles/8313428-does-chatgpt-tell-the-truth · opgehaald 2026-10-06
  - Fragment: But like any language model, it can produce incorrect or misleading outputs. Sometimes, it might sound confident—even when it’s wrong.
  - Kanttekening: Het feit is gedekt; OpenAI zegt op dezelfde pagina ook 'we encourage users to approach ChatGPT critically and verify important information from reliable sources'. Dat 'een mens verantwoordelijk blijft' voor stukken naar klant, toezichthouder of directie is een eigen advies, geen uitspraak van OpenAI.
- `/kennisbank/chatgpt-voor-bedrijven` · V1.1 · **bevestigd**: ChatGPT Enterprise, voor nieuwe werkruimtes (EER en Zwitserland); bij ChatGPT Business is er geen Europese dataopslag (stand september 2026).
  - Bron: OpenAI Help Center, Data residency and inference residency for ChatGPT (Eligibility, Supported regions); aangevuld met de prijspagina openai.com/business/chatgpt-pricing/ · https://help.openai.com/en/articles/9903489-data-residency-and-inference-residency-for-chatgpt · opgehaald 2026-10-06
  - Fragment: Eligible API customers and new ChatGPT Enterprise/Edu customers can choose to have in-scope customer content stored at rest in supported countries. [...] Europe (EEA + Switzerland) [...] / Prijspagina: Plan: Business, Feature: Data residency in US, EU, UK, JP, CA, KR, SG, IN, AU, UAE, No / Plan: Enterprise, Feature: Data residency in US, EU, UK, JP, CA, KR, SG, IN, AU, UAE, Yes
  - Kanttekening: De bron spreekt van 'new ChatGPT Enterprise/Edu customers' en 'When a new ChatGPT workspace is provisioned with data residency'; Edu valt er dus ook onder, wat de zin niet tegenspreekt.
- `/kennisbank/chatgpt-voor-bedrijven` · V1.2 · **bevestigd**: Bij ChatGPT voor bedrijven vallen gegevens die via koppelingen of webzoekopdrachten naar externe diensten gaan daar volgens OpenAI niet onder.
  - Bron: OpenAI Help Center, Data residency and inference residency for ChatGPT, onderdeel 'Data that may be stored outside the selected region' · https://help.openai.com/en/articles/9903489-data-residency-and-inference-residency-for-chatgpt · opgehaald 2026-10-06
  - Fragment: Certain categories of data may be stored outside the chosen data region. This includes (but may not be limited to): Data that is stored and processed outside OpenAI's infrastructure through external integrations (e.g., Apps & MCP, Web Search, if enabled)
- `/kennisbank/chatgpt-voor-bedrijven` · V2.3 · **bevestigd**: Voor Business en Enterprise is bovendien een verwerkersovereenkomst met OpenAI af te sluiten.
  - Bron: OpenAI, Enterprise privacy at OpenAI (FAQ) · https://openai.com/enterprise-privacy/ · opgehaald 2026-10-06
  - Fragment: Yes, we are able to execute a Data Processing Addendum (DPA) with customers for their use of ChatGPT Business, ChatGPT Enterprise, and the API in support of their compliance with GDPR and other privacy laws.
- `/kennisbank/claude-voor-bedrijven` · A1 · **bevestigd**: Claude voor bedrijven is de AI-assistent van Anthropic in een zakelijk abonnement: Team voor 2 tot 150 gebruikers, of Enterprise met daarnaast onder meer SCIM, rolgebaseerde toegang en auditlogs.
  - Bron: Anthropic, prijspagina Claude (Team & Enterprise) · https://claude.com/pricing · opgehaald 2026-10-06
  - Fragment: Team For teams of 2 to 150 [...] Enterprise For large businesses operating at scale [...] All Team plan features, plus: Admins set user and org spend limits Role-based access with fine grained permissioning System for Cross-domain Identity Management (SCIM) Audit logs
- `/kennisbank/claude-voor-bedrijven` · A2 · **bevestigd**: Alleen de zakelijke abonnementen zijn geschikt voor gebruik met bedrijfsgegevens; bij Team en Enterprise traint Anthropic standaard niet op de content, en de data wordt volgens Anthropic in de VS opgeslagen (stand september 2026).
  - Bron: Anthropic, prijspagina Claude (Team); Anthropic Privacy Center, Where are your servers located? Do you host your models on EU servers? · https://claude.com/pricing · opgehaald 2026-10-06
  - Fragment: No model training on your content by default / Privacy Center (https://privacy.claude.com/en/articles/7996890-where-are-your-servers-located-do-you-host-your-models-on-eu-servers): Note that data is stored in the US.
  - Kanttekening: Delen 2 en 3 zijn letterlijk gedekt (de vergelijkingstabel zegt bij 'Model training' voor Team en Enterprise 'None by default'; claude.com/pricing/enterprise zegt 'Your prompts, data, and results are not used to train our models by default'). Deel 1 ('alleen de zakelijke abonnementen zijn geschikt') is een eigen oordeel dat Anthropic nergens in de opgehaalde pagina's uitspreekt.
- `/kennisbank/claude-voor-bedrijven` · V1.1 · **bevestigd**: Op dit moment kan Europese dataopslag bij Claude voor bedrijven alleen via de cloudplatforms, niet in de app (stand september 2026).
  - Bron: Anthropic, Regional compliance (tabel 'Claude's regional availability' en FAQ); Anthropic Privacy Center, Where are your servers located? · https://claude.com/regional-compliance · opgehaald 2026-10-06
  - Fragment: Meet your regional data residency and compliance requirements with Claude. Choose where your data is stored and processed. Available on AWS Bedrock, GCP Vertex, and Microsoft Foundry. / Privacy Center: Note that data is stored in the US.
  - Kanttekening: De regionale tabel noemt voor Europe: AWS Bedrock 'Included', GCP Vertex 'Included', Microsoft Foundry 'Coming soon'. Voor de eigen producten zegt het Privacy Center 'data is stored in the US'; het artikel 'Enable US-only inference for your organization' (support.claude.com/en/articles/15422948) zegt dat die instelling alleen inferentie regelt ('Data storage. Where your organization's data is stored is separate from where inference runs.'). De documentatie op platform.claude.com/docs/en/manage-claude/data-residency zegt: 'Currently, "us" is the only available workspace geo.'
- `/kennisbank/claude-voor-bedrijven` · V1.2 · **bevestigd**: In de zakelijke abonnementen wordt de data volgens Anthropic opgeslagen in de VS.
  - Bron: Anthropic Privacy Center, Where are your servers located? Do you host your models on EU servers? (15 juni 2026) · https://privacy.claude.com/en/articles/7996890-where-are-your-servers-located-do-you-host-your-models-on-eu-servers · opgehaald 2026-10-06
  - Fragment: This article is about our commercial products such as Claude Enterprise and the Anthropic API. [...] By default, we may route customer traffic to select countries in the US, Europe, Asia and Australia, unless otherwise agreed upon or at your instructions. [...] Note that data is stored in the US.
- `/kennisbank/claude-voor-bedrijven` · V1.3 · **bevestigd**: Voor Europese dataopslag en verwerking wijst Anthropic naar de regionale endpoints van AWS Bedrock en Google Vertex, een route voor eigen toepassingen via de API en niet voor de claude.ai-app.
  - Bron: Anthropic, Regional compliance (FAQ) · https://claude.com/regional-compliance · opgehaald 2026-10-06
  - Fragment: Regional endpoints allow you to specify geographic boundaries for both data storage and inference processing. For Europe, you can select country-specific deployment options through AWS Bedrock, GCP Vertex, and Microsoft Foundry to meet local data residency requirements.
  - Kanttekening: Let op twee punten. (a) De FAQ noemt voor Europa ook Microsoft Foundry, terwijl de tabel op dezelfde pagina Foundry voor Europe op 'Coming soon' zet; de zin noemt alleen Bedrock en Vertex en is daarmee niet onjuist. (b) Dat dit 'niet voor de claude.ai-app' geldt, staat niet letterlijk op deze pagina; het volgt uit het Privacy Center ('Note that data is stored in the US') en uit het DPA-artikel ('If you access Claude via a third-party platform or service provider, your use of Claude in those cases is governed by the third-party platform's terms of service').
- `/kennisbank/claude-voor-bedrijven` · V2.2 · **bevestigd**: Pro en Max zijn persoonlijke abonnementen waarbij modeltraining op gesprekken aan staat tot de gebruiker het zelf uitzet, en centraal beheer ontbreekt.
  - Bron: Anthropic, prijspagina Claude, tabblad Individual, vergelijkingstabel (kolommen Free, Pro, Max 5x, Max 20x) · https://claude.com/pricing · opgehaald 2026-10-06
  - Fragment: Central billing and administration No No No No [...] Model training More information Opt-out Opt-out Opt-out Opt-out
  - Kanttekening: De prijspagina zegt 'Opt-out'. Het consumentenartikel in het Privacy Center (privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training) formuleert het als een keuze: 'We will use your chats and coding sessions (including to improve our models) if: You choose to allow us to use your chats and coding sessions to improve Claude'. Dat spreekt 'aan tot de gebruiker het uitzet' niet tegen, maar zegt het ook niet letterlijk; de zin steunt op het woord 'Opt-out' van de prijspagina.
- `/kennisbank/gemini-voor-bedrijven` · A1 · **bevestigd**: Gemini voor bedrijven is de generatieve AI van Google, die sinds januari 2025 zonder aparte AI-licentie in de Business- en Enterprise-edities van Google Workspace zit; welke functies beschikbaar zijn, verschilt per editie.
  - Bron: Google Workspace Help, Gemini AI features now included in Google Workspace subscriptions · https://knowledge.workspace.google.com/admin/gemini/gemini-ai-features-now-included-in-google-workspace-subscriptions · opgehaald 2026-10-06
  - Fragment: In January 2025 we started adding new AI features designed to improve productivity and innovation in organizations with Google Workspace Business and Enterprise editions. Previously these features were included in Google Workspace with Gemini add-ons. [...] The AI features available to your organization depend on Google Workspace edition.
  - Kanttekening: De bron zegt 'we started adding' vanaf januari 2025 en dat de add-ons Gemini Business–Legacy en Gemini Enterprise–Legacy 'are no longer available for purchase'. 'Zonder aparte AI-licentie' is daarvan de eigen samenvatting; er bestaan volgens dezelfde helppagina's nog wel andere add-ons (onder meer 'AI Expanded Access').
- `/kennisbank/gemini-voor-bedrijven` · A2 · **bevestigd**: Bij organisaties die al met Google Workspace werken, zit Gemini waarschijnlijk al in het abonnement, zodat de vraag minder is of het wordt gekocht en meer hoe het wordt ingezet en welke afspraken over data gelden.
  - Bron: Google Workspace Help, Gemini AI features now included in Google Workspace subscriptions · https://knowledge.workspace.google.com/admin/gemini/gemini-ai-features-now-included-in-google-workspace-subscriptions · opgehaald 2026-10-06
  - Fragment: In January 2025 we started adding new AI features designed to improve productivity and innovation in organizations with Google Workspace Business and Enterprise editions.
  - Kanttekening: Alleen het feitelijke deel is gedekt, en de zin maakt zelf het voorbehoud 'waarschijnlijk'. De rest (de vraag verschuift naar inzet en data-afspraken) is eigen duiding, geen leveranciersfeit.
- `/kennisbank/gemini-voor-bedrijven` · A3 · **bevestigd**: Volgens Google dient klantdata uit Workspace zonder toestemming of instructie van de klant niet als trainingsmateriaal voor modellen (stand september 2026).
  - Bron: Google Workspace Help, Generative AI in Google Workspace Privacy Hub, onderdeel 'Model training and data usage' · https://knowledge.workspace.google.com/admin/gemini/generative-ai-in-google-workspace-privacy-hub · opgehaald 2026-10-06
  - Fragment: Workspace does not use customer data for training models without customer's prior permission or instruction. This commitment is outlined in the 'Training Restriction' section of the Google Workspace Service Specific Terms .
- `/kennisbank/gemini-voor-bedrijven` · V1.1 · **bevestigd**: In Business Starter zit Gemini voor bedrijven volgens Google niet in Docs en Sheets, wel in Gmail en in de Gemini-app (stand september 2026).
  - Bron: Google Workspace, Nederlandse prijspagina (abonnementskaart Starter en vergelijkingstabel, kolom Starter) · https://workspace.google.com/intl/nl/pricing.html · opgehaald 2026-10-06
  - Fragment: Starter bevat: [...] AI-assistent Gemini in Gmail Chat met AI in de Gemini-app / Vergelijkingstabel, eerste kolom (Starter): Gemini in Documenten : zonder writer's block schrijven of conceptdocumenten verbeteren met AI Deze functie wordt niet ondersteund door deze SKU [...] Gemini in Spreadsheets : gegevens visualiseren en sneller inzichten krijgen met AI Deze functie wordt niet ondersteund door deze SKU
  - Kanttekening: In dezelfde tabel staat voor Starter bij 'Gemini in Workspace-apps' de waarde 'Beperkt', bij 'Gemini in Gmail' een vinkje en bij 'Gemini-app' 'Basistoegang'.
- `/kennisbank/gemini-voor-bedrijven` · V2.1 · **bevestigd**: Gemini voor bedrijven haalt volgens Google alleen gegevens op waartoe de gebruiker zelf toegang heeft.
  - Bron: Google Workspace Help, Generative AI in Google Workspace Privacy Hub · https://knowledge.workspace.google.com/admin/gemini/generative-ai-in-google-workspace-privacy-hub · opgehaald 2026-10-06
  - Fragment: Gemini only retrieves relevant content in Workspace that the user has access to in order to contextualize the prompt and ground responses. If the user doesn't have access to a document or email, Gemini will not retrieve that content.
- `/kennisbank/microsoft-copilot-voor-bedrijven` · A1 · **bevestigd**: Microsoft Copilot is de AI-assistent van Microsoft voor werk, die taalmodellen koppelt aan apps zoals Outlook, Teams, Word, Excel en PowerPoint en aan de mail, agenda, chats, vergaderingen en documenten daarin.
  - Bron: Microsoft Learn, Data, Privacy, and Security for Microsoft Copilot; aangevuld met Microsoft Learn, Microsoft Copilot overview (lijst in-app functies) · https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy · opgehaald 2026-10-06
  - Fragment: Microsoft Copilot is a sophisticated processing and orchestration engine that provides AI-powered productivity capabilities by coordinating the following components: Large language models (LLMs) Content in Microsoft Graph, such as emails, chats, and documents that you have permission to access. The Microsoft 365 productivity apps that you use every day, such as Word and PowerPoint. [...] It can generate responses anchored in your organizational data, such as user documents, emails, calendar, chats, meetings, and contacts.
  - Kanttekening: De apps Outlook, Teams, Word, Excel en PowerPoint staan in het overzicht (https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview): 'Word: Draft, rewrite, and summarize documents', 'Excel: Analyze data, ...', 'PowerPoint: Create presentations ...', 'Outlook: Draft emails, summarize threads, ...', 'Teams: Summarize (up to 30 days) and transcribe meetings, ...'. De typering 'AI assistant for work' komt daar voor als 'Microsoft Copilot Chat, your AI assistant for work'.
- `/kennisbank/microsoft-copilot-voor-bedrijven` · A2 · **bevestigd**: Omdat Copilot de bestaande toegangsrechten volgt, komen te ruim gedeelde bestanden in antwoorden naar boven en hoort het opschonen van die rechten bij de voorbereiding.
  - Bron: Microsoft Learn, Data, Privacy, and Security for Microsoft Copilot; Microsoft Learn, Set up Microsoft Copilot and assign licenses (onderdeel 'Restrict sensitive info from Copilot') · https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy · opgehaald 2026-10-06
  - Fragment: Microsoft Copilot only surfaces organizational data to which individual users have at least view permissions. It's important that you're using the permission models available in Microsoft 365 services, such as SharePoint, to help ensure the right users or groups have the right access to the right content within your organization. / Setup: To protect sensitive information during the deployment and use of Microsoft Copilot, follow these steps to identify, assess, and mitigate oversharing risks.
  - Kanttekening: Dat te ruim gedeelde bestanden 'in antwoorden naar boven komen' zegt Microsoft niet in die woorden; het volgt uit 'only surfaces organizational data to which individual users have at least view permissions' en uit het advies om oversharing-risico's te beperken.
- `/kennisbank/microsoft-copilot-voor-bedrijven` · V1.1 · **bevestigd**: Nee, volgens wat Microsoft toezegt in de privacydocumentatie van Microsoft Copilot (stand september 2026): prompts, antwoorden en gegevens die via Microsoft Graph worden opgehaald, worden niet gebruikt om de basismodellen te trainen.
  - Bron: Microsoft Learn, Data, Privacy, and Security for Microsoft Copilot · https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy · opgehaald 2026-10-06
  - Fragment: Prompts, responses, and data accessed through Microsoft Graph aren't used to train foundation LLMs, including those used by Microsoft Copilot.
- `/kennisbank/microsoft-copilot-voor-bedrijven` · V2.1 · **bevestigd**: Copilot Chat is vooral een chat die antwoordt op basis van het web en van wat de gebruiker zelf aanlevert, en kan in Outlook ook met mailbox, agenda en vergaderingen werken.
  - Bron: Microsoft Learn, Overview of Microsoft Copilot Chat · https://learn.microsoft.com/en-us/copilot/overview · opgehaald 2026-10-06
  - Fragment: Copilot Chat is primarily web grounded. Depending on the experience, users can also provide organizational content through uploaded files, supported app context, or agents. [...] Copilot Chat in Outlook Inbox, calendar, meetings, chats, and limited related content [...] In Outlook, users can ask questions across supported content, such as emails, calendar items, meetings, chats, and a bounded set of files and related content.
  - Kanttekening: Microsoft verbindt er een voorwaarde aan die de zin niet noemt: 'To use Copilot Chat in Outlook, users must meet the requirements for supported Outlook experiences.'
- `/kennisbank/microsoft-copilot-voor-bedrijven` · V2.2 · **bevestigd**: Pas met de betaalde licentie werkt Microsoft Copilot breed met de eigen bedrijfsinformatie: Copilot kan dan redeneren over de volle breedte van de werkdata, zoals mail, chats, vergaderingen, documenten en sites, voor zover de gebruiker daar toegang toe heeft.
  - Bron: Microsoft Learn, Overview of Microsoft Copilot Chat, onderdeel 'The Microsoft Copilot licensed experience' · https://learn.microsoft.com/en-us/copilot/overview · opgehaald 2026-10-06
  - Fragment: With a paid Microsoft Copilot license, Copilot can reason across a wider set of organizational data, including: Emails Meetings Calendars Chats Documents Sites Files Other Microsoft 365 content that users have permission to access
  - Kanttekening: Microsoft zegt 'a wider set of organizational data', niet 'de volle breedte'. Voor 'pas met de betaalde licentie': 'Without a Microsoft 365 Copilot license, in outside supported experiences such as Outlook, Copilot Chat doesn't provide the broad Microsoft 365 organizational grounding that's available through Work IQ and semantic indexing in Microsoft Copilot.'
- `/ai-workshop/copilot-training` · A2 · **bevestigd**: Deelnemers leren goede opdrachten geven, kiezen tussen Copilot in een app en Copilot Chat, uitkomsten controleren en herkennen welke taken en gegevens niet bij Copilot horen.
  - Bron: Microsoft Learn, Overview of Microsoft Copilot Chat; Microsoft Learn, Data, Privacy, and Security for Microsoft Copilot · https://learn.microsoft.com/en-us/copilot/overview · opgehaald 2026-10-06
  - Fragment: Copilot Chat (Basic) indicates that a user doesn't have the Microsoft Copilot add-on license and doesn't have access to Copilot chat in Word, Excel, PowerPoint, and OneNote. / Privacy: The responses that generative AI produces aren't guaranteed to be 100% factual. While we continue to improve responses, users should still use their judgment when reviewing the output before sending them to others.
  - Kanttekening: De zin beschrijft vooral de inhoud van de eigen training; dat is niet tegen een leveranciersbron te toetsen. Bevestigd is alleen het onderliggende leveranciersfeit: Copilot in de apps en Copilot Chat zijn bij Microsoft verschillende ervaringen, en Microsoft zegt zelf dat gebruikers de uitvoer moeten beoordelen.

## Status per blok

| Pagina | Status | Reden als het concept blijft |
|---|---|---|
| `/ai-agents` | geverifieerd |  |
| `/ai-agents/laten-maken` | geverifieerd |  |
| `/ai-agents/voorbeelden` | geverifieerd |  |
| `/ai-agents/wat-is-een-ai-agent` | geverifieerd |  |
| `/ai-automatisering` | geverifieerd |  |
| `/ai-automatisering/ai-tools` | geverifieerd |  |
| `/ai-automatisering/ai-workflows` | geverifieerd |  |
| `/ai-automatisering/bedrijfsprocessen-automatiseren-met-ai` | geverifieerd |  |
| `/ai-beleid` | concept | 2 extern feit(en), wacht op jouw oordeel |
| `/ai-beleid/ai-act` | concept | 7 extern feit(en), wacht op jouw oordeel |
| `/ai-consultancy` | geverifieerd |  |
| `/ai-consultancy/ai-advies` | concept | 1 extern feit(en), wacht op jouw oordeel |
| `/ai-consultancy/ai-roadmap` | geverifieerd |  |
| `/ai-development` | geverifieerd |  |
| `/ai-development/ai-oplossingen` | geverifieerd |  |
| `/ai-development/ai-software` | geverifieerd |  |
| `/ai-development/ai-specialist` | geverifieerd |  |
| `/ai-implementatie` | geverifieerd |  |
| `/ai-implementatie/advies` | concept | 1 extern feit(en), wacht op jouw oordeel |
| `/ai-implementatie/stappenplan` | geverifieerd |  |
| `/ai-voor-bedrijven` | concept | 2 extern feit(en), wacht op jouw oordeel |
| `/ai-voor-bedrijven/ai-en-bi` | geverifieerd |  |
| `/ai-voor-bedrijven/mkb` | geverifieerd |  |
| `/ai-voor-bedrijven/zakelijke-dienstverleners` | concept | 1 extern feit(en), wacht op jouw oordeel |
| `/ai-workshop` | geverifieerd |  |
| `/ai-workshop/ai-coaching` | geverifieerd |  |
| `/ai-workshop/ai-geletterdheid-training` | concept | 5 extern feit(en), wacht op jouw oordeel |
| `/ai-workshop/chatgpt-training` | geverifieerd |  |
| `/ai-workshop/copilot-training` | concept | 1 extern feit(en), wacht op jouw oordeel |
| `/diensten` | geverifieerd |  |
| `/diensten/ai-due-diligence` | geverifieerd |  |
| `/diensten/ai-strategy-sprint` | geverifieerd |  |
| `/diensten/executive-briefing` | geverifieerd |  |
| `/diensten/fractional-ai-lead` | geverifieerd |  |
| `/diensten/vendor-review` | geverifieerd |  |
| `/inzichten/ai-adoptie-begint-bij-het-werk` | geverifieerd |  |
| `/inzichten/ai-agents-wat-ze-wel-en-niet-kunnen` | geverifieerd |  |
| `/inzichten/ai-governance-zonder-bureaucratie` | concept | 1 extern feit(en), wacht op jouw oordeel |
| `/inzichten/ai-vendorselectie-in-acht-stappen` | geverifieerd |  |
| `/inzichten/build-buy-of-partner` | geverifieerd |  |
| `/inzichten/de-business-case-voor-ai` | geverifieerd |  |
| `/inzichten/freelance-ai-consultant-vs-agency-vs-big4` | geverifieerd |  |
| `/inzichten/het-datafundament-onder-ai` | geverifieerd |  |
| `/inzichten/van-ai-strategie-naar-waarde` | geverifieerd |  |
| `/inzichten/waarom-ai-pilots-blijven-steken` | geverifieerd |  |
| `/inzichten/wanneer-heb-je-echt-een-ai-strateeg-nodig` | geverifieerd |  |
| `/inzichten/welke-ai-use-cases-leveren-resultaat` | geverifieerd |  |
| `/kennisbank/ai-agents-en-avg` | concept | 7 extern feit(en), wacht op jouw oordeel; wacht op jouw besluit over het AVG-voorstel |
| `/kennisbank/ai-specialist-salaris` | concept | 5 extern feit(en), wacht op jouw oordeel; niet bevestigd: A1 afwijkend bij tweede lezing: Het fragment op regel 48 staat er letterlijk, maar de bron zegt dat de bronnen onderling 'duidelijk' verschillen (regel 50), niet 'flink', en 'bruikbaar als bandbreedte, niet als vast bedrag' staat nergens zo: de bron zegt alleen 'gebruik ze als orde van grootte' (regel 89, over de Indeed- en DataJobs-totaalcijfers) en 'geen gemiddelde' (regel 79). |
| `/kennisbank/ai-voorbeelden` | geverifieerd |  |
| `/kennisbank/chatgpt-voor-bedrijven` | concept | 6 extern feit(en), wacht op jouw oordeel |
| `/kennisbank/claude-voor-bedrijven` | concept | 8 extern feit(en), wacht op jouw oordeel |
| `/kennisbank/gemini-voor-bedrijven` | concept | 5 extern feit(en), wacht op jouw oordeel |
| `/kennisbank/microsoft-copilot-voor-bedrijven` | concept | 5 extern feit(en), wacht op jouw oordeel |
| `/kennisbank/notuleren-met-ai` | concept | 1 extern feit(en), wacht op jouw oordeel |
| `/kennisbank/prompt-engineering` | geverifieerd |  |
| `/kennisbank/rpa-vs-ai-automatisering` | geverifieerd |  |
| `/kennisbank/wat-doet-een-ai-consultant` | geverifieerd |  |
| `/kennisbank/wat-doet-een-ai-developer` | geverifieerd |  |
| `/kennisbank/wat-doet-een-bi-specialist` | geverifieerd |  |
| `/markten` | concept | 1 extern feit(en), wacht op jouw oordeel |
| `/markten/automotive` | geverifieerd |  |
| `/markten/fintech` | concept | 3 extern feit(en), wacht op jouw oordeel |
| `/partnernetwerk` | geverifieerd |  |
| `/tarieven` | geverifieerd |  |

---

# Derde ronde (ter referentie)

Stand: 6 oktober 2026 · branch `rag-blokken-fase-0` · er is niets nieuws geplaatst



## Eindstand

| | Aantal |
|---|---|
| Concepten (zonder de vijf die op publicatie wachten) | 65 |
| Geverifieerd | 38 |
| Concept: bevat een extern feit, wacht op jouw oordeel over de controle tegen primaire bronnen | 26 |
| Concept: om een andere reden | 1 |
| Geplaatste pilotblokken (alle drie volledig bevestigd in de tweede ronde, niet gewijzigd in de derde) | 3 |
| Wacht op publicatie (niet geverifieerd) | 5 |

Laag A slaagt voor alle blokken en concepten. Jij zet goedgekeurde blokken in `docs/rag-concepten.json` op "akkoord".

## Wat er in de derde ronde is gedaan

1. **Executive Briefing.** "Sessie van drie uur" blijft staan. In `prijzen.ts` staat nu de sessieduur (`sessieduur: drie uur`) en de volledige omschrijving "sessie van drie uur, samen met de voorbereiding één dagdeel". Blokken die de duur noemen gebruiken die omschrijving (drie blokken). Bestaande paginatekst is hiervoor niet gewijzigd.
2. **Voorgelegde zinnen geschrapt.** Vijf van de zes; één kon niet weg zonder de antwoordalinea onder de twee zinnen te brengen (zie hieronder).
3. **Kale "Ja." en "Nee." opnieuw nagetrokken, met de vraag erbij.** 64 antwoorden getoetst op twee punten: beantwoordt de zin deze vraag, en is de bron echt onvoorwaardelijk. 61 zijn in orde, 3 gaven twijfel en zijn vervallen.
4. **Herschreven vragen.** Staan naast elkaar in `docs/rag-herschreven.md`; daar is niets meer aan gewijzigd.
5. **Externe feiten.** Zinnen met een prijs van een tool van derden zijn geschrapt; salarissen en marktcijfers staan alleen nog op de salarispagina; wetgeving en de salarissen zijn tegen de opgehaalde primaire bron gelegd.
6. **Bronregel.** Een blok met een gecontroleerd extern feit noemt nu de primaire bron bij naam, met peildatum 6 oktober 2026, naast de eigen bron.

**Welke blokken opnieuw door laag B en C zijn gegaan.** Alleen de drie blokken waarin een zin is gewijzigd (de Executive Briefing-duur). In alle andere blokken is in deze ronde uitsluitend geschrapt: een script heeft bevestigd dat elk van de 591 overgebleven zinnen letterlijk gelijk is aan een zin die in de tweede ronde al door laag B en C is gegaan. De gewijzigde bronregels zijn geen onderdeel van laag B en C; de bronnen daarin zijn dezelfde die bij de controle hieronder zijn opgehaald.

Uitkomst voor die drie blokken: 26 zinnen door laag B, 26 bevestigd; 15 nagetrokken in laag C, 0 afwijkend.

## Kale "Ja." en "Nee.": vervallen na de tweede lezing

- `/diensten`: Staat het exacte bedrag van een AI-dienst vooraf vast?
  - Antwoord was: Ja. Elke AI-dienst heeft een vaste prijs of een duidelijke bandbreedte; waar een bandbreedte geldt, legt het voorstel na de kennismaking het exacte bedrag vast, voordat de opdracht start.
  - Reden: tweede lezing met de vraag erbij: beantwoordt de vraag: ja, bron onvoorwaardelijk: twijfel. De bron legt het exacte bedrag pas in het voorstel vast (staat in het antwoord), maar in dezelfde regel staat dat bedragen exclusief btw en reiskosten zijn; dat voorbehoud ontbreekt in het antwoord, waardoor een kaal 'Ja' op 'het exacte bedrag' niet zeker gedekt is.
- `/inzichten/de-business-case-voor-ai`: Stijgen de variabele kosten bij AI mee met het gebruik?
  - Antwoord was: Ja. Bij AI wordt vaak betaald per verwerkt document, per gesprek of per verwerkte hoeveelheid tekst. Het artikel raadt aan voor een business case voor AI de kosten per transactie in de pilot te meten en te vermenigvuldigen met het verwachte volume bij volledige uitrol.
  - Reden: tweede lezing met de vraag erbij: beantwoordt de vraag: ja, bron onvoorwaardelijk: twijfel. De kernpunt-regel (24) zegt het zonder voorbehoud, maar de uitwerking op regel 56 zegt dat je 'vaak' per gebruik betaalt; het antwoord neemt dat 'vaak' wel over, maar het kale 'Ja' is daarmee stelliger dan de lopende tekst.
- `/ai-agents/voorbeelden`: Boekt of betaalt de agent in de AI agents voorbeelden voor finance zelf?
  - Antwoord was: Nee. In de AI agents voorbeelden voor finance stelt de agent voor en bevestigt een medewerker elke boeking, omdat een fout in een boeking doorwerkt in rapportages en aangiftes. Afwijkingen en betaalbeslissingen blijven bij de crediteurenadministratie.
  - Reden: tweede lezing met de vraag erbij: beantwoordt de vraag: ja, bron onvoorwaardelijk: twijfel. Voor boeken zegt de bron het zonder voorbehoud (regel 137 en 139), maar voor betalen staat er alleen bij voorbeeld 10 dat 'afwijkingen en betaalbeslissingen blijven bij de crediteurenadministratie' (regel 131); dat de agent nooit zelf betaalt staat er niet letterlijk.

## Geschrapt in de derde ronde (25 zinnen)

- `/kennisbank/ai-agents-en-avg`: 72 uur is onder de AVG bij AI agents de termijn waarbinnen een datalek zo mogelijk bij de Autoriteit Persoonsgegevens wordt gemeld, zonder onredelijke vertraging.
  - Reden: voorgelegd en op aanwijzing geschrapt (tweede lezing (laag C) wijkt af: De bron beperkt de meldplicht met 'tenzij het risico voor betrokkenen onwaarschijnlijk is'; de zin laat die voorwaarde weg en is daardoor stelliger dan de bron.) De hele vervolgvraag "Binnen hoeveel uur wordt een datalek gemeld onder de AVG bij AI agents?" vervalt.
- `/ai-voor-bedrijven`: AI voor bedrijven werd in 2025 het vaakst gebruikt voor marketing of verkoop (35 procent) en voor administratie of bestuurstaken (32 procent), volgens CBS-cijfers over AI-gebruikende bedrijven.
  - Reden: marktcijfer op een pagina die daar niet zelf over gaat De hele vervolgvraag "Waarvoor wordt AI voor bedrijven in Nederland het vaakst gebruikt?" vervalt.
- `/ai-voor-bedrijven`: Onder bedrijven die AI overwogen maar niet invoerden, was gebrek aan ervaring de meest genoemde reden.
  - Reden: marktcijfer op een pagina die daar niet zelf over gaat De hele vervolgvraag "Waarvoor wordt AI voor bedrijven in Nederland het vaakst gebruikt?" vervalt.
- `/ai-voor-bedrijven/mkb`: Ja.
  - Reden: marktcijfer op een pagina die daar niet zelf over gaat De hele vervolgvraag "Blijft het gebruik van AI in het mkb achter bij grotere bedrijven?" vervalt.
- `/ai-voor-bedrijven/mkb`: Het gebruik van AI voor het mkb blijft achter bij grotere bedrijven: in 2025 gebruikte 29,8 procent van de bedrijven met 10 tot en met 249 werkzame personen AI-technologie, tegen 66,2 procent van het grootbedrijf, volgens het CBS.
  - Reden: marktcijfer op een pagina die daar niet zelf over gaat De hele vervolgvraag "Blijft het gebruik van AI in het mkb achter bij grotere bedrijven?" vervalt.
- `/ai-voor-bedrijven/mkb`: Bij microbedrijven met 2 tot 9 werkzame personen was dat 13,8 procent, een aandeel dat sinds 2023 wel is verdubbeld.
  - Reden: marktcijfer op een pagina die daar niet zelf over gaat De hele vervolgvraag "Blijft het gebruik van AI in het mkb achter bij grotere bedrijven?" vervalt.
- `/kennisbank/chatgpt-voor-bedrijven`: ChatGPT voor bedrijven is de AI-assistent van OpenAI als schrijf-, denk- en analysepartner die in gewone taal een tekst, samenvatting, analyse of opzet teruggeeft; bij ChatGPT Business horen volgens de prijspagina van OpenAI onder meer projecten, eigen GPT's, data-analyse en koppelingen (stand september 2026).
  - Reden: prijs van een tool van derden
- `/kennisbank/chatgpt-voor-bedrijven`: Een standaardplek van ChatGPT Business kost $20 per gebruiker per maand bij jaarbetaling of $25 bij maandbetaling, en een premiumplek $100 of $125 (stand september 2026).
  - Reden: prijs van een tool van derden De hele vervolgvraag "Wat kost een plek bij ChatGPT Business per gebruiker per maand?" vervalt.
- `/kennisbank/chatgpt-voor-bedrijven`: Dat zijn Amerikaanse lijstprijzen exclusief btw, en OpenAI geeft aan dat prijzen per land en valuta kunnen verschillen.
  - Reden: prijs van een tool van derden De hele vervolgvraag "Wat kost een plek bij ChatGPT Business per gebruiker per maand?" vervalt.
- `/kennisbank/chatgpt-voor-bedrijven`: Bij ChatGPT voor bedrijven is de prijs van ChatGPT Enterprise op aanvraag.
  - Reden: prijs van een tool van derden De hele vervolgvraag "Wat kost een plek bij ChatGPT Business per gebruiker per maand?" vervalt.
- `/kennisbank/claude-voor-bedrijven`: Een standaardplek in het Team-abonnement van Claude voor bedrijven kost $20 per gebruiker per maand bij jaarbetaling of $25 bij maandbetaling, en een premiumplek $100 of $125.
  - Reden: prijs van een tool van derden De hele vervolgvraag "Wat kost Claude voor bedrijven per gebruiker?" vervalt.
- `/kennisbank/claude-voor-bedrijven`: Enterprise kost $20 per plek per maand bij jaarbetaling plus gebruik tegen API-tarieven, met een jaarcontract van minimaal 20 plekken.
  - Reden: prijs van een tool van derden De hele vervolgvraag "Wat kost Claude voor bedrijven per gebruiker?" vervalt.
- `/kennisbank/gemini-voor-bedrijven`: Business Starter kost € 6,80, Business Standard € 13,60 en Business Plus € 21,10: dat zijn de Business-edities van Google Workspace met Gemini voor bedrijven, per gebruiker per maand bij een jaarcontract, exclusief belastingen (stand september 2026).
  - Reden: prijs van een tool van derden De hele vervolgvraag "Wat kost Gemini voor bedrijven per gebruiker?" vervalt.
- `/kennisbank/gemini-voor-bedrijven`: De prijs van de Enterprise-editie is op aanvraag.
  - Reden: prijs van een tool van derden De hele vervolgvraag "Wat kost Gemini voor bedrijven per gebruiker?" vervalt.
- `/kennisbank/gemini-voor-bedrijven`: In Business Standard zit Gemini in onder andere Gmail, Docs en Meet.
  - Reden: voorgelegd en op aanwijzing geschrapt (De inhoud staat in de tabel, maar de bron geeft dit alleen als opgave van Google (kolom 'Gemini volgens Google', stand september 2026); de zin stelt het zonder dat voorbehoud als feit en is daarmee stelliger dan de bron.)
- `/kennisbank/microsoft-copilot-voor-bedrijven`: Microsoft onderscheidt grofweg twee niveaus (stand september 2026): Copilot Chat, volgens Microsoft zonder extra kosten beschikbaar bij een geschikt Microsoft 365-abonnement, en de betaalde licentie, waarmee Copilot kan redeneren over de volle breedte van de werkdata.
  - Reden: voorgelegd en op aanwijzing geschrapt (De bron beperkt 'de volle breedte van je werkdata' met de voorwaarde 'voor zover de gebruiker daar toegang toe heeft'; die voorwaarde ontbreekt in deze zin, waardoor hij breder is dan de bron (de rest van de zin is gedekt, en A3 noemt de toegangsrechten wel).)
- `/kennisbank/microsoft-copilot-voor-bedrijven`: Microsoft onderscheidt grofweg twee niveaus (stand september 2026): Copilot Chat, volgens Microsoft zonder extra kosten beschikbaar bij een geschikt Microsoft 365-abonnement, en de betaalde licentie, waarmee Copilot kan redeneren over de volle breedte van de werkdata.
  - Reden: prijs van een tool van derden
- `/kennisbank/microsoft-copilot-voor-bedrijven`: Copilot Business kost € 18,20 en Microsoft Copilot voor enterprise € 26,00 per gebruiker per maand, bij jaarlijkse betaling en exclusief btw (stand september 2026).
  - Reden: prijs van een tool van derden De hele vervolgvraag "Wat kost een betaalde licentie voor Microsoft Copilot?" vervalt.
- `/kennisbank/microsoft-copilot-voor-bedrijven`: Wie Copilot Business van 1 juli tot en met 31 december 2026 afsluit, betaalt het eerste jaar tijdelijk € 15,60.
  - Reden: prijs van een tool van derden De hele vervolgvraag "Wat kost een betaalde licentie voor Microsoft Copilot?" vervalt.
- `/inzichten/ai-adoptie-begint-bij-het-werk`: Bij AI-adoptie zien organisaties die AI-tools uitrollen doorgaans tien tot vijftien procent wekelijks gebruik, omdat een algemene AI-assistent geen enkel startpunt biedt en medewerkers onzeker zijn over wat mag.
  - Reden: marktcijfer op een pagina die daar niet zelf over gaat
- `/inzichten/ai-governance-zonder-bureaucratie`: AI-governance blijft licht als toepassingen eerst naar risico worden ingedeeld in laag, midden en hoog, zodat alleen de hoogste categorie het zwaarste regime krijgt.
  - Reden: voorgelegd en op aanwijzing geschrapt (De indeling in laag, midden en hoog en 'zware governance alleen waar het risico dat rechtvaardigt' staan in de bron, maar de stellige voorwaarde 'blijft licht als' staat er niet: de bron zegt alleen dat één regime voor alles lage-risicotoepassingen onnodig vertraagt en noemt de vier mechanismen 'licht'.)
- `/inzichten/build-buy-of-partner`: Een vuistregel uit de praktijk is dat het jaarlijkse onderhoud van een zelfgebouwde AI-toepassing tussen de 20% en 40% van de oorspronkelijke bouwkosten ligt.
  - Reden: marktcijfer op een pagina die daar niet zelf over gaat
- `/inzichten/build-buy-of-partner`: Hooguit tien tot twintig procent, in de praktijk: zo veel van wat organisaties willen bouwen is werkelijk onderscheidend.
  - Reden: marktcijfer op een pagina die daar niet zelf over gaat De hele vervolgvraag "Welk deel van wat organisaties zelf willen bouwen is bij build, buy of partner werkelijk onderscheidend?" vervalt.
- `/inzichten/de-business-case-voor-ai`: Bij goedkeuring ligt vast welke cijfers na twaalf maanden worden gerapporteerd, wat de nulmeting is en bij welke uitkomst wordt bijgestuurd of gestopt.
  - Reden: voorgelegd en op aanwijzing geschrapt (tweede lezing (laag C) wijkt af: De bron formuleert dit als advies ('Leg bij goedkeuring vast:') en noemt het 'het onderdeel dat het vaakst ontbreekt'; de zin stelt als feit dat het bij goedkeuring vastligt, wat stelliger is dan de bron.)
- `/inzichten/welke-ai-use-cases-leveren-resultaat`: Iedereen een AI-assistent geven hoort niet bij de AI-use cases: het is geen use case maar een licentie, en zonder afgebakende scenario's blijft het gebruik hangen rond de tien procent.
  - Reden: marktcijfer op een pagina die daar niet zelf over gaat De hele vervolgvraag "Geldt iedereen een AI-assistent geven als een van de AI-use cases?" vervalt.

## Niet geschrapt, blijft voorgelegd (1)

- `/ai-agents` · A2: Dave Willemstein bouwt zelf geen agents en adviseert onafhankelijk over de keuze van de taak, de specificatie en het aansturen van een bouwpartij.
  - Waarom niet geschrapt: de antwoordalinea zou minder dan 2 zinnen overhouden. Zeg of de zin mag blijven, of dat de alinea één zin mag worden.

## Controle tegen primaire bronnen (49 zinnen)

Elke bron is op 6 oktober 2026 opgehaald door een subagent met webtoegang; de fragmenten komen uit de opgehaalde tekst. EUR-Lex liet zich bij één subagent niet via de gewone ophaaltool lezen en is daar met een directe download opgehaald. Geen enkele bron was onbereikbaar. Niets is naar aanleiding van deze controle geschrapt of herschreven: het oordeel is aan jou.

| Oordeel | Aantal |
|---|---|
| bevestigd | 44 |
| niet te vinden | 3 |
| verouderd | 1 |
| onjuist | 1 |

### Niet bevestigd

- `/kennisbank/ai-agents-en-avg` · A2 · **niet te vinden**
  - Zin: De basis bestaat uit een vastgelegd doel met grondslag, toegang die per bron is afgebakend, een verwerkersovereenkomst met de leverancier, logging van elke stap en vaak een DPIA.
  - Claim: De AVG-basis bestaat uit doel met grondslag, per bron afgebakende toegang, verwerkersovereenkomst, logging van elke stap en vaak een DPIA.
  - Bron: Verordening (EU) 2016/679, artikel 5 lid 1 onder b, artikel 6 lid 1, artikel 28 lid 3, artikel 35 lid 1 · https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:32016R0679 · opgehaald 2026-10-06
  - Fragment: voor welbepaalde, uitdrukkelijk omschreven en gerechtvaardigde doeleinden worden verzameld [...] De verwerking is alleen rechtmatig indien en voor zover aan ten minste een van de onderstaande voorwaarden is voldaan [...] De verwerking door een verwerker wordt geregeld in een overeenkomst of andere rechtshandeling [...] Wanneer een soort verwerking, in het bijzonder een verwerking waarbij nieuwe technologieën worden gebruikt, gelet op de aard, de omvang, de context en de doeleinden daarvan waarschijnlijk een hoog risico inhoudt voor de rechten en vrijheden van natuurlijke personen voert de verwerkingsverantwoordelijke vóór de verwerking een beoordeling uit van het effect van de beoogde verwerkingsactiviteiten op de bescherming van persoonsgegevens.
  - Toelichting: Doel, grondslag, verwerkersovereenkomst en DPIA staan in de AVG (art. 5, 6, 28, 35). 'Logging van elke stap' staat niet als eis in de opgehaalde AVG-tekst; het dichtst erbij komen de verantwoordingsplicht (art. 5 lid 2: 'kan deze aantonen') en art. 24 lid 1 ('te kunnen aantonen'). 'Toegang die per bron is afgebakend' is een eigen uitwerking van dataminimalisatie, geen letterlijke eis. 'Vaak een DPIA' is een inschatting van de pagina; de AVG eist een DPIA alleen bij een waarschijnlijk hoog risico.
- `/markten/automotive` · V1.3 · **niet te vinden**
  - Zin: Een chatbot of een tekstgenerator is bij AI in automotive geen hoog-risicotoepassing.
  - Claim: Een chatbot of tekstgenerator is geen hoog-risicotoepassing.
  - Bron: Europese Commissie, pagina "AI Act"; Verordening (EU) 2024/1689, artikel 6 en bijlage III · https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai · opgehaald 2026-10-06
  - Fragment: [Europese Commissie, "AI Act" (regulatory framework AI)] For instance, when using AI systems such as chatbots, humans should be made aware that they are interacting with a machine so they can take an informed decision. [...] [Verordening (EU) 2024/1689 (AI Act), EUR-Lex] Naast de in lid 1 bedoelde AI-systemen met een hoog risico worden ook AI-systemen zoals bedoeld in bijlage III als AI-systeem met een hoog risico beschouwd.
  - Toelichting: De stellige uitspraak staat niet in de bron. De Commissie noemt chatbots als voorbeeld bij "Transparency risk", en bijlage III noemt geen chatbots of tekstgeneratoren als categorie; het woord "chatbot" komt in de verordening alleen voor in overweging 119. Maar de classificatie hangt volgens artikel 6 en bijlage III af van het beoogde doel, niet van de techniek: een chatbot of tekstgenerator die wordt ingezet voor een doel uit bijlage III (bijvoorbeeld het beoordelen van sollicitanten) kan wel hoog risico zijn. De bron dekt hooguit "op zichzelf geen hoog-risicocategorie", niet het onvoorwaardelijke "is geen hoog-risicotoepassing".
- `/kennisbank/ai-voorbeelden` · V2.1 · **niet te vinden**
  - Zin: Zodra een toepassing zelf een besluit over een persoon neemt of een professioneel oordeel vervangt, gelden bij AI voorbeelden zwaardere eisen vanuit de AVG, de AI Act en de eigen sectorregels.
  - Claim: Zodra een toepassing zelf een besluit over een persoon neemt of een professioneel oordeel vervangt, gelden zwaardere eisen vanuit de AVG, de AI Act en de eigen sectorregels.
  - Bron: Verordening (EU) 2016/679 (AVG), artikel 22, lid 1; Verordening (EU) 2024/1689, artikel 6, lid 3 · https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:32016R0679 · opgehaald 2026-10-06
  - Fragment: [Verordening (EU) 2016/679 (AVG), EUR-Lex] De betrokkene heeft het recht niet te worden onderworpen aan een uitsluitend op geautomatiseerde verwerking, waaronder profilering, gebaseerd besluit waaraan voor hem rechtsgevolgen zijn verbonden of dat hem anderszins in aanmerkelijke mate treft. [...] [Verordening (EU) 2024/1689 (AI Act), EUR-Lex] In afwijking van lid 2 wordt een in bijlage III bedoeld AI-systeem niet als AI-systeem met een hoog risico beschouwd wanneer het geen significant risico op schade voor de gezondheid, veiligheid of de grondrechten van natuurlijke personen inhoudt, onder meer doordat het de uitkomst van de besluitvorming niet wezenlijk beïnvloedt. [...] [Verordening (EU) 2024/1689 (AI Act), EUR-Lex] het AI-systeem is bedoeld om een voorbereidende taak uit te voeren voor een beoordeling die relevant is voor de in bijlage III vermelde gebruiksgevallen.
  - Toelichting: Deels gedekt, niet als geheel. Wel in de bron: de AVG kent een eigen regime voor uitsluitend geautomatiseerde besluiten over personen (artikel 22), maar alleen bij rechtsgevolgen of aanmerkelijke gevolgen, niet bij elk besluit over een persoon; en de AI Act maakt voor bijlage III-systemen onderscheid tussen een voorbereidende taak en het wezenlijk beïnvloeden van de besluitvorming (artikel 6, lid 3), maar alleen binnen de gebieden van bijlage III. Niet in de bron: "een professioneel oordeel vervangt" als zelfstandig criterium, en "de eigen sectorregels" (geen bron genoemd, dus niet te toetsen). De zin is als algemene regel stelliger en breder dan de opgehaalde bronnen.
- `/kennisbank/ai-specialist-salaris` · A2 · **verouderd**
  - Zin: DataJobs (bijgewerkt mei 2026) noemt bruto per maand € 3.000 tot € 4.000 voor junioren, € 4.000 tot € 5.500 voor medioren en € 5.500 tot € 7.000 voor senioren; Indeed (bijgewerkt 14 september 2026) meldt een gemiddelde van € 56.643 per jaar.
  - Claim: DataJobs (bijgewerkt mei 2026): junior € 3.000-4.000, medior € 4.000-5.500, senior € 5.500-7.000 bruto per maand; Indeed (bijgewerkt 14 september 2026): gemiddeld € 56.643 per jaar.
  - Bron: Indeed, Salaris van een AI engineer in Nederland; DataJobs, Werken als AI Engineer (https://www.datajobs.nl/kennisbank/carrieregids/beroepen-in-data-en-analytics/werken-als-ai-engineer) · https://nl.indeed.com/career/ai-engineer/salaries · opgehaald 2026-10-06
  - Fragment: Het gemiddelde salaris voor een ai engineer in Nederland is € 56.870 per jaar. 421 salarissen doorgegeven, bijgewerkt op 28 september 2026. // (DataJobs) Bijgewerkt mei 2026 [...] Functieniveau Ervaring Bruto maandsalaris Junior 0–2 jaar €3.000 – €4.000 Medior 3–6 jaar €4.000 – €5.500 Senior 6+ jaar €5.500 – €7.000
  - Toelichting: Het DataJobs-deel klopt nog letterlijk (bijgewerkt mei 2026, zelfde bedragen). Het Indeed-deel is ingehaald: Indeed toont nu € 56.870 per jaar, 421 salarissen, bijgewerkt op 28 september 2026, in plaats van € 56.643 per 14 september 2026.
- `/kennisbank/ai-specialist-salaris` · V2.1 · **onjuist**
  - Zin: Lastig: de cijfers van Indeed en DataJobs zijn lastig één-op-één te vergelijken, want Indeed rekent in jaarbedragen op basis van wat werknemers zelf opgeven en DataJobs in brutomaandbedragen op basis van gegevens van het eigen platform.
  - Claim: Indeed rekent in jaarbedragen op basis van wat werknemers zelf opgeven; DataJobs in brutomaandbedragen op basis van gegevens van het eigen platform.
  - Bron: Indeed, Salaris van een AI engineer in Nederland; DataJobs, Werken als AI Engineer (https://www.datajobs.nl/kennisbank/carrieregids/beroepen-in-data-en-analytics/werken-als-ai-engineer) · https://nl.indeed.com/career/ai-engineer/salaries · opgehaald 2026-10-06
  - Fragment: Het gemiddelde salaris voor een AI Engineer is € 56.870 per jaar in Nederland. Dit cijfer is gebaseerd op 421 salarissen uit vacatures op Indeed van de afgelopen 36 maanden, voor het laatst bijgewerkt op 28 september 2026. // (DataJobs) Op DataJobs lopen salarissen voor AI Engineer van €4.954 tot €6.688 bruto per maand, met een mediaan van €5.500.
  - Toelichting: Indeed zegt zelf dat het cijfer is gebaseerd op salarissen uit vacatures op Indeed van de afgelopen 36 maanden, niet op wat werknemers zelf opgeven (de kop zegt alleen '421 salarissen doorgegeven'). Jaarbedragen bij Indeed en brutomaandbedragen 'op DataJobs' kloppen wel.

### Bevestigd

- `/kennisbank/ai-agents-en-avg` · A1: De AVG bij AI agents geldt volledig: de organisatie die de agent inzet, blijft verwerkingsverantwoordelijke, ook als de agent zelf gegevens opzoekt, vastlegt of verstuurt.
  - Claim: De AVG is van toepassing op verwerking door een AI agent; de organisatie die doel en middelen bepaalt is en blijft verwerkingsverantwoordelijke.
  - Bron: Verordening (EU) 2016/679, artikel 2 lid 1, artikel 4 punt 7 en artikel 5 lid 2 · https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:32016R0679 · opgehaald 2026-10-06
  - Fragment: Deze verordening is van toepassing op de geheel of gedeeltelijk geautomatiseerde verwerking [...] „verwerkingsverantwoordelijke”: een natuurlijke persoon of rechtspersoon, een overheidsinstantie, een dienst of een ander orgaan die/dat, alleen of samen met anderen, het doel van en de middelen voor de verwerking van persoonsgegevens vaststelt [...] De verwerkingsverantwoordelijke is verantwoordelijk voor de naleving van lid 1 en kan deze aantonen („verantwoordingsplicht”).
- `/kennisbank/ai-agents-en-avg` · A3: Neemt de agent besluiten over mensen, dan komen de regels over geautomatiseerde besluitvorming erbij, en daarnaast kan de AI Act gelden.
  - Claim: Bij besluiten over mensen gelden de AVG-regels over geautomatiseerde besluitvorming; daarnaast kan de AI Act gelden.
  - Bron: Verordening (EU) 2016/679, artikel 22 lid 1; Verordening (EU) 2024/1689, artikel 2 lid 7 (https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:32024R1689) · https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:32016R0679 · opgehaald 2026-10-06
  - Fragment: De betrokkene heeft het recht niet te worden onderworpen aan een uitsluitend op geautomatiseerde verwerking, waaronder profilering, gebaseerd besluit waaraan voor hem rechtsgevolgen zijn verbonden of dat hem anderszins in aanmerkelijke mate treft. [...] Het Unierecht inzake de bescherming van persoonsgegevens, de privacy en de vertrouwelijkheid van communicatie is van toepassing op persoonsgegevens die worden verwerkt in verband met de rechten en verplichtingen die in deze verordening zijn vastgelegd. Deze verordening laat de Verordeningen (EU) 2016/679 of (EU) 2018/1725, of de Richtlijnen 2002/58/EG of (EU) 2016/680 onverlet
- `/kennisbank/ai-agents-en-avg` · V1.1: Nee.
  - Claim: (Antwoord op de vraag 'Heeft de AVG een apart hoofdstuk voor AI agents?') Nee.
  - Bron: Verordening (EU) 2016/679, hoofdstuktitels (hoofdstukken I tot en met XI) · https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:32016R0679 · opgehaald 2026-10-06
  - Fragment: Algemene bepalingen / Beginselen / Rechten van de betrokkene / Verwerkingsverantwoordelijke en verwerker / Doorgiften van persoonsgegevens aan derde landen of internationale organisaties / Onafhankelijke toezichthoudende autoriteiten / Samenwerking en coherentie / Beroep, aansprakelijkheid en sancties / Bepalingen in verband met specifieke situaties op het gebied van gegevensverwerking / Gedelegeerde handelingen en uitvoeringshandelingen / Slotbepalingen
- `/kennisbank/ai-agents-en-avg` · V1.2: De AVG bij AI agents bestaat uit de bestaande regels, die direct van toepassing zijn; een apart hoofdstuk voor AI agents heeft de AVG niet.
  - Claim: De AVG kent geen apart hoofdstuk voor AI agents; de bestaande regels zijn rechtstreeks van toepassing.
  - Bron: Verordening (EU) 2016/679, hoofdstuktitels en slotformule na artikel 99 · https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:32016R0679 · opgehaald 2026-10-06
  - Fragment: Deze verordening is verbindend in al haar onderdelen en is rechtstreeks toepasselijk in elke lidstaat.
- `/kennisbank/ai-agents-en-avg` · V2.2: De melding is niet nodig als het risico voor betrokkenen onwaarschijnlijk is.
  - Claim: Een datalek hoeft niet te worden gemeld als een risico voor betrokkenen niet waarschijnlijk is.
  - Bron: Verordening (EU) 2016/679, artikel 33 lid 1 · https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:32016R0679 · opgehaald 2026-10-06
  - Fragment: meldt de verwerkingsverantwoordelijke deze zonder onredelijke vertraging en, indien mogelijk, uiterlijk 72 uur nadat hij er kennis van heeft genomen, aan de overeenkomstig artikel 55 bevoegde toezichthoudende autoriteit, tenzij het niet waarschijnlijk is dat de inbreuk in verband met persoonsgegevens een risico inhoudt voor de rechten en vrijheden van natuurlijke personen.
- `/kennisbank/ai-agents-en-avg` · V3.1: Voor een agent kunnen de AVG en de AI Act tegelijk gelden: de AVG bij AI agents gaat over persoonsgegevens, de AI Act over het AI-systeem zelf.
  - Claim: AVG en AI Act kunnen naast elkaar gelden; de AVG gaat over persoonsgegevens, de AI Act over het AI-systeem.
  - Bron: Verordening (EU) 2024/1689, artikel 2 lid 7 · https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:32024R1689 · opgehaald 2026-10-06
  - Fragment: Het Unierecht inzake de bescherming van persoonsgegevens, de privacy en de vertrouwelijkheid van communicatie is van toepassing op persoonsgegevens die worden verwerkt in verband met de rechten en verplichtingen die in deze verordening zijn vastgelegd. Deze verordening laat de Verordeningen (EU) 2016/679 of (EU) 2018/1725, of de Richtlijnen 2002/58/EG of (EU) 2016/680 onverlet
- `/kennisbank/ai-agents-en-avg` · V3.2: Voor agents die onder bijlage III vallen, bijvoorbeeld doordat ze sollicitaties filteren of kandidaten beoordelen, gelden de hoog-risicoverplichtingen door de Digital Omnibus vanaf 2 december 2027 in plaats van 2 augustus 2026.
  - Claim: Sollicitaties filteren en kandidaten beoordelen valt onder bijlage III; de hoog-risicoverplichtingen gelden door de Digital Omnibus vanaf 2 december 2027 in plaats van 2 augustus 2026.
  - Bron: Verordening (EU) 2026/1744, artikel 1 (nieuw artikel 113, punt c, van Verordening (EU) 2024/1689) en de overweging over artikel 113; Verordening (EU) 2024/1689, bijlage III punt 4 onder a (https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:32024R1689) · https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=OJ:L_202601744 · opgehaald 2026-10-06
  - Fragment: hoofdstuk III, de afdelingen 1, 2 en 3, met uitzondering van artikel 6, lid 5, van toepassing met ingang van: i) 2 december 2027 voor wat betreft AI-systemen die op grond van artikel 6, lid 2, en bijlage III als AI-systemen met een hoog risico zijn aangemerkt, en ii) 2 augustus 2028 voor wat betreft AI-systemen die op grond van artikel 6, lid 1, en bijlage I als AI-systemen met een hoog risico zijn aangemerkt. [...] de oorspronkelijke toepassingsdatum ervan, te weten 2 augustus 2026 [...] AI-systemen die bedoeld zijn om te worden gebruikt voor het werven of selecteren van natuurlijke personen, met name voor het plaatsen van gerichte vacatures, het analyseren en filteren van sollicitaties, en het beoordelen van kandidaten;
- `/markten/fintech` · A2: Kredietbeoordeling van personen en de risicobeoordeling en prijsstelling bij levens- en ziektekostenverzekeringen zijn hoog risico onder de AI Act, met regels vanaf 2 december 2027 (stand september 2026).
  - Claim: Kredietbeoordeling van personen en risicobeoordeling/prijsstelling bij levens- en ziektekostenverzekeringen zijn hoog risico (bijlage III); de regels gelden vanaf 2 december 2027.
  - Bron: Verordening (EU) 2024/1689, bijlage III punt 5 onder b en c; Verordening (EU) 2026/1744, artikel 1 (nieuw artikel 113, punt c) (https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=OJ:L_202601744) · https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:32024R1689 · opgehaald 2026-10-06
  - Fragment: AI-systemen die bedoeld zijn om te worden gebruikt voor het beoordelen van de kredietwaardigheid van natuurlijke personen of voor het vaststellen van hun kredietscore, met uitzondering van AI-systemen die gebruikt worden om financiële fraude op te sporen; [...] AI-systemen die bedoeld zijn om te worden gebruikt voor risicobeoordeling en prijsstelling met betrekking tot natuurlijke personen in het geval van levens- en ziektekostenverzekeringen; [...] 2 december 2027 voor wat betreft AI-systemen die op grond van artikel 6, lid 2, en bijlage III als AI-systemen met een hoog risico zijn aangemerkt
- `/markten/fintech` · V2.2: Een kredietmodel dat nu wordt ingekocht of gebouwd, is waarschijnlijk nog in gebruik als de hoog-risicoregels vanaf 2 december 2027 gelden, dus bij AI in fintech horen die eisen nu al in ontwerp en selectie.
  - Claim: De hoog-risicoregels voor (bijlage III-)kredietmodellen gelden vanaf 2 december 2027.
  - Bron: Verordening (EU) 2026/1744, artikel 1 (nieuw artikel 113, punt c, onder i, van Verordening (EU) 2024/1689) · https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=OJ:L_202601744 · opgehaald 2026-10-06
  - Fragment: 2 december 2027 voor wat betreft AI-systemen die op grond van artikel 6, lid 2, en bijlage III als AI-systemen met een hoog risico zijn aangemerkt
- `/markten/fintech` · V3.1: Een AI-dienst die een financiële instelling afneemt, hoort bij AI in fintech in de praktijk bij de ICT-diensten van derden waarvan DORA een informatieregister vraagt, inclusief onderuitbesteding.
  - Claim: DORA vraagt een informatieregister van ICT-diensten van derden, inclusief onderuitbesteding; een afgenomen AI-dienst valt daar in de praktijk onder.
  - Bron: Verordening (EU) 2022/2554, artikel 28 lid 3 en artikel 3 punt 21; Uitvoeringsverordening (EU) 2024/2956, artikel 3 lid 2 (https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:32024R2956) · https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:32022R2554 · opgehaald 2026-10-06
  - Fragment: Als onderdeel van hun kader voor ICT-risicobeheer handhaven en actualiseren financiële entiteiten op het niveau van de entiteit en op gesubconsolideerd en geconsolideerd niveau een informatieregister met betrekking tot alle contractuele overeenkomsten over het gebruik van door derde aanbieders verleende ICT-diensten. [...] “ICT-diensten”: digitale en gegevensdiensten die doorlopend via ICT-systemen aan een of meer interne of externe gebruikers worden verleend [...] informatie over alle onderaannemers die daadwerkelijk ICT-diensten verlenen die de kritieke of belangrijke functies of wezenlijke onderdelen daarvan ondersteunen.
- `/markten/fintech` · V3.2: DORA geldt sinds 17 januari 2025 en richt zich op de financiële instelling; de precieze kwalificatie is iets om te laten toetsen door de compliance- of juridische afdeling.
  - Claim: DORA is van toepassing sinds 17 januari 2025 en richt zich op financiële entiteiten.
  - Bron: Verordening (EU) 2022/2554, artikel 64 en artikel 2 lid 1 · https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:32022R2554 · opgehaald 2026-10-06
  - Fragment: Zij is van toepassing met ingang van 17 januari 2025. [...] Onverminderd de leden 3 en 4 is deze verordening van toepassing op de volgende entiteiten: a) kredietinstellingen;
- `/ai-voor-bedrijven` · V1.1: Ja.
  - Claim: (Antwoord op de vraag 'Zijn de regels uit de AI Act voor hoog-risicotoepassingen bij AI voor bedrijven uitgesteld?') Ja.
  - Bron: Verordening (EU) 2026/1744, overweging over artikel 113 · https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=OJ:L_202601744 · opgehaald 2026-10-06
  - Fragment: Het is daarom passend dat de datum voor de toepassing van de afdelingen 1, 2 en 3 van hoofdstuk III wordt vastgesteld op 2 december 2027 voor AI-systemen die op grond van artikel 6, lid 2, en bijlage III als AI-systemen met een hoog risico zijn ingedeeld, en op 2 augustus 2028 voor AI-systemen die op grond van artikel 6, lid 1, en bijlage I als AI-systemen met een hoog risico zijn ingedeeld.
- `/ai-voor-bedrijven` · V1.2: Via de Digital Omnibus on AI, die op 27 juli 2026 in werking trad, gelden de regels voor de hoog-risicogebieden uit bijlage III, zoals werving en kredietverlening, vanaf 2 december 2027 en voor AI in gereguleerde producten vanaf 2 augustus 2028.
  - Claim: De Digital Omnibus on AI trad op 27 juli 2026 in werking; bijlage III-regels (onder meer werving en kredietverlening) gelden vanaf 2 december 2027, AI in gereguleerde producten (bijlage I) vanaf 2 augustus 2028.
  - Bron: Verordening (EU) 2026/1744 (PB L, 24.7.2026), artikel 4 en artikel 1 (nieuw artikel 113, punt c); Europese Commissie, 'AI Omnibus enters into force' (https://digital-strategy.ec.europa.eu/en/news/ai-omnibus-enters-force); Verordening (EU) 2024/1689, bijlage III punten 4 en 5 (https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:32024R1689) · https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=OJ:L_202601744 · opgehaald 2026-10-06
  - Fragment: Deze verordening treedt in werking op de derde dag na die van de bekendmaking ervan in het Publicatieblad van de Europese Unie. [...] hoofdstuk III, de afdelingen 1, 2 en 3, met uitzondering van artikel 6, lid 5, van toepassing met ingang van: i) 2 december 2027 voor wat betreft AI-systemen die op grond van artikel 6, lid 2, en bijlage III als AI-systemen met een hoog risico zijn aangemerkt, en ii) 2 augustus 2028 voor wat betreft AI-systemen die op grond van artikel 6, lid 1, en bijlage I als AI-systemen met een hoog risico zijn aangemerkt. [...] On 27 July 2026, the AI Omnibus enters into force across the EU [...] High-risk AI systems in Annex III: Rules apply starting 2 December 2027 [...] High-risk AI embedded in physical products (machinery, toys, lifts, etc.) in Annex I: Rules apply starting 2 August 2028 [...] AI-systemen die bedoeld zijn om te worden gebruikt voor het werven of selecteren van natuurlijke personen, met name voor het plaatsen van gerichte vacatures, het analyseren en filteren van sollicitaties, en het beoordelen van kandidaten; [...] AI-systemen die bedoeld zijn om te worden gebruikt voor het beoordelen van de kredietwaardigheid van natuurlijke personen of voor het vaststellen van hun kredietscore, met uitzondering van AI-systemen die gebruikt worden om financiële fraude op te sporen;
- `/ai-implementatie/advies` · V2.3: Een DPIA is onder de AVG verplicht als de toepassing persoonsgegevens verwerkt met een grote kans op een hoog privacyrisico, en die vraag hoort aan het begin, niet vlak voor livegang.
  - Claim: Een DPIA is onder de AVG verplicht bij verwerking van persoonsgegevens met waarschijnlijk een hoog (privacy)risico, en moet vóór de verwerking plaatsvinden.
  - Bron: Verordening (EU) 2016/679, artikel 35 lid 1; Autoriteit Persoonsgegevens, DPIA (https://autoriteitpersoonsgegevens.nl/themas/basis-avg/praktisch-avg/data-protection-impact-assessment-dpia) · https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:32016R0679 · opgehaald 2026-10-06
  - Fragment: Wanneer een soort verwerking, in het bijzonder een verwerking waarbij nieuwe technologieën worden gebruikt, gelet op de aard, de omvang, de context en de doeleinden daarvan waarschijnlijk een hoog risico inhoudt voor de rechten en vrijheden van natuurlijke personen voert de verwerkingsverantwoordelijke vóór de verwerking een beoordeling uit van het effect van de beoogde verwerkingsactiviteiten op de bescherming van persoonsgegevens. [...] Is een organisatie van plan persoonsgegevens te verwerken, maar levert dat waarschijnlijk een hoog privacyrisico op? Dan is de organisatie verplicht eerst een 'data protection impact assessment' (DPIA) uit te voeren.
- `/kennisbank/notuleren-met-ai` · A3: Omdat een vergadering opnemen een verwerking van persoonsgegevens is, luidt het advies deelnemers vooraf te informeren en vast te leggen wat er wordt bewaard.
  - Claim: Een vergadering opnemen is een verwerking van persoonsgegevens; deelnemers horen vooraf te worden geïnformeerd en er hoort te worden vastgelegd wat wordt bewaard.
  - Bron: Verordening (EU) 2016/679, artikel 4 punt 2, artikel 13 lid 1 en lid 2 onder a; Autoriteit Persoonsgegevens, Controle van communicatiemiddelen (https://autoriteitpersoonsgegevens.nl/themas/werk-en-uitkering/controle-van-werknemers/controle-van-communicatiemiddelen) · https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:32016R0679 · opgehaald 2026-10-06
  - Fragment: „verwerking”: een bewerking of een geheel van bewerkingen met betrekking tot persoonsgegevens of een geheel van persoonsgegevens, al dan niet uitgevoerd via geautomatiseerde procedés, zoals het verzamelen, vastleggen, ordenen, structureren, opslaan [...] Wanneer persoonsgegevens betreffende een betrokkene bij die persoon worden verzameld, verstrekt de verwerkingsverantwoordelijke de betrokkene bij de verkrijging van de persoonsgegevens al de volgende informatie: [...] de periode gedurende welke de persoonsgegevens zullen worden opgeslagen, of indien dat niet mogelijk is, de criteria ter bepaling van die termijn; [...] Uw werknemers hebben het recht om het te weten als hun gesprek wordt opgenomen. [...] U moet ook degene met wie uw medewerker belt (zoals een klant) vooraf informeren dat het gesprek wordt opgenomen.
- `/ai-consultancy/ai-advies` · V2.2: AI advies over de AI Act helpt bepalen in welke risicocategorie een toepassing valt, wat dat van de organisatie vraagt en hoe de governance wordt ingericht.
  - Claim: De AI Act werkt met risicocategorieën waarvan de eisen aan de organisatie afhangen.
  - Bron: Verordening (EU) 2024/1689, overweging 26 · https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:32024R1689 · opgehaald 2026-10-06
  - Fragment: Om een evenredige en doeltreffende reeks bindende regels voor AI-systemen in te voeren, moet een duidelijk omschreven, risicogebaseerde aanpak worden gevolgd. [...] Daarom is het noodzakelijk om bepaalde onaanvaardbare praktijken op het gebied van AI te verbieden, eisen voor AI-systemen met een hoog risico en verplichtingen voor de betrokken operatoren vast te stellen, en transparantieverplichtingen voor bepaalde AI-systemen in te voeren.
- `/ai-beleid/ai-act` · A1: De AI Act voor bedrijven hangt af van het volgende: welke AI een organisatie gebruikt of maakt, in welke van de vier risicocategorieën die valt en of de organisatie aanbieder of gebruiksverantwoordelijke is.
  - Claim: De AI Act kent vier risicocategorieën en onderscheidt de rollen aanbieder en gebruiksverantwoordelijke; wat geldt hangt af van systeem, categorie en rol.
  - Bron: Europese Commissie, pagina "AI Act" (risk-based approach); Verordening (EU) 2024/1689, artikel 3, punten 3 en 4 · https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai · opgehaald 2026-10-06
  - Fragment: [Europese Commissie, "AI Act" (regulatory framework AI)] The AI Act defines 4 levels of risk for AI systems: [...] [Europese Commissie, "AI Act" (regulatory framework AI)] The AI Act sets out a risk-based rules for AI developers and deployers regarding specific uses of AI. [...] [Verordening (EU) 2024/1689 (AI Act), EUR-Lex] “aanbieder”: een natuurlijke of rechtspersoon, overheidsinstantie, agentschap of ander orgaan die/dat een AI-systeem of een AI-model voor algemene doeleinden ontwikkelt of laat ontwikkelen en dat systeem of model in de handel brengt of het AI-systeem in gebruik stelt onder de eigen naam of merk, al dan niet tegen betaling; [...] [Verordening (EU) 2024/1689 (AI Act), EUR-Lex] “gebruiksverantwoordelijke”: een natuurlijke of rechtspersoon, overheidsinstantie, agentschap of ander orgaan die/dat een AI-systeem onder eigen verantwoordelijkheid gebruikt, tenzij het AI-systeem wordt gebruikt in het kader van een persoonlijke niet-beroepsactiviteit;
  - Kanttekening: Bevestigd. Kanttekening: de indeling in vier risiconiveaus is de presentatie van de Europese Commissie; de verordeningstekst zelf noemt geen "vier categorieën".
- `/ai-beleid/ai-act` · A2: De verboden praktijken en de plicht rond AI-geletterdheid gelden sinds 2 februari 2025 en de transparantieverplichtingen sinds 2 augustus 2026; het negende verbod geldt pas vanaf 2 december 2026 en voor de machineleesbare markering van content uit systemen die al vóór 2 augustus 2026 op de markt waren geldt een overgangstermijn tot 2 december 2026.
  - Claim: Verboden praktijken en AI-geletterdheid sinds 2-2-2025; transparantieverplichtingen sinds 2-8-2026; negende verbod vanaf 2-12-2026; overgangstermijn machineleesbare markering tot 2-12-2026 voor systemen die voor 2-8-2026 op de markt waren.
  - Bron: Verordening (EU) 2024/1689, artikel 113, zoals gewijzigd bij Verordening (EU) 2026/1744 (artikel 113, derde alinea, punt a; artikel 111, lid 4); Europese Commissie, pagina "AI Act" · https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=OJ:L_202401689 · opgehaald 2026-10-06
  - Fragment: [Verordening (EU) 2024/1689 (AI Act), EUR-Lex] Zij is van toepassing met ingang van 2 augustus 2026. [...] [Verordening (EU) 2024/1689 (AI Act), EUR-Lex] de hoofdstukken I en II van toepassing met ingang van 2 februari 2025; [...] [Verordening (EU) 2026/1744 (Digitale omnibus inzake AI), EUR-Lex] de hoofdstukken I en II van toepassing met ingang van 2 februari 2025, met uitzondering van artikel 5, lid 1, eerste alinea, punten b bis) en b ter), en artikel 5, leden 1 bis en lid 1 ter, die van toepassing zijn met ingang van 2 december 2026; [...] [Verordening (EU) 2026/1744 (Digitale omnibus inzake AI), EUR-Lex] Aanbieders van AI-systemen, met inbegrip van AI-systemen voor algemene doeleinden, die synthetische audio-, beeld-, video- of tekstinhoud genereren en vóór 2 augustus 2026 in de handel zijn gebracht, nemen de nodige stappen om uiterlijk op 2 december 2026 aan artikel 50, lid 2, te voldoen. [...] [Europese Commissie, "AI Act" (regulatory framework AI)] Prohibition 9 comes into effect in December 2026 and was introduced as a part of the AI Omnibus. [...] [Europese Commissie, "AI Act" (regulatory framework AI)] The transparency rules of the AI Act will come into effect in August 2026. [...] [Europese Commissie, "AI Act" (regulatory framework AI)] prohibited AI practices and AI literacy obligations entered into application from 2 February 2025
  - Kanttekening: Bevestigd. Kanttekening: de telling "negende verbod" is die van de Europese Commissie ("Prohibition 9"); in de verordeningstekst zijn het twee ingevoegde punten in artikel 5, lid 1 (b bis en b ter), beide van toepassing met ingang van 2 december 2026.
- `/ai-beleid/ai-act` · A3: De hoog-risicoregels gelden sinds de Digital Omnibus vanaf 2 december 2027 voor toepassingen uit bijlage III en vanaf 2 augustus 2028 voor AI in producten uit bijlage I (stand 23 september 2026).
  - Claim: Sinds de Digital Omnibus gelden de hoog-risicoregels vanaf 2-12-2027 voor bijlage III en vanaf 2-8-2028 voor bijlage I.
  - Bron: Verordening (EU) 2026/1744, wijziging van artikel 113, derde alinea, punt c), van Verordening (EU) 2024/1689; Europese Commissie, "AI Omnibus enters into force" · https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=OJ:L_202601744 · opgehaald 2026-10-06
  - Fragment: [Verordening (EU) 2026/1744 (Digitale omnibus inzake AI), EUR-Lex] hoofdstuk III, de afdelingen 1, 2 en 3, met uitzondering van artikel 6, lid 5, van toepassing met ingang van: [...] [Verordening (EU) 2026/1744 (Digitale omnibus inzake AI), EUR-Lex] 2 december 2027 voor wat betreft AI-systemen die op grond van artikel 6, lid 2, en bijlage III als AI-systemen met een hoog risico zijn aangemerkt, en [...] [Verordening (EU) 2026/1744 (Digitale omnibus inzake AI), EUR-Lex] 2 augustus 2028 voor wat betreft AI-systemen die op grond van artikel 6, lid 1, en bijlage I als AI-systemen met een hoog risico zijn aangemerkt. [...] [Europese Commissie, "AI Omnibus enters into force" (27 juli 2026)] High-risk AI systems in Annex III : Rules apply starting 2 December 2027 [...] [Europese Commissie, "AI Omnibus enters into force" (27 juli 2026)] High-risk AI embedded in physical products (machinery, toys, lifts, etc.) in Annex I : Rules apply starting 2 August 2028
  - Kanttekening: Bevestigd; op 6 oktober 2026 staat dit nog zo in de bron. De peildatum 23 september 2026 is een eigen vermelding van de pagina en staat niet in de bron.
- `/ai-beleid/ai-act` · V1.1: Ja.
  - Claim: Ja op de vraag "Kan een organisatie onder de AI Act voor bedrijven ongemerkt aanbieder worden?"
  - Bron: Verordening (EU) 2024/1689, artikel 25, lid 1 · https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=OJ:L_202401689 · opgehaald 2026-10-06
  - Fragment: In de volgende omstandigheden wordt een distributeur, importeur, gebruiksverantwoordelijke of derde voor de toepassing van deze verordening beschouwd als een aanbieder van een AI-systeem met een hoog risico en is hij onderworpen aan de verplichtingen van de aanbieder uit hoofde van artikel 16:
  - Kanttekening: Bevestigd dat een gebruiksverantwoordelijke of derde als aanbieder kan worden beschouwd. Het woord "ongemerkt" is een eigen kwalificatie en staat niet in de bron. De vraag is overgenomen uit kaal-1.json; in de invoer stond alleen "Ja.".
- `/ai-beleid/ai-act` · V1.2: Volgens artikel 25 gebeurt dat bij een hoog-risicosysteem wanneer een organisatie er de eigen naam of het eigen merk op zet, het ingrijpend wijzigt of een systeem zo inzet dat het een hoog-risicotoepassing wordt.
  - Claim: Artikel 25: bij een hoog-risicosysteem word je aanbieder door eigen naam/merk erop te zetten, het ingrijpend te wijzigen, of een systeem zo in te zetten dat het hoog risico wordt.
  - Bron: Verordening (EU) 2024/1689, artikel 25, lid 1, punten a), b) en c) · https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=OJ:L_202401689 · opgehaald 2026-10-06
  - Fragment: In de volgende omstandigheden wordt een distributeur, importeur, gebruiksverantwoordelijke of derde voor de toepassing van deze verordening beschouwd als een aanbieder van een AI-systeem met een hoog risico en is hij onderworpen aan de verplichtingen van de aanbieder uit hoofde van artikel 16: [...] hij zet zijn naam of merk op een AI-systeem met een hoog risico dat reeds in de handel is gebracht of in gebruik is gesteld [...] hij brengt een substantiële wijziging aan in een AI-systeem met een hoog risico dat reeds in de handel is gebracht of reeds in gebruik is gesteld [...] hij wijzigt het beoogde doel van een AI-systeem, met inbegrip van een AI-systeem voor algemene doeleinden, dat niet als een systeem met een hoog risico is geclassificeerd en reeds in de handel is gebracht of in gebruik is gesteld, op zodanige wijze dat het betrokken AI-systeem een AI-systeem met een hoog risico overeenkomstig artikel 6 wordt.
  - Kanttekening: Bevestigd. "Ingrijpend wijzigt" is in de bron "substantiële wijziging"; "zo inzet dat het een hoog-risicotoepassing wordt" is in de bron het wijzigen van het beoogde doel van een systeem dat niet als hoog risico was geclassificeerd (punt c). Lid 1 is niet gewijzigd door Verordening (EU) 2026/1744 (die vervangt alleen lid 2).
- `/ai-beleid/ai-act` · V1.3: Onder de AI Act voor bedrijven speelt die vraag bijvoorbeeld bij een algemene AI-tool die sollicitanten gaat rangschikken.
  - Claim: De vraag of je aanbieder wordt speelt bijvoorbeeld bij een algemene AI-tool die sollicitanten gaat rangschikken.
  - Bron: Verordening (EU) 2024/1689, artikel 25, lid 1, punt c), en bijlage III, punt 4, onder a) · https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=OJ:L_202401689 · opgehaald 2026-10-06
  - Fragment: hij wijzigt het beoogde doel van een AI-systeem, met inbegrip van een AI-systeem voor algemene doeleinden, dat niet als een systeem met een hoog risico is geclassificeerd en reeds in de handel is gebracht of in gebruik is gesteld, op zodanige wijze dat het betrokken AI-systeem een AI-systeem met een hoog risico overeenkomstig artikel 6 wordt. [...] AI-systemen die bedoeld zijn om te worden gebruikt voor het werven of selecteren van natuurlijke personen, met name voor het plaatsen van gerichte vacatures, het analyseren en filteren van sollicitaties, en het beoordelen van kandidaten;
  - Kanttekening: Bevestigd als toepassing van de bron: het voorbeeld zelf staat niet in de verordening, maar volgt uit artikel 25, lid 1, punt c) (ook AI-systemen voor algemene doeleinden) samen met bijlage III, punt 4, onder a).
- `/ai-beleid/ai-act` · V2.1: Minimaal zes maanden bewaart een gebruiksverantwoordelijke van een hoog-risicosysteem de automatisch gegenereerde logs, volgens artikel 26.
  - Claim: Een gebruiksverantwoordelijke van een hoog-risicosysteem bewaart de automatisch gegenereerde logs minimaal zes maanden (artikel 26).
  - Bron: Verordening (EU) 2024/1689, artikel 26, lid 6 · https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=OJ:L_202401689 · opgehaald 2026-10-06
  - Fragment: Gebruiksverantwoordelijken van AI-systemen met een hoog risico bewaren de logs die automatisch worden gegenereerd door dat AI-systeem met een hoog risico voor zover dergelijke logs onder hun controle vallen gedurende een periode die passend is voor het beoogde doel van het AI-systeem met een hoog risico, of ten minste zes maanden, tenzij anders is bepaald in het toepasselijke Unie- of nationaal recht, meer in het bijzonder het Unierecht over de bescherming van persoonsgegevens.
  - Kanttekening: Bevestigd. De bron bevat wel voorbehouden die de zin niet noemt: "voor zover dergelijke logs onder hun controle vallen" en "tenzij anders is bepaald in het toepasselijke Unie- of nationaal recht". Artikel 26 is niet gewijzigd door Verordening (EU) 2026/1744; de verplichting valt onder hoofdstuk III, afdeling 3, en is voor bijlage III-systemen pas van toepassing met ingang van 2 december 2027.
- `/ai-beleid/ai-act` · V2.2: Onder de AI Act voor bedrijven noemt hetzelfde artikel voor die gebruiksverantwoordelijken onder meer ook menselijk toezicht, het melden van incidenten en het vooraf informeren van werknemers en hun vertegenwoordigers bij inzet van zo'n systeem op de werkvloer.
  - Claim: Artikel 26 noemt voor gebruiksverantwoordelijken ook menselijk toezicht, het melden van incidenten en het vooraf informeren van werknemers en hun vertegenwoordigers.
  - Bron: Verordening (EU) 2024/1689, artikel 26, leden 2, 5 en 7 · https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=OJ:L_202401689 · opgehaald 2026-10-06
  - Fragment: Gebruiksverantwoordelijken dragen het menselijk toezicht op aan natuurlijke personen die over de nodige bekwaamheid, opleiding en autoriteit beschikken en de nodige ondersteuning krijgen. [...] Wanneer gebruiksverantwoordelijke een ernstig incident vaststellen, stellen zij ook onmiddellijk eerst de aanbieder hiervan in kennis, en vervolgens de importeur of distributeur en de betreffende markttoezichtautoriteiten van dat incident. [...] Voordat een AI-systeem met een hoog risico op de werkplek in gebruik wordt gesteld of wordt gebruikt, delen gebruiksverantwoordelijken die werkgever zijn werknemersvertegenwoordigers en de betrokken werknemers mee dat zij zullen worden onderworpen aan het gebruik van het AI-systeem met een hoog risico.
- `/markten/automotive` · V1.1: Ja.
  - Claim: Ja op de vraag "Is AI in automotive hoog risico als een dealer er sollicitanten mee selecteert of de kredietwaardigheid van particulieren mee beoordeelt?"
  - Bron: Verordening (EU) 2024/1689, artikel 6, leden 2 en 3, en bijlage III, punt 4, onder a), en punt 5, onder b) · https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=OJ:L_202401689 · opgehaald 2026-10-06
  - Fragment: Naast de in lid 1 bedoelde AI-systemen met een hoog risico worden ook AI-systemen zoals bedoeld in bijlage III als AI-systeem met een hoog risico beschouwd. [...] AI-systemen die bedoeld zijn om te worden gebruikt voor het werven of selecteren van natuurlijke personen, met name voor het plaatsen van gerichte vacatures, het analyseren en filteren van sollicitaties, en het beoordelen van kandidaten; [...] AI-systemen die bedoeld zijn om te worden gebruikt voor het beoordelen van de kredietwaardigheid van natuurlijke personen of voor het vaststellen van hun kredietscore, met uitzondering van AI-systemen die gebruikt worden om financiële fraude op te sporen; [...] In afwijking van lid 2 wordt een in bijlage III bedoeld AI-systeem niet als AI-systeem met een hoog risico beschouwd wanneer het geen significant risico op schade voor de gezondheid, veiligheid of de grondrechten van natuurlijke personen inhoudt, onder meer doordat het de uitkomst van de besluitvorming niet wezenlijk beïnvloedt.
  - Kanttekening: Bevestigd als hoofdregel (artikel 6, lid 2, met bijlage III). Let op bij een kaal "Ja.": artikel 6, lid 3, bevat een afwijking (geen hoog risico als het systeem geen significant risico inhoudt, bijvoorbeeld bij een beperkte procedurele of voorbereidende taak) en bijlage III, punt 5, onder b), zondert fraudeopsporing uit. De vraag is overgenomen uit kaal-3.json; in de invoer stond alleen "Ja.".
- `/markten/automotive` · V1.2: AI voor het selecteren van sollicitanten en voor het beoordelen van de kredietwaardigheid van particulieren staat op de hoog-risicolijst van de AI Act, met eisen die door de Digital Omnibus volgens de Europese Commissie vanaf 2 december 2027 gelden.
  - Claim: AI voor selectie van sollicitanten en voor kredietwaardigheidsbeoordeling van particulieren staat op de hoog-risicolijst; de eisen gelden door de Digital Omnibus volgens de Commissie vanaf 2-12-2027.
  - Bron: Verordening (EU) 2024/1689, bijlage III, punten 4 a) en 5 b); Europese Commissie, pagina "AI Act"; Verordening (EU) 2026/1744 (artikel 113, derde alinea, punt c) · https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=OJ:L_202401689 · opgehaald 2026-10-06
  - Fragment: [Verordening (EU) 2024/1689 (AI Act), EUR-Lex] AI-systemen die bedoeld zijn om te worden gebruikt voor het werven of selecteren van natuurlijke personen, met name voor het plaatsen van gerichte vacatures, het analyseren en filteren van sollicitaties, en het beoordelen van kandidaten; [...] [Verordening (EU) 2024/1689 (AI Act), EUR-Lex] AI-systemen die bedoeld zijn om te worden gebruikt voor het beoordelen van de kredietwaardigheid van natuurlijke personen of voor het vaststellen van hun kredietscore, met uitzondering van AI-systemen die gebruikt worden om financiële fraude op te sporen; [...] [Europese Commissie, "AI Act" (regulatory framework AI)] Rules for systems used in certain high-risk areas — including biometrics, critical infrastructure, education, employment, migration, asylum and border control — will apply from 2 December 2027 [...] [Europese Commissie, "AI Act" (regulatory framework AI)] Starting on 2 December 2027, high-risk AI systems will be subject to strict obligations before they can be put on the market: [...] [Verordening (EU) 2026/1744 (Digitale omnibus inzake AI), EUR-Lex] 2 december 2027 voor wat betreft AI-systemen die op grond van artikel 6, lid 2, en bijlage III als AI-systemen met een hoog risico zijn aangemerkt, en
- `/kennisbank/ai-voorbeelden` · V2.2: AI die sollicitaties filtert of kandidaten beoordeelt, staat in de AI Act op de lijst van hoog-risicotoepassingen; ook AI die de kredietwaardigheid van personen beoordeelt en het beoordelen van leerresultaten of toelating met AI vallen onder de hoog-risicotoepassingen van de AI Act.
  - Claim: AI die sollicitaties filtert of kandidaten beoordeelt, AI die kredietwaardigheid van personen beoordeelt en AI voor het beoordelen van leerresultaten of toelating staan op de hoog-risicolijst van de AI Act.
  - Bron: Verordening (EU) 2024/1689, bijlage III, punt 3, onder a) en b), punt 4, onder a), en punt 5, onder b) · https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=OJ:L_202401689 · opgehaald 2026-10-06
  - Fragment: AI-systemen die bedoeld zijn om te worden gebruikt voor het werven of selecteren van natuurlijke personen, met name voor het plaatsen van gerichte vacatures, het analyseren en filteren van sollicitaties, en het beoordelen van kandidaten; [...] AI-systemen die bedoeld zijn om te worden gebruikt voor het beoordelen van de kredietwaardigheid van natuurlijke personen of voor het vaststellen van hun kredietscore, met uitzondering van AI-systemen die gebruikt worden om financiële fraude op te sporen; [...] AI-systemen die bedoeld zijn om te worden gebruikt voor het evalueren van leerresultaten, ook wanneer die resultaten worden gebruikt voor het sturen van het leerproces van natuurlijke personen in instellingen voor onderwijs en beroepsonderwijs op alle niveaus; [...] AI-systemen die bedoeld zijn om te worden gebruikt voor het bepalen van toegang of toelating tot of het toewijzen van natuurlijke personen aan instellingen voor onderwijs en beroepsonderwijs op alle niveaus;
  - Kanttekening: Bevestigd. Bijlage III is niet gewijzigd door Verordening (EU) 2026/1744. Kanttekening: artikel 6, lid 3, kent een afwijking voor bijlage III-systemen zonder significant risico, en punt 5 b) zondert fraudeopsporing uit.
- `/ai-beleid` · V2.1: Nee, volgens de Europese Commissie is een certificaat niet nodig: een organisatie kan intern bijhouden welke trainingen en andere initiatieven zijn ingezet.
  - Claim: Volgens de Europese Commissie is een certificaat niet nodig; een organisatie kan intern bijhouden welke trainingen en andere initiatieven zijn ingezet.
  - Bron: Europese Commissie, "AI Literacy - Questions & Answers" (laatst bijgewerkt 27 juli 2026) · https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers · opgehaald 2026-10-06
  - Fragment: Do they need specific certificates? There is no need for a certificate. Organisations can keep an internal record of trainings and/or other guiding initiatives.
- `/ai-beleid` · V2.2: De plicht rond AI-geletterdheid geldt sinds 2 februari 2025 en is met de Digital Omnibus, die op 27 juli 2026 in werking trad, aangepast: een organisatie moet maatregelen nemen om AI-geletterdheid te ondersteunen, zonder dat een bepaald niveau per persoon wordt voorgeschreven.
  - Claim: AI-geletterdheidsplicht geldt sinds 2-2-2025; de Digital Omnibus trad op 27-7-2026 in werking en paste de plicht aan: maatregelen nemen om AI-geletterdheid te ondersteunen, zonder voorgeschreven niveau per persoon.
  - Bron: Verordening (EU) 2026/1744, nieuw artikel 4 van Verordening (EU) 2024/1689 en slotartikel 4 (inwerkingtreding); Europese Commissie, "AI Omnibus enters into force" en "AI Literacy - Questions & Answers" · https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=OJ:L_202601744 · opgehaald 2026-10-06
  - Fragment: [Verordening (EU) 2026/1744 (Digitale omnibus inzake AI), EUR-Lex] Aanbieders en gebruiksverantwoordelijken van AI-systemen nemen maatregelen om de ontwikkeling van AI-geletterdheid van hun personeel en andere personen die namens hen AI-systemen exploiteren en gebruiken, te ondersteunen [...] [Verordening (EU) 2026/1744 (Digitale omnibus inzake AI), EUR-Lex] Deze verplichting houdt niet in dat aanbieders of gebruiksverantwoordelijken een bepaald niveau van AI-geletterdheid moeten waarborgen voor personen. [...] [Verordening (EU) 2026/1744 (Digitale omnibus inzake AI), EUR-Lex] Deze verordening treedt in werking op de derde dag na die van de bekendmaking ervan in het Publicatieblad van de Europese Unie [...] [Europese Commissie, "AI Omnibus enters into force" (27 juli 2026)] On 27 July 2026, the AI Omnibus enters into force across the EU [...] [Europese Commissie, "AI Literacy - Questions & Answers"] Article 4 of the AI Act entered into application on 2 February 2025, therefore the obligation to take measures to support the development of AI literacy of their staff already applies.
  - Kanttekening: Bevestigd. Inwerkingtreding 27 juli 2026: bekendgemaakt in het Publicatieblad van 24.7.2026, inwerkingtreding op de derde dag daarna, en de Commissie noemt 27 juli 2026. Kanttekening: de Q&A van de Commissie zegt op een plek onnauwkeurig "entered into force in mid-July 2026".
- `/inzichten/ai-governance-zonder-bureaucratie` · V3.3: De Europese AI-verordening hanteert een eigen classificatie, en het advies is de juridische afdeling of een gespecialiseerde adviseur te laten vaststellen waar toepassingen exact onder vallen.
  - Claim: De Europese AI-verordening hanteert een eigen classificatie; advies om een jurist of gespecialiseerde adviseur te laten vaststellen waar toepassingen onder vallen.
  - Bron: Verordening (EU) 2024/1689, artikel 6 (Classificatieregels voor AI-systemen met een hoog risico); Europese Commissie, pagina "AI Act" · https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=OJ:L_202401689 · opgehaald 2026-10-06
  - Fragment: [Verordening (EU) 2024/1689 (AI Act), EUR-Lex] Classificatieregels voor AI-systemen met een hoog risico [...] [Verordening (EU) 2024/1689 (AI Act), EUR-Lex] Naast de in lid 1 bedoelde AI-systemen met een hoog risico worden ook AI-systemen zoals bedoeld in bijlage III als AI-systeem met een hoog risico beschouwd. [...] [Europese Commissie, "AI Act" (regulatory framework AI)] The AI Act defines 4 levels of risk for AI systems:
  - Kanttekening: Bevestigd voor het feitelijke deel (de verordening heeft eigen classificatieregels). Het tweede deel is een eigen advies van de pagina, geen feit uit een bron, en is dus niet getoetst.
- `/ai-workshop/ai-geletterdheid-training` · A1: Artikel 4 van de AI Act geldt sinds 2 februari 2025 voor organisaties die AI ontwikkelen of gebruiken; sinds de wijziging van juli 2026 is het een inspanningsverplichting om maatregelen te nemen voor de AI-geletterdheid van personeel, zonder voorgeschreven niveau.
  - Claim: Artikel 4 AI Act is sinds 2 februari 2025 van toepassing op aanbieders en gebruiksverantwoordelijken; sinds de wijzigingsverordening van juli 2026 moeten zij maatregelen nemen ter ondersteuning van AI-geletterdheid, zonder voorgeschreven niveau.
  - Bron: Verordening (EU) 2026/1744 (Digitale omnibus inzake AI), PB L 24.7.2026, artikel 1, punt 5 (nieuw artikel 4) en gewijzigd artikel 113, punt a); aanvullend Verordening (EU) 2024/1689, artikel 113, punt a) (https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:32024R1689) en Europese Commissie, AI Literacy Q&A (https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers) · https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=OJ:L_202601744 · opgehaald 2026-10-06
  - Fragment: artikel 4 wordt vervangen door: “Artikel 4 AI-geletterdheid 1. Aanbieders en gebruiksverantwoordelijken van AI-systemen nemen maatregelen om de ontwikkeling van AI-geletterdheid van hun personeel en andere personen die namens hen AI-systemen exploiteren en gebruiken, te ondersteunen [...] Deze verplichting houdt niet in dat aanbieders of gebruiksverantwoordelijken een bepaald niveau van AI-geletterdheid moeten waarborgen voor personen. // de hoofdstukken I en II van toepassing met ingang van 2 februari 2025 // (Commissie, Q&A) How do organisations have to document their actions to comply with article 4 of the AI Act and the best effort provisions in it?
- `/ai-workshop/ai-geletterdheid-training` · A3: Een certificaat is volgens de Europese Commissie niet nodig, terwijl het wel verstandig is intern vast te leggen welke maatregelen zijn genomen en waarom die passen.
  - Claim: Volgens de Europese Commissie is geen certificaat nodig; organisaties kunnen intern bijhouden wat ze doen. (Dat intern vastleggen 'verstandig' is en dat je vastlegt 'waarom die passen', is eigen advies van de pagina; de Commissie zegt alleen dat het kan.)
  - Bron: Europese Commissie, AI Literacy - Questions & Answers (last update 27 July 2026) · https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers · opgehaald 2026-10-06
  - Fragment: There is no need for a certificate. Organisations can keep an internal record of trainings and/or other guiding initiatives.
- `/ai-workshop/ai-geletterdheid-training` · V1.1: Nee.
  - Claim: De verplichting uit artikel 4 is niet vervallen (gelezen als antwoord op de vraag of de verplichting is afgeschaft; de vraag zelf stond niet in de invoer).
  - Bron: Europese Commissie, AI Literacy - Questions & Answers (last update 27 July 2026) · https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers · opgehaald 2026-10-06
  - Fragment: Ensure AI literacy remains an obligation for providers and deployers of AI systems, but no specific – or ‘sufficient’ - level is mandated (Article 4(1));
- `/ai-workshop/ai-geletterdheid-training` · V1.2: De verplichting uit artikel 4 van de AI Act, waar een AI geletterdheid training bij helpt, blijft bestaan voor aanbieders en gebruiksverantwoordelijken van AI-systemen.
  - Claim: De verplichting van artikel 4 blijft bestaan voor aanbieders en gebruiksverantwoordelijken van AI-systemen.
  - Bron: Verordening (EU) 2026/1744, artikel 1, punt 5 (nieuw artikel 4, lid 1); Europese Commissie, AI Literacy Q&A (https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers) · https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=OJ:L_202601744 · opgehaald 2026-10-06
  - Fragment: 1. Aanbieders en gebruiksverantwoordelijken van AI-systemen nemen maatregelen om de ontwikkeling van AI-geletterdheid van hun personeel en andere personen die namens hen AI-systemen exploiteren en gebruiken, te ondersteunen // Ensure AI literacy remains an obligation for providers and deployers of AI systems
- `/ai-workshop/ai-geletterdheid-training` · V1.3: Sinds 27 juli 2026 is het een inspanningsverplichting, en niets doen voldoet niet (stand september 2026).
  - Claim: De wijziging geldt sinds 27 juli 2026 (bekendmaking 24.7.2026, inwerkingtreding op de derde dag daarna); het is een verplichting om maatregelen te nemen, dus niets doen voldoet niet.
  - Bron: Verordening (EU) 2026/1744, PB L 24.7.2026, slotartikel en artikel 1, punt 5; Europese Commissie, AI Omnibus enters into force (https://digital-strategy.ec.europa.eu/en/news/ai-omnibus-enters-force); Europese Commissie, AI Literacy Q&A (https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers) · https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=OJ:L_202601744 · opgehaald 2026-10-06
  - Fragment: Deze verordening treedt in werking op de derde dag na die van de bekendmaking ervan in het Publicatieblad van de Europese Unie . // On 27 July 2026, the AI Omnibus enters into force across the EU // Article 4 of the AI Act entered into application on 2 February 2025, therefore the obligation to take measures to support the development of AI literacy of their staff already applies.
- `/ai-workshop/ai-geletterdheid-training` · V2.1: Nee.
  - Claim: Er is geen voorgeschreven lesprogramma of verplichte trainingsvorm (gelezen als antwoord op de vraag of er een vast programma is; de vraag zelf stond niet in de invoer).
  - Bron: Europese Commissie, AI Literacy - Questions & Answers (last update 27 July 2026) · https://digital-strategy.ec.europa.eu/en/faqs/ai-literacy-questions-answers · opgehaald 2026-10-06
  - Fragment: There is no one size fit all when it comes to AI literacy and no strict requirements or mandatory trainings are imposed.
- `/ai-workshop/ai-geletterdheid-training` · V2.2: Voor een AI geletterdheid training bestaat geen voorgeschreven lesprogramma: volgens de Autoriteit Persoonsgegevens hangt wat nodig is af van de risico's, de rollen en de context.
  - Claim: Geen voorgeschreven lesprogramma; volgens de AP hangt wat nodig is af van risico's, rollen en context.
  - Bron: Autoriteit Persoonsgegevens, Aan de slag met AI-geletterdheid (februari 2025) · https://www.autoriteitpersoonsgegevens.nl/system/files?file=2025-01%2FAan+de+slag+met+AI-geletterdheid.pdf · opgehaald 2026-10-06
  - Fragment: Er is geen one size fits all-set aan maatregelen die zorgt voor een toereikend niveau van AI-geletterdheid. [...] Welke maatregelen organisaties precies moeten nemen om AI-geletterdheid bij hun personeel te bevorderen, staat niet in de wet. [...] De (mate van) risico’s, de betrokken personen en de context van AI-systemen zijn van invloed op het bevorderen van AI-geletterdheid. [...] Bovendien zijn de inhoud en het niveau van de kennis, vaardigheden en begrip afhankelijk van de rol die een specifieke werknemer heeft binnen de organisatie.
- `/kennisbank/ai-specialist-salaris` · A1: Voor een AI specialist salaris publiceren de gecontroleerde salarisbronnen hun cijfers onder de titel AI engineer, niet onder AI specialist; ze verschillen onderling flink en zijn bruikbaar als bandbreedte, niet als vast bedrag.
  - Claim: De drie salarisbronnen die de pagina noemt publiceren onder de titel (Artificial Intelligence / AI) engineer, niet AI specialist; hun cijfers lopen uiteen.
  - Bron: DataJobs, Werken als AI Engineer; Indeed, Salaris van een AI engineer in Nederland (https://nl.indeed.com/career/ai-engineer/salaries); Nationale Beroepengids, Salaris Artificial Intelligence Engineer (https://www.nationaleberoepengids.nl/salaris/artificial-intelligence-engineer) · https://www.datajobs.nl/kennisbank/carrieregids/beroepen-in-data-en-analytics/werken-als-ai-engineer · opgehaald 2026-10-06
  - Fragment: Werken als AI Engineer Bijgewerkt mei 2026 // Salaris van een AI engineer in Nederland // Het gemiddelde salaris van een Artificial Intelligence Engineer in Nederland ligt tussen de € 3.600 en € 7.120 per maand, afhankelijk van ervaring en kennis.
- `/kennisbank/ai-specialist-salaris` · V1.1: Nee.
  - Claim: Gelezen als: er is geen salariscijfer onder de titel AI specialist bij de gecontroleerde bronnen (de vraag zelf stond niet in de invoer).
  - Bron: DataJobs, Werken als AI Engineer; Indeed, Salaris van een AI engineer in Nederland (https://nl.indeed.com/career/ai-engineer/salaries); Nationale Beroepengids (https://www.nationaleberoepengids.nl/salaris/artificial-intelligence-engineer) · https://www.datajobs.nl/kennisbank/carrieregids/beroepen-in-data-en-analytics/werken-als-ai-engineer · opgehaald 2026-10-06
  - Fragment: Werken als AI Engineer // Salaris van een AI engineer in Nederland // Junior Artificial Intelligence Engineer salaris
  - Kanttekening: Oordeel geldt alleen onder de genoemde lezing: de bijbehorende vraag is niet aangeleverd, dus het kale 'Nee.' is niet zelfstandig tegen een bron te toetsen.
- `/kennisbank/ai-specialist-salaris` · V1.2: De gecontroleerde salarisbronnen publiceren hun cijfers onder de titel AI engineer, niet onder AI specialist.
  - Claim: De gecontroleerde bronnen publiceren onder de titel AI engineer, niet AI specialist.
  - Bron: DataJobs, Werken als AI Engineer; Indeed (https://nl.indeed.com/career/ai-engineer/salaries); Nationale Beroepengids (https://www.nationaleberoepengids.nl/salaris/artificial-intelligence-engineer) · https://www.datajobs.nl/kennisbank/carrieregids/beroepen-in-data-en-analytics/werken-als-ai-engineer · opgehaald 2026-10-06
  - Fragment: Werken als AI Engineer // Salaris van een AI engineer in Nederland // Het salaris Artificial Intelligence Engineer is bijgewerkt op 26-11-2024 en geldt vanaf 21 jaar
- `/kennisbank/ai-specialist-salaris` · V1.3: Bij een AI specialist salaris gaat het daarom om bandbreedtes per niveau van twee bronnen, in brutobedragen per maand.
  - Claim: Twee bronnen (Nationale Beroepengids en DataJobs) geven bandbreedtes per niveau in brutobedragen per maand.
  - Bron: Nationale Beroepengids, Salaris Artificial Intelligence Engineer (bijgewerkt 26-11-2024); DataJobs, Werken als AI Engineer (https://www.datajobs.nl/kennisbank/carrieregids/beroepen-in-data-en-analytics/werken-als-ai-engineer) · https://www.nationaleberoepengids.nl/salaris/artificial-intelligence-engineer · opgehaald 2026-10-06
  - Fragment: Het junior salaris (0-2 jaar werkervaring) kan oplopen tot € 4.480 bruto per maand. [...] Het medior niveau salaris (3-5 jaar werkervaring) ligt tussen € 4.480 en € 7.120 bruto per maand. [...] Het salaris van een Senior Artificial Intelligence Engineer ligt tussen € 7.120 en € 8.000 bruto per maand. // (DataJobs) Functieniveau Ervaring Bruto maandsalaris Junior 0–2 jaar €3.000 – €4.000
- `/markten` · V1.1: Vanaf 2 december 2027 gelden sinds de Digital Omnibus de regels voor hoog-risicotoepassingen, en voor AI in producten als medische hulpmiddelen vanaf 2 augustus 2028; die regels zijn uitgesteld.
  - Claim: Door de Digital Omnibus zijn de hoog-risicoregels uitgesteld: bijlage III-systemen vanaf 2 december 2027, AI in producten onder bijlage I (waaronder medische hulpmiddelen) vanaf 2 augustus 2028.
  - Bron: Verordening (EU) 2026/1744, artikel 1 (gewijzigd artikel 113, punt c), en overweging over artikel 113; Verordening (EU) 2024/1689, bijlage I, afdeling A, punt 11 (https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:32024R1689); Europese Commissie, AI Omnibus enters into force (https://digital-strategy.ec.europa.eu/en/news/ai-omnibus-enters-force) · https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=OJ:L_202601744 · opgehaald 2026-10-06
  - Fragment: hoofdstuk III, de afdelingen 1, 2 en 3, met uitzondering van artikel 6, lid 5, van toepassing met ingang van: i) 2 december 2027 voor wat betreft AI-systemen die op grond van artikel 6, lid 2, en bijlage III als AI-systemen met een hoog risico zijn aangemerkt, en ii) 2 augustus 2028 voor wat betreft AI-systemen die op grond van artikel 6, lid 1, en bijlage I als AI-systemen met een hoog risico zijn aangemerkt. // (bijlage I, punt 11) Verordening (EU) 2017/745 van het Europees Parlement en de Raad van 5 april 2017 betreffende medische hulpmiddelen // High-risk AI embedded in physical products (machinery, toys, lifts, etc.) in Annex I : Rules apply starting 2 August 2028
- `/markten` · V1.2: Bij AI per branche legt de AI Act een laag over de sectorregels heen, met verplichtingen die per toepassing verschillen; de uitwerking staat op de pagina over de AI Act [link naar /ai-beleid/ai-act].
  - Claim: De AI Act geldt naast bestaande (sector)wetgeving en legt verplichtingen op die per toepassing/risicogroep verschillen. (De rest van de zin is een interne verwijzing.)
  - Bron: Autoriteit Persoonsgegevens, AI-verordening (themapagina); Verordening (EU) 2024/1689, bijlage I (https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:32024R1689) · https://www.autoriteitpersoonsgegevens.nl/themas/algoritmes-ai/ai-verordening · opgehaald 2026-10-06
  - Fragment: De AI-verordening deelt AI-systemen in aan de hand van risicogroepen. Hoe hoger het risico voor burgers en de samenleving als geheel, hoe strenger de regels. // Bestaande wetten zoals de Algemene verordening gegevensbescherming (AVG) en de Wet politiegegevens (Wpg) bieden al bescherming. // BIJLAGE I Lijst van harmonisatiewetgeving van de Unie
- `/ai-voor-bedrijven/zakelijke-dienstverleners` · V1.1: Ja, bij een verwerking met een hoog risico is een DPIA bij AI voor zakelijke dienstverleners verplicht onder de AVG.
  - Claim: Bij een verwerking die waarschijnlijk een hoog risico inhoudt, is een DPIA (gegevensbeschermingseffectbeoordeling) verplicht onder de AVG.
  - Bron: Verordening (EU) 2016/679 (AVG), artikel 35, lid 1 · https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:32016R0679 · opgehaald 2026-10-06
  - Fragment: Wanneer een soort verwerking, in het bijzonder een verwerking waarbij nieuwe technologieën worden gebruikt, gelet op de aard, de omvang, de context en de doeleinden daarvan waarschijnlijk een hoog risico inhoudt voor de rechten en vrijheden van natuurlijke personen voert de verwerkingsverantwoordelijke vóór de verwerking een beoordeling uit van het effect van de beoogde verwerkingsactiviteiten op de bescherming van persoonsgegevens.

## Externe feiten die niet tegen een primaire bron zijn gelegd

In de blokken staan nog 37 zinnen met een feit over de buitenwereld dat buiten jouw punt 5 viel: kenmerken van tools van derden zonder prijs (28) en overige externe feiten (9), zoals wat een product van een leverancier doet. Ze kloppen met de eigen pagina, maar zijn niet extern gecontroleerd. De blokken waarin ze staan blijven "concept"; per blok staan de zinnen in `docs/rag-concepten.json` onder `externeFeiten`.

## Status per blok

| Pagina | Status | Vervolgvragen | Reden als het concept blijft |
|---|---|---|---|
| `/ai-agents` | concept | 3 | 1 zin voorgelegd (kon niet geschrapt worden) |
| `/ai-agents/laten-maken` | geverifieerd | 3 |  |
| `/ai-agents/voorbeelden` | geverifieerd | 2 |  |
| `/ai-agents/wat-is-een-ai-agent` | concept | 3 | 1 extern feit(en) |
| `/ai-automatisering` | geverifieerd | 3 |  |
| `/ai-automatisering/ai-tools` | concept | 2 | 1 extern feit(en) |
| `/ai-automatisering/ai-workflows` | geverifieerd | 3 |  |
| `/ai-automatisering/bedrijfsprocessen-automatiseren-met-ai` | geverifieerd | 2 |  |
| `/ai-beleid` | concept | 3 | 2 extern feit(en) |
| `/ai-beleid/ai-act` | concept | 3 | 7 extern feit(en) |
| `/ai-consultancy` | geverifieerd | 3 |  |
| `/ai-consultancy/ai-advies` | concept | 3 | 1 extern feit(en) |
| `/ai-consultancy/ai-roadmap` | geverifieerd | 3 |  |
| `/ai-development` | geverifieerd | 3 |  |
| `/ai-development/ai-oplossingen` | geverifieerd | 3 |  |
| `/ai-development/ai-software` | geverifieerd | 3 |  |
| `/ai-development/ai-specialist` | geverifieerd | 3 |  |
| `/ai-implementatie` | geverifieerd | 3 |  |
| `/ai-implementatie/advies` | concept | 3 | 1 extern feit(en) |
| `/ai-implementatie/stappenplan` | geverifieerd | 3 |  |
| `/ai-voor-bedrijven` | concept | 2 | 2 extern feit(en) |
| `/ai-voor-bedrijven/ai-en-bi` | concept | 3 | 2 extern feit(en) |
| `/ai-voor-bedrijven/mkb` | geverifieerd | 2 |  |
| `/ai-voor-bedrijven/zakelijke-dienstverleners` | concept | 3 | 4 extern feit(en) |
| `/ai-workshop` | geverifieerd | 3 |  |
| `/ai-workshop/ai-coaching` | geverifieerd | 3 |  |
| `/ai-workshop/ai-geletterdheid-training` | concept | 2 | 5 extern feit(en) |
| `/ai-workshop/chatgpt-training` | geverifieerd | 3 |  |
| `/ai-workshop/copilot-training` | concept | 3 | 1 extern feit(en) |
| `/diensten` | geverifieerd | 1 |  |
| `/diensten/ai-due-diligence` | geverifieerd | 2 |  |
| `/diensten/ai-strategy-sprint` | geverifieerd | 3 |  |
| `/diensten/executive-briefing` | geverifieerd | 2 |  |
| `/diensten/fractional-ai-lead` | geverifieerd | 2 |  |
| `/diensten/vendor-review` | geverifieerd | 2 |  |
| `/inzichten/ai-adoptie-begint-bij-het-werk` | geverifieerd | 3 |  |
| `/inzichten/ai-agents-wat-ze-wel-en-niet-kunnen` | geverifieerd | 3 |  |
| `/inzichten/ai-governance-zonder-bureaucratie` | concept | 3 | 1 extern feit(en) |
| `/inzichten/ai-vendorselectie-in-acht-stappen` | geverifieerd | 3 |  |
| `/inzichten/build-buy-of-partner` | geverifieerd | 2 |  |
| `/inzichten/de-business-case-voor-ai` | concept | 2 | 1 extern feit(en) |
| `/inzichten/freelance-ai-consultant-vs-agency-vs-big4` | geverifieerd | 3 |  |
| `/inzichten/het-datafundament-onder-ai` | geverifieerd | 3 |  |
| `/inzichten/van-ai-strategie-naar-waarde` | geverifieerd | 3 |  |
| `/inzichten/waarom-ai-pilots-blijven-steken` | geverifieerd | 3 |  |
| `/inzichten/wanneer-heb-je-echt-een-ai-strateeg-nodig` | geverifieerd | 3 |  |
| `/inzichten/welke-ai-use-cases-leveren-resultaat` | geverifieerd | 2 |  |
| `/kennisbank/ai-agents-en-avg` | concept | 2 | 7 extern feit(en) |
| `/kennisbank/ai-specialist-salaris` | concept | 3 | 5 extern feit(en) |
| `/kennisbank/ai-voorbeelden` | concept | 3 | 3 extern feit(en) |
| `/kennisbank/chatgpt-voor-bedrijven` | concept | 2 | 6 extern feit(en) |
| `/kennisbank/claude-voor-bedrijven` | concept | 2 | 8 extern feit(en) |
| `/kennisbank/gemini-voor-bedrijven` | concept | 2 | 5 extern feit(en) |
| `/kennisbank/microsoft-copilot-voor-bedrijven` | concept | 2 | 5 extern feit(en) |
| `/kennisbank/notuleren-met-ai` | concept | 3 | 1 extern feit(en) |
| `/kennisbank/prompt-engineering` | concept | 2 | 2 extern feit(en) |
| `/kennisbank/rpa-vs-ai-automatisering` | geverifieerd | 3 |  |
| `/kennisbank/wat-doet-een-ai-consultant` | geverifieerd | 3 |  |
| `/kennisbank/wat-doet-een-ai-developer` | geverifieerd | 2 |  |
| `/kennisbank/wat-doet-een-bi-specialist` | concept | 3 | 1 extern feit(en) |
| `/markten` | concept | 3 | 1 extern feit(en) |
| `/markten/automotive` | concept | 3 | 3 extern feit(en) |
| `/markten/fintech` | concept | 3 | 3 extern feit(en) |
| `/partnernetwerk` | geverifieerd | 3 |  |
| `/tarieven` | geverifieerd | 0 |  |

---

# Tweede ronde (ter referentie)

Stand: 6 oktober 2026 · branch `rag-blokken-fase-0` · er is niets nieuws geplaatst

Dit is de eindstand na de tweede verificatieronde. Gecontroleerd zijn alle 68 blokken: de drie geplaatste pilotblokken en 65 concepten uit `docs/rag-concepten.json`. De vijf branchepagina's met status "wacht op publicatie" zijn niet geverifieerd.

## Wat er tussen de eerste en de tweede ronde is gebeurd

In de eerste ronde werden 667 van 730 zinnen bevestigd; 91 zinnen waren geschrapt en 19 voorgelegd, met 68 open bevindingen over stelligheid. Op jouw aanwijzing is daarna:

- elke voorgelegde zin omgebouwd tot wat de bron dekt;
- geen vervolgvraag meer vervallen om stelligheid: de eerder geschrapte vervolgvragen zijn teruggezet en herschreven, zodat het antwoord begint in de stelligheid van de bron. Een voorbehoud van de bron ("vaak", "meestal", "minder geschikt") staat letterlijk in de eerste zin; een kaal "Ja." of "Nee." staat er alleen nog waar het blok de bron als onvoorwaardelijk aanmerkt;
- "exclusief btw en reiskosten" als veld `prijsvoorwaarden` in `prijzen.ts` gezet; blokken lezen het daaruit;
- de prijs van de Fractional AI Lead in antwoordalinea's teruggebracht tot de bandbreedte met het aantal dagen per maand;
- de drie pilotblokken herzien en hun nulmeting bijgewerkt.

Daarna zijn alle 68 blokken opnieuw door laag A, B en C gegaan. De cijfers hieronder zijn van die tweede ronde.

## Hoe er is gecontroleerd

**Laag A, script.** `planning/check-rag.mjs` eist dat elk bedrag, elke doorlooptijd, elk aantal en elke termijn letterlijk voorkomt in `src/data/prijzen.ts` of in de tekst van de eigen pagina. De enige normalisatie: hoofdletters, witruimte, "€ 7.000" naast "€7.000", en het scheidingsteken in een bereik (2-3, 2–3 en "2 tot 3" gelden als gelijk). Een bedrag, percentage of jaartal moet zelf voorkomen; elk ander getal samen met het inhoudswoord ervoor of erna. Het woord "één" telt niet mee. Nieuw in deze ronde: het voorbehoud dat een blok bij een vervolgvraag opgeeft moet letterlijk op de eigen pagina staan en in de eerste zin van het antwoord terugkomen, en een kaal "Ja." of "Nee." is een fout tenzij het blok de bron als onvoorwaardelijk aanmerkt. Alle 68 blokken slagen.

**Laag B, onafhankelijke verificatie.** Zeven subagents die de teksten niet hebben geschreven of herzien, kregen per blok alleen de zinnen zoals ze op de site komen, de bronbestanden van die pagina en `prijzen.ts` met de uitgerekende waarden. Per zin leverden ze de claim, het bronbestand met regelnummer, het letterlijke bronfragment en een oordeel. Bij elke eerste zin van een vervolgantwoord kregen ze te zien of het blok de bron als onvoorwaardelijk aanmerkt of welk voorbehoud het opgeeft, met de opdracht dat te toetsen. Per zin gaven ze ook aan of er een feit van buiten de eigen dienstverlening in staat.

**Controle op de bronfragmenten, script.** Elk opgegeven fragment is door `planning/verificatie-verwerk.mjs` opgezocht in het genoemde bestand. Een fragment dat daar niet letterlijk staat maakt het oordeel alsnog "niet gevonden".

**Laag C, tweede lezing.** Een andere subagent per batch trok de oordelen "bevestigd" na: alle zinnen met een getal en een derde van de rest. Meer dan één afwijking in een batch betekent dat de hele batch opnieuw door laag B gaat; één afwijking maakt die zin alsnog niet bevestigd.

**Na deze ronde is niets meer geschrapt of herschreven.** Een zin die niet bevestigd is, staat hieronder voorgelegd en het blok blijft "concept".

**Status in `docs/rag-concepten.json`.** "geverifieerd" betekent: elke zin bevestigd, geen open bevinding en geen extern feit. Een blok met een feit van buiten de eigen dienstverlening (wetgeving, prijzen van tools, salarissen, marktcijfers) blijft "concept" en staat in een aparte lijst, ook als elke zin klopt met de eigen pagina. Jij zet goedgekeurde blokken op "akkoord".

**Grenzen.** De bron is steeds de eigen pagina en `prijzen.ts`. Of de pagina zelf klopt met de werkelijkheid is niet gecontroleerd; daarom de aparte lijst met externe feiten. Laag B en C zijn uitgevoerd door taalmodellen; laag A en de fragmentcontrole zijn deterministisch. De markering "onvoorwaardelijk" is een oordeel van de schrijver dat laag B en C hebben getoetst, niet iets wat het script kan bewijzen.

## Totaal

| Blokken | Zinnen | Bevestigd | Geschrapt | Voorgelegd | Geverifieerd | Nog concept |
|---|---|---|---|---|---|---|
| 68 | 654 | 648 | 0 | 6 | 37 | 31 |

## Laag C per batch

| Batch | Ronde laag B | Nagetrokken | Afwijkend |
|---|---|---|---|
| 1 | 1 | 52 | 1 |
| 2 | 1 | 49 | 0 |
| 3 | 1 | 47 | 0 |
| 4 | 1 | 49 | 0 |
| 5 | 1 | 53 | 0 |
| 6 | 1 | 44 | 1 |
| 7 | 1 | 46 | 0 |

## Per blok

| Pagina | Zinnen | Bevestigd | Geschrapt | Voorgelegd | Bevindingen | Externe feiten | Status |
|---|---|---|---|---|---|---|---|
| `/ai-agents` | 11 | 10 | 0 | 1 | 0 | 0 | concept |
| `/ai-agents/laten-maken` | 10 | 10 | 0 | 0 | 0 | 0 | geverifieerd |
| `/ai-agents/voorbeelden` | 11 | 11 | 0 | 0 | 0 | 0 | geverifieerd |
| `/ai-agents/wat-is-een-ai-agent` | 9 | 9 | 0 | 0 | 0 | 1 | concept |
| `/ai-automatisering` | 11 | 11 | 0 | 0 | 0 | 0 | geverifieerd |
| `/ai-automatisering/ai-tools` | 8 | 8 | 0 | 0 | 0 | 1 | concept |
| `/ai-automatisering/ai-workflows` | 10 | 10 | 0 | 0 | 0 | 0 | geverifieerd |
| `/ai-automatisering/bedrijfsprocessen-automatiseren-met-ai` | 8 | 8 | 0 | 0 | 0 | 0 | geverifieerd |
| `/ai-beleid` | 13 | 13 | 0 | 0 | 1 | 2 | concept |
| `/ai-beleid/ai-act` | 11 | 11 | 0 | 0 | 0 | 8 | concept |
| `/ai-consultancy` | 11 | 11 | 0 | 0 | 0 | 0 | geverifieerd |
| `/ai-consultancy/ai-advies` | 15 | 15 | 0 | 0 | 1 | 1 | concept |
| `/ai-consultancy/ai-consultant-inhuren` (geplaatst) | 7 | 7 | 0 | 0 | 0 | 0 | geverifieerd |
| `/ai-consultancy/ai-roadmap` | 11 | 11 | 0 | 0 | 0 | 0 | geverifieerd |
| `/ai-consultancy/ai-strategie` (geplaatst) | 8 | 8 | 0 | 0 | 0 | 0 | geverifieerd |
| `/ai-development` | 12 | 12 | 0 | 0 | 0 | 0 | geverifieerd |
| `/ai-development/ai-oplossingen` | 11 | 11 | 0 | 0 | 0 | 0 | geverifieerd |
| `/ai-development/ai-software` | 9 | 9 | 0 | 0 | 0 | 0 | geverifieerd |
| `/ai-development/ai-specialist` | 9 | 9 | 0 | 0 | 0 | 0 | geverifieerd |
| `/ai-implementatie` | 14 | 14 | 0 | 0 | 0 | 0 | geverifieerd |
| `/ai-implementatie/advies` | 11 | 11 | 0 | 0 | 1 | 1 | concept |
| `/ai-implementatie/stappenplan` | 12 | 12 | 0 | 0 | 0 | 0 | geverifieerd |
| `/ai-voor-bedrijven` | 10 | 10 | 0 | 0 | 0 | 4 | concept |
| `/ai-voor-bedrijven/ai-en-bi` | 9 | 9 | 0 | 0 | 0 | 2 | concept |
| `/ai-voor-bedrijven/mkb` | 12 | 12 | 0 | 0 | 0 | 3 | concept |
| `/ai-voor-bedrijven/zakelijke-dienstverleners` | 9 | 9 | 0 | 0 | 0 | 4 | concept |
| `/ai-workshop` | 10 | 10 | 0 | 0 | 0 | 0 | geverifieerd |
| `/ai-workshop/ai-coaching` | 9 | 9 | 0 | 0 | 0 | 0 | geverifieerd |
| `/ai-workshop/ai-geletterdheid-training` | 8 | 8 | 0 | 0 | 0 | 7 | concept |
| `/ai-workshop/chatgpt-training` | 8 | 8 | 0 | 0 | 0 | 0 | geverifieerd |
| `/ai-workshop/copilot-training` | 11 | 11 | 0 | 0 | 0 | 1 | concept |
| `/diensten` | 7 | 7 | 0 | 0 | 0 | 0 | geverifieerd |
| `/diensten/ai-due-diligence` | 6 | 6 | 0 | 0 | 0 | 0 | geverifieerd |
| `/diensten/ai-readiness-assessment` (geplaatst) | 9 | 9 | 0 | 0 | 0 | 0 | geverifieerd |
| `/diensten/ai-strategy-sprint` | 9 | 9 | 0 | 0 | 0 | 0 | geverifieerd |
| `/diensten/executive-briefing` | 6 | 6 | 0 | 0 | 0 | 0 | geverifieerd |
| `/diensten/fractional-ai-lead` | 7 | 7 | 0 | 0 | 0 | 0 | geverifieerd |
| `/diensten/vendor-review` | 5 | 5 | 0 | 0 | 0 | 0 | geverifieerd |
| `/inzichten/ai-adoptie-begint-bij-het-werk` | 12 | 12 | 0 | 0 | 0 | 1 | concept |
| `/inzichten/ai-agents-wat-ze-wel-en-niet-kunnen` | 9 | 9 | 0 | 0 | 0 | 0 | geverifieerd |
| `/inzichten/ai-governance-zonder-bureaucratie` | 10 | 9 | 0 | 1 | 0 | 1 | concept |
| `/inzichten/ai-vendorselectie-in-acht-stappen` | 11 | 11 | 0 | 0 | 0 | 0 | geverifieerd |
| `/inzichten/build-buy-of-partner` | 9 | 9 | 0 | 0 | 0 | 2 | concept |
| `/inzichten/de-business-case-voor-ai` | 11 | 10 | 0 | 1 | 0 | 2 | concept |
| `/inzichten/freelance-ai-consultant-vs-agency-vs-big4` | 10 | 10 | 0 | 0 | 0 | 0 | geverifieerd |
| `/inzichten/het-datafundament-onder-ai` | 10 | 10 | 0 | 0 | 0 | 0 | geverifieerd |
| `/inzichten/van-ai-strategie-naar-waarde` | 11 | 11 | 0 | 0 | 0 | 0 | geverifieerd |
| `/inzichten/waarom-ai-pilots-blijven-steken` | 10 | 10 | 0 | 0 | 0 | 0 | geverifieerd |
| `/inzichten/wanneer-heb-je-echt-een-ai-strateeg-nodig` | 10 | 10 | 0 | 0 | 0 | 0 | geverifieerd |
| `/inzichten/welke-ai-use-cases-leveren-resultaat` | 10 | 10 | 0 | 0 | 0 | 1 | concept |
| `/kennisbank/ai-agents-en-avg` | 10 | 9 | 0 | 1 | 0 | 9 | concept |
| `/kennisbank/ai-specialist-salaris` | 10 | 10 | 0 | 0 | 0 | 6 | concept |
| `/kennisbank/ai-voorbeelden` | 8 | 8 | 0 | 0 | 0 | 3 | concept |
| `/kennisbank/chatgpt-voor-bedrijven` | 11 | 11 | 0 | 0 | 0 | 10 | concept |
| `/kennisbank/claude-voor-bedrijven` | 12 | 12 | 0 | 0 | 0 | 11 | concept |
| `/kennisbank/gemini-voor-bedrijven` | 9 | 8 | 0 | 1 | 0 | 8 | concept |
| `/kennisbank/microsoft-copilot-voor-bedrijven` | 8 | 7 | 0 | 1 | 0 | 8 | concept |
| `/kennisbank/notuleren-met-ai` | 9 | 9 | 0 | 0 | 0 | 1 | concept |
| `/kennisbank/prompt-engineering` | 7 | 7 | 0 | 0 | 0 | 2 | concept |
| `/kennisbank/rpa-vs-ai-automatisering` | 11 | 11 | 0 | 0 | 0 | 0 | geverifieerd |
| `/kennisbank/wat-doet-een-ai-consultant` | 9 | 9 | 0 | 0 | 0 | 0 | geverifieerd |
| `/kennisbank/wat-doet-een-ai-developer` | 7 | 7 | 0 | 0 | 0 | 0 | geverifieerd |
| `/kennisbank/wat-doet-een-bi-specialist` | 10 | 10 | 0 | 0 | 0 | 1 | concept |
| `/markten` | 8 | 8 | 0 | 0 | 0 | 2 | concept |
| `/markten/automotive` | 10 | 10 | 0 | 0 | 0 | 3 | concept |
| `/markten/fintech` | 11 | 11 | 0 | 0 | 0 | 4 | concept |
| `/partnernetwerk` | 11 | 11 | 0 | 0 | 0 | 0 | geverifieerd |
| `/tarieven` | 3 | 3 | 0 | 0 | 0 | 0 | geverifieerd |

## Voorgelegde zinnen (6)

Deze zinnen zijn niet bevestigd en staan nog in het blok. Het blok blijft "concept" tot jij per zin beslist: schrappen, of de bron aanwijzen.

- `/kennisbank/ai-agents-en-avg` · V2.1 (antwoord op vervolgvraag "Binnen hoeveel uur wordt een datalek gemeld onder de AVG bij AI agents?") · **niet gevonden**
  - Zin: 72 uur is onder de AVG bij AI agents de termijn waarbinnen een datalek zo mogelijk bij de Autoriteit Persoonsgegevens wordt gemeld, zonder onredelijke vertraging.
  - Reden: tweede lezing (laag C) wijkt af: De bron beperkt de meldplicht met 'tenzij het risico voor betrokkenen onwaarschijnlijk is'; de zin laat die voorwaarde weg en is daardoor stelliger dan de bron.
- `/kennisbank/microsoft-copilot-voor-bedrijven` · A2 (antwoordalinea) · **niet gevonden**
  - Zin: Microsoft onderscheidt grofweg twee niveaus (stand september 2026): Copilot Chat, volgens Microsoft zonder extra kosten beschikbaar bij een geschikt Microsoft 365-abonnement, en de betaalde licentie, waarmee Copilot kan redeneren over de volle breedte van de werkdata.
  - Reden: De bron beperkt 'de volle breedte van je werkdata' met de voorwaarde 'voor zover de gebruiker daar toegang toe heeft'; die voorwaarde ontbreekt in deze zin, waardoor hij breder is dan de bron (de rest van de zin is gedekt, en A3 noemt de toegangsrechten wel).
- `/inzichten/ai-governance-zonder-bureaucratie` · A1 (antwoordalinea) · **niet gevonden**
  - Zin: AI-governance blijft licht als toepassingen eerst naar risico worden ingedeeld in laag, midden en hoog, zodat alleen de hoogste categorie het zwaarste regime krijgt.
  - Reden: De indeling in laag, midden en hoog en 'zware governance alleen waar het risico dat rechtvaardigt' staan in de bron, maar de stellige voorwaarde 'blijft licht als' staat er niet: de bron zegt alleen dat één regime voor alles lage-risicotoepassingen onnodig vertraagt en noemt de vier mechanismen 'licht'.
- `/ai-agents` · A2 (antwoordalinea) · **niet gevonden**
  - Zin: Dave Willemstein bouwt zelf geen agents en adviseert onafhankelijk over de keuze van de taak, de specificatie en het aansturen van een bouwpartij.
  - Reden: Geen agents bouwen en adviseren over kiezen, specificeren en aansturen staat in de bron, maar dat de adviseur daarover 'onafhankelijk' adviseert staat op deze pagina nergens over zijn eigen rol; 'onafhankelijk' komt alleen voor als algemene omschrijving (regel 28) en bij het vergelijken van offertes via de Vendor Review (regel 149).
- `/inzichten/de-business-case-voor-ai` · A3 (antwoordalinea) · **niet gevonden**
  - Zin: Bij goedkeuring ligt vast welke cijfers na twaalf maanden worden gerapporteerd, wat de nulmeting is en bij welke uitkomst wordt bijgestuurd of gestopt.
  - Reden: tweede lezing (laag C) wijkt af: De bron formuleert dit als advies ('Leg bij goedkeuring vast:') en noemt het 'het onderdeel dat het vaakst ontbreekt'; de zin stelt als feit dat het bij goedkeuring vastligt, wat stelliger is dan de bron.
- `/kennisbank/gemini-voor-bedrijven` · V2.2 (antwoord op vervolgvraag "Werkt Gemini voor bedrijven in Docs en Sheets met de editie Business Starter?") · **niet gevonden**
  - Zin: In Business Standard zit Gemini in onder andere Gmail, Docs en Meet.
  - Reden: De inhoud staat in de tabel, maar de bron geeft dit alleen als opgave van Google (kolom 'Gemini volgens Google', stand september 2026); de zin stelt het zonder dat voorbehoud als feit en is daarmee stelliger dan de bron.

## Geschrapte zinnen (5)

Deze zinnen zijn uit het concept gehaald en staan niet meer in `docs/rag-concepten.json`.

- `/kennisbank/prompt-engineering`: Uit hoeveel bouwstenen bestaat een prompt bij prompt engineering? 5 bouwstenen: rol, taak, context, voorbeelden en vorm. Bij prompt engineering heeft niet elke prompt ze alle vijf nodig, maar hoe belangrijker de uitkomst is, hoe meer bouwstenen worden ingevuld.
  - Reden: laag A: het aantal in het antwoord is zelf geteld en staat niet letterlijk op de pagina
- `/kennisbank/wat-doet-een-ai-developer`: Hoeveel zaken moeten vooraf geregeld zijn voor een goede samenwerking met een AI developer? 3 zaken helpen bij de samenwerking met een AI developer: een specificatie met meetbare eisen, een testset op eigen data die van de opdrachtgever blijft, en afspraken over beheer en overdracht.
  - Reden: laag A: het aantal in het antwoord is zelf geteld en staat niet letterlijk op de pagina
- `/ai-automatisering/bedrijfsprocessen-automatiseren-met-ai`: Op hoeveel punten wordt een kandidaat-proces gescoord bij bedrijfsprocessen automatiseren met AI? 5 punten, elk met een score van 1 tot 5: volume, variatie, data, controle en eigenaar. Bij bedrijfsprocessen automatiseren met AI vallen processen af die laag scoren op controle of eigenaar, hoe aantrekkelijk ze ook klinken.
  - Reden: laag A: het aantal in het antwoord is zelf geteld en staat niet letterlijk op de pagina
- `/ai-automatisering/ai-tools`: Hoeveel criteria tellen mee bij het kiezen tussen de beste AI tools? 6 criteria bepalen de keuze tussen de beste AI tools: taak, bestaande software, data en privacy, beheer, kosten en exit. Voor zakelijke dienstverleners met vertrouwelijke klantinformatie wegen training en opslag, bewaartermijnen en logs, en beroepsregels extra zwaar.
  - Reden: laag A: het aantal in het antwoord is zelf geteld en staat niet letterlijk op de pagina
- `/ai-workshop/ai-geletterdheid-training`: Uit hoeveel onderdelen bestaat een AI geletterdheid training? 5 onderdelen in het voorbeeldprogramma: hoe AI werkt, de systemen van de organisatie, risico's en regels, afspraken en oefenen. De inhoud van een AI geletterdheid training wordt per organisatie afgestemd.
  - Reden: laag A: het aantal in het antwoord is zelf geteld en staat niet letterlijk op de pagina

## Blokken met een extern feit (30 blokken, 110 zinnen)

Feiten van buiten de eigen dienstverlening: wetgeving, prijzen van tools, salarissen en marktcijfers. De zin klopt met de eigen pagina, maar of de pagina zelf nog klopt met de werkelijkheid is niet gecontroleerd. Deze blokken blijven "concept".

- `/kennisbank/ai-voorbeelden` · V1.2 · overig extern: Bij de drie voorbeelden uit het dagelijks leven, over spamfilters, reistijd voorspellen en vertalen, heeft de leverancier zelf beschreven hoe AI wordt ingezet.
- `/kennisbank/ai-voorbeelden` · V2.1 · wetgeving: Zodra een toepassing zelf een besluit over een persoon neemt of een professioneel oordeel vervangt, gelden bij AI voorbeelden zwaardere eisen vanuit de AVG, de AI Act en de eigen sectorregels.
- `/kennisbank/ai-voorbeelden` · V2.2 · wetgeving: AI die sollicitaties filtert of kandidaten beoordeelt, staat in de AI Act op de lijst van hoog-risicotoepassingen; ook AI die de kredietwaardigheid van personen beoordeelt en het beoordelen van leerresultaten of toelating met AI vallen onder de hoog-risicotoepassingen van de AI Act.
- `/kennisbank/ai-agents-en-avg` · A1 · wetgeving: De AVG bij AI agents geldt volledig: de organisatie die de agent inzet, blijft verwerkingsverantwoordelijke, ook als de agent zelf gegevens opzoekt, vastlegt of verstuurt.
- `/kennisbank/ai-agents-en-avg` · A2 · wetgeving: De basis bestaat uit een vastgelegd doel met grondslag, toegang die per bron is afgebakend, een verwerkersovereenkomst met de leverancier, logging van elke stap en vaak een DPIA.
- `/kennisbank/ai-agents-en-avg` · A3 · wetgeving: Neemt de agent besluiten over mensen, dan komen de regels over geautomatiseerde besluitvorming erbij, en daarnaast kan de AI Act gelden.
- `/kennisbank/ai-agents-en-avg` · V1.1 · wetgeving: Nee.
- `/kennisbank/ai-agents-en-avg` · V1.2 · wetgeving: De AVG bij AI agents bestaat uit de bestaande regels, die direct van toepassing zijn; een apart hoofdstuk voor AI agents heeft de AVG niet.
- `/kennisbank/ai-agents-en-avg` · V2.1 · wetgeving: 72 uur is onder de AVG bij AI agents de termijn waarbinnen een datalek zo mogelijk bij de Autoriteit Persoonsgegevens wordt gemeld, zonder onredelijke vertraging.
- `/kennisbank/ai-agents-en-avg` · V2.2 · wetgeving: De melding is niet nodig als het risico voor betrokkenen onwaarschijnlijk is.
- `/kennisbank/ai-agents-en-avg` · V3.1 · wetgeving: Voor een agent kunnen de AVG en de AI Act tegelijk gelden: de AVG bij AI agents gaat over persoonsgegevens, de AI Act over het AI-systeem zelf.
- `/kennisbank/ai-agents-en-avg` · V3.2 · wetgeving: Voor agents die onder bijlage III vallen, bijvoorbeeld doordat ze sollicitaties filteren of kandidaten beoordelen, gelden de hoog-risicoverplichtingen door de Digital Omnibus vanaf 2 december 2027 in plaats van 2 augustus 2026.
- `/markten/automotive` · V1.1 · wetgeving: Ja.
- `/markten/automotive` · V1.2 · wetgeving: AI voor het selecteren van sollicitanten en voor het beoordelen van de kredietwaardigheid van particulieren staat op de hoog-risicolijst van de AI Act, met eisen die door de Digital Omnibus volgens de Europese Commissie vanaf 2 december 2027 gelden.
- `/markten/automotive` · V1.3 · wetgeving: Een chatbot of een tekstgenerator is bij AI in automotive geen hoog-risicotoepassing.
- `/kennisbank/microsoft-copilot-voor-bedrijven` · A1 · toolprijs: Microsoft Copilot is de AI-assistent van Microsoft voor werk, die taalmodellen koppelt aan apps zoals Outlook, Teams, Word, Excel en PowerPoint en aan de mail, agenda, chats, vergaderingen en documenten daarin.
- `/kennisbank/microsoft-copilot-voor-bedrijven` · A2 · toolprijs: Microsoft onderscheidt grofweg twee niveaus (stand september 2026): Copilot Chat, volgens Microsoft zonder extra kosten beschikbaar bij een geschikt Microsoft 365-abonnement, en de betaalde licentie, waarmee Copilot kan redeneren over de volle breedte van de werkdata.
- `/kennisbank/microsoft-copilot-voor-bedrijven` · A3 · toolprijs: Omdat Copilot de bestaande toegangsrechten volgt, komen te ruim gedeelde bestanden in antwoorden naar boven en hoort het opschonen van die rechten bij de voorbereiding.
- `/kennisbank/microsoft-copilot-voor-bedrijven` · V1.1 · toolprijs: Copilot Business kost € 18,20 en Microsoft Copilot voor enterprise € 26,00 per gebruiker per maand, bij jaarlijkse betaling en exclusief btw (stand september 2026).
- `/kennisbank/microsoft-copilot-voor-bedrijven` · V1.2 · toolprijs: Wie Copilot Business van 1 juli tot en met 31 december 2026 afsluit, betaalt het eerste jaar tijdelijk € 15,60.
- `/kennisbank/microsoft-copilot-voor-bedrijven` · V2.1 · toolprijs: Nee, volgens wat Microsoft toezegt in de privacydocumentatie van Microsoft Copilot (stand september 2026): prompts, antwoorden en gegevens die via Microsoft Graph worden opgehaald, worden niet gebruikt om de basismodellen te trainen.
- `/kennisbank/microsoft-copilot-voor-bedrijven` · V3.1 · toolprijs: Copilot Chat is vooral een chat die antwoordt op basis van het web en van wat de gebruiker zelf aanlevert, en kan in Outlook ook met mailbox, agenda en vergaderingen werken.
- `/kennisbank/microsoft-copilot-voor-bedrijven` · V3.2 · toolprijs: Pas met de betaalde licentie werkt Microsoft Copilot breed met de eigen bedrijfsinformatie: Copilot kan dan redeneren over de volle breedte van de werkdata, zoals mail, chats, vergaderingen, documenten en sites, voor zover de gebruiker daar toegang toe heeft.
- `/inzichten/ai-adoptie-begint-bij-het-werk` · A1 · marktcijfer: Bij AI-adoptie zien organisaties die AI-tools uitrollen doorgaans tien tot vijftien procent wekelijks gebruik, omdat een algemene AI-assistent geen enkel startpunt biedt en medewerkers onzeker zijn over wat mag.
- `/ai-implementatie/advies` · V2.3 · wetgeving: Een DPIA is onder de AVG verplicht als de toepassing persoonsgegevens verwerkt met een grote kans op een hoog privacyrisico, en die vraag hoort aan het begin, niet vlak voor livegang.
- `/kennisbank/notuleren-met-ai` · A3 · wetgeving: Omdat een vergadering opnemen een verwerking van persoonsgegevens is, luidt het advies deelnemers vooraf te informeren en vast te leggen wat er wordt bewaard.
- `/ai-voor-bedrijven` · V1.1 · wetgeving: Ja.
- `/ai-voor-bedrijven` · V1.2 · wetgeving: Via de Digital Omnibus on AI, die op 27 juli 2026 in werking trad, gelden de regels voor de hoog-risicogebieden uit bijlage III, zoals werving en kredietverlening, vanaf 2 december 2027 en voor AI in gereguleerde producten vanaf 2 augustus 2028.
- `/ai-voor-bedrijven` · V3.1 · marktcijfer: AI voor bedrijven werd in 2025 het vaakst gebruikt voor marketing of verkoop (35 procent) en voor administratie of bestuurstaken (32 procent), volgens CBS-cijfers over AI-gebruikende bedrijven.
- `/ai-voor-bedrijven` · V3.2 · marktcijfer: Onder bedrijven die AI overwogen maar niet invoerden, was gebrek aan ervaring de meest genoemde reden.
- `/ai-beleid` · V2.1 · wetgeving: Nee, volgens de Europese Commissie is een certificaat niet nodig: een organisatie kan intern bijhouden welke trainingen en andere initiatieven zijn ingezet.
- `/ai-beleid` · V2.2 · wetgeving: De plicht rond AI-geletterdheid geldt sinds 2 februari 2025 en is met de Digital Omnibus, die op 27 juli 2026 in werking trad, aangepast: een organisatie moet maatregelen nemen om AI-geletterdheid te ondersteunen, zonder dat een bepaald niveau per persoon wordt voorgeschreven.
- `/kennisbank/prompt-engineering` · V2.1 · overig extern: Ultieme prompts helpen soms, maar de leveranciers van de assistenten leggen bij prompt engineering zelf de nadruk op iets saaiers: helder formuleren, context geven, voorbeelden tonen en testen.
- `/kennisbank/prompt-engineering` · V2.2 · overig extern: Anthropic benadrukt dat eerst moet vaststaan wat een goed resultaat is en hoe dat wordt getoetst, voordat aan de prompt wordt geschaafd.
- `/ai-voor-bedrijven/mkb` · V2.1 · marktcijfer: Ja.
- `/ai-voor-bedrijven/mkb` · V2.2 · marktcijfer: Het gebruik van AI voor het mkb blijft achter bij grotere bedrijven: in 2025 gebruikte 29,8 procent van de bedrijven met 10 tot en met 249 werkzame personen AI-technologie, tegen 66,2 procent van het grootbedrijf, volgens het CBS.
- `/ai-voor-bedrijven/mkb` · V2.3 · marktcijfer: Bij microbedrijven met 2 tot 9 werkzame personen was dat 13,8 procent, een aandeel dat sinds 2023 wel is verdubbeld.
- `/ai-beleid/ai-act` · A1 · wetgeving: De AI Act voor bedrijven hangt af van het volgende: welke AI een organisatie gebruikt of maakt, in welke van de vier risicocategorieën die valt en of de organisatie aanbieder of gebruiksverantwoordelijke is.
- `/ai-beleid/ai-act` · A2 · wetgeving: De verboden praktijken en de plicht rond AI-geletterdheid gelden sinds 2 februari 2025 en de transparantieverplichtingen sinds 2 augustus 2026; het negende verbod geldt pas vanaf 2 december 2026 en voor de machineleesbare markering van content uit systemen die al vóór 2 augustus 2026 op de markt waren geldt een overgangstermijn tot 2 december 2026.
- `/ai-beleid/ai-act` · A3 · wetgeving: De hoog-risicoregels gelden sinds de Digital Omnibus vanaf 2 december 2027 voor toepassingen uit bijlage III en vanaf 2 augustus 2028 voor AI in producten uit bijlage I (stand 23 september 2026).
- `/ai-beleid/ai-act` · V1.1 · wetgeving: Ja.
- `/ai-beleid/ai-act` · V1.2 · wetgeving: Volgens artikel 25 gebeurt dat bij een hoog-risicosysteem wanneer een organisatie er de eigen naam of het eigen merk op zet, het ingrijpend wijzigt of een systeem zo inzet dat het een hoog-risicotoepassing wordt.
- `/ai-beleid/ai-act` · V1.3 · wetgeving: Onder de AI Act voor bedrijven speelt die vraag bijvoorbeeld bij een algemene AI-tool die sollicitanten gaat rangschikken.
- `/ai-beleid/ai-act` · V2.1 · wetgeving: Minimaal zes maanden bewaart een gebruiksverantwoordelijke van een hoog-risicosysteem de automatisch gegenereerde logs, volgens artikel 26.
- `/ai-beleid/ai-act` · V2.2 · wetgeving: Onder de AI Act voor bedrijven noemt hetzelfde artikel voor die gebruiksverantwoordelijken onder meer ook menselijk toezicht, het melden van incidenten en het vooraf informeren van werknemers en hun vertegenwoordigers bij inzet van zo'n systeem op de werkvloer.
- `/inzichten/ai-governance-zonder-bureaucratie` · V3.3 · wetgeving: De Europese AI-verordening hanteert een eigen classificatie, en het advies is de juridische afdeling of een gespecialiseerde adviseur te laten vaststellen waar toepassingen exact onder vallen.
- `/ai-voor-bedrijven/zakelijke-dienstverleners` · V1.1 · wetgeving: Ja, bij een verwerking met een hoog risico is een DPIA bij AI voor zakelijke dienstverleners verplicht onder de AVG.
- `/ai-voor-bedrijven/zakelijke-dienstverleners` · V2.1 · overig extern: Voor AI voor zakelijke dienstverleners in de accountancy publiceerden de beroepsorganisaties NBA en NOREA in juni 2026 'Leidraad 2: AI Toegepast', en de Nederlandse orde van advocaten heeft aanbevelingen voor AI in de advocatuur gepubliceerd.
- `/ai-voor-bedrijven/zakelijke-dienstverleners` · V2.2 · overig extern: De kern van de leidraad is dat validatie en menselijk oordeel de basis blijven.
- `/ai-voor-bedrijven/zakelijke-dienstverleners` · V2.3 · overig extern: In de advocatuur blijft de advocaat altijd zelf verantwoordelijk voor het uiteindelijke advies.
- `/ai-workshop/copilot-training` · A2 · overig extern: Deelnemers leren goede opdrachten geven, kiezen tussen Copilot in een app en Copilot Chat, uitkomsten controleren en herkennen welke taken en gegevens niet bij Copilot horen.
- `/ai-agents/wat-is-een-ai-agent` · V1.1 · overig extern: De meeste wel: de meeste AI agents van nu draaien op een groot taalmodel, dat de opdracht begrijpt en over de volgende stap redeneert.
- `/ai-voor-bedrijven/ai-en-bi` · V1.1 · toolprijs: Nee, volgens Microsoft Learn niet (stand september 2026): Copilot in Power BI, een voorbeeld van AI en BI, vraagt een betaalde Fabric- of Premium-capaciteit en een Pro-licentie alleen is niet genoeg.
- `/ai-voor-bedrijven/ai-en-bi` · V1.2 · toolprijs: Zonder voorbereiding van het datamodel kan Copilot volgens Microsoft bovendien de data verkeerd interpreteren.
- `/kennisbank/ai-specialist-salaris` · A1 · salaris: Voor een AI specialist salaris publiceren de gecontroleerde salarisbronnen hun cijfers onder de titel AI engineer, niet onder AI specialist; ze verschillen onderling flink en zijn bruikbaar als bandbreedte, niet als vast bedrag.
- `/kennisbank/ai-specialist-salaris` · A2 · salaris: DataJobs (bijgewerkt mei 2026) noemt bruto per maand € 3.000 tot € 4.000 voor junioren, € 4.000 tot € 5.500 voor medioren en € 5.500 tot € 7.000 voor senioren; Indeed (bijgewerkt 14 september 2026) meldt een gemiddelde van € 56.643 per jaar.
- `/kennisbank/ai-specialist-salaris` · V1.1 · salaris: Nee.
- `/kennisbank/ai-specialist-salaris` · V1.2 · salaris: De gecontroleerde salarisbronnen publiceren hun cijfers onder de titel AI engineer, niet onder AI specialist.
- `/kennisbank/ai-specialist-salaris` · V1.3 · salaris: Bij een AI specialist salaris gaat het daarom om bandbreedtes per niveau van twee bronnen, in brutobedragen per maand.
- `/kennisbank/ai-specialist-salaris` · V2.1 · salaris: Lastig: de cijfers van Indeed en DataJobs zijn lastig één-op-één te vergelijken, want Indeed rekent in jaarbedragen op basis van wat werknemers zelf opgeven en DataJobs in brutomaandbedragen op basis van gegevens van het eigen platform.
- `/kennisbank/chatgpt-voor-bedrijven` · A1 · toolprijs: ChatGPT voor bedrijven is de AI-assistent van OpenAI als schrijf-, denk- en analysepartner die in gewone taal een tekst, samenvatting, analyse of opzet teruggeeft; bij ChatGPT Business horen volgens de prijspagina van OpenAI onder meer projecten, eigen GPT's, data-analyse en koppelingen (stand september 2026).
- `/kennisbank/chatgpt-voor-bedrijven` · A2 · toolprijs: Voor bedrijfsdata horen de abonnementen Business of Enterprise en geen persoonlijke accounts: bij beide blijft training op invoer en uitvoer volgens OpenAI standaard uit (stand september 2026).
- `/kennisbank/chatgpt-voor-bedrijven` · A3 · toolprijs: ChatGPT kan zelfverzekerd een fout antwoord geven, dus voor alles wat naar een klant, toezichthouder of directie gaat blijft een mens verantwoordelijk voor de controle.
- `/kennisbank/chatgpt-voor-bedrijven` · V1.1 · toolprijs: Een standaardplek van ChatGPT Business kost $20 per gebruiker per maand bij jaarbetaling of $25 bij maandbetaling, en een premiumplek $100 of $125 (stand september 2026).
- `/kennisbank/chatgpt-voor-bedrijven` · V1.2 · toolprijs: Dat zijn Amerikaanse lijstprijzen exclusief btw, en OpenAI geeft aan dat prijzen per land en valuta kunnen verschillen.
- `/kennisbank/chatgpt-voor-bedrijven` · V1.3 · toolprijs: Bij ChatGPT voor bedrijven is de prijs van ChatGPT Enterprise op aanvraag.
- `/kennisbank/chatgpt-voor-bedrijven` · V2.1 · toolprijs: ChatGPT Enterprise, voor nieuwe werkruimtes (EER en Zwitserland); bij ChatGPT Business is er geen Europese dataopslag (stand september 2026).
- `/kennisbank/chatgpt-voor-bedrijven` · V2.2 · toolprijs: Bij ChatGPT voor bedrijven vallen gegevens die via koppelingen of webzoekopdrachten naar externe diensten gaan daar volgens OpenAI niet onder.
- `/kennisbank/chatgpt-voor-bedrijven` · V3.2 · toolprijs: Bij de persoonlijke abonnementen kan OpenAI gesprekken gebruiken om modellen te verbeteren tenzij de gebruiker dat zelf uitzet, en de organisatie heeft geen zicht of zeggenschap over klantgegevens die een medewerker in een persoonlijk account zet.
- `/kennisbank/chatgpt-voor-bedrijven` · V3.3 · toolprijs: Voor Business en Enterprise is bovendien een verwerkersovereenkomst met OpenAI af te sluiten.
- `/inzichten/build-buy-of-partner` · V1.2 · marktcijfer: Een vuistregel uit de praktijk is dat het jaarlijkse onderhoud van een zelfgebouwde AI-toepassing tussen de 20% en 40% van de oorspronkelijke bouwkosten ligt.
- `/inzichten/build-buy-of-partner` · V3.1 · marktcijfer: Hooguit tien tot twintig procent, in de praktijk: zo veel van wat organisaties willen bouwen is werkelijk onderscheidend.
- `/inzichten/welke-ai-use-cases-leveren-resultaat` · V1.2 · marktcijfer: Iedereen een AI-assistent geven hoort niet bij de AI-use cases: het is geen use case maar een licentie, en zonder afgebakende scenario's blijft het gebruik hangen rond de tien procent.
- `/ai-consultancy/ai-advies` · V2.2 · wetgeving: AI advies over de AI Act helpt bepalen in welke risicocategorie een toepassing valt, wat dat van de organisatie vraagt en hoe de governance wordt ingericht.
- `/kennisbank/wat-doet-een-bi-specialist` · V1.2 · toolprijs: AI-functies in BI-platforms helpen bij het schrijven van berekeningen en queries, en de BI specialist controleert en verbetert.
- `/markten` · V1.1 · wetgeving: Vanaf 2 december 2027 gelden sinds de Digital Omnibus de regels voor hoog-risicotoepassingen, en voor AI in producten als medische hulpmiddelen vanaf 2 augustus 2028; die regels zijn uitgesteld.
- `/markten` · V1.2 · wetgeving: Bij AI per branche legt de AI Act een laag over de sectorregels heen, met verplichtingen die per toepassing verschillen; de uitwerking staat op de pagina over de AI Act [link naar /ai-beleid/ai-act].
- `/kennisbank/claude-voor-bedrijven` · A1 · toolprijs: Claude voor bedrijven is de AI-assistent van Anthropic in een zakelijk abonnement: Team voor 2 tot 150 gebruikers, of Enterprise met daarnaast onder meer SCIM, rolgebaseerde toegang en auditlogs.
- `/kennisbank/claude-voor-bedrijven` · A2 · toolprijs: Alleen de zakelijke abonnementen zijn geschikt voor gebruik met bedrijfsgegevens; bij Team en Enterprise traint Anthropic standaard niet op de content, en de data wordt volgens Anthropic in de VS opgeslagen (stand september 2026).
- `/kennisbank/claude-voor-bedrijven` · V1.1 · toolprijs: Een standaardplek in het Team-abonnement van Claude voor bedrijven kost $20 per gebruiker per maand bij jaarbetaling of $25 bij maandbetaling, en een premiumplek $100 of $125.
- `/kennisbank/claude-voor-bedrijven` · V1.2 · toolprijs: Enterprise kost $20 per plek per maand bij jaarbetaling plus gebruik tegen API-tarieven, met een jaarcontract van minimaal 20 plekken.
- `/kennisbank/claude-voor-bedrijven` · V1.3 · toolprijs: Dat zijn Amerikaanse lijstprijzen exclusief btw, stand september 2026.
- `/kennisbank/claude-voor-bedrijven` · V2.1 · toolprijs: Op dit moment kan Europese dataopslag bij Claude voor bedrijven alleen via de cloudplatforms, niet in de app (stand september 2026).
- `/kennisbank/claude-voor-bedrijven` · V2.2 · toolprijs: In de zakelijke abonnementen wordt de data volgens Anthropic opgeslagen in de VS.
- `/kennisbank/claude-voor-bedrijven` · V2.3 · toolprijs: Voor Europese dataopslag en verwerking wijst Anthropic naar de regionale endpoints van AWS Bedrock en Google Vertex, een route voor eigen toepassingen via de API en niet voor de claude.ai-app.
- `/kennisbank/claude-voor-bedrijven` · V3.1 · toolprijs: Nee.
- `/kennisbank/claude-voor-bedrijven` · V3.2 · toolprijs: Pro en Max zijn persoonlijke abonnementen waarbij modeltraining op gesprekken aan staat tot de gebruiker het zelf uitzet, en centraal beheer ontbreekt.
- `/kennisbank/claude-voor-bedrijven` · V3.3 · toolprijs: Voor Claude voor bedrijven met bedrijfsgegevens zijn alleen Team en Enterprise geschikt (stand september 2026).
- `/inzichten/de-business-case-voor-ai` · V2.2 · toolprijs: Bij AI wordt vaak betaald per verwerkt document, per gesprek of per verwerkte hoeveelheid tekst.
- `/inzichten/de-business-case-voor-ai` · V3.1 · overig extern: Doorgaans vier tot acht weken.
- `/ai-automatisering/ai-tools` · A2 · toolprijs: Organisaties die in Microsoft 365 of Google Workspace werken, beginnen bij Copilot of Gemini, en voor bedrijfs- of persoonsgegevens komt alleen een zakelijk abonnement met verwerkersovereenkomst in aanmerking.
- `/markten/fintech` · A2 · wetgeving: Kredietbeoordeling van personen en de risicobeoordeling en prijsstelling bij levens- en ziektekostenverzekeringen zijn hoog risico onder de AI Act, met regels vanaf 2 december 2027 (stand september 2026).
- `/markten/fintech` · V2.2 · wetgeving: Een kredietmodel dat nu wordt ingekocht of gebouwd, is waarschijnlijk nog in gebruik als de hoog-risicoregels vanaf 2 december 2027 gelden, dus bij AI in fintech horen die eisen nu al in ontwerp en selectie.
- `/markten/fintech` · V3.1 · wetgeving: Een AI-dienst die een financiële instelling afneemt, hoort bij AI in fintech in de praktijk bij de ICT-diensten van derden waarvan DORA een informatieregister vraagt, inclusief onderuitbesteding.
- `/markten/fintech` · V3.2 · wetgeving: DORA geldt sinds 17 januari 2025 en richt zich op de financiële instelling; de precieze kwalificatie is iets om te laten toetsen door de compliance- of juridische afdeling.
- `/kennisbank/gemini-voor-bedrijven` · A1 · toolprijs: Gemini voor bedrijven is de generatieve AI van Google, die sinds januari 2025 zonder aparte AI-licentie in de Business- en Enterprise-edities van Google Workspace zit; welke functies beschikbaar zijn, verschilt per editie.
- `/kennisbank/gemini-voor-bedrijven` · A2 · toolprijs: Bij organisaties die al met Google Workspace werken, zit Gemini waarschijnlijk al in het abonnement, zodat de vraag minder is of het wordt gekocht en meer hoe het wordt ingezet en welke afspraken over data gelden.
- `/kennisbank/gemini-voor-bedrijven` · A3 · toolprijs: Volgens Google dient klantdata uit Workspace zonder toestemming of instructie van de klant niet als trainingsmateriaal voor modellen (stand september 2026).
- `/kennisbank/gemini-voor-bedrijven` · V1.1 · toolprijs: Business Starter kost € 6,80, Business Standard € 13,60 en Business Plus € 21,10: dat zijn de Business-edities van Google Workspace met Gemini voor bedrijven, per gebruiker per maand bij een jaarcontract, exclusief belastingen (stand september 2026).
- `/kennisbank/gemini-voor-bedrijven` · V1.2 · toolprijs: De prijs van de Enterprise-editie is op aanvraag.
- `/kennisbank/gemini-voor-bedrijven` · V2.1 · toolprijs: In Business Starter zit Gemini voor bedrijven volgens Google niet in Docs en Sheets, wel in Gmail en in de Gemini-app (stand september 2026).
- `/kennisbank/gemini-voor-bedrijven` · V2.2 · toolprijs: In Business Standard zit Gemini in onder andere Gmail, Docs en Meet.
- `/kennisbank/gemini-voor-bedrijven` · V3.1 · toolprijs: Gemini voor bedrijven haalt volgens Google alleen gegevens op waartoe de gebruiker zelf toegang heeft.
- `/ai-workshop/ai-geletterdheid-training` · A1 · wetgeving: Artikel 4 van de AI Act geldt sinds 2 februari 2025 voor organisaties die AI ontwikkelen of gebruiken; sinds de wijziging van juli 2026 is het een inspanningsverplichting om maatregelen te nemen voor de AI-geletterdheid van personeel, zonder voorgeschreven niveau.
- `/ai-workshop/ai-geletterdheid-training` · A3 · wetgeving: Een certificaat is volgens de Europese Commissie niet nodig, terwijl het wel verstandig is intern vast te leggen welke maatregelen zijn genomen en waarom die passen.
- `/ai-workshop/ai-geletterdheid-training` · V1.1 · wetgeving: Nee.
- `/ai-workshop/ai-geletterdheid-training` · V1.2 · wetgeving: De verplichting uit artikel 4 van de AI Act, waar een AI geletterdheid training bij helpt, blijft bestaan voor aanbieders en gebruiksverantwoordelijken van AI-systemen.
- `/ai-workshop/ai-geletterdheid-training` · V1.3 · wetgeving: Sinds 27 juli 2026 is het een inspanningsverplichting, en niets doen voldoet niet (stand september 2026).
- `/ai-workshop/ai-geletterdheid-training` · V2.1 · wetgeving: Nee.
- `/ai-workshop/ai-geletterdheid-training` · V2.2 · wetgeving: Voor een AI geletterdheid training bestaat geen voorgeschreven lesprogramma: volgens de Autoriteit Persoonsgegevens hangt wat nodig is af van de risico's, de rollen en de context.

## Overige bevindingen: links, dienstnamen, lidwoorden en vragen (3)

Een blok met een bevinding blijft "concept".

- `/ai-implementatie/advies` · bron · bronregel: Het blok bevat een extern feit, maar "tarieven en doorlooptijden" is de enige bron in de bronregel.
- `/ai-beleid` · bron · bronregel: Het blok bevat een extern feit, maar "tarieven en doorlooptijden" is de enige bron in de bronregel.
- `/ai-consultancy/ai-advies` · bron · bronregel: Het blok bevat een extern feit, maar "tarieven en doorlooptijden" is de enige bron in de bronregel.
