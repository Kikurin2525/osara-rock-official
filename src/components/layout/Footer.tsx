import Link from 'next/link';
import Image from 'next/image';
import { companyInfo } from '@/data/company';
import { ArrowUpRight } from 'lucide-react';

const footerNavigation = [
  { name: 'ホーム', href: '/' },
  { name: 'サービス', href: '/services' },
  { name: 'ニュース', href: '/news' },
  { name: '会社概要', href: '/about' },
  { name: 'お問い合わせ', href: '/contact' },
  { name: 'プライバシーポリシー', href: '/privacy' },
  { name: '利用規約', href: '/terms' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="site-container py-14 sm:py-18">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <Image 
                src="/logo1.png" 
                alt="Osara Rock" 
                width={58}
                height={40}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
              <div>
                <h2 className="text-base font-bold text-white">
                  株式会社オサラロック
                </h2>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">
                  Osara Rock Inc.
                </p>
              </div>
            </div>
            <p className="max-w-lg text-xl font-semibold leading-relaxed text-white sm:text-2xl">
              大切な時間に、心地よい場所を。
            </p>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/55">
              ダンス、撮影、パーティ、仕事。人の大切な時間を受け止める空間を運営しています。
            </p>
          </div>

          <nav aria-label="フッターナビゲーション">
            <ul className="grid grid-cols-2 gap-x-6 border-t border-white/15">
              {footerNavigation.map((item) => (
                <li key={item.name} className="border-b border-white/15">
                  <Link
                    href={item.href}
                    className="flex min-h-12 items-center justify-between text-sm font-medium text-white/70 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 grid gap-6 border-t border-white/15 pt-7 text-xs text-white/45 sm:grid-cols-2 sm:items-end">
          <address className="not-italic leading-6">
            <p>{companyInfo.address}</p>
            <p>
              <a href={`tel:${companyInfo.phone.replace(/-/g, '')}`} className="transition-colors hover:text-white">
                TEL {companyInfo.phone}
              </a>
              <span className="mx-2 text-white/20">/</span>
              <a href={`mailto:${companyInfo.email}`} className="transition-colors hover:text-white">
                {companyInfo.email}
              </a>
            </p>
          </address>
          <div className="sm:text-right">
            {companyInfo.socialMedia.tiktok && (
              <a
                href={companyInfo.socialMedia.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-2 inline-flex items-center gap-1 font-semibold text-white/70 transition-colors hover:text-white"
              >
                TikTok <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            )}
            <p>
              &copy; {currentYear} {companyInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
