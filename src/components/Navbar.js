import React, { useState ,useEffect } from 'react'
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
    
  const showButton = () => {
    if (window.innerWidth <= 960) {
      // setButton(false);
    } else {
      // setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener('resize', showButton);
    return (
        <div>
            <nav className=  "navbar">
                <div className='navbar-container'>
                <img src = {process.env.PUBLIC_URL+"/logo.png"} alt = "Logo" className = "logo img-responsive d-inline-block align-top"/>
                    
                    <h1 className = "title">Stem Muslims</h1>
                    <div className='menu-icon' onClick = {handleClick}>
                            <i className={click ? 'fa fas fa-times' : 'fa fas fa-bars'} ></i>
                    </div> 
                        <ul className={click ? 'navmenu-active' : 'nav-menu'}>
                           
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