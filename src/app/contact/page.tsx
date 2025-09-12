'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { companyInfo } from '@/data/company';
import { 
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

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
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.ok) {
        alert('送信しました。確認メールをお送りしています。');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          consent: false,
        });
      } else {
        alert(result.error || '送信に失敗しました。時間をおいて再度お試しください。');
      }
    } catch (error) {
      alert('送信に失敗しました。時間をおいて再度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-neutral-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              お問い合わせ
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              サービスに関するご質問やご相談など、<br />
              お気軽にお問い合わせください。3営業日以内にご返信いたします。
            </p>
          </div>
        </div>
      </section>

      <div className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* お問い合わせフォーム */}
            <div>
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">お問い合わせフォーム</CardTitle>
                  <CardDescription>
                    以下のフォームにご記入ください。必須項目は必ずご入力ください。
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                        氏名 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition"
                        placeholder="山田太郎"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                        メールアドレス <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition"
                        placeholder="example@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">
                        電話番号
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition"
                        placeholder="090-1234-5678"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-primary mb-2">
                        お問い合わせ種別 <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition"
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
                      <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                        お問い合わせ内容 <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition resize-vertical"
                        placeholder="お問い合わせ内容をできるだけ詳しくご記入ください。"
                      />
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        required
                        checked={formData.consent}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 text-primary-blue border-neutral-300 rounded focus:ring-primary-blue"
                      />
                      <label htmlFor="consent" className="text-sm text-neutral-700">
                        <span className="text-red-500">*</span>
                        <a href="/privacy" className="text-primary-blue hover:underline" target="_blank" rel="noopener noreferrer">
                          プライバシーポリシー
                        </a>
                        に同意します
                      </label>
                    </div>

                    {submitStatus.type && (
                      <div 
                        id="form-status"
                        className={`flex items-center space-x-2 p-4 rounded-lg ${
                          submitStatus.type === 'success' 
                            ? 'bg-green-50 text-green-800 border border-green-200'
                            : 'bg-red-50 text-red-800 border border-red-200'
                        }`}
                        role={submitStatus.type === 'error' ? 'alert' : 'status'}
                        aria-live={submitStatus.type === 'error' ? 'assertive' : 'polite'}
                      >
                        {submitStatus.type === 'success' ? (
                          <CheckCircle className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                        ) : (
                          <AlertCircle className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                        )}
                        <span className="text-sm">{submitStatus.message}</span>
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 text-base bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                      aria-describedby={submitStatus.type ? 'form-status' : undefined}
                    >
                      {isSubmitting ? (
                        <>送信中...</>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" aria-hidden="true" />
                          送信する
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* 補助情報 */}
            <div className="space-y-8">
              <Card className="bg-white">
                <CardContent className="p-8">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-primary mb-4">
                      お問い合わせについて
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      お問い合わせいただいた内容は、営業日3日以内にご返信いたします。<br />
                      お急ぎの場合は、お電話でのお問い合わせをおすすめいたします。
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}