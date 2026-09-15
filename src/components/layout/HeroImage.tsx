import assets from '@/data/hero-assets.json';

interface HeroImageProps {
  src: keyof typeof assets;
  alt: string;
  className?: string;
}

export function HeroImage({ src, alt, className = '' }: HeroImageProps) {
  const image = assets[src];

  // Variants are generated ahead of time; bypass request-time image conversion.
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={image.src}
      srcSet={image.srcSet}
      sizes="100vw"
      width={image.width}
      height={image.height}
      alt={alt}
      loading="eager"
      fetchPriority="high"
      decoding="async"
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
    />
  );
}
