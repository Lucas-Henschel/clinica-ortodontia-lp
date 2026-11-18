import { useMemo, useRef, useState } from 'react';
import { Check, Copy, ExternalLink, MessageCircle } from 'lucide-react';
import type { ClinicConfig } from '../config/clinicConfig';

interface AssessmentRequestSectionProps {
  clinicName: string;
  city: string;
  requestForm: ClinicConfig['requestForm'];
  whatsappNumber: string;
  selectedInterest: string;
  onInterestChange: (value: string) => void;
}

function formatBrazilPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 11);
  if (digits.length === 0) return '';
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function normalizeWhatsappDigits(raw: string): string {
  const digits = raw.replace(/\D/g, '');
  if (!digits) return '';
  if (digits.startsWith('55') && digits.length >= 12) {
    return digits;
  }
  if (digits.length === 10 || digits.length === 11) {
    return `55${digits}`;
  }
  return digits;
}

export function AssessmentRequestSection({
  clinicName,
  city,
  requestForm,
  whatsappNumber,
  selectedInterest,
  onInterestChange,
}: AssessmentRequestSectionProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [period, setPeriod] = useState(requestForm.periodOptions[0].value);
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [submittedReady, setSubmittedReady] = useState(false);
  const [copied, setCopied] = useState(false);

  const nameInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);

  const cleanWhatsappDigits = useMemo(
    () => normalizeWhatsappDigits(whatsappNumber),
    [whatsappNumber]
  );
  const hasConfiguredWhatsapp = cleanWhatsappDigits.length >= 12;

  const generatedMessage = useMemo(() => {
    const safeName = name.trim() || '[Seu nome]';
    const safePhone = phone.trim() || '[Seu telefone]';
    return [
      `Olá! Gostaria de solicitar uma avaliação ortodôntica inicial na ${clinicName} (${city}).`,
      '',
      `Nome: ${safeName}`,
      `Telefone para retorno: ${safePhone}`,
      `Período preferido: ${period}`,
      `Interesse inicial: ${selectedInterest}`,
      '',
      'Observação: trata-se de uma solicitação de contato para agendamento, sujeita à confirmação de horário pela equipe.',
    ].join('\n');
  }, [clinicName, city, name, phone, period, selectedInterest]);

  const whatsappUrl = useMemo(() => {
    if (!hasConfiguredWhatsapp) return '';
    return `https://wa.me/${cleanWhatsappDigits}?text=${encodeURIComponent(generatedMessage)}`;
  }, [cleanWhatsappDigits, generatedMessage, hasConfiguredWhatsapp]);

  const validateForm = (): boolean => {
    const nextErrors: { name?: string; phone?: string } = {};
    const trimmedName = name.trim();
    const phoneDigits = phone.replace(/\D/g, '');

    if (trimmedName.length < 2) {
      nextErrors.name = 'Informe seu nome para preparar a solicitação.';
    }
    if (phoneDigits.length < 10 || phoneDigits.length > 11) {
      nextErrors.phone = 'Informe um telefone com DDD (10 ou 11 dígitos).';
    }

    setErrors(nextErrors);

    if (nextErrors.name) {
      nameInputRef.current?.focus();
      return false;
    }
    if (nextErrors.phone) {
      phoneInputRef.current?.focus();
      return false;
    }
    return true;
  };

  const handlePrepareRequest = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateForm()) {
      setSubmittedReady(false);
      return;
    }
    setSubmittedReady(true);
  };

  const handleCopyMessage = async () => {
    if (!validateForm()) return;
    setSubmittedReady(true);

    try {
      await navigator.clipboard.writeText(generatedMessage);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2600);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = generatedMessage;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2600);
    }
  };

  const isFormValidForLink =
    name.trim().length >= 2 &&
    phone.replace(/\D/g, '').length >= 10 &&
    phone.replace(/\D/g, '').length <= 11;

  return (
    <section
      id="solicitar-avaliacao"
      className="py-16 sm:py-24 bg-lavender-soft/80 border-y border-lavender-border"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-10 sm:mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-deep-blue mb-3">
            {requestForm.title}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-ink-secondary">
            {requestForm.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Minimal contact form */}
          <form
            onSubmit={handlePrepareRequest}
            noValidate
            className="lg:col-span-6 bg-surface rounded-2xl border border-lavender-border p-6 sm:p-8 space-y-6 shadow-sm"
          >
            <div>
              <label
                htmlFor="request-name"
                className="block text-sm font-semibold text-deep-blue mb-2"
              >
                Nome completo
              </label>
              <input
                ref={nameInputRef}
                id="request-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Ex.: Mariana Souza"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                }}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'request-name-error' : undefined}
                className={`w-full min-h-[46px] px-4 py-2.5 rounded-lg border text-base text-deep-blue bg-canvas/50 placeholder:text-ink-muted/70 transition-colors ${
                  errors.name
                    ? 'border-coral-action bg-coral-soft/30'
                    : 'border-lavender-border focus:border-deep-blue'
                }`}
              />
              {errors.name && (
                <p id="request-name-error" role="alert" className="mt-1.5 text-xs font-medium text-coral-action">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="request-phone"
                className="block text-sm font-semibold text-deep-blue mb-2"
              >
                Telefone / WhatsApp
              </label>
              <input
                ref={phoneInputRef}
                id="request-phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel-national"
                placeholder="(41) 99999-0000"
                value={phone}
                onChange={(e) => {
                  setPhone(formatBrazilPhone(e.target.value));
                  if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                }}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? 'request-phone-error' : undefined}
                className={`w-full min-h-[46px] px-4 py-2.5 rounded-lg border text-base tabular-nums text-deep-blue bg-canvas/50 placeholder:text-ink-muted/70 transition-colors ${
                  errors.phone
                    ? 'border-coral-action bg-coral-soft/30'
                    : 'border-lavender-border focus:border-deep-blue'
                }`}
              />
              {errors.phone && (
                <p id="request-phone-error" role="alert" className="mt-1.5 text-xs font-medium text-coral-action">
                  {errors.phone}
                </p>
              )}
            </div>

            <fieldset>
              <legend className="block text-sm font-semibold text-deep-blue mb-2.5">
                Período preferido para retorno ou consulta
              </legend>
              <div className="grid grid-cols-3 gap-2">
                {requestForm.periodOptions.map((opt) => {
                  const selected = period === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setPeriod(opt.value)}
                      className={`min-h-[44px] px-3 py-2 rounded-lg border text-sm font-medium transition-colors whitespace-nowrap ${
                        selected
                          ? 'bg-deep-blue text-white border-deep-blue'
                          : 'bg-canvas/60 text-deep-blue border-lavender-border hover:bg-lavender-soft'
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div>
              <label
                htmlFor="request-interest"
                className="block text-sm font-semibold text-deep-blue mb-2"
              >
                Opção de interesse
              </label>
              <select
                id="request-interest"
                name="interest"
                value={selectedInterest}
                onChange={(e) => onInterestChange(e.target.value)}
                className="w-full min-h-[46px] px-4 py-2.5 rounded-lg border border-lavender-border bg-canvas/50 text-base text-deep-blue focus:border-deep-blue"
              >
                {requestForm.interestOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="pt-2 space-y-3">
              <button
                type="submit"
                className="w-full min-h-[48px] px-6 py-3 rounded-lg bg-coral-action hover:bg-coral-hover text-white text-sm sm:text-base font-semibold transition-colors"
              >
                Preparar pedido de avaliação
              </button>

              {submittedReady && (
                <p role="status" className="text-xs sm:text-sm font-medium text-deep-blue flex items-center gap-2">
                  <Check className="w-4 h-4 text-coral-action shrink-0" aria-hidden="true" />
                  <span>
                    Solicitação pronta. Utilize o botão ao lado para enviar pelo WhatsApp ou copiar a mensagem.
                  </span>
                </p>
              )}

              <p className="text-xs leading-relaxed text-ink-muted">
                {requestForm.privacyNotice}
              </p>
            </div>
          </form>

          {/* Live WhatsApp preview & action panel */}
          <div className="lg:col-span-6 bg-surface rounded-2xl border border-lavender-border p-6 sm:p-8 space-y-6">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-lavender-border">
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-medium text-deep-blue mb-1">
                  Mensagem para o WhatsApp
                </h3>
                <p className="text-xs sm:text-sm text-ink-muted">
                  Solicitação sujeita à confirmação de disponibilidade pela recepção.
                </p>
              </div>
              <MessageCircle className="w-5 h-5 text-coral-action shrink-0 mt-1" aria-hidden="true" />
            </div>

            <div className="rounded-xl bg-lavender-soft/80 border border-lavender-border p-4 sm:p-5">
              <pre className="font-sans text-sm leading-relaxed text-deep-blue whitespace-pre-wrap break-words">
                {generatedMessage}
              </pre>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              {hasConfiguredWhatsapp && isFormValidForLink ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 min-h-[48px] px-5 py-3 rounded-lg bg-deep-blue hover:bg-deep-blue-muted text-white text-sm font-semibold transition-colors"
                >
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  <span>Enviar solicitação no WhatsApp</span>
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => validateForm()}
                  className="flex-1 inline-flex items-center justify-center gap-2 min-h-[48px] px-5 py-3 rounded-lg bg-deep-blue hover:bg-deep-blue-muted text-white text-sm font-semibold transition-colors"
                >
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  <span>Enviar solicitação no WhatsApp</span>
                </button>
              )}

              <button
                type="button"
                onClick={handleCopyMessage}
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-5 py-3 rounded-lg border border-lavender-border bg-canvas hover:bg-lavender-soft text-deep-blue text-sm font-semibold transition-colors whitespace-nowrap"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-coral-action" aria-hidden="true" />
                    <span>Copiada</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" aria-hidden="true" />
                    <span>Copiar mensagem</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
