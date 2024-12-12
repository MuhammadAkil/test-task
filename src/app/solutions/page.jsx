"use client";
import { Button } from '@/components/Button';
import Image from 'next/image'
import dms from '@/images/dms.png';
import inventory from '@/images/Top-Banner-Inventory.png';
import crm from '@/images/Top-Banner-Inventory.png';
import BHPH from '@/images/Top-Banner-BHPH.png';
import mobile from '@/images/Top-Banner-Mobile.png';
import website from '@/images/Top-Banner-Dealer-Website.png';
import { Container } from '@/components/Container'
import digital from '@/images/Top-Banner-Digital.png';
import retail from '@/images/hp-digital-retailing.png';
import report from '@/images/reporting.png';
import banner from '@/images/mainservice.webp';
import powerup from '@/images/powerup.webp';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import AOS from 'aos';


export default function Services() {

   useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,    
    });
    AOS.refresh();   
  }, []); 
  
  
  return (
    
    <Container className="relative ">

        <div className="mx-auto w-full px-4 sm:px-6 shadow-md  lg:px-8 mb-40 mt-10 bg-gradient-to-r from-gray-100 via-blue-100 to-white py-16 rounded-lg">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div>
      <h2 className="font-display text-3xl tracking-tight text-dark sm:text-4xl">
        ALL-IN ONE CLOUD BASED DEALER MANAGEMENT SOLUTIONS
      </h2>
      <p className="mt-4 text-sm tracking-tight text-dark">
        Our All-In-One Cloud-Based Dealer Management Solutions are designed to revolutionize the way dealerships operate. By integrating every aspect of dealership management into a single, user-friendly platform, we provide a comprehensive solution that enhances efficiency, reduces costs, and improves customer satisfaction.
      </p>
    </div>
    <div className="flex justify-center">
      <Image
        src={banner}
        alt="DMS Software"
        className="rounded-lg  w-full max-w-md md:max-w-full"
      />
    </div>
  </div>
</div>





  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-40" id="dms-overview">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="flex justify-center"  data-aos="fade-right">
        <Image
          src={dms}
          alt="DMS Software"
          className="rounded-lg shadow-lg w-full max-w-md md:max-w-full"
        />
      </div>
      <div>
        <h2 className="font-display text-3xl tracking-tight text-dark sm:text-4xl" data-aos="fade-right">
          Dealer Management System (DMS)
        </h2>
        <p className="mt-4 text-lg tracking-tight text-dark" >
          DealerCenter&apos;s fully integrated mobile- and web-based solution gives
          you industry-leading technology that combines all the tools you need
          into a single platform. DealerCenter makes it easier than ever to run
          your business.
        </p>
        <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 pl-8 font-bold gap-x-8 gap-y-4 text-dark list-disc marker:text-blue-500">
          <li>Desking & Deal Management</li>
          <li>Finance & Insurance</li>
          <li>Wholesale, Cash, Retail</li>
          <li>Laser, Okidata Contracts</li>
          <li>Service Contract Company</li>
          <li>Vehicle Registration, Titling</li>
          <li>Credit Bureau & Compliance</li>
          <li>Credit Card & ACH Payment</li>
          <li>Integrated Accounting with Quickbooks</li>
          <li>Inventory Management</li>
          <li>Send & Receive Deals from 1200+ Lenders</li>
          <li>Dashboards, Reporting & Analytics</li>
          <li>Send Scheduled Reports</li>
          <li>Available on Mobile App</li>
            </ul>
            
             <div className='my-10'>
              <Button href="/register" className="bg-blue-500 text-black rounded-pill hover:bg-yellow-600 px-4 py-2 shadow-md">
                <span>
                  Learn More
                </span>
              </Button>
            </div>
      </div>
    </div>
      </div>
      

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-40" id="inventory-acquisition">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div>
      <h2 className="font-display text-3xl tracking-tight text-dark sm:text-4xl" data-aos="fade-left">
        Inventory Acquisition & Merchandising
      </h2>
      <p className="mt-4 text-lg tracking-tight text-dark" >
        Easily manage everything from shopping auction inventory and assessing book values to 360° photo and video production to showcase your inventory online. Everything you need in a perfectly integrated mobile- and web-based solution.
      </p>
      <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 font-bold gap-x-8 gap-y-4 text-dark list-disc marker:text-blue-500" >
        <li>Auction Run List</li>
        <li>Automatic VIN Decoding</li>
        <li>Vehicle Booking Services</li>
        <li>Vehicle History Reports</li>
        <li>MAX Digital Market Demand & Pricing</li>
        <li>Carketa Recondition Management</li>
        <li>Inventory Import & Distribution</li>
        <li>FlickFusion Photo & Video Simulation</li>
        <li>Photo Overlay Templates</li>
        <li>Photo Slideshow and Video Editing</li>
        <li>Window Stickers & Hang Tags</li>
        <li>Buyer&apos;s Guides</li>
        <li>SiriusXM Radio</li>
        <li>Dashboards, Reporting & Analytics</li>
        <li>Available on Mobile App</li>
            </ul>
            <div className='my-10'>
              <Button href="/register" className="bg-blue-500 text-black rounded-pill hover:bg-yellow-600 px-4 py-2 shadow-md">
                <span>
                  Learn More
                </span>
              </Button>
            </div>
    </div>
    <div className="flex justify-center"  data-aos="fade-left">
      <Image
        src={inventory}
        alt="DMS Software"
        className="rounded-lg shadow-lg w-full max-w-md md:max-w-full"
      />
    </div>
  </div>
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-40" id="crm">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div className="flex justify-center"  data-aos="fade-right">
      <Image
        src={crm}
        alt="CRM Software"
        className="rounded-lg shadow-lg w-full max-w-md md:max-w-full"
      />
    </div>
    <div>
      <h2 className="font-display text-3xl tracking-tight text-dark sm:text-4xl" data-aos="fade-right">
        Customer Relations Management (CRM)
      </h2>
      <p className="mt-4 text-lg tracking-tight text-dark" >
        The DealerCenter CRM suite puts you in command of all your customer activity and your internet lead management process. With automation, alerts, and built-in communications with SMS, email, phone, and video fully integrated, you have everything you need to manage the customer experience at your dealership.
      </p>
      <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 pl-8 font-bold gap-x-8 gap-y-4 text-dark list-disc marker:text-blue-500" >
        <li>Lead Integration from 3rd Party Listings</li>
        <li>Duplicate Lead Detection & Management</li>
        <li>Custom Sales Rep Lead Assignment</li>
        <li>Email & SMS Integration</li>
        <li>Tasks & Workflow Management</li>
        <li>Click to Call & Recording</li>
        <li>Instant chat, video calling, and Facebook Messenger in the Integrated Messaging Center</li>
        <li>Real-time Showroom/Lot Activity</li>
        <li>Customer Check-In Workflow</li>
        <li>Credit Application</li>
        <li>Campaign Management</li>
        <li>Dashboards, Reporting & Analytics</li>
        <li>Send Scheduled Reports</li>
        <li>Available on Mobile App</li>
            </ul>
            <div className='my-10'>
              <Button href="/register" className="bg-blue-500 text-black rounded-pill hover:bg-yellow-600 px-4 py-2 shadow-md">
                <span>
                  Learn More
                </span>
              </Button>
            </div>
    </div>
  </div>
</div>

      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-40" id="bhph">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div>
      <h2 className="font-display text-3xl tracking-tight text-dark sm:text-4xl" data-aos="fade-left">
        Buy Here Pay Here (BHPH)
      </h2>
      <p className="mt-4 text-lg tracking-tight text-dark" >
        DealerCenter&apos;s BHPH module is equipped with the collections, reporting, and account management tools to ensure the health and continued growth of your BHPH portfolio.
      </p>
      <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 font-bold gap-x-8 gap-y-4 text-dark list-disc marker:text-blue-500">
        <li>Portfolio Management</li>
        <li>Collections & Workflow Management</li>
        <li>Credit Card and ACH Processing</li>
        <li>Automated Recurring Customer Payments</li>
        <li>Portfolio Selling Through Agora</li>
        <li>Related Finance Company (RFC)</li>
        <li>Emails & SMS Integration</li>
        <li>QuickBooks Integration</li>
        <li>Reporting Credit to Bureaus with Datalinx</li>
        <li>Dashboards, Reporting & Analytics</li>
            </ul>
            <div className='my-10'>
              <Button href="/register" className="bg-blue-500 text-black rounded-pill hover:bg-yellow-600 px-4 py-2 shadow-md">
                <span>
                  Learn More
                </span>
              </Button>
            </div>
          </div>
          <div className="flex justify-center"  data-aos="fade-left">
      <Image
        src={BHPH}
        alt="BHPH Module"
        className="rounded-lg shadow-lg w-full max-w-md md:max-w-full"
      />
    </div>
  </div>
</div>


      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-40" id="mobile-app">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div className="flex justify-center"  data-aos="fade-right">
      <Image
        src={mobile}
        alt="DMS Software"
        className="rounded-lg shadow-lg w-full max-w-md md:max-w-full"
      />
    </div>
    <div>
      <h2 className="font-display text-3xl tracking-tight text-dark sm:text-4xl" data-aos="fade-right">
        DealerCenter&apos;s Mobile App
      </h2>
      <p className="mt-4 text-lg tracking-tight text-dark" >
        DealerCenter&apos;s Mobile App lets you oversee your deals, upload inventory, run vehicle history reports, communicate with customers, and more—all from your phone.
      </p>
      <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 font-bold pl-8 gap-x-8 gap-y-4 text-dark list-disc marker:text-blue-500" >
        <li>VIN Scan</li>
        <li>Full Inventory Merchandizing</li>
        <li>Auction Run Lists</li>
        <li>Vehicle Book Values</li>
        <li>Vehicle History Reports</li>
        <li>Market Pricing</li>
        <li>Driver&apos;s License Scan</li>
        <li>Customer Management (CRM)</li>
        <li>Email & SMS Integration</li>
        <li>Receive Realtime Notifications</li>
        <li>Instant Chat, Video Calling, and Facebook Messenger in Integrated Messaging Center</li>
            </ul>
            <div className='my-10'>
              <Button href="/register" className="bg-blue-500 text-black rounded-pill hover:bg-yellow-600 px-4 py-2 shadow-md">
                <span>
                  Learn More
                </span>
              </Button>
            </div>
    </div>
  </div>
</div>


      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-40" id="dealer-websites">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div>
      <h2 className="font-display text-3xl tracking-tight text-dark sm:text-4xl" data-aos="fade-left">
        Dealer Websites
      </h2>
      <p className="mt-4 text-lg tracking-tight text-dark" >
        DealerCenter&apos;s websites are designed with mobile users in mind, ensuring your site dynamically fits any screen size. Free custom design and setup, auto-sync inventory using DealerCenter&apos;s mobile app, and always secure with SSL Certificate.
      </p>
      <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 font-bold gap-x-8 gap-y-4 text-dark list-disc marker:text-blue-500" >
        <li>Custom Responsive Websites</li>
        <li>Designed with Mobile Users in mind first</li>
        <li>Over 40 Design Themes to choose from</li>
        <li>Free SSL & HTTPS Hosting</li>
        <li>Push Lead Directly into your CRM</li>
        <li>Secured Credit Apps & Other Forms</li>
        <li>Chat Services</li>
        <li>Inventory Import & Distribution</li>
        <li>Customer Banner & Branding Designs</li>
        <li>3rd Party Widget Integrations</li>
        <li>Unlimited Website Requests & Updates</li>
        <li>Dedicated Website & Support Team</li>
        <li>Dashboards, Reporting & Analytics</li>
            </ul>
            <div className='my-10'>
              <Button href="/register" className="bg-blue-500 text-black rounded-pill hover:bg-yellow-600 px-4 py-2 shadow-md">
                <span>
                  Learn More
                </span>
              </Button>
            </div>
          </div>
          <div className="flex justify-center"  data-aos="fade-left">
      <Image
        src={website}
        alt="Dealer Websites"
        className="rounded-lg shadow-lg w-full max-w-md md:max-w-full"
      />
    </div>
  </div>
</div>

      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-40" id="digital-marketing">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div className="flex justify-center "  data-aos="fade-right">
      <Image
        src={digital}
        alt="Digital Marketing"
        className="rounded-lg shadow-lg w-full max-w-md md:max-w-full"
      />
    </div>
    <div>
      <h2 className="font-display text-3xl tracking-tight text-dark sm:text-4xl" data-aos="fade-right">
        Digital Marketing
      </h2>
      <p className="mt-4 text-lg tracking-tight text-dark" >
        Maximize exposure and generate more leads with our automated classified listing posting, On-Site SEO, and SEM/PPC advertising services.
      </p>
      <ul className="mt-6 grid grid-cols-1 pl-8 md:grid-cols-2 font-bold gap-x-8 gap-y-4 text-dark list-disc marker:text-blue-500" >
        <li>Automated Classified Listings</li>
        <li>Technical On-Site SEO</li>
        <li>SEM / PPC Ad Management</li>
        <li>SEO Professional Services</li>
        <li>Retargeting on Google Display Network</li>
        <li>Reputation Management</li>
        <li>Dashboards, Reporting & Analytics</li>
        <li>Access to 30+ marketing sites such as Facebook Marketplace, OfferUp, and CarGurus!</li>
            </ul>
            <div className='my-10'>
              <Button href="/register" className="bg-blue-500 text-black rounded-pill hover:bg-yellow-600 px-4 py-2 shadow-md">
                <span>
                  Learn More
                </span>
              </Button>
            </div>
    </div>
  </div>
</div>

      

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-40" id="digital-retailing">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
   
    <div>
      <h2 className="font-display text-3xl tracking-tight text-dark sm:text-4xl" data-aos="fade-left">
        Digital Retailing Solution
      </h2>
      <p className="mt-4 text-lg tracking-tight text-dark" >
        DealerCenter&apos;s Digital Retailing Solution helps you create an online shopping experience customers expect today. This creates a more engaged shopper to help increase your incoming leads.
      </p>
      <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 font-bold gap-y-4 text-dark list-disc marker:text-blue-500" >
        <li>Engage & Convert Online Shoppers</li>
        <li>Allow Customers to Personalize their Monthly Payment</li>
        <li>Prequalify your customer without affecting their credit</li>
        <li>View Customer&apos;s Credit Information</li>
        <li>Integrate Lenders Rate Sheets & Filter Criteria</li>
        <li>Pre-Built with Westlake Financial Underwriting Decisions</li>
        <li>Display Decisions Based on your Desired Gross</li>
            </ul>
            <div className='my-10'>
              <Button href="/register" className="bg-blue-500 text-black rounded-pill hover:bg-yellow-600 px-4 py-2 shadow-md">
                <span>
                  Learn More
                </span>
              </Button>
            </div>
          </div>
           <div className="flex justify-center"  data-aos="fade-left">
      <Image
        src={retail}
        alt="DMS Software"
        className="rounded-lg shadow-lg w-full max-w-md md:max-w-full"
      />
    </div>
  </div>
</div>

      

       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-40" id="dashboard-reporting">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div
          className="flex justify-center"
          data-aos="fade-right" 
        >
          <Image
            src={report}
            alt="DMS Software"
            className="rounded-lg shadow-lg w-full max-w-md md:max-w-full transform transition-transform duration-300 ease-in-out hover:scale-105" 
          />
        </div>
        <div>
          <h2 className="font-display text-3xl tracking-tight text-dark sm:text-4xl" data-aos="fade-right">
            Dashboard & Reporting
          </h2>
          <p className="mt-4 text-lg tracking-tight text-dark" >
            DealerCenter helps you harness the power of your data to optimize the operation of your dealership. Analyze customer data and marketing spending to quickly see a return on investment (ROI) from your advertisement budget. Easily create custom dashboards and reports to know every aspect of the performance of your dealership.
          </p>
          <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 pl-8 font-bold gap-y-4 text-dark list-disc marker:text-blue-500" >
            <li>Pre-built Reports to Manage your Dealership</li>
            <li>Dashboards for a quick view of your business</li>
            <li>Customize your Own Reports & Dashboard</li>
            <li>Receive Scheduled Reports by Email</li>
            <li>Manage Inventory Costs, Aging & Profitability</li>
            <li>Manage & Track Sales Activity and Effectiveness</li>
            <li>Manage Marketing Spend and ROI</li>
            <li>Measure Sales Revenue & Profitability</li>
            <li>Monitor your BHPH Portfolio & Collection Activities</li>
            <li>Measure the Effectiveness of Your Website Traffic</li>
            </ul>
            <div className='my-10'>
              <Button href="/register" className="bg-blue-500 text-black rounded-pill hover:bg-yellow-600 px-4 py-2 shadow-md">
                <span>
                  Learn More
                </span>
              </Button>
            </div>
        </div>
      </div>
      </div>
      
 <div className="mx-auto w-full px-4 sm:px-6 shadow-md lg:px-8 mb-40 bg-gradient-to-r from-gray-100 via-blue-100 to-white py-16 rounded-lg">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div>
      <h2 className="font-display text-3xl tracking-tight text-[#2563EB] sm:text-4xl">
        Powerup your dealership
      </h2>
      <p className="mt-4 pb-10 text-sm tracking-tight text-dark">
  Connect the entire deal process seamlessly—from DMS to finance, registration, and titling. Our solutions streamline workflows, reduce paperwork, and minimize errors, helping you process deals faster. Empower your team with tools that improve operational efficiency, enhance customer satisfaction, and maximize dealership profitability. Whether you're managing inventory, tracking sales, or supporting customers, our platform ensures every step is connected and optimized for success.
</p>

            <Button href="/register" className="bg-[#2563EB] text-black rounded-md  px-4 py-2 shadow-md">
              <span>
                Get started <span className="hidden lg:inline">today</span>
              </span>
            </Button>
    </div>
    <div className="flex justify-center">
      <Image
        src={powerup}
        alt="DMS Software"
        className="rounded-lg  w-full max-w-md md:max-w-full"
      />
    </div>
  </div>
</div>


    </Container>
    

  )
}
