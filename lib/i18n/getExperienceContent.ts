import { Locale } from "./locale";

export async function getExperienceContent(locale: Locale) {
  switch (locale) {
    case "en":
      return (await import("@/content/en/experience")).experienceContent;
    case "es":
    default:
      return (await import("@/content/es/experience")).experienceContent;
  }
}
