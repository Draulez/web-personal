import { Locale } from "./locale";

export async function getContactContent(locale: Locale) {
  switch (locale) {
    case "en":
      return (await import("@/content/en/contact")).contactContent;
    case "es":
    default:
      return (await import("@/content/es/contact")).contactContent;
  }
}
