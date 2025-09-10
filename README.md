# 株式会社オサラロック - コーポレートサイト

## 📖 概要

株式会社オサラロックの公式Webサイトです。「思い出を受け止める、お皿のような場所づくり」をコンセプトに、レンタルスペース事業を展開する企業のコーポレートサイトを Next.js で構築しました。

- **URL**: [https://osara-rock.com](https://osara-rock.com)
- **企業理念**: Rock Your Story, We're the Plate.

## 🚀 技術スタック

### フレームワーク・ライブラリ
- **Next.js 15** - React メタフレームワーク (App Router)
- **React 19** - UI ライブラリ
- **TypeScript** - 型安全なJavaScript

### スタイリング
- **Tailwind CSS 4** - ユーティリティファーストCSS
- **class-variance-authority** - バリアント管理
- **clsx** - 条件付きクラス名生成

### UI・UX
- **Lucide React** - アイコンライブラリ
- **Google Fonts** (Inter + Noto Sans JP) - 日本語対応フォント

### バリデーション・開発ツール
- **Zod** - スキーマバリデーション
- **ESLint** - コード品質管理
- **Bundle Analyzer** - パフォーマンス分析

## 🎯 主要機能

### ページ構成
- **ホームページ** (`/`) - 企業紹介、サービス概要、統計情報
- **会社概要** (`/about`) - ミッション・ビジョン、沿革、代表メッセージ
- **サービス** (`/services`) - レンタルスペース事業、運営代行・コンサルティング
- **ブランド紹介** (`/brands`) - 4つのブランド（DAYS、パーティスペース、Tiarina、ワークスペース）
- **拠点一覧** (`/locations`) - 全国の店舗情報（フィルタリング機能付き）
- **ニュース** (`/news`) - 最新情報、キャンペーン情報
- **採用情報** (`/recruit`) - 求人情報、企業文化
- **お問い合わせ** (`/contact`) - フォーム機能、会社情報
- **プライバシーポリシー** (`/privacy`) - 個人情報取扱方針
- **利用規約** (`/terms`) - サービス利用規約

### 技術的特徴
- **静的サイト生成 (SSG)** - 高速なページロード
- **レスポンシブデザイン** - モバイルファーストアプローチ
- **フォームバリデーション** - Zod による堅牢な入力検証
- **SEO最適化** - 構造化データ、メタデータ、サイトマップ
- **アクセシビリティ対応** - WCAG準拠、キーボードナビゲーション

## 🔧 セットアップ・開発

### 前提条件
- Node.js 18.x 以上
- npm または yarn

### インストール
```bash
# リポジトリクローン
git clone https://github.com/your-username/osara-rock-site.git
cd osara-rock-site

# 依存関係インストール
npm install
```

### 開発サーバー起動
```bash
npm run dev
```
開発サーバーが http://localhost:3000 (または次に利用可能なポート) で起動します。

### 利用可能なコマンド
```bash
# 開発サーバー起動 (Turbopack使用)
npm run dev

# プロダクションビルド
npm run build

# プロダクションサーバー起動
npm start

# コードの品質チェック
npm run lint

# バンドルサイズ分析
npm run analyze
```

## 📁 プロジェクト構造

```
src/
├── app/                    # App Router ページ
│   ├── (pages)/           # ページコンポーネント
│   ├── api/               # API ルート
│   ├── globals.css        # グローバルスタイル
│   └── layout.tsx         # ルートレイアウト
├── components/            # 再利用可能コンポーネント
│   ├── ui/               # UI基本コンポーネント
│   └── layout/           # レイアウトコンポーネント
└── data/                 # 静的データモデル
    ├── brands.ts         # ブランド情報
    ├── locations.ts      # 拠点情報
    ├── news.ts          # ニュース記事
    └── company.ts       # 会社情報
```

## 🎨 デザイン仕様

### カラーパレット
- **プライマリ**: `#111827` (Gray-900)
- **アクセント**: `#f472b6` (Pink-400)
- **背景**: `#ffffff` / `#f9fafb` (White / Gray-50)

### タイポグラフィ
- **日本語**: Noto Sans JP
- **英語**: Inter
- **ウェイト**: 400, 500, 600, 700

### レスポンシブ設計
- **モバイル**: 〜768px
- **タブレット**: 768px〜1024px
- **デスクトップ**: 1024px〜

## 🚀 パフォーマンス

### Core Web Vitals 目標値
- **LCP** (Largest Contentful Paint): ≤ 2.5秒
- **CLS** (Cumulative Layout Shift): ≤ 0.1
- **TTI** (Time to Interactive): ≤ 3.5秒

### 最適化実施内容
- **バンドルサイズ**: First Load JS 128kB（目標150kB以下 ✅）
- **画像最適化**: WebP/AVIF形式対応
- **フォント最適化**: Google Fonts の効率的ロード
- **静的生成**: 全ページでSSG実装
- **コード分割**: 動的インポート活用

## ♿ アクセシビリティ

WCAG 2.1 AA レベルに準拠した実装：

- **セマンティックHTML**: 適切な見出し構造、ランドマーク要素
- **キーボードナビゲーション**: 全機能でキーボード操作可能
- **スクリーンリーダー対応**: ARIA属性、スキップリンク
- **色のコントラスト**: 4.5:1以上の比率を確保
- **フォーカス管理**: 視覚的なフォーカスインジケーター
- **動きの配慮**: `prefers-reduced-motion` 対応

## 🔍 SEO・技術的特徴

### メタデータ最適化
- ページ別最適化されたタイトル・description
- Open Graph プロパティ
- Twitter Card対応
- Canonical URL設定

### 構造化データ
- Organization schema
- WebSite schema
- JSON-LD形式での実装

### その他のSEO対策
- 自動生成サイトマップ
- robots.txt設定
- レスポンシブ対応
- ページ速度最適化

## 🔒 セキュリティ

実装済みのセキュリティヘッダー：
- **HSTS** (HTTP Strict Transport Security)
- **CSP** (Content Security Policy) 準備
- **X-Frame-Options**: DENY
- **X-Content-Type-Options**: nosniff

## 📞 お問い合わせフォーム

- フロントエンド・バックエンドでの二重バリデーション
- スパム対策機能準備済み
- エラーハンドリング・UXを重視した設計
- 送信状況のリアルタイム表示

## 🚀 デプロイ

### Vercel (推奨)
```bash
# Vercel CLI でデプロイ
npm i -g vercel
vercel --prod
```

### その他のプラットフォーム
- Netlify
- AWS Amplify
- Cloudflare Pages

## 📈 今後の拡張予定

### 機能面
- [ ] 多言語対応 (i18n)
- [ ] 予約システム統合
- [ ] CMS連携（Strapi / Sanity）
- [ ] オンライン決済機能

### 技術面
- [ ] PWA対応
- [ ]画像最適化強化
- [ ] E2Eテスト導入 (Playwright)
- [ ] コンポーネントテスト (Testing Library)

### 運用・マーケティング
- [ ] Google Analytics 4 統合
- [ ] A/Bテスト機能
- [ ] メール配信システム連携
- [ ] チャットボット導入

## 🤝 貢献・開発

### コーディング規約
- TypeScript strict モード
- ESLint + Prettier によるコード整形
- コミット前のlint実行
- セマンティックなコミットメッセージ

### ブランチ戦略
- `main`: プロダクション環境
- `develop`: 開発環境
- `feature/*`: 機能開発ブランチ

## 📄 ライセンス

このプロジェクトは株式会社オサラロックの所有物です。

## 📬 連絡先

- **会社名**: 株式会社オサラロック (Osara Rock Inc.)
- **Webサイト**: [https://osara-rock.com](https://osara-rock.com)
- **Email**: info@osara-rock.com

---

**Rock Your Story, We're the Plate. 🍽️**