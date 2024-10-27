"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useSession, signOut, signIn } from "next-auth/react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { UserIcon, LogOutIcon, PlusCircle, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import WarningLogin from "@/components/ui-card/warning_login";
// Types
type ConnectedAccounts = {
  google?: string;
};

type User = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
  connectedAccounts?: ConnectedAccounts;
};

type Session = {
  user?: User;
};

// Components
const ProfileSection: React.FC<{ user?: User }> = ({ user }) => (
  <div className="mb-8">
    <h3 className="text-lg font-semibold mb-4">Profile</h3>
    <div className="flex items-center justify-between  ">
      <div className="flex items-center">
        <Avatar className="h-16 w-16 mr-4">
          {user?.image ? (
            <AvatarImage src={user.image} alt={user.name || ""} />
          ) : (
            <AvatarFallback>{user?.name?.[0] || "G"}</AvatarFallback>
          )}
        </Avatar>
        <span className="text-lg">{user?.name || "Guest"}</span>
      </div>
      <span className="text-xs bg-blue-200 px-2 py-1 rounded ml-2 ">
        Primary
      </span>
    </div>
  </div>
);

const EmailSection: React.FC<{ email?: string | null }> = ({ email }) => (
  <div className="mb-8">
    <h3 className="text-lg font-semibold mb-4">Email addresses</h3>
    <div className="flex items-center justify-between mb-2">
      <span>{email || "No email available"}</span>
      <span className="text-xs bg-gray-200 px-2 py-1 rounded">Primary</span>
    </div>
  </div>
);

const ConnectedAccountsSection: React.FC<{
  connectedAccounts?: ConnectedAccounts;
}> = ({ connectedAccounts }) => (
  <div>
    <h3 className="text-lg font-semibold mb-4">Connected accounts</h3>
    {connectedAccounts?.google && (
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <img src="/google-icon.svg" alt="Google" className="h-5 w-5 mr-2" />
          <span>Google</span>
        </div>
        <span className="text-sm text-gray-500">
          {connectedAccounts.google}
        </span>
      </div>
    )}
    <Button variant="ghost" className="mt-2">
      <PlusCircle className="mr-2 h-4 w-4" />
      Connect account
    </Button>
  </div>
);

// Main component
const CalendarComponent: React.FC = () => {
  const { data: session } = useSession();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);


  // if (isLoading) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       <LoaderCircle className="w-12 h-12 text-primary animate-spin" />
  //     </div>
  //   );
  // }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }
  if (!session) {
    return (
      <div>
        <WarningLogin signIn={() => signIn()} />
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-lg">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-4">
              {/* Sidebar */}
              <div className="bg-gray-50 p-6 border-r border-gray-200">
                <h2 className="text-xl font-bold mb-2">Account</h2>
                <p className="text-sm text-gray-500 mb-4">
                  Manage your account info.
                </p>
                <nav className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    <UserIcon className="mr-2 h-4 w-4" />
                    Profile
                  </Button>
                  <Button
                    onClick={() => signOut({ callbackUrl: "/" })} // Redirect to the homepage after logout
                    variant="outline"
                    className="w-full max-w-xs transition-all duration-200 hover:bg-red-500 hover:text-white"
                  >
                    <LogOutIcon className="mr-2 h-4 w-4" />
                    Sign Out
                  </Button>
                </nav>
              </div>

              {/* Main content */}
              <div className="col-span-3 p-6">
                <h1 className="text-2xl font-bold mb-6">Profile details</h1>
                <ProfileSection user={session?.user as User} />
                <EmailSection email={session?.user?.email} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CalendarComponent;
