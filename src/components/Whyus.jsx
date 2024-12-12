import React from "react";
import CountUp from "react-countup";

const WhyUs = () => {
  return (
    <section className="py-16 px-8 md:px-16 max-w-7xl mx-auto">
      <div className="text-center mt-12">
        <h3 className="font-display mb-20 text-3xl tracking-tight text-slate-900 sm:text-4xl">
          "Your Goals Matter. Let’s Crush Them Together."
        </h3>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-8">
     
        <div className="max-w-md">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl mb-4">
            Why Dealertrack?
          </h2>
          <p className="text-gray-700 text-lg">
            Dealertrack’s solutions are backed by industry-leading support, address business needs
            across your processes, and help you provide the experience that today’s consumers
            demand.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mt-10 md:mt-0">
        
          <div className="card w-full sm:w-64 text-center bg-[#07182E] p-6 rounded-lg shadow-md">
            <h3 className="text-6xl font-bold text-white relative z-10">
              <CountUp start={0} end={16} duration={2} suffix="k" />
            </h3>
            <p className="text-lg font-semibold text-white mt-2 relative z-10">
              Lenders in our credit application network
            </p>
          </div>
          <div className="card w-full sm:w-64 text-center bg-[#07182E] p-6 rounded-lg shadow-md">
            <h3 className="text-6xl font-bold text-white relative z-10">
              <CountUp start={0} end={55} duration={2} suffix="%" />
            </h3>
            <p className="text-lg font-semibold text-white mt-2 relative z-10">
              of all automotive titles in the US managed by Dealertrack
            </p>
          </div>
          <div className="card w-full sm:w-64 text-center bg-[#07182E] p-6 rounded-lg shadow-md">
            <h4 className="text-5xl mb-6 font-bold tracking-tight text-white relative z-10">
              Award
            </h4>
            <p className="text-lg font-semibold text-white mt-2 relative z-10">
              Voted one of the best Dealer Management Systems year over year
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
