"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { photoCarousel } from "@/constants";

import CarouselImages from "@/components/CarouselImages";
import Link from "next/link";

const AccueilFondue = () => {
  return (
    <section className="fondue ">
      <div className="m-12 mx-auto grid grid-cols-1 justify-items-center px-4 sm:gap-8 md:grid-cols-2 "  data-aos="fade-up">
        <div className="text-jeunesse-white order-2 my-5 flex flex-col items-center justify-center gap-4 md:order-1"  >

          <h1 className="h1">Souper villageois</h1>

            <h4 className="h4">Venez à notre souper villageois </h4>
          <div className="flex flex-row gap-4">
            <Link href="#info-pratique" scroll={true}>
              <Button className="transition-bigger"  variant="secondary">Réservation</Button>
            </Link>
          </div>
        </div>
        <div className="order-1 my-5 md:order-2">
          <CarouselImages imageCarousel={photoCarousel}/>
        </div>
      </div>
    </section>
  );
};

export default AccueilFondue;
