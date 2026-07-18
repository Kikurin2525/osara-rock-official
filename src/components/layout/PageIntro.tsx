import type { ReactNode } from 'react';

interface PageIntroProps {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
}

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="border-b border-black/10 bg-[#eeeeea]">
      <div className="site-container grid gap-8 py-16 sm:py-20 lg:grid-cols-[0.35fr_0.65fr] lg:gap-16 lg:py-24">
        <div>
          <p className="eyebrow">{eyebrow}</p>
        </div>
        <div>
          <h1 className="text-balance text-4xl font-bold leading-[1.25] text-primary sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-7 max-w-3xl text-pretty text-base leading-8 text-neutral-600 sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
