import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendSupportNotice, sendCustomerThanks } from '@/lib/send-email';

const contactSchema = z.object({
  name: z.string().min(1, '氏名を入力してください').max(100, '氏名は100文字以内で入力してください'),
  email: z.string().email('有効なメールアドレスを入力してください'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'お問い合わせ種別を選択してください'),
  message: z.string().min(1, 'お問い合わせ内容を入力してください').max(2000, 'お問い合わせ内容は2000文字以内で入力してください'),
  consent: z.boolean().refine(val => val === true, 'プライバシーポリシーに同意してください'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // バリデーション
    const validatedData = contactSchema.parse(body);
    
    // メール送信処理
    const { name, email, phone, subject, message } = validatedData;
    
    // 社内通知メールを送信
    await sendSupportNotice({
      name,
      email,
      phone: phone || '',
      subject,
      message,
    });

    // お客様宛サンクスメールを送信
    await sendCustomerThanks({
      name,
      email,
      phone: phone || '',
      subject,
      message,
    });
    
    return NextResponse.json({ ok: true });
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          ok: false, 
          error: '入力内容に不備があります' 
        },
        { status: 400 }
      );
    }
    
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        ok: false, 
        error: 'メールの送信に失敗しました。しばらく時間をおいて再度お試しください。' 
      },
      { status: 500 }
    );
  }
}

// オプション: GET メソッドで問い合わせフォームの設定情報を返す場合
export async function GET() {
  const subjects = [
    'サービスに関するお問い合わせ',
    '予約・利用について',
    '料金について',
    '法人利用について',
    '運営代行・コンサルティング',
    '採用について',
    'その他',
  ];
  
  return NextResponse.json({ subjects });
}