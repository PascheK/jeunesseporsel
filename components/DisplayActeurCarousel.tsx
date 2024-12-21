"use client";
import { CarouselItem } from "@/components/ui/carousel";

import Image from "next/image";
const DisplayActeurCarousel = ({
  name,
  desc,
  src,
  alt
}: {
  name: string;
  desc: string;
  src: string;
  alt: string;
}) => {


  return (
    <CarouselItem key={name} className="md:basis-1/3 p-6">
      <div className="h-[350px] group  flex [perspective:1000px]">
        <div className="relative size-full rounded-xl shadow-md transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className={`bg-theatre-200 bg-opacity-75 inset-0 size-full rounded-xl [backface-visibility:hidden] flex flex-col items-center pt-4`}>
          <h4 className="h4 pb-4 text-justify text-jeunesse-white">{name}</h4>
          <Image
            src={src}
            alt={alt}
            width={100}
            height={350}
            className="h-4/5 w-auto rounded-md border-4 border-solid border-white"
          />
          </div>
          <div className="absolute inset-0 size-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="flex min-h-full flex-col items-center justify-center">
            <h4 className="h4 pb-4 text-justify ">{name}</h4>
              <p className="mb-4 text-justify text-sm lg:text-lg">{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
};

export default DisplayActeurCarousel;
