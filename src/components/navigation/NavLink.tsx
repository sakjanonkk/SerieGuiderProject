import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`p-2 rounded-sm transition duration-200 ${
        isActive
          ? 'bg-zinc-300 text-gray-900 font-semibold'
          : 'hover:bg-zinc-200 text-gray-800'
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NavLink;