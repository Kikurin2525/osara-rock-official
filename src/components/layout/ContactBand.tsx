import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface ContactBandProps {
  title?: string;
  description?: string;
  showSpacesLink?: boolean;
}

export function ContactBand({
  title = '場所の運営について、相談しませんか。',
  description = '新規開業、運営改善、法人利用など、内容が固まっていない段階でもご相談いただけます。',
  showSpacesLink = true,
}: ContactBandProps) {
  return (
    <section className="bg-primary-blue text-white">
      <div className="site-container grid gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/70">Contact</p>
          <h2 className="mt-5 max-w-3xl text-balance text-3xl font-bold leading-[1.35] sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-pretty text-sm leading-7 text-white/80 sm:text-base">
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-between gap-8 rounded-md bg-primary px-6 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-primary"
          >
            お問い合わせ
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          {showSpacesLink && (
            <a
              href="https://linktr.ee/osara_rock"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-between gap-8 rounded-md border border-white/50 px-6 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-primary"
            >
              運営スペース一覧
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
