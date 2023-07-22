import prisma from "@/prisma/client";
import {NextRequest, NextResponse} from "next/server";

type reqdata = {
    userId: string,
    firstname: string,
    lastname: string,
    phonenumber: string,
    amount: Number,
    paymentMethod: String,
}

export async function POST(req: NextRequest) {

    const data: reqdata = await req.json()

    // console.log(typeof data.userId)

    try {
        const userwallet = await prisma.user.update({
            where: {
                id: Number(data.userId)
            },
            data: {
                wallet: {
                    update: {
                        data: {
                            balance: {
                                increment: Number(data.amount)
                            }
                        }
                    }
                }
            },
        })
        console.log(userwallet)
        return NextResponse.json({...data, message: 'success', success: true})
    } catch (e) {
        console.log(e)
        return NextResponse.json({...data, message: e, success: false})

    }

    // try {
    //     const userwallet = await prisma.user.upsert({
    //         where: {
    //             id: Number(data.userId),
    //         },
    //         create: {
    //             wallet: {
    //                 create: {
    //                     userId: Number(data.userId),
    //                     currency: 'Pesos',
    //                     balance: Number(data.amount),
    //                 }
    //             }
    //         },
    //         update: {
    //             wallet: {
    //                 upsert: {
    //                     where: {
    //                         userId: Number(data.userId),
    //                     },
    //                     update: {
    //                         balance: {
    //                             increment: Number(data.amount)
    //                         }
    //                     },
    //                     create: {}
    //                 }
    //             }
    //         },
    //     })
    //     console.log(userwallet)
    //     return NextResponse.json({...data, message: 'success', success: true})
    // } catch (e) {
    //     console.log(e)
    //     return NextResponse.json({...data, message: e, success: false})
    //
    // }

    return NextResponse.json({...data, message: 'success'})

}