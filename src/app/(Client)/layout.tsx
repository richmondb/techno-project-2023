import './globals.css';
import {Roboto} from 'next/font/google';
import {Navbar} from '@/src/components/navbar/Navbar';
import React from "react";
import Providers from "@/src/lib/Providers";
import ToastProvider from "@/src/lib/TaoasterProvider";
import Footer from "@/src/components/footer/Footer";


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
        <body className={roboto.className}>
        <ToastProvider>
            <Providers>
                <Navbar/>
                {children}
                <Footer/>
            </Providers>
        </ToastProvider>
        </body>
        </html>

    )

}

