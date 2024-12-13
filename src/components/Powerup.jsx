import React from "react";
import powerup from "@/images/powerup.webp";
import { Button } from "@/components/Button";
import Image from "next/image";

const WhyUs = () => {
  return (
   <section className=" mt-20 max-w-7xl mx-auto">
  <div className=" w-full px-4 sm:px-6 lg:px-8 py-6 rounded-lg">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      
      <div className="order-1 md:order-1">
        <h2 className="font-display text-3xl tracking-tight text-dark sm:text-4xl">
          Powerup your dealership
        </h2>
        <p className="mt-4 pb-10 text-sm tracking-tight text-gray-700">
          Connect the entire deal process seamlessly—from DMS to finance, registration, and titling. Our solutions streamline workflows, reduce paperwork, and minimize errors, helping you process deals faster. Empower your team with tools that improve operational efficiency, enhance customer satisfaction, and maximize dealership profitability. Whether you're managing inventory, tracking sales, or supporting customers, our platform ensures every step is connected and optimized for success.
        </p>

        <Button href="/" className="bg-[#2563EB] text-black rounded-md px-4 py-2 shadow-md">
          <span>
            Get started <span className="hidden lg:inline">today</span>
          </span>
        </Button>
      </div>
      <div className="order-2 md:order-2 flex justify-center">
        <Image
          src={powerup}
          alt="Powerup your dealership with DMS software"
          className="rounded-lg w-full max-w-md md:max-w-full"
        />
      </div>
    </div>
  </div>
</section>

  );
};

export default WhyUs;
