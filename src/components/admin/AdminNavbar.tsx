import React from 'react';
import Link from "next/link";
import AdminProfile from "@/src/components/admin/AdminProfile";


const AdminNavbar = () => {
    return (
        <>
            <div className="w-full bg-white navbar px-6 border-b-2">
                <div className="flex-1">
                    <Link href={"/admin"} className="mr-28 text-lg font-bold normal-case">Dashboard</Link>
                    <Link href={'/admin'}
                          className={'mr-3 btn btn-ghost btn-sm border-b-2 border-b-green-600 rounded-none hover:!bg-transparent'}>
                        <span>
                            Dashboard
                        </span>
                    </Link>
                    <Link href={'/admin/contracts'}
                          className={'mr-3 btn btn-ghost btn-sm border-b-2 border-b-green-600 rounded-none hover:!bg-transparent'}>
                        <span>
                            Contracts
                        </span>
                    </Link>
                    <div className="dropdown">
                        <label tabIndex={0}
                               className="mr-3 btn btn-ghost btn-sm border-b-2 border-b-green-600 rounded-none hover:!bg-transparent">
                            Administrative Utilities
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" strokeWidth="2">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M12 6L12 18M12 18L17 13M12 18L7 13" stroke="#106a39" strokeLinecap="round"
                                          strokeLinejoin="round"></path>
                                </g>
                            </svg>
                        </label>
                        <ul tabIndex={0}
                            className="dropdown-content mt-5 z-[1] menu p-2 shadow bg-base-100 rounded-box border-2  w-64">
                            <li>
                                <Link href={'/admin/managefarm'}>Manage Farms</Link>
                            </li>
                            <li>
                                <Link href={'/admin/managefarmowners'}>Manage Farm Owners</Link>
                            </li>
                            <li>
                                <Link href={'/admin/manageusers'}>Manage Users</Link>
                            </li>
                        </ul>
                    </div>
                    <button type={'button'}
                            className={'mr-3 btn btn-ghost btn-sm border-b-2 border-b-amber-600 rounded-none hover:!bg-transparent'}>
                        <span>
                            Help
                        </span>
                    </button>

                </div>

                <div className="flex-none gap-3 lg:flex">
                    <AdminProfile/>
                </div>
            </div>

        </>
    );
};

export default AdminNavbar;