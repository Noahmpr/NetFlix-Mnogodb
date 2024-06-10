import { NextResponse } from "next/server";
import { db } from '@/prisma/schema';
import { hash } from 'bcrypt';
import * as z from 'zod'

//Definition a schema for  input validation

const userSchema = z
  .object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters'),
  })
 


    export async function POST(req: any) {
        try {
            const body = await req.json();
            const { email, username, password } = userSchema.parse(body);

            const existingUserByEmail = await db.user.findUnique({
                where: { email: email }
            });

            if (existingUserByEmail) {
                return NextResponse.json({ user: null, message: 'Email user already exists' }, { status: 409 });
            }

            const existingUserByUsername = await db.user.findUnique({
                where: { username: username } // Assuming 'username' is a unique field in your schema
            });
            

            if (existingUserByUsername) {
                return NextResponse.json({ user: null, message: 'Username user already exists' }, { status: 409 });
            }

            const hashPassword = await hash(password, 10);

            const newUser = await db.user.create({
                data: {
                    username,
                    email,
                    password: hashPassword // Store the hashed password
                }
            });

const {password:newUserPassword,...rest} = newUser;

            return NextResponse.json({ user: rest, message: "User created successfully" }, { status: 201 });
        } catch (err) {
            // Handle errors
            return NextResponse.json({  message: "some thing wrong" }, { status: 500 });
        }
    }