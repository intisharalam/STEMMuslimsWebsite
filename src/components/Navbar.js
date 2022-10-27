import React, { useState  } from 'react'
import './Navbar.css'
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import NavMenu from 'react-bootstrap/Nav'
// import NavLink from 'react-bootstrap/NavLink'
import { Link } from 'react-router-dom';



function NavbarHome() {
    const [click, setClick] = useState(false);
    // const [button, setButton] = useState(true);
    const handleClick  = () => setClick(!click)
    const closeMenu = () => setClick(false)

    return (
        <div>
            <nav className=  "navbar">
                <div className='navbar-container'>
                <img src = {process.env.PUBLIC_URL+"/logo.png"} alt = "Logo" className = "navbar-logo img-responsive d-inline-block align-top"/>
                    
                    <h1 className = "navbar-title">STEM Muslims</h1>
                    <div className='menu-icon' onClick = {handleClick}>
                            <i className={click ? 'fa fas fa-times' : 'fa fas fa-bars'} ></i>
                    </div> 
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className = 'nav-item' >
                            <Link to='/' className='nav-links' onClick={closeMenu}>
                                About Us
                            </Link>
                            </li>
                            <li className = 'nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMenu}>
                                     Your Support Network
                            </Link>                           
                             </li>
                            <li className = 'nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMenu}>
                                    Events
                            </Link>
                            </li>
                            <li className = 'nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMenu}>
                                Gallery
                            </Link>
                            </li>
                        </ul>

                </div>
            </nav>



        </div>
    )
}

export default NavbarHome