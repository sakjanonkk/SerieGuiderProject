import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from  "@/lib/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {

    adapter: PrismaAdapter(db),
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
    },
    
    pages: {
        signIn: '/sign-in',

    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
          }),
        CredentialsProvider({
          name: "Credentials",

          credentials: {
            email: { label: "Email", type: "email", placeholder: "johndoe@email.com" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials) {
            if (!credentials || !credentials.email || !credentials.password) {

                
                return null;
            }
        
            const existingUser = await db.user.findUnique({
                where: { email: credentials.email }
            });
        
            if (!existingUser) {
                return null; // No user found
            }
        
            if(existingUser.password) {
                const passwordMatch = await bcrypt.compare(credentials.password, existingUser.password);
                if (!passwordMatch) {
                    return null; // Password does not match
                }
            }
            
        
            return {
                id: '{existingUser.id}',
                username: existingUser.username,
                email: existingUser.email
            };
        }
        
        })
      ],
      callbacks: { 
        async jwt({ token, user }) {
            // console.log(token,user)
            if (user) {
                return {
                    ...token,
                    username: user.username}
            }
            return token
          },
          async session({ session,  token }) {
            // console.log(session, token)
            return {
                ...session,
                user: {
                    ...session.user,
                    username: token.username
                }
                
            }
          }
    }
}