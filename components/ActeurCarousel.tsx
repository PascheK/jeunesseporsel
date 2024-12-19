"use client";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { acteurCarousel  } from "@/constants"
import React from "react";
import DisplayActeurCarousel from "./DisplayActeurCarousel";

const ActeurCarousel = () => {

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );


  return (
    <div className="m-4 w-full">
      <div className="hidden bg-brand-200 bg-brand-300 bg-brand-400 bg-brand-500 bg-brand-600 bg-brand-700 bg-brand-800 bg-brand-900"></div>
      <Carousel
        opts={{
          align: "start",
          loop: true
        }}
        plugins={[plugin.current]}
        className="m-auto flex w-4/5 justify-center"
      >
        <CarouselContent>
          {acteurCarousel.map(
            ({
              name,
              desc,
              alt,
              src
            }: {
              name: string;
              desc: string;
              alt: string;
              src: string;
             
            }) => (
              <DisplayActeurCarousel
                {...{ name, desc, alt, src }}
                
                key={name}
              />
            )
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ActeurCarousel;
