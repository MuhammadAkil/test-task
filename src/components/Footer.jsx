import Link from 'next/link'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-white text-gray-700">
      <Container>
        {/* Top Section with Logo and Links */}
        <div className="py-10 border-b border-gray-300">
          <Logo className="h-10 mx-auto mb-8" />
          <div className="grid grid-cols-5 md:grid-cols-5 gap-6 text-sm">
            {/* Solutions */}
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li><NavLink href="#dealership-website">Dealership Website</NavLink></li>
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
           {/* Partners */}
{/* Partners */}
<div className="flex flex-col items-center space-y-4">
  <FaFacebook className="w-24 text-xl" />
  <FaLinkedin className="w-24 text-xl" />
  <FaTwitter className="w-24 text-xl" />
  <FaYoutube className="w-24 text-xl" />
</div>


          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center py-6 md:flex-row md:justify-between">
          <div className="flex space-x-6">
            <Link href="#" className="group" aria-label="Facebook">
              <svg className="h-6 w-6 fill-gray-500 hover:fill-gray-700" viewBox="0 0 24 24">
                <path d="M..."></path>
              </svg>
            </Link>
            <Link href="#" className="group" aria-label="Twitter">
              <svg className="h-6 w-6 fill-gray-500 hover:fill-gray-700" viewBox="0 0 24 24">
                <path d="M..."></path>
              </svg>
            </Link>
            <Link href="#" className="group" aria-label="LinkedIn">
              <svg className="h-6 w-6 fill-gray-500 hover:fill-gray-700" viewBox="0 0 24 24">
                <path d="M..."></path>
              </svg>
            </Link>
          </div>
          <p className="mt-6 text-xs text-gray-500 md:mt-0">
            &copy; {new Date().getFullYear()} Dealer.com. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
