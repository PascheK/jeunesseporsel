'use-server';
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD
  },
} as SMTPTransport.Options);

type SendEmailDto = {
  email: string;
  sendTo?: string;
  subject: string;
  text: string;
  html?: string;
}
export const sendEmail = async (dto: SendEmailDto) => {
  try {
    await transport.verify();
  } catch (error) {
    console.error('Something Went Wrong', process.env.MAIL_HOST, process.env.MAIL_PASSWORD, error);
    return;
  }
  const {email,sendTo, subject, text, html} = dto;

  const info = await transport.sendMail({
    from: email,
    to: sendTo || 'info@jeunessedeporsel.ch',
    subject: subject,
    text: text,
    html: html ? html : '',
  });
  console.log('Message Sent', info.messageId);
  console.log('Mail sent to', 'info@jeunessedeporsel.ch');
  return info;
}
