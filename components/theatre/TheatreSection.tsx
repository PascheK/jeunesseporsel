"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { itemCarousel } from "@/constants";

import { Separator } from "@/components/ui/separator";
import CarouselImages from "@/components/CarouselImages";
import Link from "next/link";
const TheatreSection = () => {
  return (
    <section className="theatre ">
      <div className="m-12 mx-auto grid grid-cols-1 justify-items-center px-4 sm:gap-8 md:grid-cols-2 "  data-aos="fade-up">
        <div className="text-jeunesse-white order-2 my-5 flex flex-col items-center justify-center gap-3 gap-4 md:order-1"  >
          <div className="flex flex-col items-center gap-3">
            <h4 className="subtitle">Théatre de la jeunesse de porsel</h4>
            <h1 className="title">Soucis à l&apos;étude</h1>
            <Separator />
            <h4 className="subtitle ">Une pièce de Nicolas Bussard</h4>
          </div>
          <div className="flex flex-col items-center gap-3">
            <p className="dates">Vendredi 17 - 31 JANVIER 2025</p>
            <p className="dates">Samedi 18 - 25 JANVIER & 1 FEVRIER 2025</p>
            <p className="dates">Dimanche 19 JANVIER 2025</p>
            <p className="dates">20H VENDREDI ET SAMEDI / 15H DIMANCHE</p>
          </div>
          <div className="flex flex-row gap-4">
            <Link href="#reservation-theatre" scroll={true}>
              {" "}
              <Button className="transition-bigger" variant="default">Réserver </Button>
            </Link>{" "}
            <Link href="#info-pratique" scroll={true}>
              <Button className="transition-bigger"  variant="secondary">Plus d&apos;information </Button>
            </Link>
          </div>
        </div>
        <div className="order-1 my-5 md:order-2">
          <CarouselImages imageCarousel={itemCarousel} />
        </div>
      </div>
    </section>
  );
};

export default TheatreSection;
