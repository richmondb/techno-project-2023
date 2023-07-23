import {NextRequest, NextResponse} from "next/server";
import prisma from "@/prisma/client";
import {notFound, redirect, useParams, useSearchParams} from 'next/navigation'
import {router} from "next/client";
import Next from "next-auth/src";
// export default function handler(req: NextRequest, res: NextResponse) {
//     if (req.method === 'POST') {
//         NextResponse.json({error: 'Internal Server Error'}, {status: 500});
//     } else {
//         // Handle any other HTTP method
//     }
// }

type passedData = {
    userId: string,
    farmId: string,
    moneyInvest: string,
    contractId: string,
}

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        let reqdata: passedData = await req.json();
        // const data = await req.json();
        console.log('pass data is ', reqdata.userId);

        console.log('contract id is ', reqdata.contractId);

        console.log(reqdata)

        // if (contractId == "undefined") {
        //     contractId = '0';
        // }

        console.log('contract id is ', reqdata.contractId);


        const data = await prisma.contract.upsert({
            where: {
                id: Number(reqdata.contractId)
            },
            create: {
                userId: Number(reqdata.userId),
                farmId: Number(reqdata.farmId),
                payment_amount: parseFloat(reqdata.moneyInvest) + 500,
                invested_amount: parseFloat(reqdata.moneyInvest),
                date_started: new Date(),
                status: 0,
                expected_payout: parseFloat(reqdata.moneyInvest) * 1.045,
                payment_status: 'pending',
            },
            update: {
                payment_amount: parseFloat(reqdata.moneyInvest) + 500,
                invested_amount: parseFloat(reqdata.moneyInvest),
                date_started: new Date(),
                status: 0,
                expected_payout: parseFloat(reqdata.moneyInvest) * 1.045,
                payment_status: 'pending',
            },

        })
        console.log('data id is: ', data);

        return NextResponse.json({message: 'success', success: true, data: data});

    } catch (err) {
        console.log('this is the error', err);
        return NextResponse.json({message: err, success: false});
    }
}

export async function GET(req: NextRequest, res: NextResponse) {

    const fid = req.nextUrl.searchParams.get('fid');
    const uid = req.nextUrl.searchParams.get('uid');

    console.log('farmer id is ', fid)
    console.log('farmer id is ', uid)

    try {
        const farmer = await prisma.farm.findUnique({
            where: {
                id: Number(fid)
            },
            select: {
                contract: {
                    where: {
                        userId: Number(uid)
                    }
                },
                farm_name: true,
                id: true,
            }
        });

        // const contract = await prisma.contract.findUnique({
        //     where: {}
        // });

        return NextResponse.json({message: 'success', success: true, farmer});
    } catch (e) {
        console.log(e)
        return NextResponse.json({success: false, e});
    }

}