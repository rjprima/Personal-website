'use client';

import { Ultra } from 'next/font/google';
import Cloudobj from './components/cloud';
import Image from 'next/image';
import Nightmode from './components/Nightmode'

export default function Home() {
  return (
    <div>
      <p className="fixed top-0 left-[25px] text-[2.7rem] z-11 invisible md:visible text-(--colormode1)"><b>Home</b></p>
      <div className="w-[500px]">
        <p className="relative top-40 left-120 text-[30px] text-(--colormode2)"><b>I'm Riley Primavera</b></p>
        <p className="relative top-40 left-95 text-(--colormode2)"><b>an aspiring CS professional based in the Pacific Northwest.</b></p>
        <Image src="/personalphoto.png" alt="personal photo" width="700" height="600" className="relative top-20 left-190 z-[-2]"></Image>
        <div className="absolute centered left-[calc(50%-400px)] bg-(--colormode1) top-[500px] w-200 h-60 rounded-[25px] z-1 hover:scale-[1.05] shadow-2xl border-black border">
          <p className="relative top-10 heading text-(--colormode2)"><b>About Me</b></p>
          <p className="relative top-10 w-150 text-center text-(--colormode2)">
             I'm receiving higher education at the University of Washington, seattle, as a first year student, but junior by credit 
             standing. I've always had a passion for computer science and now I've finally gotten the resources to actuallize it
             and start the transition from a coder to a computer scientist.</p>
        </div>
      </div>
      <div className="centered relative w-40 h-40 bg-(--colormode1) rounded-[25px] border left-[1300px] top-[-300px]">
        <p className="text-(--colormode2)">Quick Links</p>
        <ul className="text-(--colormode2) list-disc">
          <li><a href="https://github.com/rjprima" className="md:hover:underline">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/riley-primavera-617a49396/" className="md:hover:underline">LinkedIn</a></li>
        </ul>
      </div>
      <div className="flex justify-around flex-col relative left-[calc(50%-300px)] top-50 w-[600px]">
            <p className="text-(--colormode2) text-[20px] text-center"><b>I'm currently exploring these specialties:</b></p>
      </div>
      <div className="relative w-70 h-60 top-60 left-[calc(50%-300px)] flex-col bg-(--colormode2) centered shadow-2xl hover:scale-[1.05] border-5 border-black rounded-[25px]">
            <p className="text-(--colormode1) text-[20px] pb-3">Web Development</p>
            <Image src="/webdev_sample.jpg" alt="" width="250" height="300" className="border border-black rounded-[25px]"></Image>
      </div>
      <div className="relative w-70 h-60 top-0 left-[50%] flex-col bg-(--colormode2) centered shadow-2xl hover:scale-[1.05] border-5 border-black rounded-[25px]">
            <p className="text-(--colormode1) text-[20px] pb-2">Software Engineering</p>
            <Image src="/SWE_sample.jpg" alt="" width="250" height="250" className="border border-black rounded-[25px]"></Image>
      </div>
      <div className="relative w-70 h-60 top-5 left-[calc(50%-300px)] flex-col bg-(--colormode2) centered shadow-2xl hover:scale-[1.05] border-5 border-black rounded-[25px]">
            <p className="text-(--colormode1) text-[20px] pb-3">Machine Learning</p>
            <Image src="/machine_learning_sample.jpg" alt="" width="250" height="250" className="border border-black rounded-[25px]"></Image>
      </div>
      <div className="relative w-70 h-60 top-[-220] left-[50%] flex-col bg-(--colormode2) centered shadow-2xl hover:scale-[1.05] border-5 border-black rounded-[25px]">
            <p className="text-(--colormode1) text-[20px] pb-3">Cyber Security</p>
            <Image src="/cyber_security_sample.jpg" alt="" width="250" height="250" className="border border-black rounded-[25px]"></Image> 
      </div>
    </div>
  );
}