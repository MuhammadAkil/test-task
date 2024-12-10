import Link from 'next/link'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-white p-10 text-gray-700" id='footer'>
      <Container>
        {/* Top Section with Logo and Links */}
       <div className="py-10 border-b border-gray-300 flex flex-col items-center space-y-10">
  {/* Logo */}
  <Logo className="h-10 mb-8" />

  {/* Grid Section */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-8 text-sm text-center md:text-left">
    {/* Solutions */}
    <div>
      <h3 className="font-semibold mb-4">Solutions</h3>
      <ul className="space-y-2">
        <li><NavLink href="#dealer-websites">Dealership Website</NavLink></li>
        <li><NavLink href="#digital-marketing">Digital Marketing</NavLink></li>
        <li><NavLink href="#advertising">Automotive Advertising</NavLink></li>
        <li><NavLink href="#partners">Partners</NavLink></li>
      </ul>
    </div>
    {/* Resources */}
    <div>
      <h3 className="font-semibold mb-4">Resources</h3>
      <ul className="space-y-2">
        <li><NavLink href="#library">Resource Library</NavLink></li>
        <li><NavLink href="#client-resources">Client Resources</NavLink></li>
      </ul>
    </div>
    {/* About Us */}
    <div>
      <h3 className="font-semibold mb-4">About Us</h3>
      <ul className="space-y-2">
        <li><NavLink href="#news">News</NavLink></li>
        <li><NavLink href="#contact">Contact Us</NavLink></li>
        <li><NavLink href="#team">Meet Our Team</NavLink></li>
      </ul>
    </div>
    {/* Success Stories */}
    <div>
      <h3 className="font-semibold mb-4">Success Stories</h3>
      <ul className="space-y-2">
        <li><NavLink href="#contact-support">Contact</NavLink></li>
        <li><NavLink href="#support">Support</NavLink></li>
        <li><NavLink href="#help-center">Help Center</NavLink></li>
      </ul>
    </div>
  </div>

  {/* Partners */}
  <div className="flex items-center space-x-6 pt-6">
    <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
      <FaFacebook className="w-6 h-6 text-blue-600 hover:text-blue-800" />
    </Link>
    <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <FaLinkedin className="w-6 h-6 text-blue-700 hover:text-blue-900" />
    </Link>
    <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
      <FaTwitter className="w-6 h-6 text-blue-500 hover:text-blue-700" />
    </Link>
    <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
      <FaYoutube className="w-6 h-6 text-red-600 hover:text-red-800" />
    </Link>
  </div>
</div>



{/* Bottom Section */}
<div className="flex flex-col items-center justify-between py-6 md:flex-row md:items-center">
  <div className="flex space-x-6 md:justify-start">
    <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
      <svg className="h-6 w-6 fill-gray-500 hover:fill-blue-600" viewBox="0 0 24 24">
        <path d="M..."></path>
      </svg>
    </Link>
    <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
      <svg className="h-6 w-6 fill-gray-500 hover:fill-blue-400" viewBox="0 0 24 24">
        <path d="M..."></path>
      </svg>
    </Link>
    <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <svg className="h-6 w-6 fill-gray-500 hover:fill-blue-700" viewBox="0 0 24 24">
        <path d="M..."></path>
      </svg>
    </Link>
  </div>

  <p className="mt-6 text-xs text-gray-500 md:mt-0 md:text-right">
    &copy; {new Date().getFullYear()} Dealer.com. All rights reserved.
  </p>
</div>

      </Container>
    </footer>
  )
}
