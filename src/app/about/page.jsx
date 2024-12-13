"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import integration from "@/images/integration.webp";
import delar from "@/images/delar.jpg";
import linksss from "@/images/linkssss.png";
import dlr from "@/images/delaerim.png";
import ship from "@/images/mainservice.webp";
import cars from "@/images/buycars.webp";

function LightStepA() {
  const slides = [delar, linksss, dlr, ship, cars];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval); 
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div
        className="relative w-full h-[600px] overflow-hidden mb-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-full">
          <Image
            src={slides[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="w-full h-full object-cover md:object-contain rounded-lg transition-transform duration-700 ease-in-out"
          />
        </div>

        {/* Navigation Buttons (show only on hover) */}
        {isHovered && (
          <>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-gray-700 rounded-full p-2"
            >
              &#10094;
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-gray-700 rounded-full p-2"
            >
              &#10095;
            </button>
          </>
        )}

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-gray-800" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

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
              Dealer Track is a powerful and comprehensive dealership management software that enables dealers to automate, optimize, and streamline their day-to-day operations. Designed to address the unique challenges faced by modern dealerships, Dealer Track offers an integrated solution for managing everything from inventory and sales to customer service and finance.

              With Dealer Track, dealerships can efficiently manage dealer accounts, update vehicle inventory, track sales performance, and monitor customer orders. It ensures that product listings are always up-to-date and that inventory is accurately reflected in real-time, enabling faster decision-making and better customer service.

              One of the standout features of Dealer Track is its ability to centralize all customer interactions, from initial inquiries to post-sale follow-up. By consolidating this information in one easy-to-use platform, Dealer Track helps dealerships nurture customer relationships and provide personalized service, resulting in higher customer satisfaction and increased loyalty.

              In addition, Dealer Track supports seamless communication between dealers and suppliers, ensuring that orders are processed quickly and efficiently. Its advanced analytics and reporting tools allow dealerships to track performance, identify trends, and make data-driven decisions that enhance profitability and operational efficiency.

              Whether you're looking to streamline operations, improve customer service, or drive growth, Dealer Track provides the tools and capabilities you need to take your dealership to the next level. Empower your team with Dealer Track and experience the future of dealership management today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LightStepA;
