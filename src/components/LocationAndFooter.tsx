import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import type { ClinicConfig } from '../config/clinicConfig';

interface LocationAndFooterProps {
  brand: ClinicConfig['brand'];
  navigation: ClinicConfig['navigation'];
  contact: ClinicConfig['contact'];
}

export function LocationAndFooter({
  brand,
  navigation,
  contact,
}: LocationAndFooterProps) {
  return (
    <>
      <section id="contato" className="py-16 sm:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Address, contacts & opening hours */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-8">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-deep-blue mb-3">
                  Localização e horários
                </h2>
                <p className="text-base leading-relaxed text-ink-secondary">
                  Atendimento presencial com hora marcada no Batel, em {brand.city}.
                </p>
              </div>

              <div className="space-y-5 border-t border-lavender-border pt-6">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-coral-action shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-deep-blue">{contact.addressStreet}</p>
                    <p className="text-sm text-ink-secondary">{contact.addressDistrict}</p>
                    <p className="text-xs text-ink-muted mt-1">{contact.addressReference}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-coral-action shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-deep-blue tabular-nums">
                      {contact.phoneDisplay}
                    </p>
                    <p className="text-xs text-ink-muted">
                      Atendimento telefônico e confirmação de agenda
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-coral-action shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-deep-blue break-all">
                      {contact.emailDisplay}
                    </p>
                    <p className="text-xs text-ink-muted">Canal de atendimento ao paciente</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-lavender-soft/75 border border-lavender-border p-5">
                <div className="flex items-center gap-2.5 mb-3">
                  <Clock className="w-4 h-4 text-deep-blue" aria-hidden="true" />
                  <h3 className="font-sans text-sm font-semibold text-deep-blue">
                    Horários de atendimento
                  </h3>
                </div>
                <dl className="space-y-2 text-sm">
                  {contact.hours.map((item) => (
                    <div
                      key={item.days}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-1 border-b last:border-b-0 border-lavender-border/70"
                    >
                      <dt className="text-ink-secondary">{item.days}</dt>
                      <dd className="font-medium tabular-nums text-deep-blue">{item.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* Clean neighborhood location card */}
            <div className="lg:col-span-6 flex">
              <div className="w-full rounded-2xl border border-lavender-border bg-lavender-soft/55 p-6 sm:p-8 flex flex-col justify-between gap-6">
                <div>
                  <p className="text-xs font-semibold text-coral-action mb-1">
                    {contact.addressDistrict}
                  </p>
                  <h3 className="font-display text-xl font-medium text-deep-blue">
                    Como chegar ao consultório
                  </h3>
                </div>

                <div
                  role="img"
                  aria-label="Mapa esquemático da região do Batel em Curitiba indicando a localização da Alinha Ortodontia"
                  className="relative flex-1 min-h-[260px] rounded-xl overflow-hidden bg-surface border border-lavender-border flex items-center justify-center"
                >
                  <svg
                    viewBox="0 0 600 360"
                    className="w-full h-full object-cover"
                    aria-hidden="true"
                  >
                    <rect width="600" height="360" fill="#FAF9FC" />
                    <rect x="44" y="36" width="140" height="90" rx="10" fill="#F2EFF9" />
                    <rect x="214" y="36" width="160" height="90" rx="10" fill="#EFEBF8" />
                    <rect x="404" y="36" width="152" height="90" rx="10" fill="#F2EFF9" />
                    <rect x="44" y="156" width="140" height="104" rx="10" fill="#EFEBF8" />
                    <rect x="214" y="156" width="160" height="104" rx="10" fill="#E6E0F4" />
                    <rect x="404" y="156" width="152" height="104" rx="10" fill="#F2EFF9" />
                    <rect x="44" y="286" width="220" height="44" rx="8" fill="#F2EFF9" />
                    <rect x="294" y="286" width="262" height="44" rx="8" fill="#EFEBF8" />

                    <path
                      d="M0 142 H600 M0 272 H600 M199 0 V360 M389 0 V360"
                      stroke="#DDD5EE"
                      strokeWidth="3"
                    />
                    <path
                      d="M24 316 Q290 220 576 92"
                      stroke="#15223D"
                      strokeOpacity="0.14"
                      strokeWidth="2.5"
                      strokeDasharray="6 6"
                      fill="none"
                    />

                    <circle cx="294" cy="208" r="28" fill="#B84735" fillOpacity="0.14" />
                    <circle cx="294" cy="208" r="11" fill="#B84735" />
                    <circle cx="294" cy="208" r="4" fill="#FFFFFF" />
                  </svg>

                  <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 bg-surface/95 backdrop-blur-sm border border-lavender-border rounded-xl px-4 py-3 shadow-sm max-w-xs">
                    <p className="text-xs font-semibold text-deep-blue">{brand.name}</p>
                    <p className="text-xs text-ink-secondary mt-0.5">
                      {contact.addressStreet} · {contact.addressDistrict}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-ink-muted leading-relaxed">
                  {contact.addressReference}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-deep-blue text-white py-14 sm:py-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/15">
            <div className="md:col-span-5 space-y-3">
              <p className="font-display text-2xl font-medium text-white">{brand.name}</p>
              <p className="text-sm text-white/75 leading-relaxed max-w-sm">
                Atendimento ortodôntico com escuta atenta, explicação clara das opções e solicitação de avaliação inicial em {brand.city}.
              </p>
            </div>

            <div className="md:col-span-3 space-y-3">
              <p className="text-xs font-semibold tracking-wide text-lavender-mist/80">
                Navegação
              </p>
              <ul className="space-y-2 text-sm">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4 space-y-3">
              <p className="text-xs font-semibold tracking-wide text-lavender-mist/80">
                Contato e endereço
              </p>
              <div className="space-y-1.5 text-sm text-white/80">
                <p>{contact.addressStreet}</p>
                <p>{contact.addressDistrict}</p>
                <p className="tabular-nums">{contact.phoneDisplay}</p>
                <p className="break-all">{contact.emailDisplay}</p>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs leading-relaxed text-white/70">
            <p className="max-w-2xl">{brand.ethicalFooterNote}</p>
            <p className="whitespace-nowrap shrink-0 text-white/85 font-medium">
              {brand.copyrightNotice}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
