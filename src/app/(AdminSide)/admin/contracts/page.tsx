import React from 'react';
import Breadcrumbs from "@marketsystems/nextjs13-appdir-breadcrumbs";
import prisma from "@/prisma/client";
import Link from "next/link";

const Page = async () => {

    const contracts = await prisma.contract.findMany();

    console.log(contracts)

    return (
        <div>
            <p>Im in Manage Contracts</p>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Status</th>
                        <th>Date Created</th>
                        <th>Date Ended</th>
                        <th>Payment Amount</th>
                        <th>Payment Status</th>
                        <th>Payment Method</th>
                        <th>Payment Status</th>
                        <th>Payout Amount</th>
                        <th>Farm ID</th>
                        <th>User ID</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {contracts?.map((contract) => (
                        <tr className="hover" key={contract.id}>
                            <th>{contract.id}</th>
                            <td>{contract.status}</td>
                            <td>{contract.date_started?.toDateString()}</td>
                            <td>{contract.date_ended?.toDateString()}</td>
                            <td>{contract.payment_method}</td>
                            <td>{contract.payment_amount?.toFixed(2)}</td>
                            <td>{contract.payment_status}</td>
                            <td>{contract.expected_payout?.toFixed(2)}</td>
                            <td>{contract.farmId}</td>
                            <td>{contract.userId}</td>
                            <th>
                                <Link href={`/admin/managefarm/${contract.id}`}
                                      className="btn btn-ghost btn-xs">details</Link>
                            </th>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Page;