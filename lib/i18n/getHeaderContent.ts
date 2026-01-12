import { Locale } from "./locale";

export async function getHeaderContent(locale: Locale) {
  switch (locale) {
    case "en":
      return (await import("@/content/en/header")).headerContent;
    case "es":
    default:
      return (await import("@/content/es/header")).headerContent;
  }
}
