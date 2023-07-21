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

interface passedData {
    userId: string,
    farmId: string,
    moneyInvest: string,
    contractId: string,
}

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        let {userId, farmId, moneyInvest, contractId}: passedData = await req.json();
        // const data = await req.json();
        console.log('pass data is ', typeof userId);

        console.log('contract id is ', contractId);

        if (contractId == "undefined") {
            contractId = '0';
        }

        console.log('contract id is ', contractId);


        const data = await prisma.contract.upsert({
            where: {
                id: Number(contractId)
            },
            create: {
                userId: Number(userId),
                farmId: Number(farmId),
                payment_amount: parseFloat(moneyInvest) + 500,
                invested_amount: parseFloat(moneyInvest),
                date_started: new Date(),
                status: 0,
                expected_payout: parseFloat(moneyInvest) * 1.045,
                payment_status: 'pending',
            },
            update: {
                payment_amount: parseFloat(moneyInvest) + 500,
                invested_amount: parseFloat(moneyInvest),
                date_started: new Date(),
                status: 0,
                expected_payout: parseFloat(moneyInvest) * 1.045,
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

    const id = req.nextUrl.searchParams.get('fid');

    console.log('farmer id is ', id)

    try {
        const farmer = await prisma.farm.findUnique({
            where: {
                id: Number(id)
            },
            select: {
                contract: true,
                farm_name: true,
                id: true,
            }
        });
        return NextResponse.json({message: 'success', success: true, farmer});
    } catch (e) {
        console.log(e)
        return NextResponse.json({success: false, e});
    }

}