import { useState } from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  loading?: 'eager' | 'lazy';
}

export function SafeImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'Alinha Ortodontia',
  loading = 'lazy',
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-lavender-soft via-canvas to-lavender-mist text-deep-blue p-6 text-center ${className}`}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          aria-hidden="true"
          className="mb-3 text-deep-blue/50"
        >
          <rect x="4" y="8" width="32" height="24" rx="6" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M11 24C14.5 19.5 25.5 19.5 29 24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="20" cy="15" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <span className="font-display text-sm font-medium text-deep-blue/80">{fallbackTitle}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
