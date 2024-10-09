// import React from "react";

// import {
//     DropdownMenu,
//     DropdownMenuTrigger,
//     DropdownMenuContent,
//     DropdownMenuItem,
//   } from "@/components/ui/dropdown-menu";
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// import { signOut } from "next-auth/react";
// import Icon from "@/components/icon/icon-lucide"; 

// const UserDropdown: React.FC = () => {
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         {/* Avatar ของผู้ใช้ */}
//         <Avatar className="w-10 h-10 sm:w-10 sm:h-10 cursor-pointer">
//           <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
//           <AvatarFallback>CN</AvatarFallback>
//         </Avatar>
//       </DropdownMenuTrigger>

//       {/* เนื้อหาของ Dropdown */}
//       <DropdownMenuContent className="bg-white shadow-md rounded-md w-48">
//         {/* My Account */}
//         <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
//           <Icon name="user" className="w-5 h-5" /> {/* ใช้ dynamic icon */}
//           My Account
//         </DropdownMenuItem>

//         {/* Support */}
//         <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
//           <Icon name="circle-help" className="w-5 h-5" /> {/* ใช้ dynamic icon */}
//           Support
//         </DropdownMenuItem>

//         {/* ปุ่มออกจากระบบ */}
//         <DropdownMenuItem
//           className="flex items-center gap-2 cursor-pointer"
//           onClick={() => signOut()}
//         >
//           <Icon name="log-out" className="w-5 h-5" /> {/* ใช้ dynamic icon */}
//           ออกจากระบบ
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// };

// export default UserDropdown;

import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User, Settings, HelpCircle, LogOut } from "lucide-react";
import { Session } from "next-auth";

const UserDropdown: React.FC = () => {
  const { data: session } = useSession();

  const handleSignOut = async () => {
    await signOut({ redirect: true, callbackUrl: "/" });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="focus:outline-none rounded-full" aria-label="User menu">
          <Avatar className="w-10 h-10 cursor-pointer transition-transform hover:scale-105 shadow-md">
            <AvatarImage src={session?.user?.image ?? "/default-avatar.png"} alt={session?.user?.name ?? "User"} />
            <AvatarFallback>{getUserInitials(session)}</AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 p-2" align="end">
        {session?.user && (
          <div className="flex items-center p-2">
            <Avatar className="w-8 h-8 mr-2">
              <AvatarImage src={session.user.image ?? "/default-avatar.png"} alt={session.user.name ?? "User"} />
              <AvatarFallback>{getUserInitials(session)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-medium">{session.user.name}</span>
              <span className="text-xs text-gray-500">{session.user.email}</span>
            </div>
          </div>
        )}

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          {session?.user?.email ? (
            <Link 
              href={`/users/profile`}
              className="flex items-center gap-2 w-full p-2 rounded-md hover:bg-gray-100 cursor-pointer"
            >
              <User className="w-4 h-4" />
              My Account
            </Link>
          ) : (
            <span className="flex items-center gap-2 w-full p-2 rounded-md cursor-not-allowed ">
              <User className="w-4 h-4" />
              My Account
            </span>
          )}
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-gray-100">
          <Settings className="w-4 h-4" />
          Settings
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-gray-100">
          <HelpCircle className="w-4 h-4" />
          Support
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem 
          className="flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-gray-100 text-red-600"
          onClick={handleSignOut}
        >
          <LogOut className="w-4 h-4" />
          ออกจากระบบ
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

function getUserInitials(session: Session | null): string {
  if (!session?.user?.name) return "U";
  return session.user.name
    .split(" ")
    .map(name => name[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default UserDropdown;