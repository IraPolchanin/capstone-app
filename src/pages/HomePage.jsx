import React from 'react'
import { HeroSection } from '../components/HeroSection'
import { Specials } from '../components/Specials'
import { CustomersSay } from '../components/CustomersSay'
import { About } from '../components/About'

export const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <Specials />
      <CustomersSay />
      <About />
    </main>
  )
}
