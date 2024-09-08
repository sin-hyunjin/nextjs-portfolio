"use server";

import nodemailer from "nodemailer";

// 메인 함수
export const sendEmail = async (formData: FormData) => {
  try {
    // 유효성 검증
    const validData = validateFormData(formData);

    // 이메일 전송
    await sendMailService(validData);

    // 성공 메시지 반환
    return { message: "이메일이 성공적으로 전송되었습니다." };
  } catch (error) {
    // 오류 메시지 반환
    const errorMessage =
      error instanceof Error
        ? error.message
        : "이메일 전송 중 오류가 발생했습니다. 다시 시도해주세요.";
    return { message: errorMessage };
  }
};

// 유효성 검사 함수
function validateFormData(formData: FormData) {
  // 폼 데이터 변환
  const { name, email, message } = Object.fromEntries(formData) as {
    name: string;
    email: string;
    message: string;
  };

  // 필수 필드 확인
  if (!name) {
    throw new Error("네임를 입력주시면 감사하겠습니다!");
  }
  if (!email) {
    throw new Error("메세지를 입력주시면 감사하겠습니다!");
  }
  if (!message) {
    throw new Error("내용를 입력주시면 감사하겠습니다!");
  }

  return { name, email, message };
}

// 이메일 전송 서비스
async function sendMailService({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  // 메일 전송 서비스 설정
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_KEY,
    },
  });

  // 이메일 전송
  await transporter.sendMail({
    from: `"포트폴리오 의견 : ${name}" <${email}>`, // 보내는 사람 이메일 추가
    to: process.env.GMAIL_USER!,
    subject: `보내는 사람: ${email}`,
    html: `<p>${message}</p>`,
  });
}
