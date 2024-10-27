// "use client"; // ทำให้ Component นี้เป็น Client-Side

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { buttonVariants } from "@/components/ui/button";
// import { useSession, signIn, signOut } from "next-auth/react";

// const NavbarNonLogin: React.FC = () => {
//   const { data: session } = useSession(); // ดึงข้อมูล session

//   return (
//     <header className="bg-zinc-100 py-2 border-b border-zinc-200 fixed w-full z-10 top-0">
//       <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
//         {/* Logo */}
//         <Link href="/" className="flex items-center">
//           <Image
//             src="/SerieGuideLogo/blacklogo(SVG).svg"
//             alt="Logo"
//             width={80}
//             height={80}
//             className="w-12 h-12 sm:w-16 sm:h-16"
//           />
//         </Link>

//         {/* Links for larger screens */}
//         <nav className="hidden md:flex space-x-6">
//           <Link
//             href="/docs1"
//             className="hover:bg-zinc-200 text-gray-800 p-2 rounded-sm"
//           >
//             Documentation1
//           </Link>
//           <Link
//             href="/docs2"
//             className="hover:bg-zinc-200 text-gray-800 p-2 rounded-sm"
//           >
//             Documentation2
//           </Link>
//           <Link
//             href="/about-us"
//             className="hover:bg-zinc-200 text-gray-800 p-2 rounded-sm"
//           >
//             Documentation3
//           </Link>
//         </nav>
  
//         {/* Show different content based on login status */}
//         {session ? (
//           <div className="flex items-center space-x-4">
//             <span className="text-gray-800">Welcome, {session.user?.name}</span>
//             <button onClick={() => signOut()} className={buttonVariants()}>
//               Sign out
//             </button>
//           </div>
//         ) : (
//           <button onClick={() => signIn()} className={buttonVariants()}>
//             Sign in
//           </button>
//         )}
//       </div>

//       {/* Mobile Navigation */}
//       <nav className="md:hidden flex justify-center mt-4 space-x-4">
//         <Link
//           href="/docs1"
//           className="hover:bg-zinc-200 text-gray-800 p-2 rounded-sm"
//         >
//           Docs1
//         </Link>
//         <Link
//           href="/docs2"
//           className="hover:bg-zinc-200 text-gray-800 p-2 rounded-sm"
//         >
//           Docs2
//         </Link>
//         <Link
//           href="/docs3"
//           className="hover:bg-zinc-200 text-gray-800 p-2 rounded-sm"
//         >
//           Docs3
//         </Link>
//       </nav>
//     </header>
//   );
// };

// export default NavbarNonLogin;

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import UserDropdown from "@/components/navigation/dropdownNav";
import { Menu, X } from "lucide-react";
import ExternalNavLink from '@/components/navigation/NavLink';  // ปรับ path ตามโครงสร้างโปรเจ็คของคุณ


const Navbar: React.FC = () => {
  const { data: session } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="bg-zinc-100 py-2 border-b border-zinc-200 fixed w-full z-10 top-0">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/SerieGuideLogo/blacklogo(SVG).svg"
            alt="Logo"
            width={80}
            height={80}
            className="w-12 h-12 sm:w-16 sm:h-16"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <ExternalNavLink href="/All_Courses">Popular Courses</ExternalNavLink>
          <ExternalNavLink href="/faculties">Course of Faculties</ExternalNavLink>
        </nav>  

        {/* User Authentication Section */}
        <div className="flex items-center space-x-4">
          {session ? (
            <UserDropdown />
          ) : (
            <Button 
              variant="outline" 
              asChild 
              className="hover:bg-[#262d3e] hover:text-white transition-colors duration-200"
            >
              <Link href="/api/auth/signin">Sign in</Link>
            </Button>
          )}
          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden flex flex-col items-center mt-4 space-y-2 pb-4">
          <ExternalNavLink href="/All_Courses" onClick={toggleMobileMenu}>Popular Courses</ExternalNavLink>
          <ExternalNavLink href="/faculties" onClick={toggleMobileMenu}>Course of Faculties</ExternalNavLink>
        </nav>
      )}
    </header>
  );
};

// NavLink component for consistent styling
const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({ href, children, onClick }) => (
  <Link
    href={href}
    className="hover:bg-zinc-200 text-gray-800 p-2 rounded-sm transition duration-200"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;