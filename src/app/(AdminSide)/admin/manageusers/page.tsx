import React from 'react';
import Breadcrumbs from "@marketsystems/nextjs13-appdir-breadcrumbs";
import prisma from "@/prisma/client";
import Link from "next/link";

const Page = async () => {
    const users = await prisma.user.findMany();

    return (
        <div>
            <p>Im in Manage Users</p>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>User Email Address</th>
                        <th>User Fullname</th>
                        <th>Gender</th>
                        <th>Joined Date</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {users?.map((user) => (

                        <tr className="hover" key={user.id}>
                            <th>{user.id}</th>
                            <th>{user.email}</th>
                            <td>{user.first_name + ' ' + user.middle_name + ' ' + user.last_name}</td>
                            <td>{user.gender}</td>
                            <td>{user.email_verified?.toDateString()}</td>
                            <th>
                                <Link href={`/admin/managefarm/${user.id}`}
                                      className="btn btn-ghost btn-xs">see full details</Link>
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