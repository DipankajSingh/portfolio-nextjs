import React from 'react'

export default function Header() {
    return (
        <header className="header">
            <a href="" className="logo">Dipdev<span className="logo__span">⎔</span>tech</a>
            <label className="menu-icon" htmlFor="menu-btn"
            ><img src="menu.png" alt=""
                /></label>
            <input className="menu-btn" type="checkbox" id="menu-btn" />

            <ul className="menu">
                <li><a href="#projects">Projects</a></li>
                <li>
                    <a href="https://blog.dipdev.tech" >Blogs <sup>AI</sup></a>
                </li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </header>
    )
}
