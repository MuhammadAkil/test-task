import React from "react";
import Image from "next/image";
import integration from "@/images/integration.webp";
import { Button } from "@/components/Button";
function LightStepA(props) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto mt-10 flex flex-wrap">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-1/2 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12 flex justify-center">
            <Image
              src={integration}
              alt="Powerup your dealership with DMS software"
              className="rounded-lg w-[700px] h-[500px] md:max-w-full"
            />
          </div>
          <div className="lg:w-1/2 md:w-1/2 md:pl-10 md:py-6">
  <h2 className="font-display text-3xl tracking-tight text-black sm:text-4xl">About Us!</h2>
  <p className="mt-4 pb-10 text-sm tracking-tight text-gray-700">
  Dealer Track is a comprehensive dealership management software designed to help dealerships automate and optimize their daily operations. It provides tools for managing inventory, sales, customer service, and finance, ensuring real-time updates and accurate tracking. The platform centralizes customer interactions, enabling personalized service and improving customer satisfaction and loyalty. Dealer Track also facilitates efficient communication with suppliers and offers advanced analytics to drive data-based decisions. With its integrated features, Dealer Track helps dealerships streamline operations, enhance customer service, and achieve business growth.
            </p>
            
                    <Button href="/register" className="bg-[#2563EB] text-black rounded-md px-4 py-2 shadow-md">
                      <span>
                        Learn More <span className="hidden lg:inline"></span>
                      </span>
                    </Button>
</div>

        </div>
      </div>
      
    </section>
  );
}

export default LightStepA;
