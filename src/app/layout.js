import { Mulish } from 'next/font/google'
import "./globals.css";
import { cn, constructMetadata } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '../contexts/AuthContext'

const mulish = Mulish({ subsets: ['latin'] });

export const metadata = constructMetadata();

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='light !scroll-smooth'>
      <body className={cn('min-h-screen font-sans antialiased', mulish.className)}>
        <AuthProvider>
          <Toaster />
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
