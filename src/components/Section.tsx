import { type ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  backgroundColor?: 'white' | 'blush';
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = '',
  backgroundColor = 'white',
}: SectionProps) {
  const bgClass = backgroundColor === 'blush' ? 'bg-blush' : 'bg-white';

  return (
    <section id={id} className={`py-16 md:py-24 ${bgClass} ${className}`} aria-labelledby={title ? `${id}-heading` : undefined}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="text-center mb-12 md:mb-16">
            <h2 id={`${id}-heading`} className="text-3xl md:text-4xl lg:text-5xl font-bold text-salon-black mb-4 font-serif">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg md:text-xl text-salon-black opacity-70 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
