import React from 'react';
import Breadcrumbs from "@marketsystems/nextjs13-appdir-breadcrumbs";
import Link from "next/link";
import prisma from "@/prisma/client";

const Page = async () => {

    const numofusers = await prisma.user.count();
    const numofcontracts = await prisma.contract.count();
    const numoffarms = await prisma.farm.count();
    const numoffarmowners = await prisma.farmOwner.count();
    
    // console.log(numofusers)


    return (
        <div className={'h-[calc(100vh-106px)]'}>
            {/*<p>Im in Dashbaord</p>*/}
            <div className={'flex flex-col md:flex-row gap-6 '}>
                <div className={'w-full h-full grid grid-cols-2 gap-6'}>
                    <div className={'border border-base-300 '}>
                        <div className="card w-full  bg-base-100">
                            <div className="card-body">
                                <h2 className="card-title">Active Contracts</h2>
                                <p className={'text-xl'}>Farm Owner Currently Registered </p>
                                <p className={'text-xl'}>Current Count: {numofcontracts}</p>
                                <div className="card-actions justify-end">
                                    <Link href={'/admin/contracts'} className="btn btn-ghost btn-outline">View Full
                                        Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'border border-base-300'}>
                        <div className="card w-full  bg-base-100">
                            <div className="card-body">
                                <h2 className="card-title">Number of Farms Active</h2>
                                <p className={'text-xl'}>Farm Owner Currently Registered </p>
                                <p className={'text-xl'}>Current Count: {numoffarms}</p>
                                <div className="card-actions justify-end">
                                    <Link href={'/admin/managefarm'} className="btn btn-ghost btn-outline">View Full
                                        Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'border border-base-300'}>
                        <div className="card w-full  bg-base-100">
                            <div className="card-body">
                                <h2 className="card-title">Number of Farmers Active</h2>
                                <p className={'text-xl'}>Farm Owner Currently Registered </p>
                                <p className={'text-xl'}>Current Count: {numoffarmowners}</p>
                                <div className="card-actions justify-end">
                                    <Link href={'/admin/managefarmowners'} className="btn btn-ghost btn-outline">View
                                        Full Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'border border-base-300'}>
                        <div className="card w-full  bg-base-100">
                            <div className="card-body">
                                <h2 className="card-title">Number of Users Registered</h2>
                                <p className={'text-xl'}>User Registered </p>
                                <p className={'text-xl'}>Current Count: {numofusers}</p>
                                <div className="card-actions justify-end">
                                    <Link href={'/admin/manageusers'} className="btn btn-ghost btn-outline">View Full
                                        Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className="card w-full md:w-96 bg-base-100 border border-base-300">*/}
                {/*    <div className="card-body">*/}
                {/*        <h2 className="card-title">Active Contracts</h2>*/}
                {/*        <p>If a dog chews shoes whose shoes does he choose?</p>*/}
                {/*        <div className="card-actions justify-end">*/}
                {/*            <Link href={''} className="btn btn-ghost btn-outline">View Full Details</Link>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*/!*<div className="card w-full md:w-96 bg-base-100 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">*!/*/}
                {/*    <div className="card-body">*/}
                {/*        <h2 className="card-title">Active Contracts</h2>*/}
                {/*        <p>If a dog chews shoes whose shoes does he choose?</p>*/}
                {/*        <div className="card-actions justify-end">*/}
                {/*            <Link href={''} className="btn btn-ghost btn-outline">View Full Details</Link>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="card w-full md:w-96 bg-base-100 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">*/}
                {/*    <div className="card-body">*/}
                {/*        <h2 className="card-title">Active Contracts</h2>*/}
                {/*        <p>If a dog chews shoes whose shoes does he choose?</p>*/}
                {/*        <div className="card-actions justify-end">*/}
                {/*            <Link href={''} className="btn btn-ghost btn-outline">View Full Details</Link>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="card w-full md:w-96 bg-base-100 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">*/}
                {/*    <div className="card-body">*/}
                {/*        <h2 className="card-title">Active Contracts</h2>*/}
                {/*        <p>If a dog chews shoes whose shoes does he choose?</p>*/}
                {/*        <div className="card-actions justify-end">*/}
                {/*            <Link href={''} className="btn btn-ghost btn-outline">View Full Details</Link>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}


            </div>


        </div>
    );
};

export default Page;