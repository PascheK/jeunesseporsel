'use client'
import React from 'react'
import Image from 'next/image'

const InfoPratiqueSection = () => {

  return (
    <section className="info-pratique" id='info-pratique'>
      <div className='flex flex-col items-center gap-8'>
        <h1 className='h1'>Informations pratiques</h1>
       <div className='grid grid-cols-1 md:grid-cols-3 gap-5 items-start'>
        <div className='cards'  data-aos="fade-up">
          <Image src='/assets/icons/locate.svg' alt='lieu' width={50} height={50} className=''/>
          <h2 className='h2'>Lieu et accès</h2> 
          <p>Le théatre se déroulera dans la salle arrière du restaurant de <span className='font-bold text-jeunesse hover:text-jeunesse-white transition-colors'> <a href='https://maps.app.goo.gl/o13qt9yCmTRAThH88' target='_blank'>la Fleur de lys à Porsel</a></span>. Il y a un parking juste à coté du restaurant. Nous vous conseillons d&apos;arrivé 30 minutes avant le début du spectacle pour profiter pleinement de l&apos;ambiance et éviter tout stress. </p> 
        </div>
        <div className='cards'>
        <Image src='/assets/icons/time.svg' alt='temps' width={50} height={50}/>
        <h2 className='h2'>Durée ?</h2>  
        <p>Le spectacle est divisé en 4 actes avec deux entractes.</p>
        </div>
        <div className='cards'>
        <Image src='/assets/icons/question-mark.svg' alt='question' width={50} height={50}/>
        <h2 className='h2'>Que faire après ?</h2>  
        <p>A la fin du theatre vous pouvez soit boire un verre au restaurant soit rejoindre les acteurs dans les bar des acteurs en dessous du restaurant</p>
        </div>
       </div>
      </div>
    </section>
  )
}

export default InfoPratiqueSection