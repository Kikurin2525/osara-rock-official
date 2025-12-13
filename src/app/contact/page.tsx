'use client';

import { useMemo, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

type SubmitStatus =
  | { type: null; message: '' }
  | { type: 'success' | 'error'; message: string };

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
}

const subjects = [
  'サービスに関するお問い合わせ',
  '予約・利用について',
  '料金について',
  '法人利用について',
  '運営代行・コンサルティング',
  '採用について',
  'その他',
];

export default function ContactPage() {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false,
  });

  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({ type: null, message: '' });

  const isReadyToSubmit = useMemo(() => {
    return (
      !!formData.name &&
      !!formData.email &&
      !!formData.subject &&
      !!formData.message &&
      formData.consent &&
      !!recaptchaToken &&
      !isSubmitting
    );
  }, [formData, recaptchaToken, isSubmitting]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      if (!recaptchaToken) {
        setSubmitStatus({ type: 'error', message: 'reCAPTCHA を完了してください。' });
        return;
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          recaptchaToken, // ★ここが追加
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok && result?.ok) {
        setSubmitStatus({ type: 'success', message: '送信しました。確認メールをお送りしています。' });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          consent: false,
        });
        setRecaptchaToken(null);
      } else {
        setSubmitStatus({
          type: 'error',
          message: result?.error || '送信に失敗しました。時間をおいて再度お試しください。',
        });
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: '送信に失敗しました。時間をおいて再度お試しください。',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col">
      {/* ヒーロー */}
      <section className="bg-gradient-to-br from-neutral-50 to-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">お問い合わせ</h1>
            <p className="text-neutral-600 leading-relaxed">
              サービスに関するご質問やご相談など、お気軽にお問い合わせください。
              <br />
              3営業日以内にご返信いたします。
            </p>
          </div>
        </div>
      </section>

      <div className="py-14 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* フォーム */}
            <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-6">
              <h2 className="text-xl font-semibold text-neutral-900">お問い合わせフォーム</h2>
              <p className="text-sm text-neutral-600 mt-1">必須項目は必ずご入力ください。</p>

              <form onSubmit={handleSubmit} className="space-y-5 mt-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-800 mb-1">
                    氏名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="山田 太郎"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-800 mb-1">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-800 mb-1">電話番号</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="090-1234-5678"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-800 mb-1">
                    お問い合わせ種別 <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  >
                    <option value="">選択してください</option>
                    {subjects.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-800 mb-1">
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-y"
                    placeholder="お問い合わせ内容をできるだけ詳しくご記入ください。"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="consent"
                    required
                    checked={formData.consent}
                    onChange={handleInputChange}
                    className="mt-1 h-4 w-4"
                  />
                  <label className="text-sm text-neutral-700">
                    <span className="text-red-500">*</span>{' '}
                    <a href="/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">
                      プライバシーポリシー
                    </a>
                    に同意します
                  </label>
                </div>

                {/* reCAPTCHA v2 checkbox */}
                <div className="pt-2">
                  {!siteKey ? (
                    <p className="text-sm text-red-600">
                      NEXT_PUBLIC_RECAPTCHA_SITE_KEY が未設定です（Vercelの環境変数を確認してください）
                    </p>
                  ) : (
                    <ReCAPTCHA sitekey={siteKey} onChange={(token) => setRecaptchaToken(token)} />
                  )}
                </div>

                {submitStatus.type && (
                  <div
                    className={`flex items-center gap-2 p-4 rounded-lg border ${
                      submitStatus.type === 'success'
                        ? 'bg-green-50 text-green-800 border-green-200'
                        : 'bg-red-50 text-red-800 border-red-200'
                    }`}
                    role={submitStatus.type === 'error' ? 'alert' : 'status'}
                    aria-live={submitStatus.type === 'error' ? 'assertive' : 'polite'}
                  >
                    {submitStatus.type === 'success' ? (
                      <CheckCircle className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <AlertCircle className="h-5 w-5" aria-hidden="true" />
                    )}
                    <span className="text-sm">{submitStatus.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={!isReadyToSubmit}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-base rounded-lg text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>送信中...</>
                  ) : (
                    <>
                      <Send className="h-5 w-5" aria-hidden="true" />
                      送信する
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* 補助情報 */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-6">
                <h3 className="text-base font-semibold text-neutral-900">お問い合わせについて</h3>
                <p className="text-sm text-neutral-700 mt-3 leading-relaxed">
                  お問い合わせいただいた内容は、営業日3日以内にご返信いたします。
                  <br />
                  お急ぎの場合は、お電話でのお問い合わせをおすすめいたします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
