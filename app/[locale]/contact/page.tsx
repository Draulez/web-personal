"use client";
import { FaGithub, FaLinkedin, FaPhone, FaDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface ContactItem {
  id: string;
  label: string;
  value: string;
  icon: React.ReactNode;
  href?: string;
  action?: () => void;
}

export default function ContactPage() {
  const contactItems: ContactItem[] = [
    {
      id: "github",
      label: "GitHub",
      value: "github.com/draulez",
      icon: <FaGithub className="w-6 h-6" />,
      href: "https://github.com/draulez",
    },
    {
      id: "phone",
      label: "Teléfono",
      value: "+34 601 014 162",
      icon: <FaPhone className="w-6 h-6" />,
      href: "tel:+34601014162",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/david-broseta",
      icon: <FaLinkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/david-broseta/",
    },
    {
      id: "email",
      label: "Email",
      value: "dbrobro@hotmail.com",
      icon: <MdEmail className="w-6 h-6" />,
      href: "mailto:dbrobro@hotmail.com",
    },
    {
      id: "cv",
      label: "Descargar CV",
      value: "CV_David_Roseta.pdf",
      icon: <FaDownload className="w-6 h-6" />,
      href: "/cv/CV - David Broseta.pdf",
    },
  ];

  const handleAction = (item: ContactItem) => {
    if (item.href) {
        window.open(item.href, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-(--color-background-start) via-(--color-background-middle)/20 to-(--color-background-start)">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-(--color-text-primary) mb-4">
            Contacto
          </h1>
          <p className="text-lg text-(--color-text-secondary) max-w-2xl mx-auto">
            Ponte en contacto conmigo a través de cualquiera de estos medios
          </p>
        </div>

        {/* Contact Table */}
        <div className="bg-(--color-background-slideProject)/50 rounded-3xl border border-gray-700/50 overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700/50 bg-(--color-background)/30">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-(--color-text-primary)">
                    Método
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-(--color-text-primary)">
                    Información
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-(--color-text-primary)">
                    
                  </th>
                </tr>
              </thead>
              <tbody>
                {contactItems.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`border-b border-gray-700/30 hover:bg-(--color-accent-soft) transition-colors duration-200 ${
                      index === contactItems.length - 1 ? "border-b-0" : ""
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="text-(--color-accent)">
                          {item.icon}
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
                          onClick={() => handleAction(item)}
                          className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                            item.id === "cv"
                              ? "bg-(--color-accent) hover:bg-(--color-accent-hover) text-gray-900 hover:scale-105"
                              : "bg-gray-700/50 hover:bg-gray-600/50 text-(--color-text-primary) hover:scale-105"
                          } shadow-lg hover:shadow-xl`}
                        >
                          {item.id === "cv" ? "Descargar" : "Abrir"}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Alternative Card View for Mobile */}
        <div className="mt-8 md:hidden space-y-4">
          {contactItems.map((item) => (
            <div
              key={item.id}
              className="bg-(--color-background-slideProject)/50 rounded-2xl border border-gray-700/50 p-6 hover:bg-(--color-accent-soft) transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-(--color-accent)">
                    {item.icon}
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
                  onClick={() => handleAction(item)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    item.id === "cv"
                      ? "bg-(--color-accent) hover:bg-(--color-accent-hover) text-gray-900"
                      : "bg-gray-700/50 hover:bg-gray-600/50 text-(--color-text-primary)"
                  }`}
                >
                  {item.id === "cv" ? "Descargar" : "Abrir"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
