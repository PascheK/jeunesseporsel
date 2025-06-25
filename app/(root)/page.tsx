import AccueilTheatre from "@/components/accueil/AccueilTheatre";
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
      <AccueilTheatre />
    </>
  );
};
export default Home;
