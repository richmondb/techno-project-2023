import React from 'react';
import Image from 'next/image';

function Homesecthree() {
    return (
        <>
            <section className="">
                <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-14">
                    <div className="mx-auto max-w-screen-sm">
                        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Testimonials</h2>
                        <p className="mb-8 font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">Explore the
                            whole collection of open-source web components and elements built with the utility
                            classNamees from Tailwind</p>
                    </div>
                    <div className="mb-8 grid lg:mb-12 lg:grid-cols-2">
                        <figure
                            className="flex flex-col items-center justify-center border-b border-gray-200 bg-gray-50 p-8 text-center dark:border-gray-700 dark:bg-gray-800 md:p-12 lg:border-r">
                            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Simplified
                                    Investment Process and Excellent Support</h3>
                                <p className="my-4">&quot;InvestoFarm has made investing in farmland a seamless and
                                    straightforward process. From the initial consultation to the final investment,
                                    their team provided excellent support and guidance.</p>
                                <p className="my-4">Their user-friendly online platform allowed me to easily browse
                                    available farmland, review comprehensive information, and make informed investment
                                    decisions. InvestoFarm&apos;s commitment to investor satisfaction is evident in
                                    every interaction, and I am grateful for the opportunity to be a part of their
                                    success.&quot;</p>
                            </blockquote>
                            <figcaption className="flex items-center justify-center space-x-3">
                                <Image className="h-9 w-9 rounded-full" width={36} height={36}
                                       src={'/customer_avatar/karen-nelson.png'} alt="profile picture"/>
                                <div className="text-left font-medium space-y-0.5 dark:text-white">
                                    <div>Bonnie Green</div>
                                    <div className="text-sm font-light text-gray-500 dark:text-gray-400">Firstime
                                        Investor
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                        <figure
                            className="flex flex-col items-center justify-center border-b border-gray-200 bg-gray-50 p-8 text-center dark:border-gray-700 dark:bg-gray-800 md:p-12">
                            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Exceptional Returns
                                    and Professional Service</h3>
                                <p className="my-4">&quot;InvestoFarm has exceeded my expectations as an investment
                                    company. Not only have I seen exceptional returns on my farmland investments, but
                                    their team has provided outstanding professional service throughout the entire
                                    process.</p>
                                <p className="my-4">Their expertise in the agricultural sector and their commitment to
                                    sustainable farming practices truly sets them apart. I highly recommend InvestoFarm
                                    to anyone looking for a reliable and profitable investment opportunity.!&quot;</p>
                            </blockquote>
                            <figcaption className="flex items-center justify-center space-x-3">
                                <Image className="h-9 w-9 rounded-full" width={36} height={36}
                                       src={'/customer_avatar/roberta-casas.png'} alt="profile picture"/>
                                <div className="text-left font-medium space-y-0.5 dark:text-white">
                                    <div>Roberta Casas</div>
                                    <div className="text-sm font-light text-gray-500 dark:text-gray-400">Lead designer
                                        at Dropbox
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                        <figure
                            className="flex flex-col items-center justify-center border-b border-gray-200 bg-gray-50 p-8 text-center dark:border-gray-700 dark:bg-gray-800 md:p-12 lg:border-r lg:border-b-0">
                            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Transparency and
                                    Trustworthiness</h3>
                                <p className="my-4">&quot;InvestoFarm has demonstrated an exceptional level of
                                    transparency and trustworthiness in managing my farmland investments. Their regular
                                    updates, detailed reports, and open communication channels have given me confidence
                                    in their ability to maximize returns and mitigate risks. .</p>
                                <p className="my-4"> It&apos;s refreshing to work with a company that prioritizes the
                                    best interests of their investors and maintains the highest standards of
                                    integrity.&quot;</p>
                            </blockquote>
                            <figcaption className="flex items-center justify-center space-x-3">
                                <Image className="h-9 w-9 rounded-full" width={36} height={36}
                                       src={'/customer_avatar/jese-leos.png'} alt="profile picture"/>
                                <div className="text-left font-medium space-y-0.5 dark:text-white">
                                    <div>Jese Leos</div>
                                    <div className="text-sm font-light text-gray-500 dark:text-gray-400">Software
                                        Engineer at Facebook
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                        <figure
                            className="flex flex-col items-center justify-center border-gray-200 bg-gray-50 p-8 text-center dark:border-gray-700 dark:bg-gray-800 md:p-12">
                            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">A Partner for
                                    Long-Term Success</h3>
                                <p className="my-4">&quot;InvestoFarm has been a valuable partner in my long-term
                                    investment strategy. Their team&apos;s in-depth knowledge of the agricultural
                                    industry and their commitment to sustainable farming align perfectly with my
                                    values.</p>
                                <p className="my-4">Through their expertise, I have gained access to diverse farmland
                                    investment opportunities and have enjoyed consistent returns. I appreciate their
                                    personalized approach and their dedication to supporting my investment
                                    goals.&quot;</p>
                            </blockquote>
                            <figcaption className="flex items-center justify-center space-x-3">
                                <Image className="h-9 w-9 rounded-full" width={36} height={36}
                                       src={'/customer_avatar/joseph-mcfall.png'} alt="profile picture"/>
                                <div className="text-left font-medium space-y-0.5 dark:text-white">
                                    <div>Joseph McFall</div>
                                    <div className="text-sm font-light text-gray-500 dark:text-gray-400">Individual
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="text-center">
                        <a href="#"
                           className="mr-2 mb-2 rounded-lg border border-gray-200 bg-white px-5 text-sm font-medium text-gray-900 py-2.5 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Show
                            more...</a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Homesecthree;