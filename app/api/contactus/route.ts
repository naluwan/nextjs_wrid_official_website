import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, phone, size, area, budget, message } = await req.json();

    if (!name || !email || !phone || !size || !area || !budget) {
      return new NextResponse('姓名、電話和Email為必填欄位', { status: 400 });
    }

    // 郵件發送設定
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_ACCOUNT, // 替換成你的Gmail帳號
        pass: process.env.EMAIL_PASSWORD, // 替換成你的Gmail密碼或應用程式密碼
      },
    });

    // 郵件內容
    const mailOptions = {
      from: '吾境設計官網',
      to: process.env.EMAIL_ACCOUNT, // 替換成你想要接收郵件的信箱
      subject: `吾境設計 ${new Date(Date.now()).toLocaleDateString()} 有新顧客想要諮詢`,
      text: `姓名: ${name}\n聯絡電話: ${phone}\nEmail: ${email}\n地區: ${area}\n坪數: ${size}\n預算: ${budget}\n訊息: ${message}`,
    };

    // 發送郵件
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        throw new Error('伺服器發生錯誤');
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    return new NextResponse('已成功發送信件', { status: 200 });
  } catch (err) {
    console.log('[contactUs]', err);
    return new NextResponse('伺服器發生錯誤', { status: 500 });
  }
}
