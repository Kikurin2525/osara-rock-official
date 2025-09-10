import Link from 'next/link';
import { companyInfo } from '@/data/company';
import { Instagram, Twitter } from 'lucide-react';

const footerNavigation = [
  { name: 'ホーム', href: '/' },
  { name: 'サービス', href: '/services' },
  { name: 'ニュース', href: '/news' },
  { name: 'ブログ', href: '/blog' },
  { name: '会社概要', href: '/about' },
  { name: 'お問い合わせ', href: '/contact' },
  { name: 'プライバシーポリシー', href: '/privacy' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 会社情報 */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">OR</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary">
                  オサラロック
                </h3>
                <p className="text-xs text-neutral-600 -mt-1">
                  Osara Rock Inc.
                </p>
              </div>
            </div>
            <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
              思い出を受け止める、お皿のような場所づくり
            </p>
            <div className="space-y-2 text-sm text-neutral-600">
              <p>{companyInfo.address}</p>
              <p>TEL: {companyInfo.phone}</p>
              <p>Email: {companyInfo.email}</p>
            </div>
            
            {/* ソーシャルメディア */}
            <div className="flex space-x-3 mt-4">
              {companyInfo.socialMedia.twitter && (
                <a
                  href={companyInfo.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              )}
              {companyInfo.socialMedia.instagram && (
                <a
                  href={companyInfo.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          {/* ナビゲーション */}
          <div className="lg:col-span-2">
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-8">
              {footerNavigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-600 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-neutral-500">
              &copy; {currentYear} {companyInfo.name}. All rights reserved.
            </p>
            <p className="text-xs text-neutral-400 mt-2 sm:mt-0">
              Rock Your Story, We&apos;re the Plate.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}