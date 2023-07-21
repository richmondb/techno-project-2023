'use client'
import React, {useEffect, useState} from 'react';
import {useSession} from 'next-auth/react';
import RegisterButton from './RegisterButton';
import Startmodal from "@/src/components/homepage/Startmodal";
import Link from "next/link";

function Homeplayer() {


    const {data: session, status} = useSession();

    let mybutton;


    if (status === "unauthenticated") {
        mybutton = <RegisterButton/>
    } else {
        mybutton = <Startmodal/>
    }

    useEffect(() => {
        // define a custom handler function
        // for the contextmenu event
        const handleContextMenu = (e: any) => {
            // prevent the right-click menu from appearing
            e.preventDefault()
        }

        // attach the event listener to
        // the document object
        // @ts-ignore
        document.getElementById("homevideoplayer").addEventListener("contextmenu", handleContextMenu)

        // clean up the event listener when
        // the component unmounts
        return () => {
            // @ts-ignore
            document.getElementById("homevideoplayer")?.removeEventListener("contextmenu", handleContextMenu)
        }
    }, []);
    const [, set] = useState();
    return (
        <div className={'homeplayer'}>
            <div className="overlay"></div>
            <video
                height={'100%'}
                width={"100%"}
                id={"homevideoplayer"}
                autoPlay={true}
                muted={true}
                controls={false}
                loop={true}
                disablePictureInPicture={true}
                disableRemotePlayback={true}
                src={'/videos/investofarmsequence.mp4'}>
            </video>
            <div className="content">
                <h1 className={'text-5xl md:text-8xl'}>InvestoFarm</h1>
                <div className={'flex justify-center flex-col text-center text-2xl md:text-2xl'}>
                    <h1>An Agricutural </h1>
                    <h1>Investment Company</h1>
                </div>
            </div>
            <div className="home-button">
                {(status === "unauthenticated") ?
                    <Link href={"/Register"}
                          className="mb-16 rounded-none border-green-800 text-green-800  btn-outline btn hover:bg-green-800 hover:text-white">
                        Register</Link>
                    :
                    <Link href={"/View"}
                          className="mb-16 rounded-none border-green-800 text-green-800  btn-outline btn hover:bg-green-800 hover:text-white">
                        Get Started</Link>}
            </div>
        </div>


    );
}

export default Homeplayer;