import type { ReactNode } from 'react';
import { HeroImage } from './HeroImage';
import type assets from '@/data/hero-assets.json';

interface PageIntroProps {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  backgroundImage?: keyof typeof assets;
}

export function PageIntro({ eyebrow, title, description, backgroundImage }: PageIntroProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-primary/10 bg-neutral-100">
      {backgroundImage && (
        <>
          <HeroImage src={backgroundImage} alt="" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white/85 lg:bg-gradient-to-r lg:from-white/40 lg:via-white/70 lg:to-white/85" aria-hidden="true" />
        </>
      )}
      <div className={`site-container relative grid gap-8 py-16 sm:py-20 lg:grid-cols-[0.35fr_0.65fr] lg:gap-16 lg:py-24 ${backgroundImage ? 'min-h-[360px] content-center lg:min-h-[440px]' : ''}`}>
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
