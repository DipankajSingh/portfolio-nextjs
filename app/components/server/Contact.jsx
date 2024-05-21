import React from 'react'

export default function Contact() {
    return (<section id="contact" className="contactContainer">
        <div className="contactHeader">
            <h1>Contact</h1>
            <p>Get in touch with me via social media</p>
        </div>
        <div>
            <ul>
                <li>
                    <a href="https://www.instagram.com/_dipankaj/"
                    ><i className="fa-brands fa-2x fa-instagram"></i>
                        <span>Instagram</span></a
                    >
                </li>
                <li>
                    <a href="https://twitter.com/its_Dipankaj"
                    ><i className="fa-brands fa-2x fa-twitter"></i>
                        <span>Twitter</span></a
                    >
                </li>
                <li>
                    <a href="www.linkedin.com/in/dipankaj-singh-b46942309"
                    ><i className="fa-brands fa-2x fa-linkedin"></i>
                        <span>LinkedIn</span></a
                    >
                </li>
                <li>
                    <a href="https://www.facebook.com/dipanka.singh.39"
                    ><i className="fa-brands fa-2x fa-facebook"></i>
                        <span>Facebook</span></a
                    >
                </li>
            </ul>
        </div>
        <span className="or">Or you can email & call me at </span>

        <div className="contactInfo">
            <p>
                <i className="fa-solid fa-envelope"></i>
                <span>hey@dipdev.tech</span>
            </p>
            <p>
                <i className="fa-solid fa-phone-volume"></i>
                <span>+91 8697 69 6454</span>
            </p>
        </div>
    </section>
    )
}
