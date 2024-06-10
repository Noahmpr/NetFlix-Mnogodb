import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { hash } from 'bcrypt';
const prisma = new PrismaClient();

export async function POST(req){

  const body = await req.json();
  const { name,email,password} = await body
  if(!name  || !email || !password){
    return  NextResponse.json({ message: "missing name or email"})
  }
  const exist =await prisma.user.findUnique({
    where: {email:email}
  })
  if(exist){
    return  NextResponse.json({ message: "user already exists"})
  }

  const hashedPassword = await hash(password, 10);
  const user = await prisma.user.create({
    data: {
      name,
        email,
        hashedPassword
    },
});


    return NextResponse.json({ message: "User created successfully"})
}