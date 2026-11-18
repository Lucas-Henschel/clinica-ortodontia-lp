import { useState } from 'react';
import { Check } from 'lucide-react';
import type { ClinicConfig } from '../config/clinicConfig';
import { SafeImage } from './SafeImage';

interface TreatmentsSectionProps {
  treatments: ClinicConfig['treatments'];
  comparison: ClinicConfig['comparison'];
  onSelectInterest: (interestValue: string) => void;
}

const interestMapping: Record<string, string> = {
  'aparelho-fixo': 'Aparelho fixo',
  'alinhadores-transparentes': 'Alinhadores transparentes',
  acompanhamento: 'Acompanhamento ou revisão de contenção',
};

export function TreatmentsSection({
  treatments,
  comparison,
  onSelectInterest,
}: TreatmentsSectionProps) {
  const [activeId, setActiveId] = useState<string>(treatments.items[0].id);
  const [mobileCompareTab, setMobileCompareTab] = useState<'fixed' | 'aligners' | 'monitoring'>('fixed');

  const activeTreatment =
    treatments.items.find((item) => item.id === activeId) ?? treatments.items[0];

  const handleRequestWithInterest = (treatmentId: string) => {
    const mapped = interestMapping[treatmentId];
    if (mapped) {
      onSelectInterest(mapped);
    }
    const target = document.getElementById('solicitar-avaliacao');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="tratamentos" className="py-16 sm:py-24 bg-lavender-soft/65 border-y border-lavender-border/70">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-10 sm:mb-12">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-deep-blue mb-4">
              {treatments.sectionTitle}
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-ink-secondary max-w-[62ch]">
              {treatments.sectionIntro}
            </p>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
              {treatments.disclaimer}
            </p>
          </div>
        </div>

        {/* 3 accessible selector cards (all titles & summaries immediately visible) */}
        <div
          role="tablist"
          aria-label="Opções de cuidado ortodôntico"
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
        >
          {treatments.items.map((item) => {
            const isActive = item.id === activeTreatment.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`tab-${item.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${item.id}`}
                onClick={() => setActiveId(item.id)}
                className={`text-left p-5 sm:p-6 rounded-xl border transition-colors duration-150 focus-visible:outline-coral-action ${
                  isActive
                    ? 'bg-surface border-deep-blue shadow-sm'
                    : 'bg-surface/65 border-lavender-border hover:bg-surface hover:border-deep-blue/40'
                }`}
              >
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span
                    className={`text-xs font-semibold tabular-nums ${
                      isActive ? 'text-coral-action' : 'text-ink-muted'
                    }`}
                  >
                    {item.number} · {item.kicker}
                  </span>
                </div>
                <h3 className="font-display text-xl font-medium text-deep-blue mb-2">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-secondary line-clamp-3">
                  {item.summary}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active treatment detailed panel */}
        <div
          role="tabpanel"
          id={`panel-${activeTreatment.id}`}
          aria-labelledby={`tab-${activeTreatment.id}`}
          className="bg-surface rounded-2xl border border-lavender-border overflow-hidden shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-5 aspect-[4/3] lg:aspect-auto lg:min-h-[380px] bg-lavender-mist/40">
              <SafeImage
                src={activeTreatment.image}
                alt={activeTreatment.imageAlt}
                fallbackTitle={activeTreatment.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between gap-6">
              <div>
                <p className="text-xs font-semibold text-coral-action tracking-wide mb-2">
                  {activeTreatment.number} · {activeTreatment.kicker}
                </p>
                <h3 className="font-display text-2xl sm:text-3xl font-medium text-deep-blue mb-4">
                  {activeTreatment.title}
                </h3>
                <p className="text-base leading-relaxed text-ink-secondary mb-6">
                  {activeTreatment.summary}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-5 border-y border-lavender-border/80 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-deep-blue mb-1.5">
                      Dinâmica de uso
                    </h4>
                    <p className="text-sm leading-relaxed text-ink-secondary">
                      {activeTreatment.howItWorks}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-deep-blue mb-1.5">
                      Cuidados diários
                    </h4>
                    <p className="text-sm leading-relaxed text-ink-secondary">
                      {activeTreatment.dailyCare}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-6">
                  {activeTreatment.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-ink-secondary">
                      <Check
                        className="w-4 h-4 text-coral-action shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <p className="text-xs leading-relaxed text-ink-muted max-w-md">
                  {activeTreatment.individualNote}
                </p>
                <button
                  type="button"
                  onClick={() => handleRequestWithInterest(activeTreatment.id)}
                  className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-lg bg-deep-blue hover:bg-deep-blue-muted text-white text-sm font-medium transition-colors whitespace-nowrap shrink-0"
                >
                  Tirar dúvidas na avaliação
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Informative comparison block */}
        <div className="mt-16 sm:mt-20">
          <div className="max-w-3xl mb-8">
            <h3 className="font-display text-2xl sm:text-3xl font-medium text-deep-blue mb-3">
              {comparison.title}
            </h3>
            <p className="text-base leading-relaxed text-ink-secondary">
              {comparison.subtitle}
            </p>
          </div>

          {/* Mobile selector for comparison */}
          <div className="md:hidden mb-4">
            <div className="grid grid-cols-3 gap-1 p-1 bg-lavender-mist/70 rounded-xl">
              <button
                type="button"
                onClick={() => setMobileCompareTab('fixed')}
                className={`min-h-[40px] px-2 py-2 text-xs font-semibold rounded-lg transition-colors truncate ${
                  mobileCompareTab === 'fixed'
                    ? 'bg-surface text-deep-blue shadow-sm'
                    : 'text-ink-secondary'
                }`}
              >
                Aparelho fixo
              </button>
              <button
                type="button"
                onClick={() => setMobileCompareTab('aligners')}
                className={`min-h-[40px] px-2 py-2 text-xs font-semibold rounded-lg transition-colors truncate ${
                  mobileCompareTab === 'aligners'
                    ? 'bg-surface text-deep-blue shadow-sm'
                    : 'text-ink-secondary'
                }`}
              >
                Alinhadores
              </button>
              <button
                type="button"
                onClick={() => setMobileCompareTab('monitoring')}
                className={`min-h-[40px] px-2 py-2 text-xs font-semibold rounded-lg transition-colors truncate ${
                  mobileCompareTab === 'monitoring'
                    ? 'bg-surface text-deep-blue shadow-sm'
                    : 'text-ink-secondary'
                }`}
              >
                Acompanhamento
              </button>
            </div>

            <div className="mt-3 bg-surface rounded-xl border border-lavender-border divide-y divide-lavender-border">
              {comparison.rows.map((row) => (
                <div key={row.criterion} className="p-4">
                  <p className="text-xs font-semibold text-ink-muted mb-1">{row.criterion}</p>
                  <p className="text-sm leading-relaxed text-deep-blue">
                    {mobileCompareTab === 'fixed'
                      ? row.fixedBraces
                      : mobileCompareTab === 'aligners'
                        ? row.clearAligners
                        : row.monitoring}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop comparison table */}
          <div className="hidden md:block bg-surface rounded-2xl border border-lavender-border overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-lavender-border bg-lavender-soft/50">
                  <th scope="col" className="py-4 px-6 text-xs font-semibold text-ink-muted w-[22%]">
                    Aspecto geral
                  </th>
                  <th scope="col" className="py-4 px-6 text-sm font-semibold text-deep-blue w-[26%]">
                    Aparelhos fixos
                  </th>
                  <th scope="col" className="py-4 px-6 text-sm font-semibold text-deep-blue w-[26%]">
                    Alinhadores transparentes
                  </th>
                  <th scope="col" className="py-4 px-6 text-sm font-semibold text-deep-blue w-[26%]">
                    Acompanhamento ortodôntico
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-lavender-border/80">
                {comparison.rows.map((row) => (
                  <tr key={row.criterion} className="align-top">
                    <th scope="row" className="py-4 px-6 text-sm font-semibold text-deep-blue">
                      {row.criterion}
                    </th>
                    <td className="py-4 px-6 text-sm leading-relaxed text-ink-secondary">
                      {row.fixedBraces}
                    </td>
                    <td className="py-4 px-6 text-sm leading-relaxed text-ink-secondary">
                      {row.clearAligners}
                    </td>
                    <td className="py-4 px-6 text-sm leading-relaxed text-ink-secondary">
                      {row.monitoring}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs sm:text-sm text-ink-muted leading-relaxed">
            {comparison.footerNote}
          </p>
        </div>
      </div>
    </section>
  );
}
