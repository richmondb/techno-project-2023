import React from 'react'
import Image from 'next/image'

const Founder = () => {
    return (
        <>
            <div className='mb-6 flex w-full justify-center text-center text-2xl md:text-4xl'>
                <h1>Meet the Team Behind InvestoFarm</h1>
            </div>
            <div className='m-3 flex flex-col gap-3 md:flex-row'>
                <div className='flex basis-1/2 justify-center'>
                    <div
                        className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
                        <div className="flex flex-col items-center pt-10 pb-10">
                            <Image className="mb-3 h-24 w-24 rounded-full shadow-lg" width={96} height={96}
                                   src="/sampleavatar.jpg" alt="Bonnie image"/>
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Richmond John
                                Billones</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                            <div className="mt-4 flex space-x-3 md:mt-6">
                                <a href="#"
                                   className="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get
                                    to know more</a>
                                <a href="#"
                                   className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700">Message</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex basis-1/2 justify-center'>
                    <div
                        className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">

                        <div className="flex flex-col items-center pt-10 pb-10">
                            <Image className="mb-3 h-24 w-24 rounded-full shadow-lg" width={96} height={96}
                                   src="/sampleavatar.jpg" alt="Bonnie image"/>
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Delby Namoro</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                            <div className="mt-4 flex space-x-3 md:mt-6">
                                <a href="#"
                                   className="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get
                                    to know more</a>
                                <a href="#"
                                   className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700">Message</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Founder