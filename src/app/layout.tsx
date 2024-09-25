import './globals.css';
import Navbar from '@/components/NavbarNonLogin';
import { IBM_Plex_Sans_Thai } from 'next/font/google';

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal'],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={ibmPlexSansThai.className}>
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@300&display=swap" rel="stylesheet" />
        </head>
      <body className={ibmPlexSansThai.className}>
        <main className='flex flex-col justify-center items-center w-full'>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}


// import './globals.css';
// import Navbar from '@/components/NavbarUser';
// import { IBM_Plex_Sans_Thai } from 'next/font/google';


// const ibmPlexSansThai = IBM_Plex_Sans_Thai({
//   subsets: ['latin'],
//   weight: ['100', '200', '300', '400', '500', '600', '700'],
//   style: ['normal'],
// });

// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang='en' className='ibmPlexsansThai.className'>
//       <body className={ibmPlexSansThai.className}>
//         <main className='h-screen flex flex-col justify-center items-center'>
//           <Navbar/>
//           {children}
//         </main>
//       </body>
//     </html>
//   );
// }
