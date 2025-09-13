import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ChevronsDown } from "lucide-react";
const JeunesseSection = ({href}:{href:string}) => {
  return (
    <section className="section-jeunesse h-full">
      <div className="bg-hero-bannier relative block size-full bg-cover bg-center bg-no-repeat transition-all">
        <div className="flex h-full flex-col items-center justify-center text-jeunesse-white">
          <div className="bg-jeunesse absolute size-full bg-opacity-85"></div>
          <div className="text-center text-jeunesse-white z-10 flex flex-col items-center justify-center gap-4 animate-in fade-in zoom-in">
            <h1 className="h1">Jeunesse de Porsel</h1>
            <h2 className="h2">Notre équipe de copains !</h2>
          </div>
          <div className="z-10 bottom-10 absolute flex flex-col items-center justify-center">
          <Link className="transition-bigger flex flex-col items-center gap-2 text-light-200 hover:text-jeunesse-white"  href={href}>
          Découvrez notre société
          <ChevronsDown className="size-6" aria-hidden="true" />
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JeunesseSection;
