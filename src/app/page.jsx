'use client';

import { useRef } from 'react';
import { Faqs } from '@/components/Faqs'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { Hero } from '@/components/Hero';
import WhyUs from '@/components/Whyus';


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
        <PrimaryFeatures />
        <SecondaryFeatures />
        <WhyUs />
        <Testimonials />
        <Pricing />
        <Faqs />
    </>
  )
}
