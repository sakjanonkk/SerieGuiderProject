import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: string; // Add the ID field to the User interface
    username: string | null;
  }

  interface Session {
    user: User & {
      id: string; // Include the ID field in the session's user object
      username: string;
    };
  }

  interface JWT {
    id: string; // Add the ID field to the JWT interface
    username: string;
  }
}
