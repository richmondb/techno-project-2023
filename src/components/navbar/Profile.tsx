'use client'
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {signIn, signOut, useSession} from "next-auth/react";

function Profile() {

    const {data: session, status} = useSession();

    // console.log(status)

    if (status === "authenticated") {
        return (
            <>
                <p>Welcome, {session?.user?.name?.toUpperCase()}</p>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <Image
                                alt='avatar'
                                width={100}
                                height={100}
                                src="/sampleavatar.jpg"/>
                        </div>
                    </label>
                    <ul tabIndex={0}
                        className="z-50 mt-3 w-52 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box">
                        <li>
                            <Link href={'/user'} className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        {/*<li><Link href={''}>Settings</Link></li>*/}
                        {/*<li><Link href={''} >Register</Link></li>*/}
                        {/*<li><Link href={''} onClick={()=> signIn()}>Signin</Link></li>*/}
                        <li><Link href={''} onClick={() => signOut({callbackUrl: '/'})}>Logout</Link></li>
                    </ul>
                </div>
            </>
        )
    }


    return (
        <div className={'flex justify-center gap-2'}>
            <button type={'button'}
                    className="rounded-none border-green-800 text-green-800 btn btn-outline hover:bg-green-800 hover:text-white"
                    onClick={(e) => {
                        window.location.href = '/Register';
                    }}>Register
            </button>

            <button type={'button'}
                    className="rounded-none border-green-800 text-green-800 btn btn-outline hover:bg-green-800 hover:text-white"
                    onClick={() => signIn()}>Login

            </button>
            {/*<Link href={''} className={'underline text-2xl md:text-xl'} onClick={() => signIn()}>Login</Link>*/}
            {/*<Link href={''} className={'underline text-2xl md:text-xl'} onClick={() => signIn()}>Register </Link>*/}
        </div>
    );

}

export default Profile;