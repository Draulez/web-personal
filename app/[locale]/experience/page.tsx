"use client";

import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

const ExperienceTimeline = () => {
  const [experiences] = useState([
    {
      titulo: "Mindware Solutions",
      fechaInicio: "Dic 2023",
      fechaFinal: "Presente",
      posicion: "Java Backend J2EE Developer",
      ubicacion: "Sagunto, Valencia, España",
      detalles: [
        "Desarrollo de nuevas funcionalidades en aplicaciones web para plataformas internas, utilizando Java J2EE y bases de datos relacionales (MariaDB).",
        "Coordinación estrecha con el equipo de QA para validar casos de uso y requisitos técnicos",
        "Participación activa en revisiones de diseño de software, proponiendo mejoras en la arquitectura y eficiencia del código.",
        "Implementación de la nueva web corporativa en React",
        "Optimización de procesos de CI/CD con Jenkins, integrando mejoras continuas en entornos locales."
      ],
      herramientas: ["Java 21","Java 1.8", "SQL", "AWS", "Automatización", "Python", "CI/CD", "Jenkins", "Docker", "Frontend"]
    },
    {
      titulo: "Universidad De Valencia (Ingeniería Telemática)",
      fechaInicio: "Sep 2016",
      fechaFinal: "Jun 2021",
      posicion: "Student",
      ubicacion: "Valencia, España",
      detalles: [],
      herramientas: []
    }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-(--color-background-start) via-(--color-background-middle)/20 to-(--color-background-start) p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-blue-500/20 hidden md:block"></div>

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            
            return (
              <div key={index} className="relative mb-16 md:mb-24">
                {/* Dot in center */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-8 w-4 h-4 bg-(--color-accent-hover) rounded-full border-4 border-slate-900 z-10 hidden md:block"></div>

                {/* Mobile dot */}
                <div className="absolute left-0 top-8 w-3 h-3 md:bg-(--color-accent-hover) rounded-full border-4 border-slate-900 md:hidden"></div>

                {/* Content container */}
                <div className={`flex flex-col md:flex-row ${isLeft ? 'md:flex-row-reverse' : ''} items-center gap-8 md:gap-16`}>
                  {/* Card */}
                  <div className={`w-full md:w-5/12 ml-6 md:ml-0 ${isLeft ? 'md:text-right' : ''}`}>
                    <div className="bg-(--color-background) backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:border-(--color-accent) hover:scale-105 transition-all duration-300">
                      {/* Header */}
                      <div className="mb-3">
                        <h3 className="text-2xl font-bold text-(--color-text-primary) mb-1">{exp.titulo}</h3>
                        <p className="text-sm text-gray-500">
                          {exp.fechaInicio} - {exp.fechaFinal}
                        </p>
                      </div>

                      {/* Position */}
                      <h4 className="text-xl font-semibold text-(--color-accent-hover) mb-3">{exp.posicion}</h4>

                      {/* Location */}
                      <div className={`flex items-center text-gray-400 mb-4 ${isLeft ? 'md:justify-end' : ''}`}>
                        <MapPin className="w-4 h-4 mr-2 text-red-500" />
                        <span>{exp.ubicacion}</span>
                      </div>

                      {/* Details */}
                      <div className={`space-y-3 mb-6 text-(--color-text-primary) text-sm leading-relaxed ${isLeft ? 'md:text-right' : ''}`}>
                        {exp.detalles.map((detalle, idx) => (
                          <p key={idx}>— {detalle}</p>
                        ))}
                      </div>

                      {/* Tools */}
                      <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : ''}`}>
                        {exp.herramientas.map((tool, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 text-xs font-medium bg-white/20 border rounded"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-5/12"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;