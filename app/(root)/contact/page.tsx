import React from 'react'
import Contact  from '@/components/contact/Contact'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Jeunesse de Porsel',
  description: 'Formulaire de contact de la Jeunesse de Porsel.',
}

const page = () => {
  return (
    <>
    <Contact/>
    </>
  )
}

export default page