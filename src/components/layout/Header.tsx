'use client';

import Link from 'next/link';
import Image from 'next/image';
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
            <Link href="/" className="flex items-center space-x-3">
              <Image 
                src="/logo1.png" 
                alt="Osara Rock" 
                width={120} 
                height={40} 
                priority
                className="h-8 sm:h-10 w-auto"
              />
              <div className="hidden sm:block">
                <span className="text-lg font-semibold text-black">
                  オサラロック
                </span>
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
            <Button as="a" href="/contact" className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">
              お問い合わせ
            </Button>
          </div>

          {/* モバイルメニューボタン */}
          <div className="lg:hidden">
            <Button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "メニューを閉じる" : "メニューを開く"}
              className="p-2 rounded-md hover:bg-gray-100"
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
                <Button as="a" href="/contact" className="w-full px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700" onClick={() => setMobileMenuOpen(false)}>
                  お問い合わせ
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}