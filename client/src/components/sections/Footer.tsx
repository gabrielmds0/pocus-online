/**
 * Seção 15 - Footer
 */

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 sm:py-14">
      <div className="container">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="inline-flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-accent" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" strokeLinecap="round" />
                <path d="M8 12c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-base font-bold tracking-tight">POCUS Online</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">
              Termos de Uso
            </a>
            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">
              Política de Privacidade
            </a>
            <a
              href="https://wa.me/5562981396751"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              Contato
            </a>
          </div>

          <div className="divider-dark w-full max-w-xs" />

          {/* Copyright */}
          <p className="text-xs opacity-40 text-center">
            &copy; {new Date().getFullYear()} Pocus Online. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
