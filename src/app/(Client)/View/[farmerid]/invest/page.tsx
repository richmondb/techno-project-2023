'use client'
import React, {FormEvent, useEffect, useState} from 'react';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';
import {toast} from "react-toastify";
import {useSession} from "next-auth/react";


const Page = () => {

    // create router
    const router = useRouter();

    const sessionid = useSession();

    // console.log(sessionid.data?.user?.id)
    console.log(sessionid.data?.id)

    const [value, setvalue] = useState(0);
    const [farmerDetails, setfarmerDetails] = useState({
        farmerId: '',
        farm_name: '',
        contractId: '',
        investedAmount: '',

    });

    // console.log('investmamointu', farmerDetails.investedAmount)


    // Calling useRouter() hook
    const pathname = usePathname();
    const params = useSearchParams();

    const params2 = params.get('name');

    // console.log(pathname.split(/(\d+)/)[1]);
    const farmeridinurl = pathname.split(/(\d+)/)[1];

    useEffect(() => {
        // check if contract has a valuie
        if (farmerDetails.investedAmount == null) {
            setvalue(0);
        } else if (farmerDetails.investedAmount != '') {
            setvalue(Number(farmerDetails.investedAmount));
        } else {
            setvalue(0);
        }
        console.log(value)
    }, [farmerDetails.investedAmount])


    // console.log('type of value is', isNaN(value))
    // console.log(farmerDetails.investedAmount)

    // if (farmerDetails.investedAmount == null) {
    //     console.log('null')
    // } else {
    //     console.log('not null')
    // }


    useEffect(() => {
        try {
            async function fetchfarmerdata() {
                const response = await fetch(`/api/invest/?fid=${farmeridinurl}`, {
                    method: 'GET',
                });
                const data = await response.json();
                console.log(data)
                if (data.success) {
                    console.log(data)
                    setfarmerDetails({
                        farm_name: data.farmer.farm_name,
                        farmerId: data.farmer.id,
                        contractId: data.farmer.contract?.id,
                        investedAmount: data.farmer.contract?.invested_amount,
                    })
                }
                // if (data.)
            }

            fetchfarmerdata();

        } catch (e) {
            console.log(e)
        }

    }, [farmeridinurl]);

    // console.log(fetchfarmerdata)

    // console.log('farmdetails', farmerDetails)
    // console.log('value is', value)

    // check if contract has a valuie
    // if (farmerDetails.investedAmount != '') {
    //     setvalue(Number(farmerDetails.investedAmount))
    // } else {
    //     setvalue(0)
    // }
    console.log(Number(farmerDetails.investedAmount))


    const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(parseInt(e.target.value))
        // console.log(typeof parseInt(e.target.value))
        setvalue(parseInt(e.target.value))
        // console.log(value)
    }

    const clearValue = (e: FormEvent) => {
        setvalue(0);

    }


    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formdata = new FormData();

        // formdata.
        // const userId = sessionid.data?.id;
        // const farmId = pathname.split(/(\d+)/)[1];

        if (value <= 0) {
            toast.error('Please enter a positive number')
        }

        formdata.set('userId', sessionid.data?.id);
        formdata.set('farmId', pathname.split(/(\d+)/)[1]);
        formdata.set('moneyInvest', value.toString());
        formdata.set('contractId', farmerDetails.contractId);

        // console.log(JSON.stringify(formdata))

        let test = Object.fromEntries(formdata.entries())

        console.log(test)
        // console.log('user id', {userId}, 'farm id', {farmId}, 'money invset', {moneyInvest})


        // make an api request using nextjs 13
        try {
            const response = await fetch('/api/invest/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(test),
            });
            if (response) {
                const responseData = await response.json();
                // console.log(responseData)
                if (responseData.success) {
                    console.log(responseData)
                    toast('Payment successful, you will be redirected to Farm in 3 seconds')
                    await new Promise(r => setTimeout(r, 3000));
                    router.push(`/View/${farmeridinurl}`)
                } else {
                    // console.log('false')
                    // console.log(pathname)
                    // router.push('/pay')
                }
                // notFound()
            }
        } catch (error) {
            console.log(error)
        }

    }


    return (
        <div>
            {/*<p>im inside the dynamicn route yall</p>*/}
            <form onSubmit={onSubmit} id={'investForm'} autoComplete={'on'}>
                <div className={'h-auto py-6 flex flex-col lg:flex-row justify-center items-center gap-3'}>
                    <div className={'w-full md:w-[28rem] border border-base-300 rounded-sm'}>
                        <div className={'py-3'}>
                            <h1 className={'text-3xl text-center'}>Pledge to InvestoFarm</h1>
                        </div>
                        <hr/>

                        <div className={'py-6 flex justify-center text-lg text-gray-600'}>
                            <p>Investing To</p>
                        </div>
                        <div className={'text-4xl text-center'}>
                            <h1>{farmerDetails.farm_name}</h1>
                        </div>
                        <div className={'p-6 text-gray-600 text-center'}>
                            <p>Choose amount to pledge
                            </p>
                        </div>
                        <div className={'p-1 pb-6 flex justify-center text-gray-600 text-center '}>
                            <p className={'text-lg '}>PHP
                            </p>
                            <h1 className={'text-6xl text-green-800 underline'}> {value}</h1>
                        </div>
                        <div className={''}>

                        </div>
                        <div className={'py-3'}>
                            <div className="join flex flex-col mx-12 gap-4">
                                <input
                                    className="join-item btn btn-outline rounded-none md:text-lg text-green-800 checked:!bg-green-950 checked:!border-black checked:!text-white"
                                    type="radio"
                                    required={true}
                                    name="options"
                                    value={5000}
                                    aria-label="Five Thousand Pesos (5,000)" onChange={onValueChange}/>
                                <input
                                    className="join-item btn btn-outline rounded-none md:text-lg text-green-800 checked:!bg-green-950 checked:!border-black checked:!text-white"
                                    type="radio" name="options"
                                    value={10000}
                                    aria-label="Ten Thousand Pesos (10,000)" onChange={onValueChange}/>
                                <input
                                    className="join-item btn btn-outline rounded-none md:text-lg text-green-800 checked:!bg-green-950 checked:!border-black checked:!text-white"
                                    type="radio" name="options"
                                    value={15000}
                                    aria-label="Fifteen Thousand Pesos (15,000)" onChange={onValueChange}/>
                                <input
                                    className="join-item btn btn-outline rounded-none md:text-lg text-green-800 checked:!bg-green-950 checked:!border-black checked:!text-white"
                                    type="radio" name="options"
                                    value={20000}
                                    aria-label="Twenty Thousand Pesos (20,000)" onChange={onValueChange}/>
                            </div>
                        </div>
                    </div>
                    <div className={'w-full md:w-[28rem] flex items-center'}>
                        <div className={'w-full p-3 border border-base-300 rounded-sm lg:ml-3'}>
                            <h1 className={'text-xl font-medium text-center'}>Payment Breakdown</h1>
                            <div className={'py-3'}>
                                <div className={'flex py-3 justify-between'}>
                                    <p className={'text-sm text-gray-600'}>Actual amount invested to the
                                        farm/campaign</p>
                                    <p className={'pl-3 text-sm text-green-800 font-bold underline'}>P {value}</p>
                                </div>
                                <hr/>
                                <div className={'flex justify-between py-3'}>
                                    <p className={'text-sm text-gray-600'}>Our Service Fee</p>
                                    <p className={'pl-3 text-sm text-green-800 font-bold underline'}>P 500</p>
                                </div>
                                <hr className={'border border-black'}/>
                                <div className={'flex justify-between py-3'}>
                                    <p className={'text-lg text-gray-600 font-bold'}>Total</p>
                                    <p className={'pl-3 text-lg text-green-800 font-bold '}>P {value + 500}</p>
                                </div>
                                <hr className={'border border-black'}/>
                                <div className={'flex flex-col py-3 gap-3'}>
                                    <button type={'submit'} className={'btn btn-success rounded-none'}>Submit</button>
                                    <button type={'reset'} className={'btn btn-info rounded-none'}
                                            onClick={clearValue}>Reset
                                    </button>
                                    <hr/>
                                    <button type="button" onClick={() => router.back()}>
                                        Back
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default Page;