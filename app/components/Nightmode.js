'use client';

import Image from 'next/image';
import { useEffect } from 'react';



export default function NightMode() {
    let on = 0;

    let root;
    let x;

    useEffect(() => {
        root = document.documentElement;
    }, []);

    function toggle() {
        if (on === 0) {
            root.style.setProperty('--colormode1','rgb(50,50,50)');
            root.style.setProperty('--colormode2','white');
            root.style.setProperty('--bgc','url("/websitebackgrounddark.png")');
            on = 1;
        }
        else {
            root.style.setProperty('--colormode1', 'white');
            root.style.setProperty('--colormode2', 'rgb(50,50,50)');
            root.style.setProperty('--bgc',"url('/websitebackground.png')")
            on = 0;
        }
    }
    return (
        <div>
            <button onClick={toggle} type="button" className="md:hover:underline relative top-10">NightMode</button>
        </div>
    )
}