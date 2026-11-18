import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { ClinicConfig } from '../config/clinicConfig';

interface FaqSectionProps {
  faq: ClinicConfig['faq'];
}

export function FaqSection({ faq }: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>(faq.items[0]?.id ?? null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="duvidas" className="py-16 sm:py-24 bg-canvas">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-deep-blue mb-4">
              {faq.title}
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-ink-secondary mb-6">
              {faq.subtitle}
            </p>
            <p className="text-sm text-ink-muted leading-relaxed">
              Ficou com alguma dúvida sobre seu caso específico? A conversa presencial na avaliação é o momento adequado para esclarecer com tranquilidade.
            </p>
          </div>

          <div className="lg:col-span-7 divide-y divide-lavender-border border-y border-lavender-border">
            {faq.items.map((item) => {
              const isOpen = openId === item.id;
              const panelId = `faq-panel-${item.id}`;
              const buttonId = `faq-button-${item.id}`;

              return (
                <div key={item.id}>
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleItem(item.id)}
                      className="w-full min-h-[56px] py-5 flex items-center justify-between gap-6 text-left group"
                    >
                      <span className="font-sans text-base sm:text-lg font-semibold text-deep-blue group-hover:text-coral-action transition-colors">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-deep-blue/70 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-coral-action' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!isOpen}
                    className="pb-6 pr-8"
                  >
                    <p className="text-sm sm:text-base leading-relaxed text-ink-secondary">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
