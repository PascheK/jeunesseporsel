import Image from "next/image";
import Link from "next/link";
import React from "react";
const JeunesseSection = () => {
  return (
    <section className="section-jeunesse h-full">
      <div className="bg-hero-bannier relative block size-full bg-cover bg-center bg-no-repeat transition-all">
        <div className="flex h-full flex-col items-center justify-center text-jeunesse-white">
          <div className="bg-jeunesse absolute size-full bg-opacity-85"></div>
          <div className="text-center text-jeunesse-white z-10 flex flex-col items-center justify-center gap-4">
            <h1 className="h1">Jeunessse de Porsel</h1>
            <h2 className="h2">Notre équipe de copains !</h2>
          </div>
          <div className="z-10 bottom-10 absolute flex flex-col items-center justify-center">
          <Link className="transition-bigger flex flex-col justify-items-center items-center gap-2 text-light-200 hover:text-jeunesse-white"  href="#comite-jeunesse">Découvrez notre société
          <Image src='https://img.icons8.com/?size=100&id=2760&format=png&color=A3B2C7' alt="scroll down" width={'25'} height={'25'}/>
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JeunesseSection;
