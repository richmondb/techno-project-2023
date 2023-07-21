'use client'
import React, {ChangeEventHandler, useState} from 'react';
import {useRouter} from "next/navigation";
import {toast} from "react-toastify";

const Page = () => {

    const {push} = useRouter();

    const [formData, setFormData] = useState({
        email: "",
        firstname: "",
        lastname: "",
        gender: "",
        birthday: "",
        password: "",
        confirm_password: ""
    });

    const options = [
        {value: '', label: 'Select'},
        {value: 'M', label: 'Male'},
        {value: 'F', label: 'Female'},
        {value: 'O', label: 'Other'}
    ];

    const [selected, setSelected] = useState(options[0].value);

    const handleChange: ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        setSelected(event.target.value);

        formData.gender = event.target.value;
    };

    if (formData.password == formData.confirm_password) {
        let a = document.getElementById('errors');
        a?.classList.add('hidden');
    } else {
        let a = document.getElementById('errors');
        a?.classList.remove('hidden');
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        console.log(formData);

        // make an api request using nextjs 13
        try {
            const response = await fetch('/api/register/', {
                method: 'POST', // or 'GET', 'PUT', etc.
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            if (response.ok) {
                // API request was successful
                // await signIn();
                const data = await response.json();
                console.log('response data = ', data.status);
                if (data.status == 401) {
                    await toast.error('User Already Exist, Signin Instead');
                    push('/');
                } else if (data.status == 200) {
                    await toast.success('User created successfully');
                    push('/');
                }
            } else {
                // API request failed
                console.error('API request failed');
            }
        } catch (error) {
            console.error('An error occurred', error);
        }

    }


    return (

        <div className="relative bg-cover bg-center bg-no-repeat"
             style={{backgroundImage: 'url(https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1951&q=80)'}}>
            {/*<div className="absolute inset-0 z-0 bg-gradient-to-b from-green-500 to-green-400 opacity-75"/>*/}

            <div className="mx-0 min-h-screen justify-center sm:flex sm:flex-row">
                <div className="z-10 mt-3 flex justify-center self-center">
                    <div className="mx-auto rounded-2xl bg-white p-10 w-[600px]">
                        <div className="mb-4 flex justify-center">
                            <h3 className="text-2xl font-semibold text-gray-800">Sign Up</h3>
                        </div>
                        <form onSubmit={onSubmit}>
                            <div className="space-y-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium tracking-wide text-gray-700">Email</label>
                                    <input
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2 text-base focus:border-green-400 focus:outline-none"
                                        type={'email'} name={'email'} required={true}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        placeholder="mail@gmail.com"/>
                                </div>
                                <div className={'flex flex-col md:flex-row gap-3'}>
                                    <div className="space-y-2 md:w-1/2">
                                        <label className="mb-5 text-sm font-medium tracking-wide text-gray-700">
                                            First Name
                                        </label>
                                        <input
                                            className="w-full content-center rounded-lg border border-gray-300 px-4 py-2 text-base focus:border-green-400 focus:outline-none"
                                            type={"text"} name={'firstname'}
                                            onChange={(e) => setFormData({...formData, firstname: e.target.value})}
                                            required={true}
                                            placeholder="Mike"/>
                                    </div>
                                    <div className="space-y-2 md:w-1/2">
                                        <label className="mb-5 text-sm font-medium tracking-wide text-gray-700">
                                            Last Name
                                        </label>
                                        <input
                                            className="w-full content-center rounded-lg border border-gray-300 px-4 py-2 text-base focus:border-green-400 focus:outline-none"
                                            type={"text"} name={'lastname'} onChange={(e) => setFormData({
                                            ...formData,
                                            lastname: e.target.value
                                        })} required={true}
                                            placeholder="Santos"/>
                                    </div>
                                </div>
                                <div className={'flex gap-3'}>
                                    <div className="w-1/2 space-y-2">
                                        <label className="mb-5 text-sm font-medium tracking-wide text-gray-700">
                                            Gender
                                        </label>
                                        <select id="gender" value={selected} onChange={handleChange}
                                                className="block w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-green-800 focus:ring-blue-500 dark:placeholder-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500">
                                            {options.map(option => (
                                                <option key={option.value} value={option.value}>{option.label}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="w-1/2 space-y-2">
                                        <label className="mb-5 text-sm font-medium tracking-wide text-gray-700">
                                            Birthday
                                        </label>
                                        <input
                                            className="w-full content-center rounded-lg border border-gray-300 px-4 py-2 text-base focus:border-green-400 focus:outline-none"
                                            type={"date"} name={'lastname'} onChange={(e) => setFormData({
                                            ...formData,
                                            birthday: e.target.value
                                        })} required={true}
                                            placeholder="Santos"/>
                                    </div>
                                </div>

                                <div className={'flex flex-col md:flex-row gap-3'}>
                                    <div className="space-y-2 md:w-1/2">
                                        <label className="mb-5 text-sm font-medium tracking-wide text-gray-700">
                                            Password
                                        </label>
                                        <input
                                            className="w-full content-center rounded-lg border border-gray-300 px-4 py-2 text-base focus:border-green-400 focus:outline-none"
                                            type={"password"} name={'password'}
                                            onChange={(e) => setFormData({...formData, password: e.target.value})}
                                            required={true}
                                            placeholder="Enter your password"/>
                                    </div>
                                    <div className="space-y-2 md:w-1/2">
                                        <label className="mb-5 text-sm font-medium tracking-wide text-gray-700">
                                            Confirm Password
                                        </label>
                                        <input
                                            className="w-full content-center rounded-lg border border-gray-300 px-4 py-2 text-base focus:border-green-400 focus:outline-none"
                                            type={"password"} name={'confirm_password'} onChange={(e) => setFormData({
                                            ...formData,
                                            confirm_password: e.target.value
                                        })} required={true}
                                            placeholder="Enter your password"/>
                                    </div>
                                </div>
                                <div>
                                    <p className={'text-error hidden'} id={'errors'}>Passwords don&apos;t match</p>
                                </div>


                                <div className="flex items-center justify-between">
                                    <div className="text-sm">
                                        <a href="#" className="text-green-400 hover:text-green-500">
                                            Already have an Account? Sign In.
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit"
                                            className="flex w-full cursor-pointer justify-center rounded-full bg-green-400 p-3 font-semibold tracking-wide text-gray-100 shadow-lg transition duration-500 ease-in hover:bg-green-500">
                                        Register
                                    </button>
                                </div>
                            </div>
                        </form>

                        <div className="pt-2 text-center text-xs text-gray-400">
                            <span>
                              Copyright © 2023-2024
                              <a href="" target="_blank" title="Ajimon"
                                 className="text-green hover:text-green-500"> InvestoFarm</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;