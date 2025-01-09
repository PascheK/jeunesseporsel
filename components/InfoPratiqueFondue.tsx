import React from "react";
import Image from "next/image";

const InfoPratiqueFondue = () => {
  return (
    <section className="section-info-pratique-fondue flex flex-col items-center justify-center bg-jeunesse-white">
      <h1 className="h1 ">Infos pratiques</h1>

      <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-3">
        <div className="cards" data-aos="fade-up">
          <Image
            src="/assets/icons/locate.svg"
            alt="lieu"
            width={50}
            height={50}
            className=""
          />
          <h2 className="h2">Lieu et accès</h2>
          <p>
            Le souper villageois se déroulera dans la salle polyvalante de
            Porsel. Il y a un parking juste à coté de la salle. Nous vous
            conseillons d&apos;arrivé 30 minutes avant le début du souper pour
            profiter pleinement de l&apos;ambiance et éviter tout stress.{" "}
          </p>
        </div>
        <div className="cards">
          <Image
            src="/assets/icons/time.svg"
            alt="temps"
            width={50}
            height={50}
          />
          <h2 className="h2">Durée ?</h2>
          <p>
            Le souper dure le temps que vous voudrez manger. Venez profiter du
            souper et manger une bonne fondue !
          </p>
        </div>
        <div className="cards">
          <Image
            src="/assets/icons/question-mark.svg"
            alt="question"
            width={50}
            height={50}
          />
          <h2 className="h2">Que faire après ?</h2>
          <p>
            Lorsque vous avez finis votre fondue, un apéritif est servie et le
            bar est ouvert jusqu&apos;au bout de la nuit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoPratiqueFondue;
