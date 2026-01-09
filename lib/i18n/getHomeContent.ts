import { Locale } from "./locale";

export async function getHomeContent(locale: Locale) {
  switch (locale) {
    case "en":
      return (await import("@/content/en/home")).homeContent;
    case "es":
    default:
      return (await import("@/content/es/home")).homeContent;
  }
}
