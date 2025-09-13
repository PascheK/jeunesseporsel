import React from 'react'
import AccueilJeunesse from '@/components/accueil/AccueilJeunesse'
import SocieteComite from '@/components/societe/SocieteComite'
import SocieteMembre from '@/components/societe/SocieteMembre'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Société - Jeunesse de Porsel',
  description: 'Présentation de la société et de son comité.',
}

const page = () => {
  return (
    <>
    <AccueilJeunesse href='#comite-jeunesse'/>
    <SocieteComite />
    <SocieteMembre />
    </>
  )
}

export default page