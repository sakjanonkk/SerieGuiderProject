import Navbar from "@/components/Navbar";
import "./globals.css";
// import { IBM_Plex_Sans } from 'next/font/google';
import { IBM_Plex_Sans_Thai } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import Provider from "@/components/Provider";

const ibmPlexSans = IBM_Plex_Sans_Thai({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal"],
});

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700"],
//   style: ["normal", "italic"],
// });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="ibmPlexsan.classname">
      <body className={ibmPlexSans.className}>
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
