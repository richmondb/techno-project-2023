import React from 'react';

const Page = () => {
    return (
        <div>
            <section>
                <h1 className="sr-only">Checkout</h1>

                <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
                    <div className="bg-gray-50 py-12 md:py-24">
                        <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
                            <div className="join flex flex-col mx-12 gap-4">
                                <div>
                                    <p>fdf</p>
                                </div>
                                <div className="form-control border border-green-800 p-2">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Pay with Mastercard</span>
                                        <img src="/logos/logo_mastercard.svg" width={40} height={40} alt="mastercard"/>
                                        <input type="radio" name="radio-10" className="radio checked:bg-red-500"
                                               checked/>
                                    </label>
                                </div>
                                <div className="form-control border border-green-800 p-2">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Pay with Visa</span>
                                        <img src="/logos/logo_visa.svg" width={40} height={40} alt="visa"/>
                                        <input type="radio" name="radio-10" className="radio checked:bg-blue-500"
                                               checked/>
                                    </label>
                                </div>
                                <div className="form-control border border-green-800 p-2">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Pay with Paypal</span>
                                        <img src="/logos/logo_paypal.svg" width={30} height={30} alt="paypal"/>
                                        <input type="radio" name="radio-10" className="radio checked:bg-blue-500"
                                               checked/>
                                    </label>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="bg-white py-12 md:py-16">
                        <div className="mx-auto max-w-lg px-4 lg:px-8">
                            <form className="grid grid-cols-6 gap-4">
                                <div className="col-span-3">
                                    <label
                                        htmlFor="FirstName"
                                        className="block text-xs font-medium text-gray-700"
                                    >
                                        First Name
                                    </label>

                                    <input
                                        type="text"
                                        id="FirstName"
                                        className="input input-bordered input-xs w-full max-w-x rounded-none"
                                    />
                                </div>

                                <div className="col-span-3">
                                    <label
                                        htmlFor="LastName"
                                        className="block text-xs font-medium text-gray-700"
                                    >
                                        Last Name
                                    </label>

                                    <input
                                        type="text"
                                        id="LastName"
                                        className="input input-bordered input-xs w-full max-w-x rounded-none"
                                    />
                                </div>

                                <div className="col-span-6">
                                    <label htmlFor="Email" className="block text-xs font-medium text-gray-700">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        id="Email"
                                        className="input input-bordered input-xs w-full max-w-x rounded-none"
                                    />
                                </div>

                                <div className="col-span-6">
                                    <label htmlFor="Phone" className="block text-xs font-medium text-gray-700">
                                        Phone
                                    </label>

                                    <input
                                        type="tel"
                                        id="Phone"
                                        className="input input-bordered input-xs w-full max-w-x rounded-none"
                                    />
                                </div>

                                <fieldset className="col-span-6">
                                    <legend className="block text-sm font-medium text-gray-700">
                                        Card Details
                                    </legend>

                                    <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                                        <div>
                                            <label htmlFor="CardNumber" className="sr-only"> Card Number </label>

                                            <input
                                                type="text"
                                                id="CardNumber"
                                                placeholder="Card Number"
                                                className="input input-bordered input-xs w-full max-w-x rounded-none"
                                            />
                                        </div>

                                        <div className="flex py-3 gap-3">
                                            <div className="flex-1">
                                                <label htmlFor="CardExpiry" className="sr-only"> Card Expiry </label>

                                                <input
                                                    type="text"
                                                    id="CardExpiry"
                                                    placeholder="Expiry Date"
                                                    className="input input-bordered input-xs w-full max-w-x rounded-none"
                                                />
                                            </div>

                                            <div className="-ms-px flex-1">
                                                <label htmlFor="CardCVC" className="sr-only"> Card CVC </label>

                                                <input
                                                    type="text"
                                                    id="CardCVC"
                                                    placeholder="CVC"
                                                    className="input input-bordered input-xs w-full max-w-x rounded-none"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>

                                <fieldset className="col-span-6">
                                    <legend className="block text-sm font-medium text-gray-700">
                                        Billing Address
                                    </legend>

                                    <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                                        <div>
                                            <label htmlFor="Country" className="sr-only">Country</label>

                                            <select className="select select-bordered select-sm w-full rounded-none">
                                                <option disabled selected>Small</option>
                                                <option>Small Apple</option>
                                                <option>Small Orange</option>
                                                <option>Small Tomato</option>
                                            </select>
                                        </div>

                                        <div className={'py-3'}>
                                            <label className="sr-only" htmlFor="PostalCode"> ZIP/Post Code </label>

                                            <input
                                                type="text"
                                                id="PostalCode"
                                                placeholder="ZIP/Post Code"
                                                className="input input-bordered input-xs w-full max-w-x rounded-none"
                                            />
                                        </div>
                                    </div>
                                </fieldset>

                                <div className="col-span-6">
                                    <button
                                        className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg"
                                    >
                                        Pay Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Page;