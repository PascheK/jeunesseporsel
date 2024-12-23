import React from 'react'
import JeunesseSection from '@/components/JeunesseSection'
import ComiteSection from '@/components/ComiteSection'
import MembreSection from '@/components/MembreSection'

const page = () => {
  return (
    <>
    <JeunesseSection href='#comite-jeunesse'/>
    <ComiteSection />
    <MembreSection />
    </>
  )
}

export default page