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
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`)
    const body = encodeURIComponent(
        `Hi, \n` +
        `Name: ${formData.name} \n` +
        `Email: ${formData.email} \n` +
        `Message: ${formData.message}`
    )
}

    return (
        <div>
            <h2>Get In Touch</h2>
            <p>I'm currently open to new opportunities and collaborations</p>

            <div>
                <form>
                    <div>
                        <div>
                            <label>Name</label>
                            <input type="text" name="name" title="please input your name" onChange={handleChange} required></input>
                        </div>

                        <div>
                            <label>Email</label>
                            <input type="email" name="email" title="please input your email" required></input>
                        </div>

                        <div>
                            <label>Message</label>
                            <input type="message" name="message" title="please input your message" required></input>
                        </div>

                        <button type="submit" onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}