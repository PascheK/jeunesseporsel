import React, { useState } from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";

import Image from "next/image";

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
      <Carousel plugins={[plugin.current]} className="w-full h-[60vw] min-h-[220px] max-h-[80vh] sm:h-[400px] md:h-[600px] lg:h-[800px] max-w-5xl mx-auto">
        <CarouselContent>
          {imageCarousel.map(({ alt, src }: { alt: string; src: string }) => (
            <CarouselItem key={alt} className="flex justify-center items-center">
              <div
                onClick={() => openZoomedImage(src)}
                className="bg-jeunesse absolute flex size-full items-center justify-center bg-opacity-55 opacity-0 transition-all hover:opacity-100 cursor-zoom-in z-10"
              >
                <Image
                  src="https://img.icons8.com/?size=100&id=34825&format=png&color=ffffff"
                  alt="zoom"
                  width={50}
                  height={50}
                />
              </div>
              <div className="relative w-full h-[60vw] min-h-[220px] max-h-[80vh] sm:h-[400px] md:h-[600px] lg:h-[800px] flex items-center justify-center">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="100vw"
                  className="object-contain rounded-xl shadow-lg w-full h-full"
                  style={{ objectPosition: 'center' }}
                  priority={false}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {zoomedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 cursor-zoom-out"
          onClick={closeZoomedImage}
        >
          <div className="relative w-[90vw] max-w-2xl aspect-[4/5] flex items-center justify-center">
            <Image
              src={zoomedImage}
              alt="zoomed-image"
              fill
              sizes="90vw"
              className="object-contain rounded-xl shadow-2xl"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CarouselImages;
