'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: '店舗一覧', href: '/spaces' },
  { name: 'サービス', href: '/services' },
  { name: 'ニュース', href: '/news' },
  { name: '会社概要', href: '/about' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-md">
      <nav className="site-container" aria-label="メインナビゲーション">
        <div className="flex h-[72px] items-center justify-between">
          <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
              <Image 
                src="/logo1.png" 
                alt="Osara Rock" 
                width={58}
                height={40}
                priority
                className="h-9 w-auto shrink-0 object-contain"
              />
              <div className="min-w-0 leading-none">
                <span className="block truncate text-sm font-bold text-black sm:text-base">
                  株式会社オサラロック
                </span>
                <span className="mt-1 hidden text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-500 sm:block">
                  Osara Rock Inc.
                </span>
              </div>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                aria-current={pathname === item.href ? 'page' : undefined}
                className={`inline-flex items-center gap-1 border-b-2 py-1 text-sm font-semibold transition-colors ${
                  pathname === item.href
                    ? 'border-primary-blue text-primary'
                    : 'border-transparent text-neutral-600 hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-semibold text-white transition-colors hover:bg-primary-blue"
            >
              お問い合わせ
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "メニューを閉じる" : "メニューを開く"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md text-primary transition-colors hover:bg-neutral-100"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-black/10 bg-white pb-5 pt-3 lg:hidden" id="mobile-menu">
            <div className="space-y-1" role="menu">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex min-h-12 items-center justify-between border-b border-neutral-100 px-2 text-base font-semibold text-neutral-700 transition-colors hover:text-primary-blue"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-4 flex min-h-12 w-full items-center justify-center rounded-md bg-primary text-sm font-semibold text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
