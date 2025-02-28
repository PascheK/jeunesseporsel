import Fondue from '@/components/fondue/Fondue'
import FondueEvenementDisplayer from '@/components/fondue/FondueEvenementDisplayer'
import FondueInfoPratique from '@/components/fondue/FondueInfoPratique'
import React  from 'react'

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