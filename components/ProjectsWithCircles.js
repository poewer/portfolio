"use client";

import { useState } from "react";
import { projects } from "../utils/projects";

export default function ProjectsWithCircles() {
  const [selectedProject, setSelectedProject] = useState(0); // Indeks wybranego projektu
  const projectIcons = ["🤖", "📊", "🔗", "📝", "🛠️"]; // Emotikony odpowiadające projektom
  const projectYears = ["2024", "2023", "2023", "2022", "2022"]; // Lata projektów

  return (
    <div className="p-6 bg-secondary min-h-screen">
      {/* Nagłówek */}
      <h1 className="text-4xl font-bold text-primary text-center mb-6">Projekty</h1>

      {/* Kółka z latami i strzałkami */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 justify-items-center mb-8">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col items-center relative">
            {/* Rok nad kółkiem */}
            <span className="text-primary font-bold text-lg mb-2">{projectYears[index]}</span>
            
            {/* Kółko projektu */}
            <button
              className={`w-16 h-16 flex items-center justify-center rounded-full text-3xl font-bold transition-colors duration-300 ${
                selectedProject === index
                  ? "bg-highlight text-cream shadow-lg"
                  : "bg-cream text-primary shadow-md"
              }`}
              onClick={() => setSelectedProject(index)}
              aria-label={`Zobacz projekt ${index + 1}`}
            >
              {projectIcons[index]}
            </button>
            
            {/* Nazwa projektu */}
            <p
              className={`text-sm font-medium text-center mt-8 transition-colors ${
                selectedProject === index ? "text-highlight" : "text-primary"
              }`}
            >
              {project.title}
            </p>
          </div>
        ))}
      </div>

      {/* Wybrany projekt */}
      <div className="p-6 bg-cream border border-primary shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-primary mb-4">
          {projects[selectedProject].title}
        </h2>

        {/* Podział na lewą i prawą stronę */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {/* Lewa strona: Rola, czas trwania i opis */}
          <div>
            <h3 className="text-lg font-bold text-highlight mb-2">Rola:</h3>
            <p className="text-primary mb-4">{projects[selectedProject].role}</p>

            <h3 className="text-lg font-bold text-highlight mb-2">Czas trwania:</h3>
            <p className="text-primary mb-4">{projects[selectedProject].duration}</p>

            <h3 className="text-lg font-bold text-highlight mb-2">Opis projektu:</h3>
            <p className="text-primary mb-4">{projects[selectedProject].description}</p>
          </div>

          {/* Cienka kreska */}
          <div className="absolute inset-y-0 left-1/2 w-px bg-primary"></div>

          {/* Prawa strona: Technologie, metodologia i kluczowe wkłady */}
          <div className="pl-4">
            <h3 className="text-lg font-bold text-highlight mb-2">Stack technologiczny:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {Object.entries(projects[selectedProject].technologies).map(
                ([category, items], index) => (
                  <div key={index}>
                    <h4 className="text-md font-semibold text-primary mb-1">
                      {category.charAt(0).toUpperCase() + category.slice(1)}:
                    </h4>
                    <ul className="list-disc pl-5 text-primary">
                      {items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>

            {/* Metodologia */}
            <h3 className="text-lg font-bold text-highlight mb-2">Metodologia:</h3>
            <p className="text-primary mb-4">{projects[selectedProject].methodology}</p>

            {/* Kluczowe wkłady */}
            <h3 className="text-lg font-bold text-highlight mb-2">Kluczowe wkłady:</h3>
            <ul className="list-disc pl-5 text-primary">
              {projects[selectedProject].key_contributions.map((contribution, index) => (
                <li key={index}>{contribution}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
