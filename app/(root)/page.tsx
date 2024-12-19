import TheatreSection from "@/components/TheatreSection";
import InfoPratiqueSection from "@/components/InfoPratiqueSection";
import ActeurPresentationSection from "@/components/ActeurPresentationSection";
import PresentationTheatreSection from "@/components/PresentationTheatreSection";
import ReservationTheatre from "@/components/ReservationTheatre";
const Home = () =>{
  return(
    <>
      <TheatreSection/>
      <PresentationTheatreSection/>
      <InfoPratiqueSection/>
      <ActeurPresentationSection/>
      <ReservationTheatre/>
    </>
  );
}
export default Home;