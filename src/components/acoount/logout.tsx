'use client'
import React from 'react';
import {signOut} from "next-auth/react";

const Logout = () => {
    return (
        <>
            <button className={'btn btn-xs btn-warning'} onClick={() => signOut({callbackUrl: '/'})}>
                Sign Out
            </button>
        </>
    );
};

export default Logout;