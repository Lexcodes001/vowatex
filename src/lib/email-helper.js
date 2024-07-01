import nodemailer from "nodemailer";

const smtpSettings = {
  service: "Gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
};

export const handleEmailFire = async (data) => {
  const transporter = nodemailer.createTransport(smtpSettings);

  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM,
      ...data,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
