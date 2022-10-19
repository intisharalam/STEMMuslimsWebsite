import React, { useState } from 'react'
import './Navbar.css'
export default function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick  = () => setClick(!click)
    const closeMenu = () => setClick(false)
    return (
        <div>
            <nav className='Navbar'>
                <h1>Navbar</h1>
                {/* This image is fetched from the public folder. Perhaps we can change the location after */}
                <img src = {process.env.PUBLIC_URL+"/logo.png"} alt = "Logo"></img>
                <i className='fas fa-items'></i>
                <div className='menu-icon'>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div> 
                <ul className={click ? 'navmenu-active' : 'nav-menu'}>
                    <li className = 'nav-links' onClick = {closeMenu} >
                        About Us
                    </li>
                    <li className = 'nav-links' onClick = {closeMenu}>
                        Your Support Network
                    </li>
                    <li className = 'nav-links' onClick = {closeMenu}>
                        Events
                    </li>
                    <li className = 'nav-links' onClick = {closeMenu}>
                        Gallery
                    </li>
                </ul>
            </nav>
        </div>
    )
}