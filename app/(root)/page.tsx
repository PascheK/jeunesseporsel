import AccueilJeunesse from "@/components/accueil/AccueilJeunesse";

const Home = () => {
  return (
    <>
      <AccueilJeunesse href="#accueil-theatre" />

      {/* Home section with logo and CTA */}

      <HomeSection />
    </>
  );
};
export default Home;

import HomeSection from "@/components/accueil/HomeSection";
