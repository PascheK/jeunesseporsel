import React from 'react'
import AccueilJeunesse from '@/components/accueil/AccueilJeunesse'
import SocieteComite from '@/components/societe/SocieteComite'
import SocieteMembre from '@/components/societe/SocieteMembre'

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