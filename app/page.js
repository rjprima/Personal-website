'use client';

import { useState } from 'react';

export default function Home() {
  return (
    <div>
      <div>
        <div className="absolute left-[calc(50%-400px)] bg-(--colormode1) w-200 pb-[40.8%] z-[-1] border-black border"></div>
        <div className="centered">
          <p className="relative top-10 heading text-(--colormode2)"><b>About Me</b></p>
          <p className="relative top-10 w-150 text-center text-(--colormode2)">I'm an aspiring CS professional based in the Pacific Northwest.
             I'm receiving higher education at the University of Washington, seattle, as a first year student, but junior by credit 
             standing. I've always had a passion for computer science and now I've finally gotten the resources to actuallize it
             and start the transition from a coder to a computer scientist.</p>
        </div>
        <div className="flex justify-around relative left-[calc(50%-325px)] top-40 max-w-150">
          <div className="">
            <p className="text-(--colormode2)">I'm currently exploring these specialties:</p>
            <ul className="text-(--colormode2) list-disc">
              <li>Web Development</li>
              <li>Software Engineering</li>
              <li>Cyber Security</li>
              <li>Machine Learning</li>
            </ul>
          </div>
          <div className="pl-25">
            
          </div>
        </div>
      </div>
    </div>
  );
}