import Navbar from './components/Navbar'
import Footer from './components/Footer'
import React from 'react';

import "./LandingPage.css"
export default function LandingPage() {
    return (
        <div className="App">
            <Navbar/>
            {/* <img src = {process.env.PUBLIC_URL+"/welcomeimg.png"} alt = "Welcome Image" className = "welcome-img" /> */}
            <div className = "main">
                <h1 className = "title">Welcome To Stem Muslims</h1>
            </div>
            <div className = "info">
                <h1 className = "info-title">
                    Who we are
                </h1>
            </div>
           

            <Footer />
        </div>
    );
  }
  
