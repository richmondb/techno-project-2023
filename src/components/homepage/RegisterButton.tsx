'use client'
import React from 'react'
import {useRouter} from 'next/navigation'


const RegisterButton = () => {

    const router = useRouter();

    return (
        <button type={'button'}
                className="mb-16 rounded-none border-green-800 text-green-800 btn btn-outline hover:bg-green-800 hover:text-white"
                onClick={() => {
                    router.push('/Register');
                }}
        >Register
        </button>
    )
}

export default RegisterButton