import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { About } from '../components/About';
import { Specials } from '../components/Specials';
import { CustomersSay } from '../components/CustomersSay';

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Specials />
      <CustomersSay />
      <About />
    </>
  );
};
