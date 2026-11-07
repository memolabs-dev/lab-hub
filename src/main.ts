import { currentLocale, t } from "./i18n";
import { loadProjects, type Project } from "./projects";
import { CURATED, publicExplorations } from "./curation";
import "./style.css";

function escape(value: string) {
  return value.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
}
function exploration(project: Project): string {
  const locale = currentLocale();
  const description = project.notes?.[locale] || project.description || t().descFallback;
  return `<li><h3>${escape(project.name)}</h3><p>${escape(description)}</p><a href="${escape(project.repo!)}" target="_blank" rel="noopener noreferrer">${t().sourceCta}</a></li>`;
}
async function main() {
  const root = document.getElementById("content");
  if (!root) return;
  const d = t();
  const locale = currentLocale();
  root.innerHTML = `<div class="wrap"><p role="status">${d.loading}</p></div>`;
  let projects: Project[];
  try {
    projects = await loadProjects();
    if (!Array.isArray(projects)) throw new Error("Invalid public catalog");
  } catch {
    root.innerHTML = `<section class="sec"><div class="wrap"><p role="alert">${d.catalogUnavailable}</p><a class="btn p" href="https://memolabs.dev/${locale}/work">${d.professionalCta}</a></div></section>`;
    return;
  }
  const publicProjects = publicExplorations(projects);
  const selected = CURATED.filter(item => publicProjects.some(project => project.name === item.name));
  const archive = publicProjects.filter(project => !selected.some(item => item.name === project.name));
  const cards = selected.map(item => `<article class="card curated-card" data-project="${item.name}"><div class="cbody"><p class="project-context">${escape(item.context[locale])}</p><h3>${escape(item.title[locale])}</h3><p>${escape(item.description[locale])}</p><a href="${item.href}" target="_blank" rel="noopener noreferrer">${item.action === "package" ? d.packageCta : d.sourceCta}</a></div></article>`).join("");
  root.innerHTML = `<section id="live" class="sec"><div class="wrap"><div class="shead"><h2>${d.selectionTitle}</h2><p>${d.selectionIntro}</p></div>${cards ? `<div class="grid curated-grid">${cards}</div>` : `<p>${d.selectionEmpty}</p>`}</div></section>
    <section class="sec"><div class="wrap"><details id="lab" class="catalog-explorations"><summary>${d.allTitle(archive.length)}</summary><div id="explorations"><p>${d.allIntro}</p><ul class="exploration-list">${archive.map(exploration).join("")}</ul></div></details></div></section>`;
}
main();
