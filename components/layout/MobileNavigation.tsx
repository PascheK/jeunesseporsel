'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navItems } from '@/constants'
import { DialogTitle } from '@radix-ui/react-dialog';

const MobileNavigation = () => {
  const pathname = usePathname();
  return (
    <header className='mobile-header'>
           <Image
                src="/assets/icons/logo.svg"
                alt="logo"
                width={70}
                height={52}
                className="lg:hidden"
              />
              <Sheet>
  <SheetTrigger>
          <Image
            src="/assets/icons/menu.svg"
            alt="Search"
            width={30}
            height={30}
          />
  </SheetTrigger>
  <SheetContent>
    <DialogTitle>Menu</DialogTitle>
    <SheetHeader>
      <nav className='mobile-nav '>
        <ul className='mobile-nav-list '>
          {navItems.map(({name, url}: {name:string, url:string}) => (
            <Link key={name} href={url} >
              <li className={cn('mobile-nav-item', pathname === url && 'active')}>{name}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </SheetHeader>
  </SheetContent>
</Sheet>
    </header>

  )
}

export default MobileNavigation