import Navbar from '@/components/Navbar';
import './globals.css';
import { IBM_Plex_Sans } from 'next/font/google';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='ibmPlexsan.classname'>
      <body className={ibmPlexSans.className}>
        <main className='h-screen flex flex-col justify-center items-center'>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
