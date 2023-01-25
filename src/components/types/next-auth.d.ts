import NextAuth from "next-auth"
import { PrismaClient } from "@prisma/client";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface User {
    isAdmin: boolean
  }
  
  interface Session {
    user: {
      id: string | any
      isAdmin: number
      image: string
      email: string
    },
    userId: string,
    admin: number,
    accessToken: any
  }
}
declare global {
  var prisma: PrismaClient;
}