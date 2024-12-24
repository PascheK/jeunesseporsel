declare interface ImageTypeData {
  imageCarousel: { alt: string; src: string }[];
}

declare interface SendEmailDto  {
  email: string;
  sendTo: string[];
  subject: string;
  text: string;
  html?: string;
}