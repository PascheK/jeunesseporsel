"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { photoCarousel } from "@/constants";

import CarouselImages from "@/components/CarouselImages";
import Link from "next/link";

const Fondue = () => {
  return (
    <section className="fondue w-full py-12 px-2 flex flex-col items-center justify-center">
      <div className="w-4/5 flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16" data-aos="fade-up">
        {/* Texte */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center gap-6 text-jeunesse-white order-2 md:order-1">
          <h1 className="h1 text-center md:text-left drop-shadow-lg">Souper villageois</h1>
          <h4 className="h4 text-center md:text-left font-light">Venez partager un moment convivial autour d'une délicieuse fondue !</h4>
          <Link href="#info-pratique" scroll={true}>
            <Button className="transition-bigger w-full md:w-auto px-8 py-3 text-lg font-semibold rounded-full shadow-md" variant="secondary">
              Réserver ma place
            </Button>
          </Link>
        </div>
        {/* Carousel */}
        <div className="flex-1 flex items-center justify-center order-1 md:order-2 w-full max-w-5xl mx-auto">
          <CarouselImages imageCarousel={photoCarousel} />
        </div>
      </div>
    </section>
  );
};

export default Fondue;
