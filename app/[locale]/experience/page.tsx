import { Locale } from "@/lib/i18n/locale";
import { getExperienceContent } from "@/lib/i18n/getExperienceContent";
import ExperienceClient from "./ExperienceClient";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function ExperiencePage({ params }: Props) {
  const { locale } = await params;
  const content = await getExperienceContent(locale);

  return <ExperienceClient experiences={content.experiences} />;
}
