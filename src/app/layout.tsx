import Navbar from "@/components/navigation/navbar";
import "./globals.css";
import { IBM_Plex_Sans_Thai } from "next/font/google"; // เปลี่ยนเป็น next/font
import { Toaster } from "@/components/ui/toaster";
import Provider from "@/components/Provider";
import Footer from "@/components/navigation/footer";

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={ibmPlexSansThai.className}> 
      <body className={ibmPlexSansThai.className}>
        <Provider>
          {/* Layout container */}
          <main className="h-screen flex flex-col">
            {/* Navbar */}
            <Navbar />

            {/* Content Section */}
            <div className="flex-grow w-full flex justify-center items-center pt-28">

              {children}
            </div>
            <div className="mt-4">
            <Footer />

            </div>
          </main>
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
