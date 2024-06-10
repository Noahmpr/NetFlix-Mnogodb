import  NextAuth  from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {compare} from "bcrypt";
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { Prisma, PrismaClient } from "@prisma/client";

const prisma= new PrismaClient()

export const authOptions= {
    adapter:PrismaAdapter(prisma),
    pages: {
        login: "/sign-in",
      },
    providers:[
        CredentialsProvider({
            name:'credentials',
            credentials:{
                password:{label:"password",type:"string",placeholder:"password"},
                email:{label:"email",type:"string"}
            },
            async authorize(credentials){
                if(!credentials.email || !credentials.password){
                    return null 
                }
                const user=await prisma.user.findUnique({
                    where: {email:credentials.email}
                })
                if(!user){
                    return null
                }
                const passwordsMatches= await compare(credentials.password, user.hashedPassword)
                if(!passwordsMatches){
                    return null
                }

                return user
            }
        })
    ],
    session:{
        strategy:"jwt"
    },
}

const handler=NextAuth(authOptions)

export {handler as GET, handler as POST}