import { Locale } from "./locale";

export async function getProjectsContent(locale: Locale) {
  switch (locale) {
    case "en":
      return (await import("@/content/en/projects")).projectsContent;
    case "es":
    default:
      return (await import("@/content/es/projects")).projectsContent;
  }
}
