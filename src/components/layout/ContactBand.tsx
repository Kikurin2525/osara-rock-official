import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ContactBandProps {
  title?: string;
  description?: string;
  showSpacesLink?: boolean;
}

export function ContactBand({
  title = '事業に関するお問い合わせ',
  description = 'スペースのご利用、輸出事業、教材に関するご質問など、お問い合わせはこちらからお送りください。',
  showSpacesLink = true,
}: ContactBandProps) {
  return (
    <section className="border-t border-black/10 bg-neutral-100 text-primary">
      <div className="site-container grid gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-neutral-600">Contact</p>
          <h2 className="mt-5 max-w-3xl text-balance text-3xl font-bold leading-[1.35] sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-pretty text-sm leading-7 text-neutral-700 sm:text-base">
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-between gap-8 rounded-md bg-primary px-6 text-sm font-semibold text-white transition-colors hover:bg-primary-muted"
          >
            お問い合わせ
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          {showSpacesLink && (
            <Link
              href="/spaces"
              className="inline-flex min-h-12 items-center justify-between gap-8 rounded-md border border-black/20 px-6 text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-white"
            >
              店舗一覧
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
