import React, { useState } from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";

import Image from "next/image";
import { Search } from "lucide-react";

const CarouselImages = ({ imageCarousel }: ImageTypeData) => {
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
  };

  return (
    <>
      <Carousel plugins={[plugin.current]}>
        <CarouselContent>
          {imageCarousel.map(({ alt, src }: { alt: string; src: string }) => (
            <CarouselItem key={alt} className="flex justify-center">
              <div onClick={() => openZoomedImage(src)} className="bg-jeunesse absolute flex size-full items-center justify-center  bg-opacity-55 opacity-0 transition-all hover:opacity-100">
                <Search className="size-8 text-white" aria-hidden="true" />
              </div>
              <Image
                src={src}
                alt={alt}
                width={400}
                height={500}
                className="hidden lg:block w-auto max-h-[500px]"
              />
              <Image
                src={src}
                alt={alt}
                width={250}
                height={500}
                className="lg:hidden w-full h-[350px]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {zoomedImage && (
        <div className="zoomed-image-container" onClick={closeZoomedImage}>
          <Image
            src={zoomedImage}
            alt="zoomed-image"
            layout="fill"
            objectFit="contain"
            className="carousel-zoomed-image"
          />
        </div>
      )}
    </>
  );
};

export default CarouselImages;
