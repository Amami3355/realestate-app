'use client';

import Link from 'next/link';
import {
  Triangle,
  Instagram,
  Facebook,
  Twitter,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full py-16 mt-20 border-t border-gray-100'>
      <div className='max-w-[1400px] mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-start gap-12 mb-16'>
          <div className='flex flex-col'>
            <div className='flex items-center mb-6'>
              <Triangle className='h-7 w-7 fill-black mr-4' />
              <span className='text-2xl font-semibold'>Lodge</span>
            </div>
            <p className='text-gray-500 max-w-xs text-sm md:text-base'>
              Discover exceptional luxury properties across the United States.
              Your dream home awaits.
            </p>
            <div className='mt-6 space-y-3'>
              <div className='flex items-center text-gray-600 text-sm'>
                <MapPin className='h-4 w-4 mr-2' />
                <span>Address Here</span>
              </div>
              <div className='flex items-center text-gray-600 text-sm'>
                <Phone className='h-4 w-4 mr-2' />
                <span>+1 (800) 555-0123</span>
              </div>
              <div className='flex items-center text-gray-600 text-sm'>
                <Mail className='h-4 w-4 mr-2' />
                <span>contact@lodge-realestate.com</span>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-x-12 md:gap-x-16 gap-y-10'>
            <div className='flex flex-col space-y-5'>
              <h4 className='text-sm font-semibold uppercase tracking-wider'>
                Locations
              </h4>
              <Link
                href='#'
                className='text-gray-600 hover:text-black transition-colors duration-200 text-sm'
              >
                West Coast
              </Link>
              <Link
                href='#'
                className='text-gray-600 hover:text-black transition-colors duration-200 text-sm'
              >
                East Coast
              </Link>
              <Link
                href='#'
                className='text-gray-600 hover:text-black transition-colors duration-200 text-sm'
              >
                Midwest
              </Link>
              <Link
                href='#'
                className='text-gray-600 hover:text-black transition-colors duration-200 text-sm'
              >
                South
              </Link>
            </div>

            <div className='flex flex-col space-y-5'>
              <h4 className='text-sm font-semibold uppercase tracking-wider'>
                Property Types
              </h4>
              <Link
                href='#'
                className='text-gray-600 hover:text-black transition-colors duration-200 text-sm'
              >
                Luxury Homes
              </Link>
              <Link
                href='#'
                className='text-gray-600 hover:text-black transition-colors duration-200 text-sm'
              >
                Vacation Rentals
              </Link>
              <Link
                href='#'
                className='text-gray-600 hover:text-black transition-colors duration-200 text-sm'
              >
                Mirror Houses
              </Link>
              <Link
                href='#'
                className='text-gray-600 hover:text-black transition-colors duration-200 text-sm'
              >
                Waterfront Estates
              </Link>
            </div>

            <div className='flex flex-col space-y-5'>
              <h4 className='text-sm font-semibold uppercase tracking-wider'>
                Company
              </h4>
              <Link
                href='#'
                className='text-gray-600 hover:text-black transition-colors duration-200 text-sm'
              >
                About Us
              </Link>
              <Link
                href='#'
                className='text-gray-600 hover:text-black transition-colors duration-200 text-sm'
              >
                Our Agents
              </Link>
              <Link
                href='#'
                className='text-gray-600 hover:text-black transition-colors duration-200 text-sm'
              >
                Testimonials
              </Link>
              <Link
                href='#'
                className='text-gray-600 hover:text-black transition-colors duration-200 text-sm'
              >
                Careers
              </Link>
            </div>

            <div className='flex flex-col space-y-5'>
              <h4 className='text-sm font-semibold uppercase tracking-wider'>
                Connect With Us
              </h4>
              <div className='flex space-x-5'>
                <a
                  href='#'
                  className='text-gray-500 hover:text-black transition-colors duration-200'
                  aria-label='Instagram'
                >
                  <Instagram className='h-5 w-5' />
                </a>
                <a
                  href='#'
                  className='text-gray-500 hover:text-black transition-colors duration-200'
                  aria-label='Facebook'
                >
                  <Facebook className='h-5 w-5' />
                </a>
                <a
                  href='#'
                  className='text-gray-500 hover:text-black transition-colors duration-200'
                  aria-label='Twitter'
                >
                  <Twitter className='h-5 w-5' />
                </a>
              </div>
              <div className='mt-4'>
                <p className='text-gray-500 text-sm'>
                  Get exclusive property alerts
                </p>
                <div className='flex mt-2'>
                  <input
                    type='email'
                    placeholder='Your email'
                    className='px-4 py-2 border border-gray-200 text-sm rounded-l-md focus:outline-none focus:ring-1 focus:ring-black w-full'
                  />
                  <button className='bg-black text-white px-4 py-2 rounded-r-md text-sm font-medium hover:bg-gray-800 transition-colors'>
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100'>
          <p className='text-gray-500 text-sm mb-4 md:mb-0'>
            © {currentYear} Lodge Real Estate, Inc. All rights reserved.
          </p>
          <div className='flex flex-wrap justify-center md:justify-end space-x-6 text-sm'>
            <Link
              href='#'
              className='text-gray-500 hover:text-black transition-colors duration-200'
            >
              Privacy Policy
            </Link>
            <Link
              href='#'
              className='text-gray-500 hover:text-black transition-colors duration-200'
            >
              Terms of Service
            </Link>
            <Link
              href='#'
              className='text-gray-500 hover:text-black transition-colors duration-200'
            >
              Equal Housing Opportunity
            </Link>
            <Link
              href='#'
              className='text-gray-500 hover:text-black transition-colors duration-200'
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
