import {NextResponse} from "next/server";
import {hash} from 'bcrypt';
import prisma from "@/prisma/client";
import {Prisma} from '@prisma/client'

type userinfo = {
    name: string,
    first_name: string,
    last_name: string,
    gender: string,
    birthday: string,
    email: string,
    image: string
}

export async function POST(req: Request) {

    const {email, password, firstname, lastname, gender, birthday} = await req.json();

    const hashedpass = await hash(password, 12);

    try {
        const user = await prisma.user.create({
            data: {
                name: firstname,
                first_name: firstname,
                last_name: lastname,
                gender: gender,
                birthday: new Date(birthday),
                email: email,
                password: hashedpass,
                email_verified: new Date(),
                user_image: null,
                wallet: {
                    create: {
                        balance: 0,
                        currency: 'Pesos'
                    }
                }

            }
        })
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            // The .code property can be accessed in a type-safe manner
            if (e.code === 'P2002') {
                console.log(
                    'There is a unique constraint violation, a new user cannot be created with this email'
                )
                return NextResponse.json({
                    status: 401,
                    error: "User already exist"
                })
            }
        }
        throw e

        // console.log('error',e)
        // return NextResponse.json({
        //     status: 401,
        //     message: "User already exist"
        // })
    }


    // console.log({password})

    return NextResponse.json({
        // email: email,
        // password: hashedpass,
        // firstname:firstname,
        // lastname:lastname,
        // gender:gender,
        // birthday:birthday,
        // image:null,
        status: 200,
        success: 'User created successfully'
    });
}