'use client'
import React from 'react'


const Startinglist = () => {

    return (
        <>
            <section className="">
                <div className="mx-auto max-w-screen-xl px-3 py-8 lg:py-8">
                    <button
                        className="mb-16 rounded-none border-green-800 text-green-800 btn-outline btn hover:bg-green-800 hover:text-white"
                        onClick={() => window.my_modal_5.showModal()}>open modal
                    </button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <form method="dialog" className="modal-box max-w-[800px]">
                            <h3 className="text-lg font-bold">Hello!</h3>
                            <p className="py-4">Press ESC key or click the button below to close</p>

                            {/*{data.map(farm => (*/}
                            {/*    <div className='w-full grid md:grid-cols-3 bg-red-50 gap-3' key={farm.id}>*/}
                            {/*        <div className="shadow-xl card w-1/3 bg-base-100 min-w-full">*/}
                            {/*            <figure className="relative h-44">*/}
                            {/*                <Image src={'/carousel/4.jpg'} fill quality={100} alt="Shoes"*/}
                            {/*                       className="rounded-xl"/>*/}
                            {/*            </figure>*/}
                            {/*            <div className="items-center text-center card-body">*/}
                            {/*                <h2 className="card-title">{farm.farm_name}</h2>*/}

                            {/*                <p>{farm.farm_desc}</p>*/}
                            {/*                <div className="card-actions">*/}
                            {/*                    <button type={'button'} className="btn btn-primary">Buy Now</button>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*))}*/}

                            <div className="modal-action">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>

                            </div>
                        </form>
                    </dialog>


                </div>

            </section>

        </>
    )
}

export default Startinglist