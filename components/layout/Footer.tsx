import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="flex w-full flex-col justify-between py-12 ">
        <div className="m-auto pb-6">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="logo"
            width={200}
            height={100}
          />
        </div>
        <div className="flex justify-center gap-4">
          <Link
            href="https://www.instagram.com/jeunesse_porsel?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            className="transition-bigger"
            aria-label="Instagram"
          >
            <Instagram className="size-8" aria-hidden="true" />
          </Link>
          <Link
            href="https://www.facebook.com/p/Jeunesse-Porsel-100043547756872/?locale=fr_FR"
            className="transition-bigger" target="_blank"
          >
            <Facebook className="size-8" aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className="bg-jeunesse w-full  p-3 text-center">
        <p className="caption">
          &copy; {new Date().getFullYear()} Jeunesse de Porsel. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
