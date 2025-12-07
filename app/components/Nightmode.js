'use client';

import Image from 'next/image';
import { useEffect } from 'react';



export default function NightMode() {
    let on = 0;

    let root;
    let x;
    let bulb

    useEffect(() => {
        root = document.documentElement;
        bulb = document.getElementById("bulb");
    }, []);

    function toggle() {
        if (on === 0) {
            root.style.setProperty('--colormode1','rgb(50,50,50)');
            root.style.setProperty('--colormode2','white');
            root.style.setProperty('--bgc','url("/websitebackgrounddark.png")');
            bulb.src="/light_bulb_off.png";
            on = 1;
        }
        else {
            root.style.setProperty('--colormode1', 'white');
            root.style.setProperty('--colormode2', 'rgb(50,50,50)');
            root.style.setProperty('--bgc',"url('/websitebackground.png')");
            bulb.src="/light_bulb_on.png";
            on = 0;
        }
    }
    return (
        <div className="">
            <button onClick={toggle} type="button" className="md:hover:underline relative top-[42px] left-5 bg-(--colormode2) border border-b-0 border-t-0">
                <img id="bulb" src="/light_bulb_on.png" width="30" className="hover:scale-[1.05]"></img>
            </button>
            <div className="relative top-[36px] left-[20px] border-l-[16px] border-r-[16px] border-t-[20px] border-l-transparent border-r-transparent w-0 h-0 border-(--colormode2)"></div>
        </div>
    )
}