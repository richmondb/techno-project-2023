import React from 'react'
import AboutSectionOne from "@/src/components/about/AboutSectionOne";
import AboutSectionTwo from "@/src/components/about/AboutSectionTwo";
import Footer from "@/src/components/footer/Footer";
import Founder from '@/src/components/about/Founder';
import Partners from "@/src/components/homepage/Partners";

const Aboutus = () => {
    return (
        <>
            <div>
                <div className={'relative w-full h-1/3'}>
                    <div className={'p-16 flex flex-col text-center justify-center'}>
                        <h1 className={'text-5xl'}>About InvestoFarm</h1>
                        <h1 className={'py-3 text-2xl'}>An Agricultural Farmland Investment Company and a Crowdfunding
                            platform that connects individuals with opportunities to support and finance our dedicated
                            farmers.</h1>
                    </div>
                    <hr/>
                </div>
                <div className={'w-full flex flex-col gap-3 p-8'}>
                    <div className={'flex justify-center text-xl px-28 py-8'}>
                        <h1>Welcome to InvestoFarm!
                            <br/><br/><br/>
                            At InvestoFarm, we are on a mission to revolutionize the agricultural investment landscape
                            and empower both investors and farmers. Our platform serves as the bridge that connects
                            individuals seeking rewarding investment opportunities with hardworking farmers in need of
                            financial support. Through our user-friendly website, you can explore a diverse range of
                            agricultural projects and farmland investments that align with your financial goals and
                            values.
                            <br/><br/><br/>
                            We take great pride in promoting sustainable agricultural practices while driving economic
                            growth in rural communities. Our dedicated team ensures that your investment funds are
                            allocated responsibly, supporting farmers in their quest to enhance productivity and yield.
                            With our transparent and secure investment process, you can gain peace of mind, knowing that
                            your investments are making a tangible impact on the lives of farmers and contributing to
                            the growth of the agricultural sector.
                            <br/><br/><br/>
                            Whether you are a seasoned investor looking to diversify your portfolio or someone
                            passionate about supporting local farmers, InvestoFarm welcomes you to join our thriving
                            community. Together, let&apos;s pave the way for a brighter and more sustainable future in
                            agriculture. Join us today and be a part of the InvestoFarm journey towards a prosperous and
                            resilient agricultural industry.</h1>
                    </div>
                    <Partners/>
                </div>
            </div>
            <Founder/>
        </>
    )
}

export default Aboutus
