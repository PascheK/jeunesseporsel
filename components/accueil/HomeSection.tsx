import Image from "next/image";
import { Button } from "@/components/ui/button";

const HomeSection = () => {
  return (
    <section className="w-full  flex flex-col md:flex-row items-center justify-center py-16 px-10 gap-10 bg-white">
      {/* Left: Call to action text and button */}
      <div className="flex-1 flex flex-col items-center md:items-start justify-center gap-6 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">La Jeunesse organise le Giron 2026 !</h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-xl">
          Toutes les informations et actualités concernant le Giron 2026 sont disponibles sur notre site dédié. Cliquez ci-dessous pour tout découvrir !
        </p>
        <Button size="lg" className="w-full md:w-auto" asChild>
          <a href="https://porsel2026.ch" target="_blank" rel="noopener noreferrer">
            Visiter le site du giron !
          </a>
        </Button>
      </div>
      {/* Right: Photo */}
      <div className="flex-1 flex items-center justify-center w-full max-w-md mx-auto">
        <Image
          src="/assets/images/couleur.svg"
          alt="Site partenaire"
          width={500}
          height={350}
          className="rounded-2xl shadow-xl object-cover w-full h-auto max-h-[350px]"
          priority
        />
      </div>
    </section>
  );
};

export default HomeSection;
