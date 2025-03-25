import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Luxury Accommodation Booking',
  description: 'Find the perfect luxury accommodation for your next vacation'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className='w-full px-6 lg:px-12 xl:px-20 bg-white'>
          <div className='min-h-screen flex flex-col'>
            <Header />
            <main className='flex-grow'>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
