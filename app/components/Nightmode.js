'use client';

import Image from 'next/image';
import { useEffect } from 'react';



export default function NightMode() {
    let on = 0;

    let root;
    let body;

    useEffect(() => {
        root = document.documentElement;
        body = document.body;
    }, []);

    function toggle() {
        if (on === 0) {
            root.style.setProperty('--colormode1','rgb(50,50,50)');
            root.style.setProperty('--colormode2','white')
//            body.style.backgroundImage = "url('../public/websitebackgrounddark.png')";
            on = 1;
        }
        else {
            root.style.setProperty('--colormode1', 'white');
            root.style.setProperty('--colormode2', 'rgb(50,50,50)');
 //           body.style.backgroundImage = "url('../public/websitebackground.png')";
            on = 0;
        }
    }
    return (
        <div>
            <button onClick={toggle} type="button">NightMode</button>
        </div>
    )
}