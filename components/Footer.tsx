import Link  from 'next/link'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='flex flex-col justify-between py-12 w-full '>
        <div className='m-auto pb-6'>
          <Image src='/assets/icons/logo-full.svg' alt='logo' width={200} height={100} />
        </div>
        <div className='flex justify-center gap-4'>
          <Link href='' >Insta</Link>
          <Link href='' >Insta</Link>
          <Link href='' >Insta</Link>
        </div>
      </div>
      <div className='p-3 bg-jeunesse  w-full text-center'>
      <p className='caption'>&copy; {new Date().getFullYear()} Jeunesse de Porsel. All rights reserved.</p>
      </div>

    </footer>
  )
}

export default Footer