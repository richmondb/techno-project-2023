'use client'

import React from 'react';
import Link from 'next/link'

interface props {
    buttonContent: string | null,
    modalActionId: number,
}

const AgreementModal = (props: props) => {
    return (
        <div>
            <button
                className="rounded-sm w-full border-green-800 text-green-800 btn btn-outline hover:bg-green-800 hover:text-white"
                onClick={() => window.my_modal_2.showModal()}>Support {props.buttonContent}
            </button>
            <dialog id="my_modal_2" className="modal modal-bottom md:modal-middle">
                <form method="dialog" className="modal-box md:!w-[600px]">
                    <h3 className="font-bold text-lg text-center mb-3">Risk-acceptance Agreement</h3>
                    {/*<p className="py-4">Press ESC key or click outside to close</p>*/}
                    <p className={'text-gray-600'}>In the world of farming, risks are an inevitable reality. However,
                        InvestoFarm is committed to
                        safeguarding both our valued investors and the farmers we support. By leveraging our core
                        expertise in risk management, we have designed robust structures that effectively reduce risks
                        and enhance profitability.</p><br/>
                    <p className={'text-gray-600'}>By clicking "Agree," you acknowledge and accept that, despite our
                        diligent efforts, certain
                        risks may still be present, and there might be a possibility of incurring losses. We are
                        transparent about the potential risks, including non-repayment or payment default. However, it
                        is essential to understand that InvestoFarm actively works to mitigate these risks, ensuring the
                        protection of your investment and the welfare of the farmers.
                    </p>
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                        <Link
                            className={'btn btn-success'}
                            href={{
                                pathname: `/View/${props.modalActionId}/invest`,
                                query: {
                                    name: `${props.buttonContent}`,
                                },
                            }}


                        >Accept</Link>
                    </div>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>

                </form>
            </dialog>
        </div>
    );
};

export default AgreementModal;