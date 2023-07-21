import React, { Suspense } from 'react'
import Link from 'next/link';
import Profile from "@/src/components/navbar/Profile";
import ProfileLoading from "@/src/components/navbar/ProfileLoading";

export const Navbar = () => {
    return (
        <>
            <div className="z-50 drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="flex flex-col drawer-content">
                    {/* AdminNavbar */}
                    <div className="w-full bg-white navbar md:px-16">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    className="inline-block h-6 w-6 stroke-current">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </label>
                        </div>
                        <div className="flex-1">
                            <Link href={"/"} className="text-xl font-bold normal-case">InvestoFarm</Link>
                            <div className='hidden lg:block'>
                                <Link href={'/aboutus'} className='ml-6'>About Us</Link>
                                <Link href={'/howto'} className='ml-6'>How We Invest your Money</Link>
                            </div>
                        </div>

                        <div className="hidden flex-none gap-3 lg:flex">
                            <Suspense fallback={<ProfileLoading />}>
                                <Profile />
                            </Suspense>
                        </div>


                        {/*<Profile/>*/}

                    </div>
                    <hr />
                    {/* Page content here */}
                    {/*Content*/}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="h-full w-80 gap-3 p-4 menu bg-base-200">
                        {/* Sidebar content here */}
                        <li>
                            <div className="flex justify-center gap-3 md:flex-end">
                                <Profile />
                            </div>
                        </li>
                        <hr />
                        <li>
                            <Link href={'/aboutus'} className='ml-6'>About Us</Link>

                        </li>
                        <hr />
                        <li>
                            <Link href={'/howto'} className='ml-6'>How We Invest your Money</Link>
                        </li>
                        <hr />
                    </ul>

                </div>

            </div>
        </>

    )
}
