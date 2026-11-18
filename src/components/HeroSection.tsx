import { ArrowRight, CalendarClock } from 'lucide-react';
import type { ClinicConfig } from '../config/clinicConfig';
import { SafeImage } from './SafeImage';

interface HeroSectionProps {
  hero: ClinicConfig['hero'];
}

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section id="topo" className="pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Editorial copy column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-sm font-medium text-ink-secondary tracking-wide mb-4">
              {hero.locationLine}
            </p>

            <h1 className="font-display text-[2.25rem] sm:text-[2.85rem] lg:text-[3.35rem] leading-[1.1] font-medium tracking-tight text-deep-blue mb-6">
              {hero.headline}
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-ink-secondary max-w-[54ch] mb-8">
              {hero.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <a
                href="#solicitar-avaliacao"
                className="inline-flex items-center justify-center gap-2.5 min-h-[48px] px-7 py-3 rounded-lg bg-coral-action hover:bg-coral-hover text-white text-sm sm:text-base font-semibold transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                <span>{hero.primaryCtaLabel}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#tratamentos"
                className="inline-flex items-center justify-center min-h-[48px] px-5 py-3 rounded-lg text-deep-blue hover:bg-lavender-soft text-sm sm:text-base font-medium transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                {hero.secondaryCtaLabel}
              </a>
            </div>

            <div className="flex items-start gap-2.5 pt-4 border-t border-lavender-border/80 max-w-lg">
              <CalendarClock
                className="w-4 h-4 text-coral-action shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <p className="text-xs sm:text-sm leading-relaxed text-ink-muted">
                {hero.scheduleConfirmationNote}
              </p>
            </div>
          </div>

          {/* Natural editorial portrait column */}
          <div className="lg:col-span-6 flex">
            <div className="w-full rounded-2xl overflow-hidden bg-lavender-soft border border-lavender-border/70 shadow-sm aspect-[4/3] lg:aspect-auto lg:min-h-[440px]">
              <SafeImage
                src={hero.image}
                alt={hero.imageAlt}
                loading="eager"
                fallbackTitle="Atendimento acolhedor em Curitiba"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Full-width foundation strip below split */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-lavender-border grid grid-cols-1 md:grid-cols-3 gap-8">
          {hero.pillars.map((pillar, index) => (
            <div key={pillar.title} className="space-y-1.5">
              <div className="flex items-baseline gap-2.5">
                <span className="text-xs font-semibold tabular-nums text-coral-action">
                  0{index + 1}.
                </span>
                <h2 className="font-sans text-base font-semibold text-deep-blue">
                  {pillar.title}
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-ink-secondary pl-7">
                {pillar.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
