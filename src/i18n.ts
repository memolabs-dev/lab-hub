// Dictionnaires FR/EN du lab. Utilisés à deux endroits :
//  - au build, par le plugin vite qui rend page.template.html en /fr/ et /en/
//  - au runtime, par main.ts (locale lue sur <html lang>)
// Le portfolio (memolabs.dev) utilise next-intl avec les mêmes locales.

export const LOCALES = ["fr", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "fr";

export const SITE = "https://memolabs.dev";
export const LAB = "https://lab.memolabs.dev";

export interface Dict {
  loading: string;
  professionalCta: string;
  portfolioLabel: string;
  sourceCta: string;
  packageCta: string;
  selectionTitle: string;
  selectionIntro: string;
  selectionEmpty: string;
  allTitle: (n: number) => string;
  allIntro: string;
  catalogUnavailable: string;
  noScript: string;
  htmlLang: string;
  title: string;
  metaDesc: string;
  ogLocale: string;
  // nav, mirrored from the portfolio's SiteNav (home.nav in its messages)
  navHome: string;
  navWork: string;
  navDemos: string;
  navLab: string;
  navAbout: string;
  navCv: string;
  navContact: string;
  navCta: string;
  navMenu: string;
  navSkip: string;
  navAria: string;
  navLang: string;
  // hero
  eyebrow: string;
  h1: string;
  h1accent: string;
  lede: string;
  btnLive: string;
  btnLab: string;
  // footer
  footer: string;
  legal: string;
  // sections
  liveTitle: string;
  liveLede: (n: number) => string;
  labTitle: string;
  labLede: (n: number) => string;
  explTitle: string;
  explLede: string;
  // cartes
  descFallback: string;
  loadError: (msg: string) => string;
  status: Record<string, string>;
  statusFallback: string;
}

const fr: Dict = {
  loading: "Chargement de la sélection…",
  professionalCta: "Voir les expériences professionnelles",
  portfolioLabel: "réalisations professionnelles",
  sourceCta: "Lire le code",
  packageCta: "Voir le package npm",
  selectionTitle: "Une sélection pour approfondir",
  selectionIntro: "Trois travaux indépendants : une bibliothèque d’interface, un nœud de paiement n8n et un prototype de facturation. Le code ou le package est accessible pour chacun.",
  selectionEmpty: "La sélection est momentanément indisponible. Les expériences professionnelles restent accessibles.",
  allIntro: "Autres explorations et anciens prototypes. Les liens donnent accès au code source ; ils ne constituent pas une promesse de produit en service.",
  catalogUnavailable: "Le catalogue ne peut pas être chargé. Vous pouvez consulter mes expériences professionnelles.",
  noScript: "Le catalogue interactif nécessite JavaScript. Mes expériences professionnelles restent accessibles par le lien ci-dessus.",
  allTitle: (n) => `Autres explorations et code public (${n})`,
  htmlLang: "fr",
  title: "Memo Labs · Le lab",
  metaDesc:
    "Memo Labs, le lab. Sélection de projets indépendants, outils et prototypes, avec leur usage et leur code public.",
  ogLocale: "fr_FR",
  navHome: "Accueil",
  navWork: "Travail",
  navDemos: "Démos",
  navLab: "Lab",
  navAbout: "À propos",
  navCv: "CV",
  navContact: "Contact",
  navCta: "Me contacter",
  navMenu: "Menu",
  navSkip: "Aller au contenu",
  navAria: "Navigation principale",
  navLang: "Langue",
  eyebrow: "Memo Labs · Le lab",
  h1: "Projets",
  h1accent: "indépendants.",
  lede:
    "Une sélection de travaux indépendants pour explorer des interfaces, des intégrations et des automatisations. Pour voir mes interventions en entreprise, consultez les {portfolioLink}.",
  btnLive: "Voir les expériences professionnelles",
  btnLab: "Explorer la sélection",
  footer: "© 2026 Memo Labs · Guillaume Flambard EI",
  legal: "Mentions légales",
  liveTitle: "En ligne",
  liveLede: (n) => `Les produits Memo Labs déployés et accessibles, ${n} au total.`,
  labTitle: "Le lab",
  labLede: (n) => `Les expérimentations en cours : ${n} prototypes, agents et outils.`,
  explTitle: "Explorations",
  explLede: "Des pistes explorées, en pause ou en beta. Le travail continue.",
  descFallback: "Expérimentation dans le lab Memo Labs.",
  loadError: (msg) => `Impossible de charger les projets : ${msg}`,
  status: {
    live: "En ligne",
    beta: "Beta",
    lab: "WIP",
    internal: "Interne",
    private: "Privé",
    archived: "Archivé",
  },
  statusFallback: "WIP",
};

const en: Dict = {
  loading: "Loading the selection…",
  professionalCta: "See professional experience",
  portfolioLabel: "professional work",
  sourceCta: "Read the source",
  packageCta: "View the npm package",
  selectionTitle: "A selection to explore further",
  selectionIntro: "Three independent projects: an interface library, an n8n payment node and a billing prototype. Each links to its source code or package.",
  selectionEmpty: "The selection is temporarily unavailable. Professional experience remains accessible.",
  allIntro: "Other explorations and older prototypes. Links open source code; they do not promise a product in operation.",
  catalogUnavailable: "The catalog could not be loaded. You can still explore my professional experience.",
  noScript: "The interactive catalog requires JavaScript. My professional experience remains accessible through the link above.",
  allTitle: (n) => `Other explorations and public code (${n})`,
  htmlLang: "en",
  title: "Memo Labs · The lab",
  metaDesc:
    "Memo Labs, the lab. A selection of independent projects, tools and prototypes, with their purpose and public code.",
  ogLocale: "en_US",
  navHome: "Home",
  navWork: "Work",
  navDemos: "Demos",
  navLab: "Lab",
  navAbout: "About",
  navCv: "Resume",
  navContact: "Contact",
  navCta: "Get in touch",
  navMenu: "Menu",
  navSkip: "Skip to content",
  navAria: "Primary navigation",
  navLang: "Language",
  eyebrow: "Memo Labs · The lab",
  h1: "Independent",
  h1accent: "projects.",
  lede:
    "A selection of independent work exploring interfaces, integrations and automations. For my contributions within companies, see my {portfolioLink}.",
  btnLive: "See professional experience",
  btnLab: "Explore the selection",
  footer: "© 2026 Memo Labs · Guillaume Flambard EI",
  legal: "Legal notice",
  liveTitle: "Live",
  liveLede: (n) => `Memo Labs products deployed and reachable, ${n} in total.`,
  labTitle: "The lab",
  labLede: (n) => `Work in progress: ${n} prototypes, agents and tools.`,
  explTitle: "Explorations",
  explLede: "Paths explored, paused or in beta. The work goes on.",
  descFallback: "An experiment in the Memo Labs lab.",
  loadError: (msg) => `Could not load the projects: ${msg}`,
  status: {
    live: "Live",
    beta: "Beta",
    lab: "WIP",
    internal: "Internal",
    private: "Private",
    archived: "Archived",
  },
  statusFallback: "WIP",
};

export const DICTS: Record<Locale, Dict> = { fr, en };

export function isLocale(v: string | null | undefined): v is Locale {
  return !!v && (LOCALES as readonly string[]).includes(v);
}

/** Locale de la page, portée par <html lang> (posée au build par vite.config.ts). */
export function currentLocale(): Locale {
  const lang = typeof document !== "undefined" ? document.documentElement.lang : null;
  return isLocale(lang) ? lang : DEFAULT_LOCALE;
}

export function t(): Dict {
  return DICTS[currentLocale()];
}
