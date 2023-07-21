import {NextRequest, NextResponse} from "next/server";
import prisma from "@/prisma/client";
import {primary} from "@cloudinary-util/url-loader";

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
        const userwallet = await prisma.wallet.upsert({
            create: {},
            update: {
                balance: {
                    decrement: Number(data.amounttodeduct)
                }
            },
            where: {
                userId: Number(data.userId),
            }

        })
        console.log(userwallet)

        const usercontract = await prisma.contract.update({
            data: {
                payment_date: new Date(),
                payment_method: 'wallet',
                payment_status: 'paid',
                status: 1,
                date_ended: date,
            },
            where: {
                userId: Number(data.userId),
                farmId: Number(data.farmId)
            }
        });

        const farmsPaid = await prisma.contract.findMany({
            where: {
                payment_status: 'paid'
            },
            select: {
                farmId: true
            }
        });

        console.log(farmsPaid)

        // Extract the farmIDs from the result
        const farmIdsPaid = farmsPaid.map((farm) => farm.farmId);

        console.log(farmIdsPaid)

        // Update the GlobalFarmStatus where farmID is in farmIdsPaid
        const updatedglobalfarm = await prisma.globalFarmStatus.updateMany({
            where: {
                farmId: {
                    in: farmIdsPaid
                }
            },
            data: {
                global_amt_raise: Number(data.investedAmount)
            }
        });

        console.log(updatedglobalfarm)


        // console.log(usercontract)

    } catch (e) {
        console.log(e)
    }

    // console.log(data.investedAmount)


    return NextResponse.json({success: true, data});
}


export async function GET(req: NextRequest, res: NextResponse) {

    const farm_id = req.nextUrl.searchParams.get('fid');
    // const user_id = req.nextUrl.searchParams.get('uid');

    try {
        const farmer = await prisma.farm.findUnique({
            where: {
                id: Number(farm_id)
            },
            select: {
                contract: {
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