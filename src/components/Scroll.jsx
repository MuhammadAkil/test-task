'use client'
import Image from 'next/image'

import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'

  const logos = [
    { name: 'Transistor', logo: logoTransistor },
    { name: 'Tuple', logo: logoTuple },
    { name: 'StaticKit', logo: logoStaticKit },
    { name: 'Mirage', logo: logoMirage },
    { name: 'Laravel', logo: logoLaravel },
    { name: 'Statamic', logo: logoStatamic },
     { name: 'Transistor', logo: logoTransistor },
    { name: 'Tuple', logo: logoTuple },
    { name: 'StaticKit', logo: logoStaticKit },
    { name: 'Mirage', logo: logoMirage },
    { name: 'Laravel', logo: logoLaravel },
    { name: 'Statamic', logo: logoStatamic },
     { name: 'Transistor', logo: logoTransistor },
    { name: 'Tuple', logo: logoTuple },
    { name: 'StaticKit', logo: logoStaticKit },
    { name: 'Mirage', logo: logoMirage },
    { name: 'Laravel', logo: logoLaravel },
    { name: 'Statamic', logo: logoStatamic }
  ];

export function Hero() {
  return (
    <Container className="pb-16 pt-20 text-center lg:pt-32 ">
      <div className="mt-26 lg:mt-44">
      <p className="font-display mb-10 text-lg text-slate-900">
        Trusted by these companies so far
      </p>
      <div className="mt-8 overflow-hidden">
        <div className="animate-marquee flex space-x-8 sm:flex-col sm:space-x-0 sm:space-y-10 xl:flex-row xl:space-y-0">
          {logos.concat(logos).map((company, index) => (
            <div key={index} className="flex flex-shrink-0 items-center justify-center gap-x-8 sm:gap-y-10">
              <Image src={company.logo} alt={company.name} unoptimized />
            </div>
          ))}
        </div>
      </div>
      </div>
      

      
    </Container>
  )
}
