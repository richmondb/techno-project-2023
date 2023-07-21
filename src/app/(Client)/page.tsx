import {getServerSession} from "next-auth/next"
import {authOptions} from "@/src/lib/auth"
import React from "react";
import Homeplayer from "@/src/components/homepage/Homeplayer";
import Partners from "@/src/components/homepage/Partners";
import Homesectwo from "@/src/components/homepage/Homesectwo";
import Homesecthree from "@/src/components/homepage/Homesecthree";
import Homesecfour from "@/src/components/homepage/homesecfour";
import Newsletter from "@/src/components/homepage/Newsletter";
import Footer from "@/src/components/footer/Footer";


export default async function Home() {


    // const session = await getServerSession(authOptions);

    // console.log(session.id);

    return (
        <main className="">

            {/*<Getfarms/>*/}


            <Homeplayer/>
            {/*<Startinglist/>*/}
            <Partners/>
            <Homesectwo/>
            <Homesecthree/>
            <Homesecfour/>
            <Newsletter/>
            {/*<Footer/>*/}

            {/* <Button />   */}

        </main>
    );
}
