import React from 'react';
import Image from "next/image";

function Homesecfour() {
    return (
        <div className={'relative md:h-[40vh] flex justify-center'}>
            <div className="z-10 overlay"></div>
            <Image src={'/carousel/1.jpg'} alt={'image background'}
                   width={0} height={0} quality={100} sizes={'100%'} fill={true}
                   className={'object-cover w-full h-[300px] md:h-full'}>
            </Image>
            <div className={'relative flex flex-col justify-center items-center gap-3 text-center p-6'}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h1 className={'text-xl md:text-3xl z-20'}>Nurturing
                    Growth,
                    Harvesting Returns: InvestoFarm, <br/>Where
                    Agricultural
                    Investments Flourish</h1>
                <button className="z-20 rounded-none btn btn-sm btn-outline btn-custom md:btn-md">Get Started!</button>
            </div>
        </div>
    );
}

export default Homesecfour;