import React from "react";
import TheatreActeurCarousel from "@/components/theatre/TheatreActeurCarousel";
const TheatrePresentationActeur = () => {
  return (
    <section className="acteur-presentation">
      <div className="flex flex-col items-center gap-8 w-full">
      <h1 className='h1'>Nos Acteurs</h1>
      <TheatreActeurCarousel/>
      </div>
    </section>
  );
};

export default TheatrePresentationActeur;
