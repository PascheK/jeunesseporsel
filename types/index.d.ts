declare interface ImageTypeData {
  imageCarousel: { alt: string; src: string }[];
}

declare interface SendEmailDto {
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
  totalPlacesReserves: number;
}

declare interface Inscrit {
  eventId: Evenements;
  id: number;
  nom: string;
  prenom: string;
  mail: string;
  nbPlace: number;
  telephone: string;
}

declare interface modifyInscrit {
  inscritId: string;
  codeOTP: string;
  nbPlace: string;
}

declare interface modifyInscritProps {
  inscritId: string;
  nbPlace: string;
}
