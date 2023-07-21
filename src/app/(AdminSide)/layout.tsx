import './globals.css';
import {Roboto} from 'next/font/google';
import React from "react";
import Providers from "@/src/lib/Providers";
import ToastProvider from "@/src/lib/TaoasterProvider";
import Link from "next/link";
import Profile from "@/src/components/admin/AdminProfile";
import ListLinkComponent from "@/src/components/admin/ListLinkComponent";
import Breadcrumbs from "@marketsystems/nextjs13-appdir-breadcrumbs";
import AdminHelpModal from "@/src/components/admin/AdminHelpModal";
import AdminNavbar from "@/src/components/admin/AdminNavbar";
import AdminDrawer from "@/src/components/admin/AdminDrawer";

const roboto = Roboto({
    subsets: ['cyrillic'],
    weight: '500'
})

export const metadata = {
    title: 'InvestoFarm',
    description: 'An Investment company that focus on Farming',
    icons: {
        icon: {url: 'favicon.ico', type: 'image'},
        shortcut: {url: 'favicon.ico', type: 'image'}
    },

}
export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" data-theme='light' className='scroll-smooth'>
        <body className={roboto.className + ' max-h-screen box-border'}>
        <ToastProvider>
            <Providers>
                <AdminNavbar/>
                {/*<AdminDrawer>*/}
                <div className={'flex ml-3'}>
                    <p className={'py-2'}>Navigation :</p>
                    <Breadcrumbs
                        useDefaultStyle={false}
                        omitRootLabel labelsToUppercase={true}
                        containerClassName={'max-w-md breadcrumbs text-base ml-3'}
                        inactiveItemClassName={'text-green-600'}
                        activeItemClassName={'underline'}
                    />
                </div>

                <hr/>
                <div className={'h-[calc(100vh-106px)] p-6'}>
                    {children}
                </div>
                {/*</AdminDrawer>*/}
            </Providers>
        </ToastProvider>
        </body>
        </html>

    )

}

