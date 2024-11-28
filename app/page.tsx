import Navbar from "@/components/Navbar";
import ProjectsWithCircles from "@/components/ProjectsWithCircles";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="pt-20"> {/* Dodaj padding, aby treść nie nachodziła na navbar */}

        {/* Sekcja Projekty */}
        <section id="projekty" className="min-h-screen bg-cream p-6 pt-20 flex flex-col">
          <ProjectsWithCircles />
        </section>

        {/* Sekcja Doświadczenie */}
        <section id="doswiadczenie" className="min-h-screen bg-highlight p-6">
          <h2 className="text-4xl font-bold text-cream mb-6 text-center">Doświadczenie</h2>
          <div className="text-cream text-lg text-center max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <p>
              Opis mojego doświadczenia zawodowego w zakresie integracji systemów i programowania backendowego.
            </p>
            <p>
              Praca przy projektach opartych o technologie IBM, Python, oraz mikroserwisy z wykorzystaniem API.
            </p>
          </div>
        </section>

        {/* Sekcja Stack technologiczny */}
        <section id="stack" className="min-h-screen bg-secondary p-6">
          <h2 className="text-4xl font-bold text-primary mb-6 text-center">Stack technologiczny</h2>
          <div className="text-primary text-lg text-center max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <p>
              Technologie, z którymi pracuję, obejmują Python, Docker, FastAPI, oraz RabbitMQ.
            </p>
            <p>
              Współpracuję również z bazami danych, takimi jak PostgreSQL i Elasticsearch, oraz narzędziami CI/CD, jak Jenkins.
            </p>
          </div>
        </section>

        {/* Sekcja Rozwój */}
        <section id="rozwoj" className="min-h-screen bg-accent p-6">
          <h2 className="text-4xl font-bold text-cream mb-6 text-center">Rozwój</h2>
          <div className="text-cream text-lg text-center max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <p>
              Moje cele rozwojowe obejmują naukę nowych technologii integracyjnych oraz poszerzanie wiedzy z zakresu sztucznej inteligencji.
            </p>
            <p>
              Dążę do zdobycia pozycji starszego programisty lub architekta oprogramowania, koncentrując się na projektowaniu mikroserwisów.
            </p>
          </div>
        </section>

        {/* Sekcja Zainteresowania */}
        <section id="zainteresowania" className="min-h-screen bg-turqoise p-6">
          <h2 className="text-4xl font-bold text-primary mb-6 text-center">Zainteresowania</h2>
          <div className="text-primary text-lg text-center max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <p>
              Moje hobby obejmuje czytanie książek technologicznych, bieganie, oraz eksplorację nowych narzędzi programistycznych.
            </p>
            <p>
              W wolnym czasie rozwijam swoje projekty open-source oraz uczę się nowych języków programowania.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}
