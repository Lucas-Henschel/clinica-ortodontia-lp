import { ShieldCheck } from 'lucide-react';
import type { ClinicConfig } from '../config/clinicConfig';
import { SafeImage } from './SafeImage';

interface CareJourneySectionProps {
  journey: ClinicConfig['journey'];
  firstVisit: ClinicConfig['firstVisit'];
}

export function CareJourneySection({ journey, firstVisit }: CareJourneySectionProps) {
  return (
    <section id="etapas" className="py-16 sm:py-24 bg-canvas">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Steps of care */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-deep-blue mb-4">
                {journey.title}
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-ink-secondary">
                {journey.subtitle}
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-lavender-border bg-lavender-soft aspect-[16/10]">
              <SafeImage
                src={journey.image}
                alt={journey.imageAlt}
                fallbackTitle="Ambiente de acolhimento"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 divide-y divide-lavender-border border-y border-lavender-border">
            {journey.steps.map((step) => (
              <div key={step.number} className="py-7 sm:py-8 first:pt-6 last:pb-6">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-baseline">
                  <div className="sm:col-span-2">
                    <span className="font-display text-2xl font-medium tabular-nums text-coral-action">
                      {step.number}.
                    </span>
                  </div>
                  <div className="sm:col-span-10">
                    <h3 className="font-display text-xl sm:text-2xl font-medium text-deep-blue mb-2">
                      {step.title}
                    </h3>
                    <p className="text-base leading-relaxed text-ink-secondary">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What to bring to the first appointment */}
        <div className="mt-16 sm:mt-24 rounded-2xl bg-lavender-soft border border-lavender-border p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-medium text-deep-blue mb-3">
                  {firstVisit.title}
                </h3>
                <p className="text-base leading-relaxed text-ink-secondary">
                  {firstVisit.subtitle}
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-lavender-border/80">
                <ShieldCheck
                  className="w-5 h-5 text-deep-blue shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <p className="text-xs sm:text-sm leading-relaxed text-ink-secondary">
                  {firstVisit.privacyAssurance}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {firstVisit.items.map((item, idx) => (
                <div
                  key={item.title}
                  className="bg-surface rounded-xl border border-lavender-border/80 p-5 sm:p-6"
                >
                  <p className="text-xs font-semibold tabular-nums text-coral-action mb-2">
                    Item 0{idx + 1}
                  </p>
                  <h4 className="font-sans text-base font-semibold text-deep-blue mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-ink-secondary">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
