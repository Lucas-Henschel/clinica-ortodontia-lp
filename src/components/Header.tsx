import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { ClinicConfig } from '../config/clinicConfig';

interface HeaderProps {
  brandName: string;
  navigation: ClinicConfig['navigation'];
  ctaLabel: string;
}

export function Header({ brandName, navigation, ctaLabel }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-canvas/92 backdrop-blur-md border-b border-lavender-border/80">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between gap-8">
        {/* Zone 1: Single clean wordmark */}
        <a
          href="#topo"
          className="font-display text-xl sm:text-[1.35rem] font-medium tracking-tight text-deep-blue whitespace-nowrap shrink-0 hover:opacity-85 transition-opacity"
        >
          {brandName}
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-7">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-secondary hover:text-deep-blue underline-offset-8 hover:underline decoration-coral-accent/70 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#solicitar-avaliacao"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-coral-action hover:bg-coral-hover text-white text-sm font-semibold transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            {ctaLabel}
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="menu-mobile"
            aria-label={mobileOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-lavender-border text-deep-blue hover:bg-lavender-soft transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          id="menu-mobile"
          aria-label="Navegação móvel"
          className="md:hidden border-t border-lavender-border bg-surface px-5 py-4 space-y-1"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className="flex items-center min-h-[44px] px-3 rounded-lg text-base font-medium text-deep-blue hover:bg-lavender-soft transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#solicitar-avaliacao"
              onClick={handleLinkClick}
              className="flex items-center justify-center min-h-[44px] w-full rounded-lg bg-coral-action hover:bg-coral-hover text-white text-sm font-semibold transition-colors"
            >
              {ctaLabel}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
