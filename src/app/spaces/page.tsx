import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { ContactBand } from '@/components/layout/ContactBand';
import { PageIntro } from '@/components/layout/PageIntro';
import { spaces } from '@/data/spaces';

export const metadata: Metadata = {
  title: '店舗一覧',
  description:
    'レンタルダンススタジオDAYS、フォトスタジオTiarina、パーティスペース、ワークスペースなど、株式会社オサラロックが運営する全店舗と予約ページの一覧です。',
  alternates: {
    canonical: 'https://osara-rock.com/spaces',
  },
};

export default function SpacesPage() {
  const totalRooms = spaces.reduce((sum, space) => sum + space.locations.length, 0);

  return (
    <div className="flex flex-col">
      <PageIntro
        eyebrow="Spaces"
        title="店舗一覧"
        description={`現在、4ブランド${totalRooms}室を運営しています。空き状況・料金・設備の詳細は、各店舗の予約ページでご確認いただけます。`}
      />

      {spaces.map((space, index) => (
        <section
          key={space.id}
          id={space.id}
          className={`section-space scroll-mt-20 ${index % 2 === 1 ? 'bg-neutral-50' : 'bg-white'}`}
          aria-label={`${space.name}の店舗一覧`}
        >
          <div className="site-container grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:gap-16">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-primary-blue">
                {space.category}
              </p>
              <h2 className="mt-3 text-2xl font-bold leading-snug text-primary sm:text-3xl">{space.name}</h2>
              <p className="mt-2 text-sm font-semibold text-neutral-500">{space.categoryJa}</p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-600">{space.description}</p>
              <div className="relative mt-7 aspect-[16/10] overflow-hidden rounded-md bg-neutral-100">
                <Image
                  src={space.image}
                  alt={`${space.name}の施設内観`}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <ul className="self-start border-t border-black/15">
              {space.locations.map((location) => (
                <li key={location.name} className="border-b border-black/15">
                  <a
                    href={location.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-h-14 items-center gap-4 py-3"
                  >
                    <span className="text-sm font-bold text-primary transition-colors group-hover:text-primary-blue sm:text-base">
                      {location.name}
                    </span>
                    {location.hours && (
                      <span className="text-xs font-medium text-neutral-500">営業時間 {location.hours}</span>
                    )}
                    <span className="ml-auto inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold text-neutral-500 transition-colors group-hover:text-primary-blue">
                      予約ページ
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <ContactBand showSpacesLink={false} />
    </div>
  );
}
