import React from 'react';
import Breadcrumbs from "@marketsystems/nextjs13-appdir-breadcrumbs";
import prisma from "@/prisma/client";
import Link from "next/link";

const Page = async () => {

    const data = await prisma.farm.findMany({
        include: {
            farmowner: true,
        }

    });

    // await new Promise(r => setTimeout(r, 5000));

    return (
        <div>
            <p>Im in Manage Manage Farm</p>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Owner Name</th>
                        <th>Owner ID</th>
                        <th>Farm Name</th>
                        <th>Farm Description</th>
                        <th>Farm Address</th>
                        <th>Target Amount</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {data?.map((farm) => (
                        <tr className="hover" key={farm.id}>
                            <th>{farm.id}</th>
                            <td>{farm.farmowner?.first_name}</td>
                            <td>{farm.farmowner?.id}</td>
                            <td>{farm.farm_name}</td>
                            <td>{farm.farm_desc}</td>
                            <td>{farm.farm_address}</td>
                            <td>{farm.target_amt?.toString()}</td>
                            <th>
                                <Link href={`/admin/managefarm/${farm.id}`}
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