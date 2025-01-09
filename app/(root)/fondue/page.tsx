import AccueilFondue from '@/components/AccueilFondue'
import FondueEvenementDisplayer from '@/components/FondueEvenementDisplayer'
import InfoPratiqueFondue from '@/components/InfoPratiqueFondue'
import { Info } from 'lucide-react'
import React  from 'react'

const page = async () => {

  return (
    <>
    <AccueilFondue />
    <InfoPratiqueFondue />
    <FondueEvenementDisplayer />
    </>
  )
}

export default page