'use client';

import { useState } from "react"

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
            <h2>Get In Touch</h2>
            <p>I'm currently open to new opportunities and collaborations</p>

            <div>
                <p className="fixed top-0 left-[25px] text-[2.7rem] z-11 invisible md:visible text-(--colormode1)"><b>Contact</b></p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div>
                            <label>Name </label>
                            <input 
                            type="text" 
                            name="name" 
                            title="please input your name"  
                            required
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label>Email </label>
                            <input 
                            type="email" 
                            name="email" 
                            title="please input your email" 
                            required 
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label>Message </label>
                            <input 
                            type="message" 
                            name="message"
                            rows="5" 
                            title="please input your message" 
                            required 
                            placeholder="Hello! I'd like to talk about..."
                            value={formData.message}
                            onChange={handleChange}
                            />
                        </div>

                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}