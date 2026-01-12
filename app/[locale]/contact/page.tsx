import { FaGithub, FaLinkedin, FaPhone, FaDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Locale } from "@/lib/i18n/locale";
import { getContactContent } from "@/lib/i18n/getContactContent";
import ContactClient from "./ContactClient";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const content = await getContactContent(locale);

  const contactItems = [
    {
      id: "github",
      label: content.items.github,
      value: "github.com/draulez",
      icon: "github" as const,
      href: "https://github.com/draulez",
    },
    {
      id: "phone",
      label: content.items.phone,
      value: "+34 601 014 162",
      icon: "phone" as const,
      href: "tel:+34601014162",
    },
    {
      id: "linkedin",
      label: content.items.linkedin,
      value: "linkedin.com/in/david-broseta",
      icon: "linkedin" as const,
      href: "https://www.linkedin.com/in/david-broseta/",
    },
    {
      id: "email",
      label: content.items.email,
      value: "dbrobro@hotmail.com",
      icon: "email" as const,
      href: "mailto:dbrobro@hotmail.com",
    },
    {
      id: "cv",
      label: content.items.cv,
      value: "CV_David_Broseta.pdf",
      icon: "download" as const,
      href: "/cv/CV - David Broseta.pdf",
    },
  ];

  return <ContactClient content={content} contactItems={contactItems} />;
}
