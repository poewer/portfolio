export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-primary text-cream shadow-lg z-50">
      <div className="container mx-auto px-6 py-4 flex justify-center space-x-10">
        <a
          href="#projekty"
          className="text-cream hover:text-accent transition-colors duration-300"
        >
          Projekty
        </a>
        <a
          href="#doswiadczenie"
          className="text-cream hover:text-accent transition-colors duration-300"
        >
          Doświadczenie
        </a>
        <a
          href="#stack"
          className="text-cream hover:text-accent transition-colors duration-300"
        >
          Stack technologiczny
        </a>
        <a
          href="#rozwoj"
          className="text-cream hover:text-accent transition-colors duration-300"
        >
          Rozwój
        </a>
        <a
          href="#zainteresowania"
          className="text-cream hover:text-accent transition-colors duration-300"
        >
          Zainteresowania
        </a>
      </div>
    </nav>
  );
}
