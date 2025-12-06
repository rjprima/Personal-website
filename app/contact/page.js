'use client';

import { useState } from "react"
import Cloudobj from '../components/cloud'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
        const body = encodeURIComponent(
            `Hi, \n\n` +
            `New message from personal website. \n\n` +
            `Name: ${formData.name} \n` +
            `Email: ${formData.email} \n` +
            `Message: ${formData.message}`
        )

        window.location.href = `mailto:rileyprimavera5@gmail.com?subject=${subject}&body=${body}`;
    }

    return (
        <div>
            <div>
                <p className="fixed top-0 left-[25px] text-[2.7rem] z-11 invisible md:visible text-(--colormode1)"><b>Contact</b></p>
                <div className="relative top-45 left-[calc(50%-50px)] w-10 text-(--colormode2)"><Cloudobj text="I'm open to new opportunites and collaborations, feel free to send me a message. Let's chat!" scale="3" /></div>
                <div className="centered justify-around relative top-55 left-[calc(50%-200px)] w-[400px] bg-(--colormode1) border border-black rounded-[25px] h-[200px] shadow-2xl text-(--colormode2)">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div className="p-[10px]">
                                <label>Name </label>
                                <input
                                className="bg-white focus:bg-blue-300 border rounded-[25px] w-55 placeholder:text-[rgb(160,160,160)]" 
                                type="text" 
                                name="name" 
                                title="please input your name"  
                                required
                                placeholder=" Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                />
                            </div>

                            <div className="p-[10px]">
                                <label>Email </label>
                                <input 
                                className="bg-white focus:bg-blue-300 border rounded-[25px] w-55 placeholder:text-[rgb(160,160,160)]" 
                                type="email" 
                                name="email" 
                                title="please input your email" 
                                required 
                                placeholder=" your.email@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                />
                            </div>

                            <div className="p-[10px]">
                                <label>Message </label>
                                <input 
                                className="bg-white focus:bg-blue-300 border rounded-[25px] w-55 placeholder:text-[rgb(160,160,160)]" 
                                type="message" 
                                name="message"
                                rows="5" 
                                title="please input your message" 
                                required 
                                placeholder=" Hello! I'd like to talk about..."
                                value={formData.message}
                                onChange={handleChange}
                                />
                            </div>

                            <button type="submit" className="relative left-[calc(50%-50px)] w-[100px] h-[30px] bg-green-400 text-gray-100 border border-black rounded-[25px]">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}