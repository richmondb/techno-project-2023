import React, {Suspense} from 'react';
import {Getfarms} from "@/src/lib/getfarms";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
    const data = await Getfarms();


    let count = 0;

    // await new Promise(r => setTimeout(r, 3000));
    console.log(typeof data)

    return (
        <div className={'px-12'}>
            <div className='grid w-full gap-12 border-green-800 p-12 md:grid-cols-3'>
                {data.map(farm => (

                    <div
                        className={'flex border border-green-800 border-solid flex-col md:flex-col h-full md:h-[500px] md:w-full'}
                        key={farm.id}>
                        <p className={'hidden'}>{count++}</p>
                        <div className={'relative w-full h-[300px] md:h-1/2 '}>
                            {/*farm picure of farmer picture*/}
                            <Image src={`/farmers/img-${count}.jpg`} fill quality={100} alt="Shoes" className={''}
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
                            {/* farm name*/}
                            <div className={'absolute bottom-0 w-full h-1/6 bg-green-800'}>
                                <div className={'flex tooltip tooltip-top h-full justify-center items-center'}
                                     data-tip={farm.farm_desc}>
                                    <p className={'text-xl font-bold text-white '}>{farm.farm_name}</p>
                                </div>
                            </div>
                        </div>
                        <div

                            className={'relative w-full h-max md:h-1/2 flex flex-col justify-evenly p-4 leading-normal border-green-800'}>
                            <div>
                                <h5 className="mb-1 text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">{'Care of ' + ((farm.farmowner?.gender === 'M') ? 'Mr. ' : 'Ms. ') + farm.farmowner?.first_name}</h5>
                                <p className="mb-2 text-center font-normal text-gray-600 dark:text-gray-400">{}</p>
                                <hr/>
                            </div>
                            <div className={'flex mt-1 h-12 w-full bg-green-300 justify-center items-center'}>
                                <div>
                                    <p className={'text-xl'}>{farm.globalfarmstatus?.global_amt_raise?.toFixed(2).toString()} of {farm.target_amt?.toFixed(2).toString()}
                                        {" Raised!"}</p>
                                </div>
                            </div>
                            <div className={'flex h-12 w-full justify-center items-center'}>
                                <div>
                                    <p className={'text-base text-gray-800'}>Help support this Farmer</p>
                                </div>
                            </div>
                            <Link href={`/View/${farm.id}`} className="border-green-800 btn btn-ghost">Support This
                                Farm</Link>

                        </div>
                    </div>
                ))}

            </div>


        </div>
    );
};

export default Page;