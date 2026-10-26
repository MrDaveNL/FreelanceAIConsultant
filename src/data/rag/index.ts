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
import inzichtenHetDatafundamentOnderAi from './blokken/inzichten-het-datafundament-onder-ai.ts';
import inzichtenVanAiStrategieNaarWaarde from './blokken/inzichten-van-ai-strategie-naar-waarde.ts';
import inzichtenWaaromAiPilotsBlijvenSteken from './blokken/inzichten-waarom-ai-pilots-blijven-steken.ts';
import inzichtenWanneerHebJeEchtEenAiStrateegNodig from './blokken/inzichten-wanneer-heb-je-echt-een-ai-strateeg-nodig.ts';
import inzichtenWelkeAiUseCasesLeverenResultaat from './blokken/inzichten-welke-ai-use-cases-leveren-resultaat.ts';
import kennisbankAiAgentsEnAvg from './blokken/kennisbank-ai-agents-en-avg.ts';
import kennisbankAiSpecialistSalaris from './blokken/kennisbank-ai-specialist-salaris.ts';
import kennisbankAiVoorbeelden from './blokken/kennisbank-ai-voorbeelden.ts';
import kennisbankChatgptVoorBedrijven from './blokken/kennisbank-chatgpt-voor-bedrijven.ts';
import kennisbankClaudeVoorBedrijven from './blokken/kennisbank-claude-voor-bedrijven.ts';
import kennisbankGeminiVoorBedrijven from './blokken/kennisbank-gemini-voor-bedrijven.ts';
import kennisbankMicrosoftCopilotVoorBedrijven from './blokken/kennisbank-microsoft-copilot-voor-bedrijven.ts';
import kennisbankNotulerenMetAi from './blokken/kennisbank-notuleren-met-ai.ts';
import kennisbankPromptEngineering from './blokken/kennisbank-prompt-engineering.ts';
import kennisbankRpaVsAiAutomatisering from './blokken/kennisbank-rpa-vs-ai-automatisering.ts';
import kennisbankWatDoetEenAiConsultant from './blokken/kennisbank-wat-doet-een-ai-consultant.ts';
import kennisbankWatDoetEenAiDeveloper from './blokken/kennisbank-wat-doet-een-ai-developer.ts';
import kennisbankWatDoetEenBiSpecialist from './blokken/kennisbank-wat-doet-een-bi-specialist.ts';
import markten from './blokken/markten.ts';
import marktenAutomotive from './blokken/markten-automotive.ts';
import marktenFintech from './blokken/markten-fintech.ts';
import dienstenAiDueDiligence from './blokken/diensten-ai-due-diligence.ts';
import dienstenAiStrategySprint from './blokken/diensten-ai-strategy-sprint.ts';
import dienstenExecutiveBriefing from './blokken/diensten-executive-briefing.ts';
import dienstenFractionalAiLead from './blokken/diensten-fractional-ai-lead.ts';
import dienstenVendorReview from './blokken/diensten-vendor-review.ts';
import servicesEnAiReadinessAssessment from './blokken/services-en-ai-readiness-assessment.ts';
import servicesEnAiStrategySprint from './blokken/services-en-ai-strategy-sprint.ts';
import servicesEnFractionalAiLead from './blokken/services-en-fractional-ai-lead.ts';
import servicesEnVendorReview from './blokken/services-en-vendor-review.ts';
import servicesEnExecutiveBriefing from './blokken/services-en-executive-briefing.ts';
import servicesEnAiDueDiligence from './blokken/services-en-ai-due-diligence.ts';
import pricingEn from './blokken/pricing-en.ts';
import partnernetwerkEn from './blokken/partnernetwerk-en.ts';

const bronnen: unknown[] = [dienstenAiReadinessAssessment, aiConsultancyAiStrategie, aiConsultancyAiConsultantInhuren, aiAgents, aiAgentsLatenMaken, aiAutomatisering, aiBeleid, aiConsultancy, aiConsultancyAiAdvies, aiDevelopment, aiDevelopmentAiOplossingen, aiDevelopmentAiSpecialist, aiImplementatie, aiImplementatieAdvies, aiWorkshop, aiWorkshopAiCoaching, aiWorkshopAiGeletterdheidTraining, aiWorkshopChatgptTraining, aiWorkshopCopilotTraining, diensten, partnernetwerk, tarieven, aiAgentsVoorbeelden, aiAgentsWatIsEenAiAgent, aiAutomatiseringAiTools, aiAutomatiseringAiWorkflows, aiAutomatiseringBedrijfsprocessenAutomatiserenMetAi, aiBeleidAiAct, aiConsultancyAiRoadmap, aiDevelopmentAiSoftware, aiImplementatieStappenplan, aiVoorBedrijven, aiVoorBedrijvenAiEnBi, aiVoorBedrijvenMkb, aiVoorBedrijvenZakelijkeDienstverleners, inzichtenAiAdoptieBegintBijHetWerk, inzichtenAiAgentsWatZeWelEnNietKunnen, inzichtenAiGovernanceZonderBureaucratie, inzichtenAiVendorselectieInAchtStappen, inzichtenBuildBuyOfPartner, inzichtenDeBusinessCaseVoorAi, inzichtenFreelanceAiConsultantVsAgencyVsBig4, inzichtenHetDatafundamentOnderAi, inzichtenVanAiStrategieNaarWaarde, inzichtenWaaromAiPilotsBlijvenSteken, inzichtenWanneerHebJeEchtEenAiStrateegNodig, inzichtenWelkeAiUseCasesLeverenResultaat, kennisbankAiAgentsEnAvg, kennisbankAiSpecialistSalaris, kennisbankAiVoorbeelden, kennisbankChatgptVoorBedrijven, kennisbankClaudeVoorBedrijven, kennisbankGeminiVoorBedrijven, kennisbankMicrosoftCopilotVoorBedrijven, kennisbankNotulerenMetAi, kennisbankPromptEngineering, kennisbankRpaVsAiAutomatisering, kennisbankWatDoetEenAiConsultant, kennisbankWatDoetEenAiDeveloper, kennisbankWatDoetEenBiSpecialist, markten, marktenAutomotive, marktenFintech, dienstenAiDueDiligence, dienstenAiStrategySprint, dienstenExecutiveBriefing, dienstenFractionalAiLead, dienstenVendorReview, servicesEnAiReadinessAssessment, servicesEnAiStrategySprint, servicesEnFractionalAiLead, servicesEnVendorReview, servicesEnExecutiveBriefing, servicesEnAiDueDiligence, pricingEn, partnernetwerkEn];

export const blokken: Blok[] = valideer(blokSchema, bronnen, 'blok', 'pagina');

const gezien = new Set<string>();
for (const blok of blokken) {
  if (gezien.has(blok.pagina)) throw new Error(`Meer dan één RAG-blok voor ${blok.pagina}`);
  gezien.add(blok.pagina);
  // Een dienstblok kan alleen bestaan als de dienstfeiten compleet zijn (resultaat, doelgroep, laatst gecontroleerd).
  if (blok.type === 'dienst' && !getDienst(blok.pagina.split('/').pop()!))
    throw new Error(`RAG-blok ${blok.pagina}: dienstfeiten ontbreken in src/data/rag/diensten.ts`);
}

// Blokken worden opgezocht op (url, taal); fase 1 heeft alleen taal: 'nl' blokken.
export const blokVoor = (pagina: string, taal: 'en' | 'nl' = 'nl') => blokken.find((b) => b.pagina === pagina && b.taal === taal);
