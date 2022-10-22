import React, { useState } from 'react'
import './Navbar.css'
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import NavMenu from 'react-bootstrap/Nav'
// import NavLink from 'react-bootstrap/NavLink'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'


function Navbar() {
    return (
        <div className = "navbar">
        
        </div>
    )
}
function NavbarHome() {
    const [click, setClick] = useState(false)

    const handleClick  = () => setClick(!click)
    const closeMenu = () => setClick(false)
    return (
        <>
            <nav className=  "navbar">
                <div className='navbar-container'>
                <img src = {process.env.PUBLIC_URL+"/logo.png"} alt = "Logo" className = "logo img-responsive d-inline-block align-top"/>
                    <div className='menu-icon'>
                            <FontAwesomeIcon icon = {fab} />
                    </div> 
                    <h1 className = "title">Stem Muslims</h1>
                        <ul className={click ? 'navmenu-active' : 'nav-menu'}>
                           
                            <li className = 'nav-links' >
                            <Link to='/' className='nav-links' onClick={closeMenu}>
                                About Us
                            </Link>
                            </li>
                            <li className = 'nav-links'>
                            <Link to='/' className='nav-links' onClick={closeMenu}>
                                     Your Support Network
                            </Link>                           
                             </li>
                            <li className = 'nav-links'>
                            <Link to='/' className='nav-links' onClick={closeMenu}>
                                    Events
                            </Link>
                            </li>
                            <li className = 'nav-links'>
                            <Link to='/' className='nav-links' onClick={closeMenu}>
                                Gallery
                            </Link>
                            </li>
                        </ul>

                </div>
            </nav>



        </>
    )
}

export default NavbarHome