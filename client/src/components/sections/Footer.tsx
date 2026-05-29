/**
 * Seção 15 - Footer
 */

const baseUrl = import.meta.env.BASE_URL;

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-14 sm:py-16">
      <div className="container">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <img
            src={`${baseUrl}images/POCUS ONLINE NOVO.png`}
            alt="POCUS Online"
            className="h-8 sm:h-10 w-auto opacity-90"
            loading="lazy"
          />

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <a href="#" className="opacity-55 hover:opacity-100 transition-opacity duration-200">
              Termos de Uso
            </a>
            <a href="#" className="opacity-55 hover:opacity-100 transition-opacity duration-200">
              Política de Privacidade
            </a>
            <a
              href="https://wa.me/5562981396751"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-55 hover:opacity-100 transition-opacity duration-200"
            >
              Contato
            </a>
          </div>

          <div className="divider-dark w-full max-w-xs" />

          {/* Copyright */}
          <p className="text-xs opacity-35 text-center tracking-wide">
            &copy; {new Date().getFullYear()} Pocus Online. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
