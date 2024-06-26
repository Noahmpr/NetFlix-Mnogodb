import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { db } from "./db";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
  
  adapter:PrismaAdapter(db),
  session: { strategy: "jwt" },
  // pages: {
  //   signIn: '/sign-in',
  // },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "amirhossein.mpr@gmail.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const existingUserByEmail = await db.user.findUnique({ where: { email: credentials.email } });

        if (!existingUserByEmail) {
          return null;
        }

        const passwordMatch = await compare(credentials.password, existingUserByEmail.password);
        if (!passwordMatch) {
          return null;
        }

        return {
          id: `${existingUserByEmail.id}`,
          username: existingUserByEmail.username,
          email: existingUserByEmail.email
        };
      }
    })
  ]
};