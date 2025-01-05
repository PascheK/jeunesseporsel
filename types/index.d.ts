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

declare interface Evenements {
  nom: string;
  date: string;
  id: number;
  jour: number;
  nbPlace: number;
}

declare interface Inscrit {
  id : number;
  idEvent : Evenements;
  mail : string;
  nbPlace : number;
  nom : string;
  prenom : string;
  telephone : string;
}