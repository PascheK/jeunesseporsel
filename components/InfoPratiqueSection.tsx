'use client'
import React from 'react'
import Image from 'next/image'

const InfoPratiqueSection = () => {

  return (
    <section className="info-pratique" id='info-pratique'>
      <div className='flex flex-col items-center gap-8'>
        <h1 className='h1'>Informations pratiques</h1>
       <div className='grid grid-cols-1 md:grid-cols-3 gap-4 items-start'>
        <div className='cards'  data-aos="fade-up">
          <Image src='/assets/icons/locate.svg' alt='lieu' width={50} height={50} className=''/>
          <h4 className='h4'>Lieu et accès</h4> 
          <p>Dans la salle arrière du restaurant la fleurs de lys à porsel, il y a un restaurant a coté du parking. </p> 
        </div>
        <div className='cards'>
        <Image src='/assets/icons/time.svg' alt='temps' width={50} height={50}/>
        <h4 className='h4'>Durée ?</h4>  
        <p>Le spectacle est divisé en 3 acte de 40 minute avec 15 minute de pause entre chaque actes,</p>
        </div>
        <div className='cards'>
        <Image src='/assets/icons/question-mark.svg' alt='question' width={50} height={50}/>
        <h4 className='h4'>Que faire après ?</h4>  
        <p>A la fin du theatre vous pouvez soit boire un verre au restaurant soit rejoindre les acteurs dans les bar des acteurs en dessous du restaurant</p>
        </div>
       </div>
      </div>
    </section>
  )
}

export default InfoPratiqueSection