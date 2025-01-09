"use client";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="header">
      <Link href="/">
        <Image
          src="/assets/icons/logo-full.svg"
          alt="logo"
          width={160}
          height={50}
          className="hidden h-auto lg:block"
        />

        <Image
          src="/assets/icons/logo.svg"
          alt="logo"
          width={100}
          height={52}
          className="lg:hidden"
        />
      </Link>
      <ul className="header-wrapper">
    {navItems.map(({ name, url, isActive }: { name: string; url: string; isActive: boolean }) => (
      isActive && (
        <Link key={name} href={url}>
          <li
            className={cn(
              "header-wrapper-item",
              pathname === url && "active"
            )}
          >
            {name}
          </li>
        </Link>
      )
    ))}
      </ul>
    </header>
  );
};

export default Header;
