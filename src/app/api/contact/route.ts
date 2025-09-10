import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

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
    
    // TODO: 実際のメール送信処理やデータベース保存処理を実装
    // 現在はダミーレスポンスを返す
    console.log('Contact form submission:', validatedData);
    
    // 本番環境では、以下のような処理を実装する想定:
    // 1. メール送信サービス（SendGrid、AWS SES等）を使用してメール送信
    // 2. データベースに問い合わせ内容を保存
    // 3. 必要に応じてSlackやChatwork等への通知
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'お問い合わせを受け付けました。3営業日以内にご返信いたします。' 
      },
      { status: 200 }
    );
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: '入力内容に不備があります', 
          errors: error.issues 
        },
        { status: 400 }
      );
    }
    
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'お問い合わせの送信に失敗しました。しばらく時間をおいて再度お試しください。' 
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