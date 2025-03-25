'use client';

import Link from 'next/link';
import { Triangle, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full py-12 mt-16 border-t border-gray-100'>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-12'>
        <div className='flex items-center mb-8 md:mb-0'>
          <Triangle className='h-6 w-6 fill-black mr-4' />
          <span className='text-xl font-semibold'>Lodge</span>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-6'>
          <div className='flex flex-col space-y-4'>
            <h4 className='text-sm font-medium uppercase tracking-wider mb-2'>
              Destinations
            </h4>
            <Link href='#' className='text-gray-600 hover:text-black text-sm'>
              Europe
            </Link>
            <Link href='#' className='text-gray-600 hover:text-black text-sm'>
              Asie
            </Link>
            <Link href='#' className='text-gray-600 hover:text-black text-sm'>
              Amériques
            </Link>
            <Link href='#' className='text-gray-600 hover:text-black text-sm'>
              Afrique
            </Link>
          </div>

          <div className='flex flex-col space-y-4'>
            <h4 className='text-sm font-medium uppercase tracking-wider mb-2'>
              Propriétés
            </h4>
            <Link
              href='/cabins-cottages'
              className='text-gray-600 hover:text-black text-sm'
            >
              Cabins & Cottages
            </Link>
            <Link
              href='/entire-homes'
              className='text-gray-600 hover:text-black text-sm'
            >
              Entire Homes
            </Link>
            <Link
              href='/unique-stays'
              className='text-gray-600 hover:text-black text-sm'
            >
              Unique Stays
            </Link>
            <Link href='#' className='text-gray-600 hover:text-black text-sm'>
              Villas de luxe
            </Link>
          </div>

          <div className='flex flex-col space-y-4'>
            <h4 className='text-sm font-medium uppercase tracking-wider mb-2'>
              À propos
            </h4>
            <Link href='#' className='text-gray-600 hover:text-black text-sm'>
              Notre histoire
            </Link>
            <Link href='#' className='text-gray-600 hover:text-black text-sm'>
              Équipe
            </Link>
            <Link href='#' className='text-gray-600 hover:text-black text-sm'>
              Blog
            </Link>
            <Link href='#' className='text-gray-600 hover:text-black text-sm'>
              Carrières
            </Link>
          </div>

          <div className='flex flex-col space-y-4'>
            <h4 className='text-sm font-medium uppercase tracking-wider mb-2'>
              Contact
            </h4>
            <Link href='#' className='text-gray-600 hover:text-black text-sm'>
              Aide
            </Link>
            <Link href='#' className='text-gray-600 hover:text-black text-sm'>
              Partenariats
            </Link>
            <Link href='#' className='text-gray-600 hover:text-black text-sm'>
              Confidentialité
            </Link>
            <Link href='#' className='text-gray-600 hover:text-black text-sm'>
              Conditions
            </Link>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100'>
        <p className='text-gray-500 text-sm mb-4 md:mb-0'>
          © {currentYear} Lodge. Tous droits réservés.
        </p>

        <div className='flex space-x-6'>
          <a
            href='#'
            className='text-gray-500 hover:text-black transition-colors'
          >
            <Instagram className='h-5 w-5' />
          </a>
          <a
            href='#'
            className='text-gray-500 hover:text-black transition-colors'
          >
            <Facebook className='h-5 w-5' />
          </a>
          <a
            href='#'
            className='text-gray-500 hover:text-black transition-colors'
          >
            <Twitter className='h-5 w-5' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
