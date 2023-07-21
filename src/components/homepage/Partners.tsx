import React from 'react'

const Partners = () => {
    return (
        <>
            <section className="">

                <div className="mx-auto max-w-screen-xl px-3 py-8 lg:py-8">
                    <h2 className="mb-8 text-center text-2xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl lg:mb-8">Partner
                        Companies</h2>

                    <div
                        className="grid grid-cols-2 justify-center gap-8 text-gray-500 dark:text-gray-400 sm:gap-12 md:grid-cols-4 lg:grid-cols-4">
                        <img src="/logos/afm.png" alt="" className='mx-auto h-16 w-16 object-contain'/>
                        <img src="/logos/apari.jpg" alt="" className='mx-auto h-16 w-16 object-contain'/>
                        <img src="/logos/sfa.jpg" alt="" className='mx-auto h-16 w-16 object-contain'/>
                        <img src="/logos/argri.jpg" alt="" className='mx-auto h-16 w-16 object-contain'/>


                    </div>
                    <hr className='my-4'/>
                </div>
            </section>

        </>
    )
}

export default Partners