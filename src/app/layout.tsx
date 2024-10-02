import Navbar from "@/components/NavbarNonLogin";
import "./globals.css";
// import { IBM_Plex_Sans } from 'next/font/google';
import { IBM_Plex_Sans_Thai } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import Provider from "@/components/Provider";

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="ibmPlexsansThai.classname">
      <body className={ibmPlexSansThai.className}>
        <Provider>
          <main className="h-screen flex flex-col justify-center items-center">
            <Navbar />
            {children}
          </main>
          <Toaster />
        </Provider>
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
