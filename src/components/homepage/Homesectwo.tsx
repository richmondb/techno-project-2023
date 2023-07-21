import React from 'react';
import Image from "next/image";

function Homesectwo() {
    return (
        <div className="flex flex-col md:h-[70vh] md:flex-row" id={'section-2'}>
            <div className={'basis-1/2 flex flex-col p-8 gap-2'}>
                <div className={'basis-1/2'}>
                    <h1 className={'text-xl md:text-3xl mb-3'}>Our <span
                        style={{color: 'rgb(var(--secondarygreen))'}}>Vision</span></h1>
                    <hr/>
                    <p className={'text-base md:text-lg'}>Our vision is to be a global leader in farm investment,
                        driving
                        transformative change in the agricultural industry through sustainable
                        practices, innovation, and impactful partnerships.</p>
                </div>
                <div className={'basis-1/2'}>
                    <h1 className={'text-xl md:text-3xl mb-3'}>Our <span
                        style={{color: 'rgb(var(--secondarygreen))'}}>Mission</span></h1>
                    <hr/>
                    <p className={'text-base md:text-lg'}>Our mission is to empower sustainable agriculture and foster
                        food
                        security through strategic investments in innovative farming enterprises
                        worldwide.</p>
                </div>
            </div>
            <div className={'relative basis-1/2 w-full  h-[100%] md:h-auto '}>
                <Image alt={'asdasd'} src={'/org_photo_1.webp'} width={0} height={0} quality={100} sizes={'100%'}
                       className={'object-fit w-full h-[300px] md:h-full'}>
                </Image>

            </div>
        </div>
    );
}

export default Homesectwo;