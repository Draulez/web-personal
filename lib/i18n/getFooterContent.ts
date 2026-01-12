import { Locale } from "./locale";

export async function getFooterContent(locale: Locale) {
  switch (locale) {
    case "en":
      return (await import("@/content/en/footer")).footerContent;
    case "es":
    default:
      return (await import("@/content/es/footer")).footerContent;
  }
}
