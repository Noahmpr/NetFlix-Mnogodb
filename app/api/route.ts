import { NextResponse } from "next/server";
import { db } from '@/prisma/schema';
import { hash } from 'bcrypt';

    export async function POST(req: any) {
        try {
            const body = await req.json();
            const { email, username, password } = body;

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

            return NextResponse.json({ user: newUser, message: "User created successfully" }, { status: 201 });
        } catch (err) {
            // Handle errors
        }
    }