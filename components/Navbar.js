export default function Navbar() {
    return (
      <nav className="fixed top-0 w-full bg-gray-900 text-white shadow-lg z-50">
        <div className="container mx-auto px-6 py-4 flex justify-center space-x-10">
          <a href="#projekty" className="hover:text-gray-400">Projekty</a>
          <a href="#doswiadczenie" className="hover:text-gray-400">Doświadczenie</a>
          <a href="#stack" className="hover:text-gray-400">Stack technologiczny</a>
          <a href="#rozwoj" className="hover:text-gray-400">Rozwój</a>
          <a href="#zainteresowania" className="hover:text-gray-400">Zainteresowania</a>
        </div>
      </nav>
    );
  }
  