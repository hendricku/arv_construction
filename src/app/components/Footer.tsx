"use client";

import Link from "next/link";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 pt-12 pb-8 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top section with columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Column 1: Brand and Description */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-xl text-white mb-3">ARV Construction</h3>
            <p className="text-sm text-gray-400">
             We are dedicated to bringing your ideas to life through quality craftsmanship, reliable service, and a commitment to making every project a success.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-emerald-400 transition text-sm">Home</Link></li>
              <li><Link href="/properties" className="hover:text-emerald-400 transition text-sm">Properties</Link></li>
              <li><Link href="/#testimonials" className="hover:text-emerald-400 transition text-sm">Our Services</Link></li>
              {/* <li><Link href="/about" className="hover:text-emerald-400 transition text-sm">About Us</Link></li> */}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4 tracking-wide">Contact Us</h4>
            <ul className="space-y-2 text-sm">
           
              <li className="mt-3"><a href="mailto:contact@arvconstruction.com" className="hover:text-emerald-400 transition">arvconstruction92@gmail.com</a></li>
              <li><a href="" className="hover:text-emerald-400 transition">+639270442529</a></li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h4 className="font-semibold text-white mb-4 tracking-wide">Follow Us</h4>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/profile.php?id=61557362060115" aria-label="Facebook" className="text-gray-400 hover:text-emerald-400 transition text-2xl">
                <FaFacebook />
              </a>
           
            
            </div>
          </div>

        </div>

        {/* Bottom section with copyright */}
        <div className="border-t border-gray-800 pt-6 mt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ARV Construction. All rights reserved.
          </div>
          <div className="flex gap-4 text-sm text-gray-500 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-emerald-400 transition">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-emerald-400 transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}