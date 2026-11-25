const translations = {
  it: {
    topline:"TALENT ACQUISITION · PROPOSTA STRATEGICA",navApproach:"Approccio",navBlueprint:"Metodo",navPlan:"Primi 30 giorni",navContact:"Contatti",
    heroEyebrow:"UN PROGETTO DI TALENT ACQUISITION",heroTitle:"COSTRUIRE<br>IL MOTORE<br><em>DEL TALENTO.</em>",heroLead:"Non mi limito a coprire posizioni. Costruisco pipeline di talenti che aiutano i team a crescere.",heroCta:"Scopri il mio approccio",heroSecondary:"Parliamone",heroBottom:"UN SISTEMA PEOPLE-FIRST, CON OBIETTIVI DI BUSINESS.",
    introKicker:"IL PROFILO",introOverline:"STRATEGIA E OPERATIVITÀ",introTitle:"La Talent Acquisition non dovrebbe essere solo un processo di selezione. <em>Dovrebbe essere un sistema di crescita.</em>",introText:"Sono Stephanie De Padova, Talent Acquisition Specialist con focus su IT & Engineering. Unisco recruiting end-to-end, sourcing mirato e mentalità digitale per trasformare esigenze di selezione complesse in strategie chiare e concrete.",signatureRole:"TALENT ACQUISITION SPECIALIST",
    metricYears:"ANNI NELLA TALENT ACQUISITION",metricRoles:"POSIZIONI GESTITE IN PARALLELO",metricCycle:"RECRUITMENT END-TO-END",metricNote:"IT · ENGINEERING · DIGITALE",
    blueprintKicker:"IL METODO DI TALENT ACQUISITION",blueprintOverline:"DALLA POSIZIONE APERTA ALLA PIPELINE",blueprintTitle:"Un metodo replicabile.<br><em>Progressi misurabili.</em>",blueprintLead:"Un approccio strutturato che collega priorità di business, candidate experience e performance del recruiting.",
    step1Title:"Comprendere il business",step1Text:"Conoscere prodotto, team, cultura e obiettivi. Tradurre il contesto aziendale in un brief di selezione chiaro.",step2Title:"Definire le priorità",step2Text:"Allineare gli stakeholder su impatto, urgenza, competenze essenziali e aspettative realistiche.",step3Title:"Costruire pipeline di talenti",step3Text:"Combinare Boolean search, talent mapping, direct sourcing e community professionali pertinenti.",step4Title:"Creare un'esperienza coerente",step4Text:"Comunicazione chiara, feedback tempestivi e fasi di selezione con uno scopo preciso.",step5Title:"Misurare e migliorare",step5Text:"Utilizzare conversioni del funnel, tempi di feedback, efficacia dei canali e qualità delle assunzioni per migliorare il sistema.",
    capKicker:"GLI STRUMENTI",capOverline:"COSA PORTO NEL TEAM",capTitle:"Le persone giuste.<br><em>Il processo giusto.</em>",cap1:"Recruiting IT & Engineering",cap1s:"Profili tecnici e competenze difficili da trovare",cap2:"Talent Acquisition end-to-end",cap2s:"Dalla raccolta del fabbisogno alla proposta e al passaggio all'onboarding",cap3:"Talent Sourcing & Mapping",cap3s:"Boolean search · Headhunting · Analisi del mercato",cap4:"Employer Branding",cap4s:"Comunicazione chiara e coinvolgimento dei candidati",cap5:"Digital HR & AI",cap5s:"Utilizzo concreto di strumenti digitali e intelligenza artificiale generativa",
    monthKicker:"UNA PROPOSTA PER I PRIMI 30 GIORNI",monthOverline:"ASCOLTARE. STRUTTURARE. ATTIVARE. IMPARARE.",monthTitle:"Un inizio consapevole.<br><em>Slancio dal primo giorno.</em>",monthLead:"Una roadmap iniziale per comprendere il contesto, costruire fiducia e rendere visibile il lavoro di recruiting.",week1Title:"Comprendere",week1Text:"Incontrare gli stakeholder, conoscere prodotto, struttura dei team, obiettivi di hiring e processo di selezione attuale.",week2Title:"Strutturare",week2Text:"Analizzare le posizioni aperte, definire priorità, concordare scorecard e impostare una dashboard essenziale.",week3Title:"Attivare",week3Text:"Avviare attività di sourcing mirato, mappare i bacini di talenti e definire una comunicazione costante.",week4Title:"Misurare",week4Text:"Analizzare i segnali del funnel, condividere insight e concordare le priorità successive con il team.",roadmapNote:"Un modello proposto di onboarding, da adattare alle reali priorità e al contesto operativo del team.",
    contactKicker:"IL PROSSIMO PASSO",contactOverline:"COSTRUIAMO CIÒ CHE VIENE DOPO",contactTitle:"I grandi team<br>non nascono<br><em>per caso.</em>",contactText:"Mi piacerebbe confrontarmi su come un approccio strutturato e proattivo alla Talent Acquisition possa supportare la prossima fase di crescita.",footerNote:"PROPOSTA INDIPENDENTE DI CANDIDATURA · NON È IL SITO UFFICIALE DI PILLAR",backTop:"TORNA SU ↑"
  }
};
const toggle = document.querySelector("#language-toggle");
const nodes = [...document.querySelectorAll("[data-i18n]")];
const english = new Map(nodes.map(node => [node, node.innerHTML]));
let language = "en";
function setLanguage(next) {
  language = next;
  document.documentElement.lang = next;
  nodes.forEach(node => {
    const key = node.dataset.i18n;
    node.innerHTML = next === "it" && translations.it[key] ? translations.it[key] : english.get(node);
  });
  toggle.innerHTML = next === "en" ? 'IT <span>↗</span>' : 'EN <span>↗</span>';
  toggle.setAttribute("aria-label", next === "en" ? "Passa alla lingua italiana" : "Switch to English");
}
toggle?.addEventListener("click", () => setLanguage(language === "en" ? "it" : "en"));
