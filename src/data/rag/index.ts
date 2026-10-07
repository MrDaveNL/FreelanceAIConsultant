// Alle RAG-blokken. Nieuw blok toevoegen = bestand maken in blokken/ en hier importeren.
import { blokSchema, valideer } from './schema.ts';
import type { Blok } from './schema.ts';
import { getDienst } from './diensten.ts';
import dienstenAiReadinessAssessment from './blokken/diensten-ai-readiness-assessment.ts';
import aiConsultancyAiStrategie from './blokken/ai-consultancy-ai-strategie.ts';
import aiConsultancyAiConsultantInhuren from './blokken/ai-consultancy-ai-consultant-inhuren.ts';
import aiAgents from './blokken/ai-agents.ts';
import aiAgentsLatenMaken from './blokken/ai-agents-laten-maken.ts';
import aiAutomatisering from './blokken/ai-automatisering.ts';
import aiBeleid from './blokken/ai-beleid.ts';
import aiConsultancy from './blokken/ai-consultancy.ts';
import aiConsultancyAiAdvies from './blokken/ai-consultancy-ai-advies.ts';
import aiDevelopment from './blokken/ai-development.ts';
import aiDevelopmentAiOplossingen from './blokken/ai-development-ai-oplossingen.ts';
import aiDevelopmentAiSpecialist from './blokken/ai-development-ai-specialist.ts';
import aiImplementatie from './blokken/ai-implementatie.ts';
import aiImplementatieAdvies from './blokken/ai-implementatie-advies.ts';
import aiWorkshop from './blokken/ai-workshop.ts';
import aiWorkshopAiCoaching from './blokken/ai-workshop-ai-coaching.ts';
import aiWorkshopAiGeletterdheidTraining from './blokken/ai-workshop-ai-geletterdheid-training.ts';
import aiWorkshopChatgptTraining from './blokken/ai-workshop-chatgpt-training.ts';
import aiWorkshopCopilotTraining from './blokken/ai-workshop-copilot-training.ts';
import diensten from './blokken/diensten.ts';
import partnernetwerk from './blokken/partnernetwerk.ts';
import tarieven from './blokken/tarieven.ts';
import aiAgentsVoorbeelden from './blokken/ai-agents-voorbeelden.ts';
import aiAgentsWatIsEenAiAgent from './blokken/ai-agents-wat-is-een-ai-agent.ts';
import aiAutomatiseringAiTools from './blokken/ai-automatisering-ai-tools.ts';
import aiAutomatiseringAiWorkflows from './blokken/ai-automatisering-ai-workflows.ts';
import aiAutomatiseringBedrijfsprocessenAutomatiserenMetAi from './blokken/ai-automatisering-bedrijfsprocessen-automatiseren-met-ai.ts';
import aiBeleidAiAct from './blokken/ai-beleid-ai-act.ts';
import aiConsultancyAiRoadmap from './blokken/ai-consultancy-ai-roadmap.ts';
import aiDevelopmentAiSoftware from './blokken/ai-development-ai-software.ts';
import aiImplementatieStappenplan from './blokken/ai-implementatie-stappenplan.ts';
import aiVoorBedrijven from './blokken/ai-voor-bedrijven.ts';
import aiVoorBedrijvenAiEnBi from './blokken/ai-voor-bedrijven-ai-en-bi.ts';
import aiVoorBedrijvenMkb from './blokken/ai-voor-bedrijven-mkb.ts';
import aiVoorBedrijvenZakelijkeDienstverleners from './blokken/ai-voor-bedrijven-zakelijke-dienstverleners.ts';
import inzichtenAiAdoptieBegintBijHetWerk from './blokken/inzichten-ai-adoptie-begint-bij-het-werk.ts';
import inzichtenAiAgentsWatZeWelEnNietKunnen from './blokken/inzichten-ai-agents-wat-ze-wel-en-niet-kunnen.ts';
import inzichtenAiGovernanceZonderBureaucratie from './blokken/inzichten-ai-governance-zonder-bureaucratie.ts';
import inzichtenAiVendorselectieInAchtStappen from './blokken/inzichten-ai-vendorselectie-in-acht-stappen.ts';
import inzichtenBuildBuyOfPartner from './blokken/inzichten-build-buy-of-partner.ts';
import inzichtenDeBusinessCaseVoorAi from './blokken/inzichten-de-business-case-voor-ai.ts';
import inzichtenFreelanceAiConsultantVsAgencyVsBig4 from './blokken/inzichten-freelance-ai-consultant-vs-agency-vs-big4.ts';

const bronnen: unknown[] = [dienstenAiReadinessAssessment, aiConsultancyAiStrategie, aiConsultancyAiConsultantInhuren, aiAgents, aiAgentsLatenMaken, aiAutomatisering, aiBeleid, aiConsultancy, aiConsultancyAiAdvies, aiDevelopment, aiDevelopmentAiOplossingen, aiDevelopmentAiSpecialist, aiImplementatie, aiImplementatieAdvies, aiWorkshop, aiWorkshopAiCoaching, aiWorkshopAiGeletterdheidTraining, aiWorkshopChatgptTraining, aiWorkshopCopilotTraining, diensten, partnernetwerk, tarieven, aiAgentsVoorbeelden, aiAgentsWatIsEenAiAgent, aiAutomatiseringAiTools, aiAutomatiseringAiWorkflows, aiAutomatiseringBedrijfsprocessenAutomatiserenMetAi, aiBeleidAiAct, aiConsultancyAiRoadmap, aiDevelopmentAiSoftware, aiImplementatieStappenplan, aiVoorBedrijven, aiVoorBedrijvenAiEnBi, aiVoorBedrijvenMkb, aiVoorBedrijvenZakelijkeDienstverleners, inzichtenAiAdoptieBegintBijHetWerk, inzichtenAiAgentsWatZeWelEnNietKunnen, inzichtenAiGovernanceZonderBureaucratie, inzichtenAiVendorselectieInAchtStappen, inzichtenBuildBuyOfPartner, inzichtenDeBusinessCaseVoorAi, inzichtenFreelanceAiConsultantVsAgencyVsBig4];

export const blokken: Blok[] = valideer(blokSchema, bronnen, 'blok', 'pagina');

const gezien = new Set<string>();
for (const blok of blokken) {
  if (gezien.has(blok.pagina)) throw new Error(`Meer dan één RAG-blok voor ${blok.pagina}`);
  gezien.add(blok.pagina);
  // Een dienstblok kan alleen bestaan als de dienstfeiten compleet zijn (resultaat, doelgroep, laatst gecontroleerd).
  if (blok.type === 'dienst' && !getDienst(blok.pagina.split('/').pop()!))
    throw new Error(`RAG-blok ${blok.pagina}: dienstfeiten ontbreken in src/data/rag/diensten.ts`);
}

export const blokVoor = (pagina: string) => blokken.find((b) => b.pagina === pagina);
