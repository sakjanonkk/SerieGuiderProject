import { NextResponse } from "next/server";
import { db } from "../../../../lib/db";
import { hash } from "bcrypt";
import * as z from "zod";

//define schema for the input validation
const userSchema = z
  .object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters')
   
  })
  

export async function POST(req: Request) {
   try {
        const body =  await req.json();
        const {username, email, password } = userSchema.parse(body);


        //check if email already exists
        const existingUserByEmail = await db.user.findUnique({
            where: {
                email: email
            }
        });
        if (existingUserByEmail) { //cant create user if already exists
            return NextResponse.json({user: null, message: "User with this email already exists"},{status:409});
        }

        //check if username already exists
        const existingUserByUsername= await db.user.findUnique({
            where: {
                username: username
            }
        });
        if (existingUserByUsername) { //cant create user if already exists
            return NextResponse.json({user: null, message: "User with this username already exists"},{status:409});
        }
        
        const hashedPassword = await hash(password, 10); //use bcrypt to hash password

        const newUser = await db.user.create({ //store databases to the prisma here
            data: {
                username,
                email,
                password: hashedPassword
            }
        });
        const { password: newUserPassword, ...rest} = newUser  //make it dont return password to the user
        
        return NextResponse.json({ user: rest, message: "User created successfully" }, { status: 201 });
   } catch (error) {
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
    
   }
}