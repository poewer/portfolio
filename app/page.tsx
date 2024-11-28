import Navbar from '@/components/Navbar';
import ProjectBlock from '@/components/ProjectBlock';
import { projects } from '@/utils/projects';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="pt-20"> {/* Dodaj padding, aby treść nie nachodziła na navbar */}
        <section id="projekty" className="min-h-screen bg-gray-100 p-6 pt-20 flex flex-col">
          <h2 className="text-3xl font-bold mb-6 text-center">Projekty</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectBlock key={index} project={project} />
            ))}
          </div>
        </section>


        <section id="doswiadczenie" className="min-h-screen bg-white p-6 pt-20">
          <h2 className="text-3xl font-bold mb-4">Doświadczenie</h2>
          <p className="text-gray-700">Opis mojego doświadczenia zawodowego.</p>
        </section>

        <section id="stack" className="min-h-screen bg-gray-100 p-6">
          <h2 className="text-3xl font-bold mb-4">Stack technologiczny</h2>
          <p className="text-gray-700">Technologie, z którymi pracuję.</p>
        </section>

        <section id="rozwoj" className="min-h-screen bg-white p-6">
          <h2 className="text-3xl font-bold mb-4">Rozwój</h2>
          <p className="text-gray-700">Moje cele rozwojowe i naukowe.</p>
        </section>

        <section id="zainteresowania" className="min-h-screen bg-gray-100 p-6">
          <h2 className="text-3xl font-bold mb-4">Zainteresowania</h2>
          <p className="text-gray-700">Moje hobby i pasje.</p>
        </section>
      </main>
    </div>
  );
}
