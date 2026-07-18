'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { Clock3, Mail, Phone, Send } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';
import { PageIntro } from '@/components/layout/PageIntro';
import { companyInfo } from '@/data/company';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
}

interface SubmissionStatus {
  type: 'success' | 'error';
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  consent: false,
};

const subjects = [
  'サービスに関するお問い合わせ',
  '予約・利用について',
  '料金について',
  '法人利用について',
  '運営代行・コンサルティング',
  '採用について',
  'その他',
];

const fieldClassName =
  'w-full rounded-md border border-black/20 bg-white px-4 py-3 text-base text-primary outline-none transition-colors placeholder:text-neutral-400 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/15';

export default function ContactPage() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus | null>(null);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: type === 'checkbox' ? (event.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmissionStatus(null);

    if (!recaptchaSiteKey) {
      setSubmissionStatus({
        type: 'error',
        message: '現在フォームを送信できません。恐れ入りますが、メールまたはお電話でお問い合わせください。',
      });
      return;
    }

    const token = recaptchaRef.current?.getValue();
    if (!token) {
      setSubmissionStatus({
        type: 'error',
        message: '「私はロボットではありません」にチェックしてください。',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, recaptchaToken: token }),
      });
      const result = await response.json();

      if (result?.ok) {
        setSubmissionStatus({
          type: 'success',
          message: 'お問い合わせを受け付けました。確認メールをお送りしています。',
        });
        setFormData(initialFormData);
      } else {
        setSubmissionStatus({
          type: 'error',
          message: result?.error || '送信に失敗しました。時間をおいて再度お試しください。',
        });
      }
      recaptchaRef.current?.reset();
    } catch {
      setSubmissionStatus({
        type: 'error',
        message: '送信に失敗しました。時間をおいて再度お試しください。',
      });
      recaptchaRef.current?.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col">
      <PageIntro
        eyebrow="Contact"
        title="お問い合わせ"
        description="スペースのご利用、法人利用、運営支援など、ご相談内容に合わせて担当者よりご連絡します。"
      />

      <section className="section-space bg-white">
        <div className="site-container grid gap-14 lg:grid-cols-[0.66fr_0.34fr] lg:gap-20">
          <div>
            <div className="border-b border-black/15 pb-7">
              <p className="eyebrow">Inquiry form</p>
              <h2 className="mt-5 text-2xl font-bold text-primary sm:text-3xl">ご相談内容をお送りください</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-600">
                <span className="font-bold text-primary-blue">*</span> は必須項目です。
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-7" noValidate={false}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-bold text-primary">
                    氏名 <span className="text-primary-blue">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className={fieldClassName}
                    placeholder="山田 太郎"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-bold text-primary">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={fieldClassName}
                    placeholder="090-1234-5678"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-bold text-primary">
                  メールアドレス <span className="text-primary-blue">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className={fieldClassName}
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-bold text-primary">
                  お問い合わせ種別 <span className="text-primary-blue">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={fieldClassName}
                >
                  <option value="">選択してください</option>
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-bold text-primary">
                  お問い合わせ内容 <span className="text-primary-blue">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={7}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`${fieldClassName} resize-y`}
                  placeholder="ご相談の背景やご希望を、分かる範囲でご記入ください。"
                />
              </div>

              <label htmlFor="consent" className="flex cursor-pointer items-start gap-3 text-sm leading-7 text-neutral-700">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  required
                  checked={formData.consent}
                  onChange={handleInputChange}
                  className="mt-1.5 h-4 w-4 shrink-0 accent-[#d94832]"
                />
                <span>
                  <span className="text-primary-blue">*</span>{' '}
                  <Link href="/privacy" target="_blank" className="font-semibold text-primary underline underline-offset-4 hover:text-primary-blue">
                    プライバシーポリシー
                  </Link>
                  に同意します
                </span>
              </label>

              {recaptchaSiteKey ? (
                <div className="max-w-full overflow-x-auto py-1">
                  <ReCAPTCHA ref={recaptchaRef} sitekey={recaptchaSiteKey} />
                </div>
              ) : (
                <div className="border-l-4 border-primary-blue bg-red-50 px-5 py-4 text-sm leading-7 text-red-900">
                  現在フォームを送信できません。メールまたはお電話でお問い合わせください。
                </div>
              )}

              {submissionStatus && (
                <div
                  role={submissionStatus.type === 'error' ? 'alert' : 'status'}
                  className={`border-l-4 px-5 py-4 text-sm leading-7 ${
                    submissionStatus.type === 'success'
                      ? 'border-accent bg-emerald-50 text-emerald-900'
                      : 'border-primary-blue bg-red-50 text-red-900'
                  }`}
                >
                  {submissionStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-md bg-primary px-6 text-sm font-semibold text-white transition-colors hover:bg-primary-blue disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                {isSubmitting ? '送信中...' : '送信する'}
              </button>
            </form>
          </div>

          <aside className="lg:border-l lg:border-black/15 lg:pl-10">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow">Direct contact</p>
              <h2 className="mt-5 text-2xl font-bold text-primary">直接のご連絡</h2>
              <p className="mt-4 text-sm leading-7 text-neutral-600">
                お急ぎの場合やフォームを送信できない場合は、電話またはメールをご利用ください。
              </p>

              <dl className="mt-8 border-t border-black/15">
                <div className="border-b border-black/15 py-5">
                  <dt className="flex items-center gap-2 text-xs font-bold text-neutral-500">
                    <Clock3 className="h-4 w-4" aria-hidden="true" />
                    返信目安
                  </dt>
                  <dd className="mt-2 text-sm font-semibold text-primary">通常3営業日以内</dd>
                </div>
                <div className="border-b border-black/15 py-5">
                  <dt className="flex items-center gap-2 text-xs font-bold text-neutral-500">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    電話
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={`tel:${companyInfo.phone.replace(/-/g, '')}`}
                      className="text-sm font-semibold text-primary transition-colors hover:text-primary-blue"
                    >
                      {companyInfo.phone}
                    </a>
                  </dd>
                </div>
                <div className="border-b border-black/15 py-5">
                  <dt className="flex items-center gap-2 text-xs font-bold text-neutral-500">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    メール
                  </dt>
                  <dd className="mt-2 break-all">
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-sm font-semibold text-primary transition-colors hover:text-primary-blue"
                    >
                      {companyInfo.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
