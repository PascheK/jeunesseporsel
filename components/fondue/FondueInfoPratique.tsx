import React from "react";

import { Edit, MapPin, CreditCard, Clock, PartyPopper } from "lucide-react";

const FondueInfoPratique = () => {
  const cards = [
    {
      icon: <Edit size={40} className="text-brand" />,
      title: "Comment réserver ?",
      text: "Pour réserver votre place, rendez-vous sur notre site et remplissez le formulaire de réservation en ligne. Vous recevrez une confirmation par email. N’attendez pas, les places sont limitées !",
    },
    {
      icon: <MapPin size={40} className="text-brand" />,
      title: "Lieu et accès",
      text: "Le souper villageois se déroulera dans la salle polyvalente de Porsel. Parking à côté de la salle. Arrivez 30 minutes avant pour profiter de l'ambiance et éviter le stress.",
    },
    {
      icon: <CreditCard size={40} className="text-brand" />,
      title: "Paiement",
      text: "Le paiement peut se faire sur place en espèces, par carte ou via Twint. Merci de préparer votre moyen de paiement à l'avance pour fluidifier l'entrée.",
    },
    {
      icon: <Clock size={40} className="text-brand" />,
      title: "Déroulement",
      text: "Le souper dure le temps que vous souhaitez. Installez-vous, savourez votre fondue et profitez d'une ambiance conviviale tout au long de la soirée.",
    },
    {
      icon: <PartyPopper size={40} className="text-brand" />,
      title: "Que faire après ?",
      text: "Après la fondue, un apéritif est servi et le bar reste ouvert jusqu'au bout de la nuit. Profitez-en pour passer un bon moment entre amis !",
    },
  ];

  return (
    <section className="section-info-pratique-fondue flex flex-col items-center justify-center bg-jeunesse-white py-12 px-2" id="info-pratique">
      <h1 className="h1 mb-10 text-center">Infos pratiques</h1>
      <div className="w-full max-w-7xl flex flex-wrap justify-center gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl shadow-xl p-7 flex flex-col items-center text-center border border-gray-100 hover:shadow-2xl transition-all duration-300 flex-1 min-w-[260px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs xl:max-w-xs"
          >
            <div className="mb-4 flex items-center justify-center bg-brand/10 rounded-full w-16 h-16">{card.icon}</div>
            <h2 className="h2 mb-2 text-brand text-lg font-semibold">{card.title}</h2>
            <p className="text-gray-600 text-base leading-relaxed">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FondueInfoPratique;
