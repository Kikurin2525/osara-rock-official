import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// 社内宛通知メール（support@osara-rock.com）
export async function sendSupportNotice(formData: ContactFormData) {
  const { name, email, phone, subject, message } = formData;
  
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
        お問い合わせが届きました
      </h2>
      
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555; width: 120px;">お名前:</td>
            <td style="padding: 8px 0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555;">メールアドレス:</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #007bff;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555;">電話番号:</td>
            <td style="padding: 8px 0;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555;">件名:</td>
            <td style="padding: 8px 0;">${subject}</td>
          </tr>
        </table>
      </div>
      
      <div style="margin: 20px 0;">
        <h3 style="color: #333; margin-bottom: 10px;">お問い合わせ内容:</h3>
        <div style="background-color: #fff; border: 1px solid #ddd; padding: 20px; border-radius: 8px; white-space: pre-wrap;">${message}</div>
      </div>
      
      <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
      <p style="color: #666; font-size: 14px;">
        このメールは株式会社オサラロックの公式サイトのお問い合わせフォームから自動送信されています。
      </p>
    </div>
  `;

  const { data, error } = await resend.emails.send({
    from: process.env.CONTACT_FROM || 'noreply@osara-rock.com',
    to: [process.env.CONTACT_TO || 'support@osara-rock.com'],
    subject: `【お問い合わせ】${subject} - ${name}様より`,
    html: htmlContent,
  });

  if (error) {
    throw new Error(`Support notice email failed: ${error.message}`);
  }

  return data;
}

// お客様宛サンクスメール（シンプル版）
export async function sendCustomerThanks(formData: ContactFormData) {
  // ContactFormData に message がない場合は型を追加してください
  const { email, subject, message } = formData;

  // 送信日時（日本時間）
  const sentAt = new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });

  // XSS等を避けるために簡易エスケープ
  const esc = (v: string) =>
    String(v)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");

  const htmlContent = `
    <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Noto Sans JP', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', Meiryo, sans-serif; max-width:640px; margin:0 auto; padding:24px;">
      <h2 style="margin:0 0 16px; font-size:20px;">お問い合わせありがとうございます</h2>
      <p style="margin:0 0 16px; color:#555;">以下の内容でお問い合わせを受け付けました。</p>

      <table style="width:100%; border-collapse:collapse; font-size:14px;">
        <tr>
          <td style="width:96px; padding:8px 0; color:#666;">日時</td>
          <td style="padding:8px 0;">${esc(sentAt)}</td>
        </tr>
        <tr>
          <td style="padding:8px 0; color:#666;">件名</td>
          <td style="padding:8px 0;">${esc(subject || "")}</td>
        </tr>
        <tr>
          <td style="padding:8px 0; color:#666; vertical-align:top;">内容</td>
          <td style="padding:8px 0; white-space:pre-wrap; line-height:1.7;">${esc(message || "")}</td>
        </tr>
      </table>

      <p style="margin:16px 0 0; color:#888; font-size:12px;">
        このメールは自動送信です（返信はできません）。
      </p>
    </div>
  `;

  const { data, error } = await resend.emails.send({
    from: process.env.CONTACT_FROM || "noreply@osara-rock.com",
    to: [email],
    subject: "お問い合わせありがとうございます",
    html: htmlContent,
  });

  if (error) {
    throw new Error(`Customer thanks email failed: ${error.message}`);
  }
  return data;
}