'use client';

import { useRef } from 'react';
import { Faqs } from '@/components/Faqs'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { Hero } from '@/components/Hero';
import WhyUs from '@/components/Whyus';
import Powerup from '@/components/Powerup';
import About from '@/components/About';
import Modules from '@/components/Modules';
export default function Home() {

  const callToActionRef = useRef(null);

  const scrollToCallToAction = () => {
    if (callToActionRef.current) {
      callToActionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      
      <Hero />
      <Modules />
      <PrimaryFeatures />
      <About />
      <WhyUs />
      <Powerup /> 
        <Testimonials />
        <Pricing />
        <Faqs />
    </>
  )
}
