import { UserRound } from 'lucide-react';
import type { ClinicConfig } from '../config/clinicConfig';

interface TeamAndTrustSectionProps {
  team: ClinicConfig['team'];
  ethicsBlock: ClinicConfig['ethicsBlock'];
}

export function TeamAndTrustSection({ team, ethicsBlock }: TeamAndTrustSectionProps) {
  return (
    <section id="equipe" className="py-16 sm:py-24 bg-surface border-y border-lavender-border/70">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-10 sm:mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-deep-blue mb-3">
            {team.title}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-ink-secondary">
            {team.subtitle}
          </p>
        </div>

        {/* Team clinical roster */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {team.members.map((member) => (
            <article
              key={member.id}
              className="rounded-2xl border border-lavender-border bg-canvas p-6 sm:p-8 flex flex-col justify-between gap-5"
            >
              <div className="flex items-start gap-4">
                <div
                  aria-hidden="true"
                  className="w-14 h-14 rounded-xl bg-lavender-mist/80 text-deep-blue flex items-center justify-center shrink-0 border border-lavender-border"
                >
                  <UserRound className="w-6 h-6 text-deep-blue/75" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-coral-action mb-1">
                    {member.specialty}
                  </p>
                  <h3 className="font-display text-xl sm:text-2xl font-medium text-deep-blue leading-snug">
                    {member.name}
                  </h3>
                </div>
              </div>

              <div className="flex items-baseline justify-between gap-2 pt-4 border-t border-lavender-border/80">
                <span className="text-xs font-semibold text-ink-muted">Registro profissional</span>
                <span className="text-sm font-semibold tabular-nums text-deep-blue">
                  {member.registry}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-ink-secondary pt-2 border-t border-lavender-border/60">
                {member.bio}
              </p>
            </article>
          ))}
        </div>

        {/* Ethical commitment block */}
        <div className="rounded-2xl bg-deep-blue text-white p-7 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            <div className="lg:col-span-8">
              <h3 className="font-display text-2xl sm:text-[1.75rem] font-medium text-white mb-3">
                {ethicsBlock.title}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-white/80 max-w-[65ch]">
                {ethicsBlock.description}
              </p>
            </div>
            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-white/15 pt-5 lg:pt-0 lg:pl-8 space-y-2.5">
              {ethicsBlock.details.map((detail) => (
                <p key={detail} className="text-sm text-lavender-mist flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-coral-accent shrink-0" aria-hidden="true" />
                  <span>{detail}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
