import AccueilTheatre from "@/components/accueil/AccueilTheatre";
import AccueilJeunesse from "@/components/accueil/AccueilJeunesse";

const Home = () => {
  return (
    <>
      <AccueilJeunesse href="#accueil-theatre" />
      <AccueilTheatre />
    </>
  );
};
export default Home;
