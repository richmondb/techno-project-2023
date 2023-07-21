'use client'
import React from 'react'
import {useSession} from "next-auth/react"


const Howto = () => {
    // const {data: session, status} = useSession()
    return (
        <div>
            {/*How we Invest your Money*/}
            {/*<pre>{JSON.stringify(session)}</pre>*/}
            <div className={'relative w-full h-1/3'}>
                <div className={'p-16 flex flex-col text-center justify-center'}>
                    <h1 className={'text-5xl'}>InvestoFarm Connects You to the World</h1>
                    <h1 className={'py-3 text-2xl'}>While Empowering Our Farmers And Investors in Mind</h1>
                </div>
                <hr/>
            </div>
            <div className={'w-full flex flex-col gap-8 p-12'}>
                <div className="card card-side bg-base-100 shadow-xl  rounded-none">
                    <figure className={'bg-green-800 p-8 rounded-none'}>
                        <img src="/how/how-1.png" height={120} width={120} className={'h-36 w-36'} alt="Movie"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-xl">Step 1</h2>
                        <p className={'text-lg'}>Choose farm to invest in Our Campaigns</p>
                        <p className={'text-lg'}>Sign-up and register to be able to view and invest in the selection of
                            farms curated for this cycle.</p>
                        <p></p>
                        {/*<div className="card-actions justify-end">*/}
                        {/*    <button className="btn btn-primary">Watch</button>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl  rounded-none">

                    <div className="card-body">
                        <h2 className="card-title text-xl">Step 2</h2>
                        <p className={'text-lg'}>Farm successfully funded</p>
                        <p className={'text-lg'}>Once the farm has been fully funded, the farmers will be provided with
                            the resources they need to start farming.</p>
                        <p></p>
                        {/*<div className="card-actions justify-end">*/}
                        {/*    <button className="btn btn-primary">Watch</button>*/}
                        {/*</div>*/}
                    </div>
                    <figure className={'bg-green-800 p-8 rounded-none '}>
                        <img src="/how/how-2.png" height={120} width={120} className={'h-36 w-36'} alt="Movie"/>
                    </figure>
                </div>
                <div className="card card-side bg-base-100 shadow-xl  rounded-none">
                    <figure className={'bg-green-800 p-8 rounded-none w-full'}>
                        <img src="/how/how-3.png" height={120} width={120} className={'h-36 w-36'} alt="Movie"/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-xl">Step 3</h2>
                        <p className={'text-lg'}>Empower farmers and improve productivity</p>
                        <p className={'text-lg'}>Once invested, InvestoFarm efficiently allocates the funds and
                            resources to enhance agricultural production. We take responsibility for managing the funds
                            on behalf of the farmers, ensuring that they are directed towards the right resources,
                            ultimately aiming to provide our investors with optimal returns on their investment. Our
                            dedicated team works diligently to maximize productivity and promote sustainable
                            agricultural practices, creating a win-win situation for both farmers and investors.</p>
                        <p></p>
                        {/*<div className="card-actions justify-end">*/}
                        {/*    <button className="btn btn-primary">Watch</button>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl  rounded-none">

                    <div className="card-body">
                        <h2 className="card-title text-xl">Step 4</h2>
                        <p className={'text-lg'}>
                            Experience Lucrative Returns</p>
                        <p className={'text-lg'}>Following the successful harvest and sale of the produce, the invested
                            capital, along with the shared profits, will be promptly returned to the investor's virtual
                            wallet. At InvestoFarm, we prioritize transparency and efficiency, ensuring a seamless
                            process for investors to gain their well-deserved returns on investment. Our commitment to
                            maximizing profits for our valued investors makes us the ideal choice for those seeking
                            rewarding and sustainable agricultural investments.</p>
                        <p></p>
                        {/*<div className="card-actions justify-end">*/}
                        {/*    <button className="btn btn-primary">Watch</button>*/}
                        {/*</div>*/}
                    </div>
                    <figure className={'bg-green-800 p-8 rounded-none w-full'}>
                        <img src="/how/how-4.png" height={120} width={120} className={'h-36 w-36'} alt="Movie"/>
                    </figure>
                </div>
            </div>
            <div>
                
            </div>
        </div>

    )
}

export default Howto