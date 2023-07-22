'use client'
import React, {useEffect, useState} from 'react';
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";

const Page = ({params}: { params: { id: string } }) => {

    const router = useRouter();

    const [infomessage, setInfomessage] = useState('');

    const [isdisabled, setIsdisabled] = useState(true);

    // console.log(isdisabled)

    const [formData, setFormData] = useState({
        userId: params.id,
        email: "",
        firstname: "",
        lastname: "",
        phonenumber: "",
        amount: 0,
        paymentMethod: ""
    });

    useEffect(() => {
        // console.log(formData)
    }, [formData, isdisabled])
    const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.value)
        setFormData({...formData, paymentMethod: e.target.value})
        // console.log(formData.paymentMethod)
        // console.log(typeof parseInt(e.target.value))
        // console.log(value)
    }

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (Number(e.target.value) < 5000) {
            setInfomessage('Amount must be greater than 5000')
            setIsdisabled(true)
        } else if (Number(e.target.value) >= 30001) {
            setInfomessage('Amount must be less than 30000')
            setIsdisabled(true)
        } else {
            setInfomessage('Please note the additional 20 pesos is charged')
            setIsdisabled(false)
        }

        setFormData({...formData, amount: Number(e.target.value)})
        console.log(Number(e.target.value))
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(formData);

        try {
            const response = await fetch('/api/wallet', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data)
                if (data.success) {
                    toast('Reload Success!, you will be redirected to your dashboard in 3 seconds')
                    await new Promise(r => setTimeout(r, 3000));
                    router.push('/user')
                }
            }

        } catch (e) {
            console.log(e)
        }

    }

    return (
        <div>
            {/*{params.id}*/}
            <form onSubmit={onSubmit}>
                <section>
                    <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
                        <div className="bg-gray-50 py-12 md:py-18">
                            <div className={'px-3'}>
                                <h1 className={'text-4xl'}>Add funds to your wallet</h1>
                                <p className={'py-3 text-gray-600'}>To begin investing in farms with InvestoFarm, it
                                    is
                                    essential
                                    to ensure sufficient funds
                                    in your wallet. You have the option to top up your wallet using various payment
                                    methods available. Kindly note that using these services incurs additional fees,
                                    and
                                    you
                                    can find further information about the charges in the provided details
                                    section.</p>
                            </div>

                            <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">

                                <div className="join py-5 flex flex-col mx-12 gap-4">
                                    <div>
                                        <p>Available Payment Methods: </p>
                                    </div>
                                    <div className="form-control border border-green-800 p-2">
                                        <label className="label cursor-pointer">
                                            <span className="label-text">Reload with Mastercard</span>
                                            <img src="/logos/logo_mastercard.svg" width={40} height={40}
                                                 alt="mastercard"/>
                                            <input type="radio" name="radio-10" className="radio checked:bg-red-500"
                                                   value={'mastercard'}
                                                   required={true}
                                                   onChange={onValueChange}/>
                                        </label>
                                    </div>
                                    <div className="form-control border border-green-800 p-2">
                                        <label className="label cursor-pointer">
                                            <span className="label-text">Reload with Visa</span>
                                            <img src="/logos/logo_visa.svg" width={40} height={40} alt="visa"/>
                                            <input type="radio" name="radio-10"
                                                   className="radio checked:bg-blue-500"
                                                   value={'visa'}
                                                   onChange={onValueChange}/>
                                        </label>
                                    </div>
                                    <div className="form-control border border-green-800 p-2">
                                        <label className="label cursor-pointer">
                                            <span className="label-text">Reload with Paypal</span>
                                            <img src="/logos/logo_paypal.svg" width={30} height={30} alt="paypal"/>
                                            <input type="radio" name="radio-10"
                                                   className="radio checked:bg-blue-500"
                                                   value={'paypal'}
                                                   onChange={onValueChange}/>
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="bg-white py-12 md:py-16">
                            <div className="mx-auto max-w-lg px-4 lg:px-8">
                                <div className="grid grid-cols-6 gap-4">
                                    <div className="col-span-3">
                                        <label
                                            htmlFor="FirstName"
                                            className="block text-xs font-medium text-gray-700"
                                        >
                                            First Name
                                        </label>

                                        <input
                                            type="text"
                                            id="FirstName"
                                            name={'FirstName'} required={true}
                                            onChange={event => {
                                                setFormData({...formData, firstname: event.target.value})
                                            }}
                                            className="input input-bordered input-xs w-full max-w-x rounded-none"
                                        />
                                    </div>

                                    <div className="col-span-3">
                                        <label
                                            htmlFor="LastName"
                                            className="block text-xs font-medium text-gray-700"
                                        >
                                            Last Name
                                        </label>

                                        <input
                                            type="text"
                                            id="LastName"
                                            name={'LastName'} required={true}
                                            onChange={event => {
                                                setFormData({...formData, lastname: event.target.value})
                                            }}
                                            className="input input-bordered input-xs w-full max-w-x rounded-none"
                                        />
                                    </div>

                                    <div className="col-span-6">
                                        <label htmlFor="Email" className="block text-xs font-medium text-gray-700">
                                            Email
                                        </label>

                                        <input
                                            type="email"
                                            id="Email"
                                            name={'Email'} required={true}
                                            onChange={event => {
                                                setFormData({...formData, email: event.target.value})
                                            }}
                                            className="input input-bordered input-xs w-full max-w-x rounded-none"
                                        />
                                    </div>

                                    <div className="col-span-6">
                                        <label htmlFor="Phone" className="block text-xs font-medium text-gray-700">
                                            Phone
                                        </label>

                                        <input
                                            type="tel"
                                            id="Phone"
                                            name={'Phone'}
                                            required={true}
                                            onChange={event => {
                                                setFormData({...formData, phonenumber: event.target.value})
                                            }}
                                            className="input input-bordered input-xs w-full max-w-x rounded-none"
                                        />
                                    </div>

                                    <fieldset className="col-span-6">
                                        <legend className="block text-sm font-medium text-gray-700">
                                            Card Details
                                        </legend>

                                        <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                                            <div>
                                                <label htmlFor="CardNumber" className="sr-only"> Card
                                                    Number </label>

                                                <input
                                                    type="text"
                                                    id="CardNumber"
                                                    placeholder="Card Number"
                                                    className="input input-bordered input-xs w-full max-w-x rounded-none"
                                                />
                                            </div>

                                            <div className="flex py-3 gap-3">
                                                <div className="flex-1">
                                                    <label htmlFor="CardExpiry" className="sr-only"> Card
                                                        Expiry </label>

                                                    <input
                                                        type="text"
                                                        id="CardExpiry"
                                                        placeholder="Expiry Date"
                                                        className="input input-bordered input-xs w-full max-w-x rounded-none"
                                                    />
                                                </div>

                                                <div className="-ms-px flex-1">
                                                    <label htmlFor="CardCVC" className="sr-only"> Card CVC </label>

                                                    <input
                                                        type="text"
                                                        id="CardCVC"
                                                        placeholder="CVC"
                                                        className="input input-bordered input-xs w-full max-w-x rounded-none"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>

                                    <fieldset className="col-span-6">
                                        <legend className="block text-lg font-medium text-gray-700">
                                            Amount
                                        </legend>


                                        <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                                            <div>
                                                <label htmlFor="Amount" className="sr-only"> Amount </label>
                                                <input type="number" onChange={handleAmountChange} required={true}
                                                       placeholder={'PHP'}
                                                       className="input input-bordered input-lg text-2xl w-full max-w-x rounded-none"
                                                />
                                            </div>
                                        </div>
                                        <legend className={'py-2 text-red-600'}>
                                            {infomessage}
                                        </legend>
                                        <legend className={'py-1'}>
                                            Minimun amount is 5,000 Pesos and Maximum amount is 30,000 Pesos.
                                        </legend>
                                        <legend className={'py-1'}>
                                            Make sure to top-up your wallet by at least PHP 5,000 if you want to
                                            confirm
                                            all your investments.
                                        </legend>
                                    </fieldset>

                                    <div className="col-span-6">
                                        <button type={'submit'} disabled={isdisabled}
                                                className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg disabled:!cursor-not-allowed"
                                        >
                                            Pay Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        </div>
    );

};


export default Page;