'use client'
import React, {useEffect} from 'react';
import {themeChange} from 'theme-change';

if (typeof window !== "undefined") {
    let chk = document.getElementById('togglechk');
    let htmlEllement = document.querySelector('html');

    // console.log(localStorage.getItem('data-theme'));

    chk?.addEventListener('input', e => {
        // @ts-ignore
        const isChecked = e.target.checked;
        if (isChecked) {
            // document.body.classList.add('dark-theme');
            // document.body.classList.add('dark');
            // @ts-ignore
            htmlEllement.classList.add('dark');
            console.log("checked");
        } else {
            // @ts-ignore
            htmlEllement.classList.remove('dark');
            localStorage.theme = 'dark';
            console.log("!checked");
        }
    });
    // Initialize state
    // First, we try to get the current theme from local storage. If there's no theme
    // stored yet, we default to 'light'.
    const initialTheme = window.localStorage.getItem('theme') || 'light';
    // // We then initialize our 'theme' state variable with the initial theme.


}


function Toggler() {
    useEffect(() => {
        localStorage.setItem('theme', 'light');
        themeChange(false);
        return () => {
            themeChange(false);
        };


        // 👆 false parameter is required for react project
    }, [])


    return (
        <div className=''>
            {/*<label className="mr-6 swap swap-rotate">*/}

            {/*    /!* this hidden checkbox controls the state *!/*/}
            {/*    <input type="checkbox" id={'togglechk'}/>*/}

            {/*    /!* sun icon *!/*/}

            {/*    <svg className="h-8 w-8 fill-current swap-off" xmlns="http://www.w3.org/2000/svg"*/}
            {/*         data-set-theme="light" data-act-class="ACTIVECLASS" viewBox="0 0 24 24">*/}
            {/*        <path*/}
            {/*            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>*/}
            {/*    </svg>*/}

            {/*    /!* moon icon *!/*/}
            {/*    <svg className="h-8 w-8 fill-current swap-on" xmlns="http://www.w3.org/2000/svg" data-set-theme="dark"*/}
            {/*         data-act-class="ACTIVECLASS" viewBox="0 0 24 24">*/}
            {/*        <path*/}
            {/*            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>*/}
            {/*    </svg>*/}
            {/*</label>*/}


            {/*<select data-choose-theme={'light'}>*/}
            {/*    <option value="light">Default</option>*/}
            {/*    <option value="dark">Dark</option>*/}
            {/*    /!*<option value="light">Pink</option>*!/*/}
            {/*</select>*/}
            {/*<select className="rounded p-1 select-sm select-bordered">*/}
            {/*    <option disabled selected>Who shot first?</option>*/}
            {/*    <option>Han Solo</option>*/}
            {/*    <option>Greedo</option>*/}
            {/*</select>*/}
            {/*<select className="w-full max-w-xs select select-bordered">*/}
            {/*    <option disabled selected>Normal</option>*/}
            {/*    <option>Normal Apple</option>*/}
            {/*    <option>Normal Orange</option>*/}
            {/*    <option>Normal Tomato</option>*/}
            {/*</select>*/}

        </div>
    );
}

export default Toggler;