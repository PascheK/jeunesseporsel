import AccueilJeunesse from "@/components/accueil/AccueilJeunesse";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accueil - Jeunesse de Porsel',
  description: 'Bienvenue sur le site officiel de la Jeunesse de Porsel.',
}

const Home = () => {
  return (
    <>
      <AccueilJeunesse href="#accueil-theatre" />

      {/* Home section with logo and CTA */}
      <FondueCtaSection />
      <HomeSection />
    </>
  );
};
export default Home;

import HomeSection from "@/components/accueil/HomeSection";import Fondue from "@/components/fondue/Fondue";
import FondueCtaSection from "@/components/accueil/FondueCtaSection";

