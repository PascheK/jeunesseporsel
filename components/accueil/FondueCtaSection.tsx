import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FondueCtaSection = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center py-16 px-10 gap-10 bg-jeunesse-white">
      {/* Left: Call to action text and button */}
      <div className="flex-1 flex flex-col items-center md:items-start justify-center gap-6 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-jeunesse">Participez à notre soirée fondue !</h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-xl">
          Réservez votre place pour la soirée fondue conviviale organisée par la Jeunesse de Porsel. Ambiance chaleureuse, fondue délicieuse et bons moments garantis !
        </p>
        <Button size="lg" className="w-full md:w-auto" asChild>
          <Link href="/fondue">
            Je m'inscris à la fondue
          </Link>
        </Button>
      </div>
      {/* Right: Photo */}
      <div className="flex-1 flex items-center justify-center w-full max-w-md mx-auto">
        <Image
          src="/assets/images/fondue/fondue_0.jpg"
          alt="Soirée fondue Jeunesse de Porsel"
          width={500}
          height={350}
          className="rounded-2xl shadow-xl object-cover w-full h-auto "
          priority
        />
      </div>
    </section>
  );
};

export default FondueCtaSection;
