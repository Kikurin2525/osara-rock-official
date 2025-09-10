'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'ホーム', href: '/' },
  { name: 'サービス', href: '/services' },
  { name: 'ニュース', href: '/news' },
  { name: 'ブログ', href: '/blog' },
  { name: '会社概要', href: '/about' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-neutral-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="メインナビゲーション">
        <div className="flex justify-between items-center h-16">
          {/* ロゴ */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">OR</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-lg font-semibold text-primary">
                  オサラロック
                </span>
                <p className="text-xs text-neutral-600 -mt-1">
                  Osara Rock Inc.
                </p>
              </div>
            </Link>
          </div>

          {/* デスクトップナビゲーション */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-neutral-700 hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Button asChild variant="blue" size="sm">
              <Link href="/contact">お問い合わせ</Link>
            </Button>
          </div>

          {/* モバイルメニューボタン */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "メニューを閉じる" : "メニューを開く"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* モバイルメニュー */}
        {mobileMenuOpen && (
          <div className="lg:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-neutral-100" role="menu">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-primary hover:bg-neutral-50 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <Button asChild variant="blue" className="w-full">
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    お問い合わせ
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}