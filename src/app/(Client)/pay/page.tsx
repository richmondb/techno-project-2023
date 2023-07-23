'use client'
import React, {FormEvent, useEffect, useState} from 'react';
import {useSession} from "next-auth/react";
import {useRouter, useSearchParams} from "next/navigation";
import {toast} from "react-toastify";

const Page = () => {
    const {data: session} = useSession();

    const {push} = useRouter()

    // console.log(session)

    const user = session?.user.id;

    const sessionid = useSession();

    const sessionuserid = sessionid.data?.id;

    const userid = String(user);

    console.log('session user id : ', session?.user.id)

    console.log('userid is: ', userid)


    const param = useSearchParams();

    const farmerId: string = param.get('id')

    const [message, setmessage] = useState('')

    const [farmerDetails, setfarmerDetails] = useState({
        farmerId: '',
        farm_name: '',
        contractId: '',
        investedAmount: '',
        farm_addrs: '',
        farmcrop: '',
        croplifetime: '',
        target_amnt: '',
        wallet_balance: '',
        amnt_topay: '',

    });

    const [formdata, setformdata] = useState({
        userId: `${userid}`,
        farmId: `${farmerId}`,
        contractId: '',
        firstname: '',
        lastname: '',
        phonenum: '',
        amounttodeduct: '',
        email: '',
        invested_amt: ``
    })

    useEffect(() => {
        setformdata({...formdata, userId: session?.user.id})
    }, [session?.user.name])

    // useEffect(() => {
    //     setformdata({...formdata, invested_amt: farmerDetails.investedAmount})
    //     console.log('formdata invested amount', formdata.invested_amt)
    //     console.log('farmerdetails invested amount', farmerDetails.investedAmount)
    // }, [farmerDetails.investedAmount])

    useEffect(() => {
        setformdata({...formdata, contractId: farmerDetails.contractId})
    }, [farmerDetails.contractId])

    useEffect(() => {
        try {
            async function fetchfarmerdata() {
                const response = await fetch(`/api/pay/?fid=${farmerId}&uid=${sessionuserid}`, {
                    method: 'GET',
                    cache: "no-store"
                });
                const data = await response.json();
                if (data.success) {
                    console.log(data)
                    console.log(data.farmer.contract[0].invested_amount)
                    setfarmerDetails({
                        farm_name: data.farmer.farm_name,
                        farmerId: data.farmer.id,
                        contractId: data.farmer.contract[0].id,
                        investedAmount: data.farmer.contract[0].invested_amount,
                        farm_addrs: data.farmer.farm_address,
                        farmcrop: data.farmer.farm_crop,
                        croplifetime: data.farmer.crop_lifetime,
                        amnt_topay: data.farmer.contract[0].payment_amount,
                        target_amnt: data.farmer.target_amt,
                        wallet_balance: data.farmer.contract[0].user.wallet.balance,
                    });
                    console.log(data)

                }
                // if (data.)

            }

            // fetchfarmerdata();

            if (sessionuserid != undefined) {
                fetchfarmerdata();
            }

            console.log('im called')

        } catch (e) {
            console.log(e)
        }

    }, [sessionuserid]);

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.value)
        if (Number(e.target.value) < Number(farmerDetails.amnt_topay)) {
            // toast('Amount must be greater than the current farm to pay amount')
            setmessage('Amount must be equal to the Amount to Pay, Try again')

        } else {
            setmessage('')
            setformdata({...formdata, amounttodeduct: e.target.value})
        }
    }

    // setformdata({...formdata, farmId: farmerId})
    // setformdata({...formdata, userId: userid})


    const onsubmithandle = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setformdata({...formdata, invested_amt: farmerDetails.investedAmount})

        console.log(formdata)
        // console.log(formdata.userId)
        //
        try {
            const response = await fetch(`/api/pay/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formdata),
            });
            const data = await response.json();
            if (data.success) {
                console.log(data)
                toast('Payment successful, you will be redirected to your dashboard in 3 seconds')
                await new Promise(r => setTimeout(r, 3000));
                push('/user')

            }
        } catch (e) {
            console.log(e)
        }

    };
    return (

        <div>
            <section>
                <h1 className="sr-only">Checkout</h1>
                {/*{userid}*/}
                <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
                    <div className="bg-gray-50 py-12 md:py-24">
                        <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-3">
                            <div className="join flex flex-col mx-3">
                                <div className={'flex flex-col'}>
                                    <p className={'text-xl text-gray-600'}>Current Farm Selected</p>
                                    <div className={'pt-3'}>
                                        <div className="overflow-x-auto rounded-none">
                                            <div className={'bg-white border border-base-300 rounded-none'}>
                                                <div className={'flex flex-col rounded-none'}>
                                                    <div className={'w-full flex  border-black'}>
                                                        <div className={'w-1/2 p-1 pl-3 border border-base-300'}>Farm
                                                            Name
                                                        </div>
                                                        <div
                                                            className={'w-1/2 p-1 pl-3 border border-base-300'}>{farmerDetails.farm_name}
                                                        </div>
                                                    </div>
                                                    <div className={'w-full flex'}>
                                                        <div className={'w-1/2 p-1  pl-3 border border-base-300'}>
                                                            Farm Target Amount
                                                        </div>
                                                        <div
                                                            className={'w-1/2 p-1 pl-3  border border-base-300'}>₱ {farmerDetails.target_amnt}
                                                        </div>
                                                    </div>
                                                    <div className={'w-full flex'}>
                                                        <div className={'w-1/2 p-1  pl-3 border border-base-300'}>
                                                            Location
                                                        </div>
                                                        <div
                                                            className={'w-1/2 p-1 pl-3  border border-base-300'}>{farmerDetails.farm_addrs}
                                                        </div>
                                                    </div>
                                                    <div className={'w-full flex'}>
                                                        <div className={'w-1/2 p-1  pl-3 border border-base-300'}>Crop
                                                        </div>
                                                        <div
                                                            className={'w-1/2 p-1 pl-3  border border-base-300'}>{farmerDetails.farmcrop}
                                                        </div>
                                                    </div>
                                                    <div className={'w-full flex'}>
                                                        <div
                                                            className={'w-1/2 p-1  pl-3 border border-base-300'}>Expected
                                                            Crop Lifetime
                                                        </div>
                                                        <div
                                                            className={'w-1/2 p-1 pl-3  border border-base-300'}>{farmerDetails.croplifetime} Days
                                                        </div>
                                                    </div>
                                                    <div className={'w-full flex'}>
                                                        <div className={'w-1/2 p-1  pl-3 border border-base-300'}>Farm
                                                            Name
                                                        </div>
                                                        <div className={'w-1/2 p-1 pl-3  border border-base-300'}>test
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/* to pay */}
                                <div className={'pt-6 flex flex-col'}>
                                    <p className={'text-xl text-gray-600'}>Wallet Balance</p>
                                    <div className={'pt-3'}>
                                        <div className="overflow-x-auto rounded-none">
                                            <div className={'bg-white border border-base-300 rounded-none'}>
                                                <div className={'flex flex-col rounded-none'}>
                                                    <div className={'w-full flex  border-black'}>
                                                        <div className={'w-1/2 p-1 pl-3 border border-base-300'}>Current
                                                            Balance
                                                        </div>
                                                        <div
                                                            className={'w-1/2 p-1 pl-3 border border-base-300'}>₱ {farmerDetails.wallet_balance}
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                {/* to pay */}
                                <div className={'pt-6 flex flex-col'}>
                                    <p className={'text-xl text-gray-600'}>To Pay Breakdown</p>
                                    <div className={'pt-3'}>
                                        <div className="overflow-x-auto rounded-none">
                                            <div className={'bg-white border border-base-300 rounded-none'}>
                                                <div className={'flex flex-col rounded-none'}>
                                                    <div className={'w-full flex  border-black'}>
                                                        <div
                                                            className={'w-1/2 p-1 pl-3 border border-base-300'}>Invested
                                                            Amount
                                                        </div>
                                                        <div
                                                            className={'w-1/2 p-1 pl-3 border border-base-300'}>₱ {farmerDetails.investedAmount}
                                                        </div>
                                                    </div>
                                                    <div className={'w-full flex  border-black'}>
                                                        <div className={'w-1/2 p-1 pl-3 border border-base-300'}>
                                                            pesos service Fee
                                                        </div>
                                                        <div
                                                            className={'w-1/2 p-1 pl-3 border border-base-300'}>₱ 500
                                                        </div>
                                                    </div>
                                                    <div className={'w-full flex  border-black'}>
                                                        <div
                                                            className={'w-1/2 py-3 pl-3 font-bold border border-base-300'}>
                                                            Total
                                                        </div>
                                                        <div
                                                            className={'w-1/2 py-3 pl-3 font-bold border border-base-300'}>₱ {farmerDetails.amnt_topay}
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="bg-white py-12 md:py-16">
                        <div className="mx-auto max-w-lg px-4 lg:px-8">
                            <form onSubmit={onsubmithandle} className="grid grid-cols-6 gap-4">
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
                                        required={true}
                                        onChange={(e) => setformdata({...formdata, firstname: e.target.value})}
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
                                        required={true}
                                        onChange={(e) => setformdata({...formdata, lastname: e.target.value})}
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
                                        required={true}
                                        onChange={(e) => setformdata({...formdata, email: e.target.value})}
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
                                        required={true}
                                        onChange={(e) => setformdata({...formdata, phonenum: e.target.value})}
                                        className="input input-bordered input-xs w-full max-w-x rounded-none"
                                    />
                                </div>

                                <fieldset className="col-span-6">
                                    <legend className="block text-lg font-medium text-gray-700">
                                        Amount
                                    </legend>

                                    <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                                        <div>
                                            <label htmlFor="Amount" className="sr-only"> Amount </label>
                                            <input type="number" required={true}
                                                   placeholder={'PHP'}
                                                   onChange={handleAmountChange}
                                                   className="input input-bordered input-lg text-2xl w-full max-w-x rounded-none"
                                            />
                                        </div>
                                    </div>
                                    <legend className={'py-2 text-red-600'}>
                                        {message}
                                    </legend>
                                    <legend className={'py-1'}>
                                        Pay atleast the Amount given in the Breakdown to continue
                                    </legend>
                                </fieldset>


                                <div className="col-span-6">
                                    <button
                                        className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg"
                                    >
                                        Pay Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;