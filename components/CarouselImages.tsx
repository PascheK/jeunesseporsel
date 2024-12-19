import React, { useState } from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";

import Image from "next/image";


const CarouselImages = ({ imageCarousel }: ImageData) => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  // State variable for managing zoomed image
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  // Function to open zoomed image
  const openZoomedImage = (src: string) => {
    setZoomedImage(src);
  };
  // Function to close zoomed image
  const closeZoomedImage = () => {
    setZoomedImage(null);
  };  return (
    <>
      <Carousel plugins={[plugin.current]}>
        <CarouselContent>
          {imageCarousel.map(({ alt, src }: { alt: string; src: string }) => (
            <CarouselItem key={alt} className="flex justify-center">
              <Image
                src={src}
                alt={alt}
                width={400}
                height={500}
                className="hidden lg:block"
                onClick={() => openZoomedImage(src)}
              />
              <Image
                src={src}
                alt={alt}
                width={250}
                height={500}
                className="lg:hidden"
                onClick={() => openZoomedImage(src)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {zoomedImage && (
        <div className="zoomed-image-container" onClick={closeZoomedImage}>
          <Image src={zoomedImage} alt="zoomed-image"  layout="fill" objectFit="contain" className="carousel-zoomed-image"/>
        </div>
      )}
    </>
  );
};

export default CarouselImages;




