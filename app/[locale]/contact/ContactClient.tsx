"use client";
import { FaGithub, FaLinkedin, FaPhone, FaDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface ContactItem {
  id: string;
  label: string;
  value: string;
  icon: "github" | "phone" | "linkedin" | "email" | "download";
  href: string;
}

interface ContactClientProps {
  content: {
    title: string;
    subtitle: string;
    table: {
      method: string;
      information: string;
    };
    items: {
      github: string;
      phone: string;
      linkedin: string;
      email: string;
      cv: string;
    };
    buttons: {
      download: string;
      open: string;
    };
  };
  contactItems: ContactItem[];
}

const iconMap = {
  github: FaGithub,
  phone: FaPhone,
  linkedin: FaLinkedin,
  email: MdEmail,
  download: FaDownload,
};

export default function ContactClient({ content, contactItems }: ContactClientProps) {
  const handleAction = (href: string) => {
    window.open(href, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-(--color-background-start) via-(--color-background-middle)/20 to-(--color-background-start)">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-(--color-text-primary) mb-4">
            {content.title}
          </h1>
          <p className="text-lg text-(--color-text-secondary) max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* Contact Table */}
        <div className="hidden md:block bg-(--color-background-slideProject)/50 rounded-3xl border border-gray-700/50 overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700/50 bg-(--color-background)/30">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-(--color-text-primary)">
                    {content.table.method}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-(--color-text-primary)">
                    {content.table.information}
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-(--color-text-primary)">
                    
                  </th>
                </tr>
              </thead>
              <tbody>
                {contactItems.map((item, index) => {
                  const IconComponent = iconMap[item.icon];
                  return (
                    <tr
                      key={item.id}
                      className={`border-b border-gray-700/30 hover:bg-(--color-accent-soft) transition-colors duration-200 ${
                        index === contactItems.length - 1 ? "border-b-0" : ""
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="text-(--color-accent)">
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <span className="font-medium text-(--color-text-primary)">
                            {item.label}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-(--color-text-secondary)">
                          {item.value}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-center">
                          <button
                            onClick={() => handleAction(item.href)}
                            className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                              item.id === "cv"
                                ? "bg-(--color-accent) hover:bg-(--color-accent-hover) text-gray-900 hover:scale-105"
                                : "bg-gray-700/50 hover:bg-gray-600/50 text-(--color-text-primary) hover:scale-105"
                            } shadow-lg hover:shadow-xl`}
                          >
                            {item.id === "cv" ? content.buttons.download : content.buttons.open}
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Alternative Card View for Mobile */}
        <div className="mt-8 md:hidden space-y-4">
          {contactItems.map((item) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div
                key={item.id}
                className="bg-(--color-background-slideProject)/50 rounded-2xl border border-gray-700/50 p-6 hover:bg-(--color-accent-soft) transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-(--color-accent)">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-(--color-text-primary)">
                        {item.label}
                      </h3>
                      <p className="text-sm text-(--color-text-secondary)">
                        {item.value}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleAction(item.href)}
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      item.id === "cv"
                        ? "bg-(--color-accent) hover:bg-(--color-accent-hover) text-gray-900"
                        : "bg-gray-700/50 hover:bg-gray-600/50 text-(--color-text-primary)"
                    }`}
                  >
                    {item.id === "cv" ? content.buttons.download : content.buttons.open}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
