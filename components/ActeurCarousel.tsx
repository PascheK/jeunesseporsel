"use client";
import {
  Carousel,
  CarouselContent,

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
      </Carousel>
    </div>
  );
};

export default ActeurCarousel;
