import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import './globals.css';
import ResponsiveNav from '@/components/Home/Navbar/ResponsiveNav';
import Footer from '@/components/Home/Footer/Footer';
import ScrollToTop from '@/components/Helper/ScrollToTop';
import Update from '@/components/Helper/Update';
import { Analytics } from '@vercel/analytics/react';

const font = Sora({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'T.J.',
  description: "T.J's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="element">
      <body className={font.className}>
        <Update>
          <ResponsiveNav />
          {children}
          <Analytics />
          <Footer />
          <ScrollToTop />
        </Update>
      </body>
    </html>
  );
}
