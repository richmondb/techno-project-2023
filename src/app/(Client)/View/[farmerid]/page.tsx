import React from 'react';
import {Getspecific} from "@/src/lib/getfarms";
import Image from 'next/image'
import {Tabs, Tab} from '@/src/components/view/tab';
import Agreement_modal from "@/src/components/view/agreement_modal";
import prisma from "@/prisma/client";
import Link from "next/link";
import {getServerSession} from "next-auth/next";
import {authOptions} from "@/src/lib/auth";

async function Page({params}: { params: { farmerid: string } }) {

    const session = await getServerSession(authOptions);

    console.log(session.id);

    const userid = session.id;

    console.log('type of userid is:', typeof userid)

    const id = Number(params.farmerid);

    const data = await Getspecific(id);

    console.log(data)

    const active_contract = await prisma.contract.findUnique({
        where: {
            farmId: Number(id),
            userId: session.id,
        },
        select: {
            id: true,
            invested_amount: true
        }
    })

    const active_contract_paid = await prisma.contract.findUnique({
        where: {
            farmId: Number(id),
            payment_status: 'paid',
            userId: session.id,
        }, select: {
            invested_amount: true,
            expected_payout: true,
            payment_date: true,
            date_ended: true,
        }
    })


    console.log(active_contract_paid);
    console.log(active_contract);

    function activecontract() {
        return (
            <div>
                <div className={'flex flex-col justify-center uppercase'}>
                    <div className={'flex justify-center'}>
                        <svg viewBox="0 0 24 24" width={100} height={100} fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M17.4142 10.4142C18 9.82843 18 8.88562 18 7C18 5.11438 18 4.17157 17.4142 3.58579M17.4142 10.4142C16.8284 11 15.8856 11 14 11H10C8.11438 11 7.17157 11 6.58579 10.4142M17.4142 10.4142C17.4142 10.4142 17.4142 10.4142 17.4142 10.4142ZM17.4142 3.58579C16.8284 3 15.8856 3 14 3L10 3C8.11438 3 7.17157 3 6.58579 3.58579M17.4142 3.58579C17.4142 3.58579 17.4142 3.58579 17.4142 3.58579ZM6.58579 3.58579C6 4.17157 6 5.11438 6 7C6 8.88562 6 9.82843 6.58579 10.4142M6.58579 3.58579C6.58579 3.58579 6.58579 3.58579 6.58579 3.58579ZM6.58579 10.4142C6.58579 10.4142 6.58579 10.4142 6.58579 10.4142Z"
                                    stroke="#166534" strokeWidth="0.75"></path>
                                <path
                                    d="M13 7C13 7.55228 12.5523 8 12 8C11.4477 8 11 7.55228 11 7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7Z"
                                    stroke="#166534" strokeWidth="0.75"></path>
                                <path d="M18 6C16.3431 6 15 4.65685 15 3" stroke="#166534"
                                      strokeWidth="0.75"
                                      strokeLinecap="round"></path>
                                <path d="M18 8C16.3431 8 15 9.34315 15 11" stroke="#166534"
                                      strokeWidth="0.75"
                                      strokeLinecap="round"></path>
                                <path d="M6 6C7.65685 6 9 4.65685 9 3" stroke="#166534" strokeWidth="0.75"
                                      strokeLinecap="round"></path>
                                <path d="M6 8C7.65685 8 9 9.34315 9 11" stroke="#166534" strokeWidth="0.75"
                                      strokeLinecap="round"></path>
                                <path
                                    d="M4 21.3884H6.25993C7.27079 21.3884 8.29253 21.4937 9.27633 21.6964C11.0166 22.0549 12.8488 22.0983 14.6069 21.8138M13.6764 18.5172C13.7962 18.5033 13.911 18.4874 14.0206 18.4699C14.932 18.3245 15.697 17.8375 16.3974 17.3084L18.2046 15.9433C18.8417 15.462 19.7873 15.4619 20.4245 15.943C20.9982 16.3762 21.1736 17.0894 20.8109 17.6707C20.388 18.3487 19.7921 19.216 19.2199 19.7459M13.6764 18.5172C13.6403 18.5214 13.6038 18.5254 13.5668 18.5292M13.6764 18.5172C13.8222 18.486 13.9669 18.396 14.1028 18.2775C14.746 17.7161 14.7866 16.77 14.2285 16.1431C14.0991 15.9977 13.9475 15.8764 13.7791 15.7759C10.9817 14.1074 6.62942 15.3782 4 17.2429M13.6764 18.5172C13.6399 18.525 13.6033 18.5292 13.5668 18.5292M13.5668 18.5292C13.0434 18.5829 12.4312 18.5968 11.7518 18.5326"
                                    stroke="#166534" strokeWidth="0.75" strokeLinecap="round"></path>
                            </g>
                        </svg>
                    </div>
                    <div className={'flex flex-col justify-center items-center'}>
                        <h1 className={'pt-3 text-xl text-center'}>Congratulations! You&apos;ve
                            pledge <span>₱ {active_contract.invested_amount}</span> to {((data.farmowner?.gender === 'M') ? 'Mr. ' : 'Ms. ')} {data.farm_name}
                        </h1>
                        <p className={'py-3 text-gray-600 text-sm'}>To confirm your investment, please add
                            funds
                            to your
                            wallet.</p>
                        <div className={'pt-2 flex flex-row gap-6'}>
                            <Link href={{
                                pathname: '/pay',
                                query: {
                                    id: `${data.id}`,
                                }
                            }} className={'btn btn-outline rounded-none bg-green-800 text-white'}>
                                Check Balance & Commit
                            </Link>
                            <Link href={`/View/${data.id}/invest`}
                                  className={'btn btn-outline rounded-none'}>
                                Change Your Pledged Amount
                            </Link>
                        </div>

                        <p className={'py-8 text-sm text-gray-600'}>Important Note:
                            To cancel your farm pledges, kindly contact us. All pledges will be
                            automatically cancelled if not fulfilled within one (1) week or once the farm
                            has been fully-funded.</p>
                    </div>


                </div>
            </div>
        )
    }

    function activecontractpaid() {
        return (
            <div>
                <div className={'flex flex-col justify-center uppercase'}>
                    <div className={'flex justify-center'}>
                        <svg viewBox="0 0 24 24" width={100} height={100} fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M17.4142 10.4142C18 9.82843 18 8.88562 18 7C18 5.11438 18 4.17157 17.4142 3.58579M17.4142 10.4142C16.8284 11 15.8856 11 14 11H10C8.11438 11 7.17157 11 6.58579 10.4142M17.4142 10.4142C17.4142 10.4142 17.4142 10.4142 17.4142 10.4142ZM17.4142 3.58579C16.8284 3 15.8856 3 14 3L10 3C8.11438 3 7.17157 3 6.58579 3.58579M17.4142 3.58579C17.4142 3.58579 17.4142 3.58579 17.4142 3.58579ZM6.58579 3.58579C6 4.17157 6 5.11438 6 7C6 8.88562 6 9.82843 6.58579 10.4142M6.58579 3.58579C6.58579 3.58579 6.58579 3.58579 6.58579 3.58579ZM6.58579 10.4142C6.58579 10.4142 6.58579 10.4142 6.58579 10.4142Z"
                                    stroke="#166534" strokeWidth="0.75"></path>
                                <path
                                    d="M13 7C13 7.55228 12.5523 8 12 8C11.4477 8 11 7.55228 11 7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7Z"
                                    stroke="#166534" strokeWidth="0.75"></path>
                                <path d="M18 6C16.3431 6 15 4.65685 15 3" stroke="#166534"
                                      strokeWidth="0.75"
                                      strokeLinecap="round"></path>
                                <path d="M18 8C16.3431 8 15 9.34315 15 11" stroke="#166534"
                                      strokeWidth="0.75"
                                      strokeLinecap="round"></path>
                                <path d="M6 6C7.65685 6 9 4.65685 9 3" stroke="#166534" strokeWidth="0.75"
                                      strokeLinecap="round"></path>
                                <path d="M6 8C7.65685 8 9 9.34315 9 11" stroke="#166534" strokeWidth="0.75"
                                      strokeLinecap="round"></path>
                                <path
                                    d="M4 21.3884H6.25993C7.27079 21.3884 8.29253 21.4937 9.27633 21.6964C11.0166 22.0549 12.8488 22.0983 14.6069 21.8138M13.6764 18.5172C13.7962 18.5033 13.911 18.4874 14.0206 18.4699C14.932 18.3245 15.697 17.8375 16.3974 17.3084L18.2046 15.9433C18.8417 15.462 19.7873 15.4619 20.4245 15.943C20.9982 16.3762 21.1736 17.0894 20.8109 17.6707C20.388 18.3487 19.7921 19.216 19.2199 19.7459M13.6764 18.5172C13.6403 18.5214 13.6038 18.5254 13.5668 18.5292M13.6764 18.5172C13.8222 18.486 13.9669 18.396 14.1028 18.2775C14.746 17.7161 14.7866 16.77 14.2285 16.1431C14.0991 15.9977 13.9475 15.8764 13.7791 15.7759C10.9817 14.1074 6.62942 15.3782 4 17.2429M13.6764 18.5172C13.6399 18.525 13.6033 18.5292 13.5668 18.5292M13.5668 18.5292C13.0434 18.5829 12.4312 18.5968 11.7518 18.5326"
                                    stroke="#166534" strokeWidth="0.75" strokeLinecap="round"></path>
                            </g>
                        </svg>
                    </div>
                    <div className={'flex flex-col justify-center items-center'}>
                        <h1 className={'pt-3 text-xl text-center'}>Congratulations! You&apos;ve
                            pledge <span>₱ {active_contract.invested_amount}</span> to {((data.farmowner?.gender === 'M') ? 'Mr. ' : 'Ms. ')} {data.farm_name}
                        </h1>
                        <p className={'py-3 text-gray-600 text-sm'}>You have successfully funded this Farm!</p>
                        <div className={'w-full pt-2'}>
                            <div className={'flex flex-col rounded-none'}>
                                <div className={'w-full flex  border-black'}>
                                    <div className={'w-1/2 p-1 pl-3 border border-base-300'}>You have Invested a total
                                        of
                                    </div>
                                    <div
                                        className={'w-1/2 p-1 pl-3 border border-base-300'}>P {active_contract_paid.invested_amount}
                                    </div>
                                </div>
                            </div>
                            <div className={'flex flex-col rounded-none'}>
                                <div className={'w-full flex  border-black'}>
                                    <div className={'w-1/2 p-1 pl-3 border border-base-300'}>Funded Date
                                        of
                                    </div>
                                    <div
                                        className={'w-1/2 p-1 pl-3 border border-base-300'}>{active_contract_paid.payment_date.toDateString()}
                                    </div>
                                </div>
                            </div>
                            <div className={'flex flex-col rounded-none'}>
                                <div className={'w-full flex  border-black'}>
                                    <div className={'w-1/2 p-1 pl-3 border border-base-300'}>Expected Payout Date
                                    </div>
                                    <div
                                        className={'w-1/2 p-1 pl-3 border border-base-300'}>  {active_contract_paid.date_ended.toDateString()}
                                    </div>
                                </div>
                            </div>
                            <div className={'flex flex-col rounded-none'}>
                                <div className={'w-full flex  border-black'}>
                                    <div className={'w-1/2 p-1 pl-3 border border-base-300'}>Expected Amount to Received
                                    </div>
                                    <div
                                        className={'w-1/2 p-1 pl-3 border border-base-300'}>P {active_contract_paid.expected_payout}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        )
    }

    function noactivecontract() {
        return (
            <div className={''}>
                <div className={'text-2xl'}>
                    <p>{((data.farmowner?.gender === 'M') ? 'Mr. ' : 'Ms. ') + data.farmowner?.first_name}&apos;s
                        Farm
                        plants {data.farm_crop} in {data.farm_size.toUpperCase()} Land</p>

                </div>
                <div className={'py-8 text-xl text-gray-600'}>
                    <p>PHP {data.target_amt.toFixed(2)} will be used to buy inputs for the farm.</p>
                </div>
                <hr/>
                <div className={'py-6 flex justify-evenly'}>
                    <div className={'flex flex-col items-center justify-center gap-3'}>
                        <img src="/workoptions/seedling.png" alt="" className={'h-12 w-12'}/>
                        <p>Seedling</p>
                    </div>

                    <div className={'flex flex-col items-center justify-center gap-3'}>
                        <img src="/workoptions/labor.png" alt="" className={'h-12 w-12'}/>
                        <p>Labor</p>
                    </div>
                    <div className={'flex flex-col items-center justify-center gap-3'}>
                        <img src="/workoptions/fertilizer.png" alt="" className={'h-12 w-12'}/>
                        <p>Fertilizer</p>
                    </div>

                </div>
                <div className={'py-3 flex flex-col gap-3'}>
                    <div tabIndex={0}
                         className="collapse collapse-arrow border border-base-300 rounded-none ">
                        <div className="collapse-title text-lg font-medium">
                            Seedling
                        </div>
                        <div className="collapse-content">
                            <p>At InvestoFarm, we utilize the investment funds from our valued investors to
                                acquire and sow top-quality seedlings on our farmlands. These seedlings play
                                a
                                vital role in kickstarting our agricultural endeavors. We source seeds from
                                reputable suppliers, carefully selecting varieties that are best suited for
                                the
                                specific climate and soil conditions of each farm. By investing in
                                high-yielding
                                and disease-resistant seedlings, we aim to maximize crop productivity and
                                ensure
                                the success of our farming projects.</p>
                        </div>
                    </div>
                    <div tabIndex={0}
                         className="collapse collapse-arrow border border-base-300 rounded-none ">
                        <div className="collapse-title text-lg font-medium">
                            Labor
                        </div>
                        <div className="collapse-content">
                            <p>The investment money allows us to hire experienced farmers, agricultural
                                workers,
                                and other skilled personnel who play essential roles in various farming
                                activities. These activities include planting, irrigation, fertilization,
                                pest
                                control, harvesting, and overall farm maintenance. <br/><br/>
                                By employing a capable and efficient workforce, we ensure that our farmlands
                                are
                                operated at their full potential, maximizing productivity and crop yields.
                                The
                                diligent efforts of our labor force contribute to the success of our farming
                                ventures, making them more profitable and sustainable.</p>
                        </div>
                    </div>
                    <div tabIndex={0}
                         className="collapse collapse-arrow border border-base-300 rounded-none">
                        <div className="collapse-title text-lg font-medium">
                            Fertilizer
                        </div>
                        <div className="collapse-content">
                            <p>Through the strategic use of investment money to acquire fertilizers,
                                InvestoFarm
                                aims to optimize crop production, increase farm profitability, and
                                ultimately
                                provide attractive returns for our investors while fostering responsible and
                                sustainable agricultural practices.</p>
                        </div>
                    </div>
                    <hr/>
                    <Agreement_modal buttonContent={data.farm_name} modalActionId={data.id}/>
                    <div className={'py-6'}>
                        <h1 className={'text-xl font-bold'}>Positive Contribution</h1>
                        <br/>
                        <p className={'text-gray-600'}>By investing in InvestoFarm, you are making a direct
                            and
                            significant impact on the
                            livelihood of one farmer and their farming business. Furthermore, your support
                            can
                            create a ripple effect in the community, generating a potential of at least
                            three
                            additional jobs in the agribusiness sector. Your investment not only promotes
                            sustainable farming practices but also fosters economic growth and opportunities
                            for
                            local communities.</p>
                    </div>
                </div>
            </div>
        )
    }

    // console.log('my id is : ', id)

    return (
        <div className={''}>
            {/*<p>My Post: {Number(params.farmerid)}</p>*/}
            <div className={'w-full p-4 md:py-10 md:px-28 flex flex-col md:flex-row gap-4 '}>
                <div
                    className={'w-auto h-fit md:w-[500px] shadow-2xl shadow-green-100 border border-base-300 rounded-md'}>
                    <div className={'relative h-[300px]'}>
                        <p>1</p>
                        {/*farm picure of farmer picture*/}
                        <Image src={'/carousel/4.jpg'} fill quality={100} alt="Shoes" className={''}
                               priority={true}/>
                        {/*farm favorites*/}
                        <div className={'absolute top-2 right-2 flex flex-col gap-2'}>
                            <div className="tooltip tooltip-left" data-tip="hello">
                                <img src={'/star_icon.svg'} alt={'star'} className={'h-8 w-8'}/>
                            </div>
                            <div className={'tooltip tooltip-left'} data-tip={'Rice'}>
                                <img src={'/vegetable_plants/rice_plant.svg'} alt={'plant to grow'}
                                     className={'h-8 w-8'}/>
                            </div>
                        </div>
                    </div>
                    <div className={''}>
                        <div className={'p-2 uppercase text-xl flex justify-center bg-green-800 text-white'}>
                            <p>{data.farm_crop} @ {data.crop_lifetime} days</p>
                        </div>
                        <div className={'p-4 text-2xl uppercase flex justify-center font-light'}>
                            <p>{data.farm_name}</p>
                        </div>
                        <div className={'flex justify-center text-lg text-gray-600'}>
                            <p>{data.farm_address}</p>
                        </div>
                        <div className={'flex p-4 text-xl justify-center font-black'}>
                            <p>PHP {data.target_amt.toFixed(2)}</p>
                        </div>

                        <div className={'w-full h-auto p-4 flex justify-center bg-gray-700 text-white text-xl'}>
                            <div>
                                <p className={'text-center'}>PhP {data.globalfarmstatus.global_amt_raise.toFixed(2)} of
                                    PHP {data.target_amt.toFixed(2)} </p>
                            </div>
                        </div>
                        <div className={'flex p-3 justify-center text-gray-600'}>
                            <p>Farm History / Farm History</p>
                        </div>

                        {/*<div className={'text-gray-600 py-3 px-8 text-sm'}>*/}
                        {/*    <ul className={'list-disc'}>*/}
                        {/*        <li>Sample</li>*/}
                        {/*        <li>Sample</li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                    </div>

                </div>
                <div className={'w-full flex flex-col gap-8'}>
                    <div className={'p-8 font-medium border border-base-300'}>

                        {/*{(active_contract == null) ? noactivecontract() : activecontract()}*/}

                        {(active_contract !== null && active_contract_paid !== null) ? activecontractpaid() : (active_contract !== null) ? activecontract() : noactivecontract()}

                    </div>
                    <div className={'p-8 font-medium border border-base-300'}>
                        {/*<p>1</p>*/}
                        <div>
                            <Tabs>
                                <Tab label="About the Farmer">
                                    <div className="py-4">
                                        <h2 className="text-lg font-medium mb-2">ABOUT THE FARMER AND THEIR FARM</h2>
                                        <p className={'py-3 text-gray-500'}>Kuya Sammy is 46 years old. He is married
                                            with 2
                                            children.</p>
                                        <p className={'py-3 text-gray-500'}>Farm Ownership: Tenant</p>
                                        <hr className={''}/>
                                        <h1 className={'text-xl py-3'}>ABOUT BALUNGAO, PANGASINAN, PHILIPPINES</h1>
                                        <p className={'text-gray-500'}>Balungao, officially the Municipality of
                                            Balungao, (Pangasinan: Baley na
                                            Balungao; Ilokano: Ili ti Balungao; Tagalog: Bayan ng Balungao), is a 4th
                                            class municipality in the province of Pangasinan, Philippines. According to
                                            the 2015 census, it has a population of 31,106 people. The town is located
                                            in the south-eastern part of the province bordering the province of Nueva
                                            Ecija to the south. Balungao is partially urban community with an area of
                                            7,325 hectares.</p>

                                    </div>
                                </Tab>
                                <Tab label="Loan History">
                                    <div className="py-4">
                                        <h2 className="text-lg font-medium mb-2">No farm updates yet</h2>
                                    </div>
                                </Tab>
                                <Tab label="Farm Status">
                                    <div className="py-4">
                                        <h2 className="text-lg font-medium mb-2">No farm updates yet</h2>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                    <div className={'p-8 font-medium border border-base-300 '}>
                        <p className={'text-md py-3 text-2xl'}>
                            Learn More About Your Investment with InvestoFarm
                        </p>
                        <div className={'text-gray-600'}>
                            <p>In the Philippines, the majority of farmers face financial constraints, with two out of
                                three farmers unable to access traditional loans and resorting to borrowing from loan
                                sharks. InvestoFarm is dedicated to making a positive change in the lives of these
                                smallholder farmers by providing much-needed capital to finance their farms and break
                                free from the burden of overlapping debt.
                                <br/><br/>
                                Investing in InvestoFarm&apos;s Cropital platform empowers farmers without requiring
                                them to
                                provide collateral. Your support becomes a lifeline for these farmers, enabling them to
                                invest in the future of their families and foster the growth of their farms.
                                <br/><br/>
                                With your investment, you contribute to a sustainable agricultural ecosystem while also
                                securing a fixed return of 3.5% on your investment amount pre-fees. For every 5,000
                                pesos invested, you can expect a return of 5,175 pesos after a successful harvest
                                season.
                                <br/><br/>
                                By joining InvestoFarm&apos;s mission, you are not only making a financially sound
                                decision
                                but also becoming an agent of positive change, helping farmers build better futures for
                                themselves and their communities. Together, we can transform the agricultural landscape
                                and support the backbone of our economy – the hardworking farmers.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Page;