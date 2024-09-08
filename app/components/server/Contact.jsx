import React from 'react'
import ContactForm from './ContactForm'


export default function Contact() {
    return (<section id="contact" className="contactContainer">
        <div className="contactHeader">
            <h1>Contact</h1>
            <p>Get in touch with me</p>
        </div>
        <ContactForm />
    </section>
    )
}
