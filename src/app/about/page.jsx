"use client";
import React from "react";
import Image from "next/image";
import integration from "@/images/integration.webp";
import assist from "@/images/assist.jpg";
import values from "@/images/values.jpg";
function LightStepA() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-14 mx-auto  flex flex-wrap">
       <div className="flex flex-wrap w-full">
  <div className="w-full text-center mb-20">
    <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-black sm:text-6xl underline">
  About Us!
</h2>

  </div>
  <div className="lg:w-1/2 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12 flex justify-center">
    <Image
      src={integration}
      alt="Power up your dealership with DMS software"
      className="rounded-lg w-[700px] h-[500px] md:max-w-full"
    />
  </div>
  <div className="lg:w-1/2 md:w-1/2 md:pl-10 md:py-6">
    <p className="mt-4 pb-10 text-sm tracking-tight text-gray-700">
      Dealer Track is an advanced and all-encompassing dealership management software designed to empower automotive dealerships by automating, optimizing, and streamlining their day-to-day operations. Tailored specifically to address the evolving challenges faced by modern dealerships, Dealer Track provides an integrated suite of tools that covers every aspect of dealership management, including inventory control, sales tracking, customer service, finance, and more.

      With Dealer Track, dealers can effortlessly manage their entire vehicle inventory, ensuring accurate, real-time updates for product listings, availability, and pricing. The software also streamlines sales processes, allowing teams to track leads, manage transactions, and close deals efficiently. In addition, robust finance management tools simplify payment processing, invoicing, and accounting tasks, reducing manual work and minimizing errors.

      Dealer Track’s centralized customer relationship management (CRM) system consolidates all interactions, from initial inquiries to post-sale support. This ensures personalized communication, enhances customer satisfaction, and fosters long-term loyalty. Powerful analytics and reporting capabilities provide real-time insights into performance metrics, helping dealerships identify trends, optimize strategies, and make data-driven decisions to boost profitability.

      Designed with seamless communication in mind, Dealer Track enables smooth collaboration between dealerships, suppliers, and customers. Whether you're focused on improving operational efficiency, enhancing customer experiences, or accelerating business growth, Dealer Track equips your team with the tools to succeed in today’s competitive market.
    </p>
  </div>
        </div>
        
          <div className="flex mt-10 flex-wrap w-full">
  <div className="w-full flex justify-center mb-10">
    <Image
      src={assist}
      alt="Power up your dealership with DMS software"
      className="rounded-lg w-[1400px] h-[400px] md:max-w-full"
    />
  </div>

  <div className="w-full text-center mb-10">
    <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-black sm:text-6xl ">
      Our Mission
    </h2>
  </div>

  <div className="w-full text-center px-5">
    <p className="text-gray-700 mx-auto max-w-3xl">
      At Dealer Track, our mission is to empower automotive dealerships with innovative, cutting-edge software solutions designed to enhance operational efficiency, improve customer satisfaction, and foster sustainable growth. We are committed to equipping dealerships with the tools they need to thrive in an increasingly competitive and rapidly evolving automotive industry. By automating everyday tasks, streamlining processes, and integrating data seamlessly across all departments, we help dealerships reduce manual workload, minimize errors, and ensure smoother operations. Our solutions are designed to enhance the overall customer experience, enabling dealerships to offer personalized service, faster transactions, and better communication at every stage of the sales process. With Dealer Track, dealerships are not only able to improve their bottom line but also build long-lasting customer relationships, optimize inventory management, and make data-driven decisions to stay ahead of industry trends. We are dedicated to the success of our partners and work tirelessly to help them adapt, grow, and lead in the ever-changing world of automotive sales and services.
    </p>
  </div>
        </div>
        
      <div className="w-full mt-20">
  <div className="w-full text-center mb-10">
  </div>
  <div className="flex flex-wrap justify-between items-center w-full">
 
            <div className="lg:w-1/2 md:w-1/2 md:pl-10 md:py-6">
               <h2 className="font-display text-4xl sm:text-5xl text-center pb-16 tracking-tight text-black sm:text-6xl ">
      Our Values
    </h2>
     <ul className="list-disc list-inside text-gray-700 space-y-4">
  <li>
    <strong>Innovation:</strong> We continuously improve our software solutions to keep pace with the automotive industry's changes, integrating the latest technologies to help dealerships stay ahead with AI-driven analytics and automation.
  </li>
  <li>
    <strong>Customer Focus:</strong> We provide tailored, user-friendly solutions and dedicated support to help dealerships offer exceptional, seamless service to their customers.
  </li>
  <li>
    <strong>Integrity:</strong> We build trust through transparency, ensuring every decision aligns with the best interests of our clients, maintaining high standards of honesty and professionalism.
  </li>
  <li>
    <strong>Efficiency:</strong> Our software streamlines dealership operations by automating tasks, integrating systems, and optimizing workflows to improve productivity and profitability.
  </li>
</ul>

    </div>
    <div className="lg:w-1/2 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12 flex justify-center">
      <Image
        src={values}
        alt="Power up your dealership with DMS software"
        className="rounded-lg w-[700px] h-[500px] md:max-w-full"
      />
    </div>
  </div>
        </div>
        
          <div className="mb-16 mt-20 p-10">
            <h3 className="font-display text-4xl sm:text-5xl text-center pb-16 tracking-tight text-black sm:text-6xl ">Core Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-4 bg-gray-100 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">Inventory Management</h4>
                <p className="text-gray-600">
                  Seamlessly track and update vehicle inventory in real-time, ensuring accurate listings and availability.
                </p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">Sales Performance</h4>
                <p className="text-gray-600">
                  Monitor and analyze sales data to drive better decisions and achieve business goals.
                </p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">Customer Relationship Management</h4>
                <p className="text-gray-600">
                  Centralize customer interactions and deliver personalized service for higher satisfaction.
                </p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">Analytics and Reporting</h4>
                <p className="text-gray-600">
                  Gain insights with powerful analytics and reporting tools to improve operations and profitability.
                </p>
              </div>
            </div>
        </div>
        <div className="flex items-center justify-center mt-10 mb-20 text-center w-full">
  <div className="w-full max-w-4xl mx-auto">
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Power Up Your Dealership?</h3>
    <p className="text-gray-700 mb-6">
      Join hundreds of successful dealerships that trust Dealer Track for their operations.
    </p>
    <a
      href="/register"
      className="inline-block bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
    >
      Get Started Today
    </a>
  </div>
</div>




      </div>
    </section>
  );
}

export default LightStepA;
