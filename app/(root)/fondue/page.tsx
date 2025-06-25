import Fondue from '@/components/fondue/Fondue'
import FondueEvenementDisplayer from '@/components/fondue/FondueEvenementDisplayer'
import FondueInfoPratique from '@/components/fondue/FondueInfoPratique'
import React  from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fondue - Jeunesse de Porsel',
  description: 'Informations sur la traditionnelle fondue de la société.',
}

const page = async () => {

  return (
    <>
    <Fondue />
    <FondueInfoPratique />
    <FondueEvenementDisplayer />
    </>
  )
}

export default page