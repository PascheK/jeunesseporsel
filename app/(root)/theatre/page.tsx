import TheatreSection from "@/components/theatre/TheatreSection";
import TheatreInfoPratique from "@/components/theatre/TheatreInfoPratique";
import TheatrePresentationActeur from "@/components/theatre/TheatrePresentationActeur";
import TheatreSynopsys from "@/components/theatre/TheatreSynopsys";
import TheatreReservation from "@/components/theatre/TheatreReservation";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Théâtre - Jeunesse de Porsel',
  description: 'Informations sur les représentations théâtrales.',
}
const Home = () =>{
  return(
    <>
      <TheatreSection/>
      <TheatreSynopsys/>
      <TheatreInfoPratique/>
      <TheatrePresentationActeur/>
      <TheatreReservation/>
    </>
  );
}
export default Home;