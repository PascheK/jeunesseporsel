import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const AccueilTheatre = () => {
  return (
    <section className='w-full h-[130%] sm:h-full flex items-center justify-center bg-jeunesse text-jeunesse-white' id='accueil-theatre'>
      <div className='flex flex-row flex-wrap justify-center sm:w-4/5 gap-20'>
      <div className='flex flex-col items-center justify-center gap-4  text-center lg:w-1/2 '>
        <h1 className='h1'>Soucis a l&apos;étude</h1>
        <h4 className='subtitle'>Un tourbillon de rires et de rebondissements vous attend au théâtre avec Maître Stanislas Dobrowlosky !</h4>
        <Link href='/theatre' className='transition-bigger '>
        <Button variant="outline">En savoir plus !</Button>
        </Link>
      </div>
      <div className=''>
        <Image className='sm:block hidden' src='/assets/images/theatre_affiche.jpg' alt='affiche théatre' width={'350'} height={'150'}/>
        <Image className='sm:hidden block' src='/assets/images/theatre_affiche.jpg' alt='affiche théatre' width={'250'} height={'150'}/>

      </div>
      </div>
      
    </section>
  )
}

export default AccueilTheatre