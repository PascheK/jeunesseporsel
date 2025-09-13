'use server';
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




export const sendEmail = async (dto: SendEmailDto) => {
  const ok = await transport.verify();
  if (!ok) {
    console.error('Something Went Wrong', process.env.MAIL_HOST, process.env.MAIL_PASSWORD);
    return;
  }
  const {email,sendTo, subject, text, html} = dto;

  return await transport.sendMail({
    from: email,
    to: sendTo,
    subject: subject,
    text: text,
    html: html ? html : '',
  });
}
