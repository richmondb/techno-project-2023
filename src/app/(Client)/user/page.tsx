import React from 'react';
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/src/lib/auth";
import prisma from "@/prisma/client";
import Logout from "@/src/components/acoount/logout";
import Link from "next/link";

const Page = async () => {

    const session = await getServerSession(authOptions);

    const user = await prisma.user.findUnique({
        where: {
            id: Number(session?.id),
        },
        include: {
            wallet: true,
        },
    })

    const contracts = await prisma.contract.findMany({
        where: {
            user: {
                id: Number(session?.id),
            },
        },
        include: {
            farm: true,
        }

    })

    console.log(session)

    return (
        <div>
            {/*{session.id}*/}
            <div className={'w-full h-1/3 bg-white '}>
                <div className={'p-3'}>
                    <div className={'flex p-8 border border-green-800'}>
                        <div className={''}>
                            {/*profile logo*/}
                        </div>
                        <div className={'flex-1'}>
                            <h1 className={'lg:text-4xl'}>Hello, {user.name}</h1>
                            <p className={'py-3 text-gray-600'}>Account email address: {user.email}</p>
                            <hr className={'py-3'}/>
                            <p className={'text-gray-600'}>Your Current Wallet Fund as of Today:
                            </p>
                            <p className={'pt-3'}>
                                <span
                                    className={'text-2xl text-green-800'}> {(user?.wallet?.balance) ? user?.wallet?.balance : '0'} Pesos</span>
                            </p>
                        </div>
                        <div className={'px-4 flex flex-col w-[250px]'}>
                            {/*<p>helo</p>*/}
                            <div className={'pb-6 flex justify-end'}>
                                <Logout/>
                            </div>

                            <div className={'py-3 flex flex-col gap-4'}>
                                <Link href={{
                                    pathname: `/user/wallet/${user.id}`,
                                }} className={'btn btn-sm btn-outline text-green-800 hover:bg-green-800'}>
                                    Reload Your Wallet
                                </Link>
                                <Link href={'#'} className={'btn btn-sm btn-outline hover:bg-yellow-600 disabled'}>
                                    Withdraw from Wallet
                                </Link>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
            <div className={'px-3 w-full h-1/3 bg-white '}>
                <div className={'border border-green-800'}>
                    {/*<p>hello</p>*/}
                    <div className={'p-3'}>
                        <div className={'w-full'}>
                            <p className={'pb-4 text-center text-2xl'}>Current Pledges</p>
                            <hr/>
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Pledge Date</th>
                                        <th>Name of Farm/Campaign</th>
                                        <th>Amount Invested</th>
                                        <th>Fulfilled?</th>
                                        <th>Details</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {contracts.map((contract) => (
                                        <tr key={contract.id}>
                                            <th>{contract.id}</th>
                                            <td>{contract.date_started?.toDateString()}</td>
                                            <td>{contract.farm.farm_name}</td>
                                            <td>{contract.invested_amount?.toFixed(2)}</td>
                                            <td>{contract.payment_status}</td>
                                            <td>
                                                <Link href={`/View/${contract.farmId}`}
                                                      className="btn btn-ghost btn-xs ">Details</Link>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Page;