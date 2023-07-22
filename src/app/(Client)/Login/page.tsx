'use client'
import React, {useRef} from 'react';
import {signIn} from "next-auth/react";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";

const LoginPage = () => {
    const userEmail = useRef('');
    const userPass = useRef('');

    const {push} = useRouter();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const resulst = await signIn("credentials", {
            email: userEmail.current,
            password: userPass.current,
            redirect: false,
            callbackUrl: '/'
        })

        if (!resulst?.error) {
            push('/');
        }

        if (resulst?.error) {
            console.log(resulst.error)
            const msg = JSON.parse(resulst.error)
            const text = msg['error']
            toast.error(text);
        }

        console.log('resulst is ', resulst?.status);

    }

    return (
        <div className="relative bg-cover bg-center bg-no-repeat"
             style={{backgroundImage: 'url(https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1951&q=80)'}}>
            {/*<div className="absolute inset-0 z-0 bg-gradient-to-b from-green-500 to-green-400 opacity-75"/>*/}
            <div className="mx-0 min-h-screen justify-center sm:flex sm:flex-row">
                <div className="z-10 flex flex-col self-center p-10 sm:max-w-5xl xl:max-w-2xl">
                    <div className="hidden flex-col self-start text-white lg:flex">
                        {/*<img src className="mb-3"/>*/}
                        <h1 className="mb-3 text-5xl font-bold">Hi, Login to Continue</h1>
                        <p className="pr-3">Sign in to InvestoFarm and embark on a rewarding journey to support
                            sustainable agriculture, empower farmers, and grow your investment portfolio.</p>
                    </div>
                </div>
                <div className="z-10 flex justify-center self-center">
                    <div className="mx-auto rounded-2xl bg-white p-12 w-100">
                        <div className="mb-4">
                            <h3 className="text-2xl font-semibold text-gray-800">Sign In </h3>
                            <p className="text-gray-500">Please sign in to your account.</p>
                        </div>
                        <form onSubmit={onSubmit}>
                            <div className="space-y-5">
                                <div className="space-y-2">
                                    {/* Email */}
                                    <label className="text-sm font-medium tracking-wide text-gray-700">Email</label>
                                    <input
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-base focus:border-green-400 focus:outline-none"
                                        type={'email'} placeholder="mail@gmail.com" required={true}
                                        onChange={(e) => (userEmail.current = e.target.value)}/>
                                </div>
                                <div className="space-y-2">
                                    {/* Password */}

                                    <label className="mb-5 text-sm font-medium tracking-wide text-gray-700">
                                        Password
                                    </label>
                                    <input
                                        className="w-full content-center rounded-lg border border-gray-300 px-4 py-2 text-base focus:border-green-400 focus:outline-none"
                                        type={"password"} placeholder="Enter your password" required={true}
                                        onChange={(e) => (userPass.current = e.target.value)}/>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input id="remember_me" name="remember_me" type="checkbox"
                                               className="h-4 w-4 rounded border-gray-300 bg-blue-500 focus:ring-blue-400"/>
                                        <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-800">
                                            Remember me
                                        </label>
                                    </div>
                                    <div className="text-sm">
                                        <a href="#" className="text-green-400 hover:text-green-500">
                                            Forgot your password?
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit"
                                            className="flex w-full cursor-pointer justify-center rounded-full bg-green-400 p-3 font-semibold tracking-wide text-gray-100 shadow-lg transition duration-500 ease-in hover:bg-green-500">
                                        Sign in
                                    </button>
                                </div>
                            </div>
                        </form>

                        <div className="pt-5 text-center text-xs text-gray-400">
                <span>
                  Copyright © 2021-2022
                  <a href="https://codepen.io/uidesignhub" target="_blank" title="Ajimon"
                     className="text-green hover:text-green-500">AJI</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;