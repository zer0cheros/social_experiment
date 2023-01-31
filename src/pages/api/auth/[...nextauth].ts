import { NextApiHandler } from "next";
import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { compareSync } from "bcrypt";
import prisma from "../../../core/prisma";


export default NextAuth({
  providers: [
    // Email & Password
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email
          }
        }) 
        if(!user) {
            throw new Error("Email is already in use");
        }
        const match = compareSync(credentials.password, user.password)
        if (!match) {
          throw new Error("Password is incorrect");
        }
        return user;
      },
    }),
  ],
  session: {
    strategy: 'jwt'
  },
  pages: {
   
    newUser: '/register',
    error: '/auth/error'
  },
  adapter: PrismaAdapter(prisma),
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({session}){
      session.userId = session.user.id
      return Promise.resolve(session);
    },
    async jwt({token, user}){
      if(user){
        token.admin = user.isAdmin
        token.sub = user.id
      }
      return Promise.resolve(token);
    }
  }
})