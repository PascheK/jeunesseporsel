import React from "react";
import ActeurCarousel from "./ActeurCarousel";
const ActeurPresentationSection = () => {
  return (
    <section className="acteur-presentation">
      <div className="flex flex-col items-center gap-8 w-full">
      <h1 className='h1'>Nos Acteurs</h1>
      <ActeurCarousel/>
      </div>
    </section>
  );
};

export default ActeurPresentationSection;
