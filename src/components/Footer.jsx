import Link from 'next/link'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700" id="footer">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left">
            <div className="md:col-span-1 flex flex-col items-center md:items-start">
              <Logo className="h-12 mb-4" />
              <p className="text-sm text-gray-500">
                Your Goals Matter. Let’s Crush Them Together.
              </p>
            </div>
            <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <h3 className="font-semibold mb-4">Solutions</h3>
                <ul className="space-y-2">
                  <li><NavLink href="#dealer-websites">Dealership Website</NavLink></li>
                  <li><NavLink href="#digital-marketing">Digital Marketing</NavLink></li>
                  <li><NavLink href="#advertising">Automotive Advertising</NavLink></li>
                  <li><NavLink href="#partners">Partners</NavLink></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><NavLink href="#library">Resource Library</NavLink></li>
                  <li><NavLink href="#client-resources">Client Resources</NavLink></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">About Us</h3>
                <ul className="space-y-2">
                  <li><NavLink href="#news">News</NavLink></li>
                  <li><NavLink href="#contact">Contact Us</NavLink></li>
                  <li><NavLink href="#team">Meet Our Team</NavLink></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Success Stories</h3>
                <ul className="space-y-2">
                  <li><NavLink href="#contact-support">Contact</NavLink></li>
                  <li><NavLink href="#support">Support</NavLink></li>
                  <li><NavLink href="#help-center">Help Center</NavLink></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 my-8"></div>

          <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Dealer.com. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="https://www.facebook.com" target="_blank" aria-label="Facebook">
                <FaFacebook className="w-6 h-6 text-gray-500 hover:text-blue-600" />
              </Link>
              <Link href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn">
                <FaLinkedin className="w-6 h-6 text-gray-500 hover:text-blue-700" />
              </Link>
              <Link href="https://www.twitter.com" target="_blank" aria-label="Twitter">
                <FaTwitter className="w-6 h-6 text-gray-500 hover:text-blue-400" />
              </Link>
              <Link href="https://www.youtube.com" target="_blank" aria-label="YouTube">
                <FaYoutube className="w-6 h-6 text-gray-500 hover:text-red-600" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

