import Link from "next/link";
import Image from "next/image";
import React from "react";

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
          >
            <Image
              src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000"
              alt="instagram"
              width={50}
              height={50}
            />
          </Link>
          <Link
            href="https://www.facebook.com/p/Jeunesse-Porsel-100043547756872/?locale=fr_FR"
            className="transition-bigger" target="_blank"
          >
            <Image
              src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000"
              alt="facebook"
              width={50}
              height={50}
            />
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
