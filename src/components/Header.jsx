'use client'
import { useState } from 'react';
import { Fragment } from 'react'
import { useRef } from 'react';
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { FaChevronDown } from 'react-icons/fa';

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'


function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0',
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}

function MobileNavigation() {

  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="solutions">Solutions</MobileNavLink>
            <MobileNavLink href="#chatWithUS">Chat With US</MobileNavLink>
            <MobileNavLink href="#pricing">Pricing</MobileNavLink>
            <MobileNavLink href="about">About Us</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function Header() {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const handleSolutionsClick = () => {
    setIsSolutionsOpen((prev) => !prev);
  };


  return (
    <header className="py-4 shadow-md">
      <Container>
        <nav className="relative z-50 flex justify-between">
        <div className="flex items-center md:gap-x-12">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto"  />
            </Link>
            <div className="hidden md:flex md:flex-wrap md:gap-3 lg:gap-x-4 relative">
              <div className="group">
                <div
                  className={`flex items-center cursor-pointer  px-2 rounded-lg`}
                  onClick={handleSolutionsClick}
                >
                  <NavLink href="/solutions" className="flex items-center text-gray-800">
                    <span>Solutions</span>
                    <FaChevronDown className={`ml-1 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} />
                  </NavLink>
                </div>
                {isSolutionsOpen && (
                  <div className="absolute  left-3/4 transform -translate-x-1/4 hidden group-hover:flex p-4 shadow-lg space-x-6 bg-[#e6e8f0] rounded-lg"
          
>
                    <div className="flex space-x-6">
                      <div className='bg-white p-3 rounded-lg'>
                        <h6 className="font-semibold w-[22em] sm:w-[18em] md:w-[20em] lg:w-[22em] xl:w-[20em] text-sm sm:text-base md:text-lg lg:text-xl mb-3">
                          Services
                        </h6>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <a
                              href="#dms-overview"
                              className="font-semibold text-sm cursor-pointer text-[#555867] border-l-2 border-[#555867] hover:border-blue-500 hover:text-blue-500 pl-2"
                            >
                              DMS Overview
                            </a>
                          </div>
                          <div className="space-y-2">
                            <a
                              href="#inventory-acquisition"
                              className="font-semibold text-sm cursor-pointer text-[#555867] border-l-2 border-[#555867] hover:border-blue-500 hover:text-blue-500 pl-2"
                            >
                              Inventory Acquisition
                            </a>
                          </div>
                          <div className="space-y-2">
                            <a
                              href="#crm"
                              className="font-semibold text-sm cursor-pointer text-[#555867] border-l-2 border-[#555867] hover:border-blue-500 hover:text-blue-500 pl-2"
                            >
                              Customer Relations Management (CRM)
                            </a>
                          </div>
                          <div className="space-y-2">
                            <a
                              href="/solutions#bhph"
                              className="font-semibold text-sm cursor-pointer text-[#555867] border-l-2 border-[#555867] hover:border-blue-500 hover:text-blue-500 pl-2"
                            >
                              Buy Here Pay Here (BHPH)
                            </a>
                          </div>
                          <div className="space-y-2">
                            <a
                              href="/solutions#mobile-app"
                              className="font-semibold text-sm cursor-pointer text-[#555867] border-l-2 border-[#555867] hover:border-blue-500 hover:text-blue-500 pl-2"
                            >
                              DealerCenter&apos;s Mobile App
                            </a>
                          </div>
                          <div className="space-y-2">
                            <a
                              href="/solutions#dealer-websites"
                              className="font-semibold text-sm cursor-pointer text-[#555867] border-l-2 border-[#555867] hover:border-blue-500 hover:text-blue-500 pl-2"
                            >
                              Dealer Websites
                            </a>
                          </div>
                          <div className="space-y-2">
                            <a
                              href="/solutions#digital-marketing"
                              className="font-semibold text-sm cursor-pointer text-[#555867] border-l-2 border-[#555867] hover:border-blue-500 hover:text-blue-500 pl-2"
                            >
                              Digital Marketing
                            </a>
                          </div>
                          <div className="space-y-2">
                            <a
                              href="/solutions#digital-retailing"
                              className="font-semibold text-sm cursor-pointer text-[#555867] border-l-2 border-[#555867] hover:border-blue-500 hover:text-blue-500 pl-2"
                            >
                              Digital Retailing Solution
                            </a>
                          </div>
                          <div className="space-y-2">
                            <a
                              href="/solutions#dashboard-reporting"
                              className="font-semibold text-sm cursor-pointer text-[#555867] border-l-2 border-[#555867] hover:border-blue-500 hover:text-blue-500 pl-2"
                            >
                              Dashboard & Reporting
                            </a>
                          </div>
                        </div>


                      </div>
                      <div className='bg-white p-3 rounded-lg'>
                        <h6 className="font-semibold w-[22em] sm:w-[18em] md:w-[20em] lg:w-[22em] xl:w-[20em] text-sm sm:text-base md:text-lg lg:text-xl mb-3">For Lenders</h6>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <h6 className="font-semibold text-sm text-[#07124a]">Lender Overview</h6>
                            <h6 className="text-sm cursor-pointer text-[#555867] border-l-2 border-[#555867] hover:border-blue-500 hover:text-blue-500 pl-2">Loan Originations</h6>
                            <ul className="space-y-2">
                              <li className="text-sm cursor-pointer text-[#555867] border-l-2 border-[#555867] hover:border-blue-500 hover:text-blue-500 pl-2">Credit Application Network</li>
                              <li className="text-sm cursor-pointer text-[#555867] border-l-2 border-[#555867] hover:border-blue-500 hover:text-blue-500 pl-2">Bookout Vehicle Valuations</li>
                              <li className="text-sm cursor-pointer text-[#555867] border-l-2 border-[#555867] hover:border-blue-500 hover:text-blue-500 pl-2">Digital Contracting</li>
                              <li className="text-sm cursor-pointer text-[#555867] border-l-2 border-[#555867] hover:border-blue-500 hover:text-blue-500 pl-2">Digital Document Services</li>
                            </ul>
                          </div>
                          <div className="space-y-2">
                            <h6 className="font-semibold text-sm text-[#07124a]">F&I Overview</h6>
                            <ul className="space-y-2">
                              <li className="text-sm cursor-pointer text-[#555867] border-l-2 border-[#555867] hover:border-blue-500 hover:text-blue-500 pl-2">Credit Application</li>
                              <li className="text-sm cursor-pointer text-[#555867] border-l-2 border-[#555867] hover:border-blue-500 hover:text-blue-500 pl-2">Compliance</li>
                              <li className="text-sm cursor-pointer text-[#555867] border-l-2 border-[#555867] hover:border-blue-500 hover:text-blue-500 pl-2">Accelerated Title</li>
                              <li className="text-sm cursor-pointer text-[#555867] border-l-2 border-[#555867] hover:border-blue-500 hover:text-blue-500 pl-2">Menu</li>
                              <li className="text-sm cursor-pointer text-[#555867] border-l-2 border-[#555867] hover:border-blue-500 hover:text-blue-500 pl-2">Aftermarket</li>
                              <li className="text-sm cursor-pointer text-[#555867] border-l-2 border-[#555867] hover:border-blue-500 hover:text-blue-500 pl-2">Digital Contracting & Signing</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-900 text-white p-6 rounded-lg w-[22em] sm:w-[18em] md:w-[20em] lg:w-[22em] xl:w-[20em]">
                        <h6 className="font-semibold text-xl">Deal Central</h6>
                        <ul className="space-y-2">
                          <p className="text-base">
                            Be one of the first dealers to experience the technology, insights, and guidance from our most powerful retail solution yet.
                          </p>

                          <Button href="/register" className="bg-yellow-500 text-black rounded-md hover:bg-yellow-600 px-4 py-2 shadow-md">
                            <span>
                              Get started <span className="hidden lg:inline">today</span>
                            </span>
                          </Button>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <NavLink href="#pricing" className="text-center md:text-left break-words w-auto lg:w-max">Pricing</NavLink>
              <NavLink href="#footer" className="text-center md:text-left break-words w-auto lg:w-max" >Chat with us</NavLink>
              <NavLink href="/about" className="text-center md:text-left break-words w-auto lg:w-max">About Us</NavLink>
            </div>

          </div>
          <div className="flex items-center gap-x-4 md:gap-x-5">

            <Button href="/register" className="bg-yellow-500 text-black rounded-md hover:bg-yellow-600 px-4 py-2 shadow-md">
              <span>
                Get started <span className="hidden lg:inline">today</span>
              </span>
            </Button>

            <div className="hidden md:block border border-blue-900 rounded-md">
              <NavLink href="/login">Dealerheim DMS Login</NavLink>
            </div>

            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
