import React from 'react';
import Breadcrumbs from "@marketsystems/nextjs13-appdir-breadcrumbs";
import prisma from "@/prisma/client";
import Link from "next/link";

const Page = async () => {
    const data = await prisma.farmOwner.findMany({
        include: {
            farm: true,
        }
    });
    return (
        <div>
            <p>Im in Manage Farm Owners</p>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Farmer Fullname</th>
                        <th>Gender</th>
                        <th>Farm Address</th>
                        <th>Phone Number</th>
                        <th>Owned Farm Name</th>
                        <th>Owned Farm ID</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {data?.map((farmer) => (
                        <tr className="hover" key={farmer.id}>
                            <th>{farmer.id}</th>
                            <td>{farmer.first_name + '' + farmer.middle_name + '' + farmer.last_name}</td>
                            <td>{farmer.gender}</td>
                            <td>{farmer.address}</td>
                            <td>{farmer.phone_num}</td>
                            <td>{farmer.farm?.farm_name} </td>
                            <td>{farmer.farm?.id} </td>
                            <th>
                                <Link href={`/admin/managefarm/${farmer.id}`}
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