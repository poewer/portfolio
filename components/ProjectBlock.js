export default function ProjectBlock({ project }) {
  return (
    <div className="flex flex-col p-4 bg-white shadow-md rounded-lg">
      <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Lewa strona: Technologie w kategoriach */}
        <div>
          <h4 className="text-lg font-bold mb-2">Technologie:</h4>
          <div className="space-y-4">
            {Object.entries(project.technologies).map(([category, items], index) => (
              <div key={index}>
                <h5 className="text-md font-semibold">
                  {category.charAt(0).toUpperCase() + category.slice(1)}:
                </h5>
                <ul className="list-disc pl-5">
                  {items.map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Prawa strona: Opis, rola i czas trwania */}
        <div>
          <h4 className="text-lg font-bold mb-2">Opis projektu:</h4>
          <p className="text-gray-700 mb-4">{project.description}</p>
          <h4 className="text-lg font-bold mb-2">Rola:</h4>
          <p className="text-gray-700 mb-4">{project.role}</p>
          <h4 className="text-lg font-bold mb-2">Czas trwania:</h4>
          <p className="text-gray-700 mb-4">{project.duration}</p>
        </div>
      </div>

      {/* Metodologia */}
      {project.methodology && (
        <div className="mt-4">
          <h4 className="text-lg font-bold mb-2">Metodologia pracy:</h4>
          <p className="text-gray-700">{project.methodology}</p>
        </div>
      )}

      {/* Kluczowe osiągnięcia */}
      {project.key_contributions && project.key_contributions.length > 0 && (
        <div className="mt-4">
          <h4 className="text-lg font-bold mb-2">Kluczowe osiągnięcia:</h4>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            {project.key_contributions.map((contribution, idx) => (
              <li key={idx}>{contribution}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
