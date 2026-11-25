import type { Locale } from "./i18n";
import type { Project } from "./projects";
type Copy = Record<Locale, string>;
export const CURATED = [
  {
    name: "memo-ui",
    title: { fr: "Une interface réutilisable", en: "A reusable interface system" },
    description: { fr: "Composants React, Tailwind et Storybook pour explorer la cohérence d’une interface et ses états.", en: "React, Tailwind and Storybook components exploring interface consistency and states." },
    context: { fr: "Projet indépendant · code public", en: "Independent project · public code" },
    href: "https://github.com/guillaume-flambard/memo-ui", action: "source",
  },
  {
    name: "n8n-nodes-opn",
    title: { fr: "Relier Opn Payments à n8n", en: "Connect Opn Payments to n8n" },
    description: { fr: "Un nœud communautaire pour les paiements Omise/Opn : paiements, remboursements, clients et événements webhook.", en: "A community node for Omise/Opn payments: charges, refunds, customers and webhook events." },
    context: { fr: "Package communautaire publié sur npm", en: "Community package published on npm" },
    href: "https://www.npmjs.com/package/n8n-nodes-opn", action: "package",
  },
] satisfies { name: string; title: Copy; description: Copy; context: Copy; href: string; action: string }[];
const HIDDEN = new Set(["portfolio", "lab-hub", "activity-server"]);
export function publicExplorations(projects: Project[]) {
  return projects.filter(p => p.visibility === "PUBLIC" && p.repo && !HIDDEN.has(p.name));
}
