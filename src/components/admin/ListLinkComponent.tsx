'use client'
import React from 'react';
import Link from "next/link";


interface prop {
    href: string,
    linkname: string,
}

const ListLinkComponent = ({href, linkname}: prop) => {

    return (
        <>
            <li
                className={'my-1'}>
                <Link href={href} className="w-full flex justify-end btn btn-ghost">
                    <span className="">{linkname}</span>
                    <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                         fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                              strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
            </li>
            <hr/>
        </>
    );
};

export default ListLinkComponent;