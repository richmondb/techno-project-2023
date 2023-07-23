import {NextRequest, NextResponse} from "next/server";
import prisma from "@/prisma/client";
import {primary} from "@cloudinary-util/url-loader";
import {mockSession} from "next-auth/client/__tests__/helpers/mocks";
import user = mockSession.user;

type reqdata = {
    userId: string,
    farmId: string,
    amounttodeduct: string,
    investedAmount: string,
}

export async function POST(req: NextRequest, res: NextResponse) {
    const data = await req.json();
    console.log(data)

    //get current date of initialzation
    let date = new Date();

    console.log(date)

    date.setDate(date.getDate() + 90)

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
                                decrement: Number(data.amounttodeduct)
                            }
                        }
                    }
                }
            },
        })


        const usercontract = await prisma.contract.update({
            data: {
                payment_date: new Date(),
                payment_method: 'wallet',
                payment_status: 'paid',
                status: 1,
                date_ended: date,
            },
            where: {
                id: Number(data.contractId),
                userId: Number(data.userId),
                farmId: Number(data.farmId)
            }
        });

        const updatedglobalfarm = await prisma.globalFarmStatus.update({
            where: {
                farmId: Number(data.farmId),
            },
            data: {
                global_amt_raise: {
                    increment: Number(data.invested_amt)
                }
            }
        });

        console.log(userwallet)
        console.log(updatedglobalfarm)
        console.log(usercontract)

    } catch (e) {
        console.log(e)
    }

    // console.log(data.investedAmount)


    return NextResponse.json({success: true, data});
}


export async function GET(req: NextRequest, res: NextResponse) {

    const farm_id = req.nextUrl.searchParams.get('fid');
    const user_id = req.nextUrl.searchParams.get('uid');

    console.log(farm_id, user_id)

    try {
        const farmer = await prisma.farm.findUnique({
            where: {
                id: Number(farm_id)

            },
            select: {
                contract: {
                    where: {
                        userId: Number(user_id)
                    },
                    include: {
                        user: {
                            select: {
                                wallet: true,
                            }
                        }
                    }
                },
                globalfarmstatus: true,
                farm_name: true,
                id: true,
                farm_address: true,
                farm_crop: true,
                crop_lifetime: true,
                target_amt: true,
            }
        });

        // const user = await prisma.user.findUnique({
        //     where: {
        //         id: Number(user_id)
        //     },
        //     include: {
        //         wallet: true,
        //     }
        // })
        return NextResponse.json({message: 'success', success: true, farmer});
    } catch (e) {
        console.log(e)
        return NextResponse.json({success: false, e});
    }

}