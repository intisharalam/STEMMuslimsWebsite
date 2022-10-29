import React from 'react'
import './CommitteePage.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function CommitteePage() {
  return (
    <div className="App">
        <Navbar/>
            
            <div className='header'>
                <p className='header-txt'>Our Commitee!</p>
            </div>

            <div className='committee-head'>
                <div className='head-sister'>
                    <p className='head-title'>
                        <span className='head-name'>Safiyya musa</span>- Head Sister
                    </p>

                    <img src='#' alt='head sister'></img>
                </div>
                <div className='head-brother'>
                    <img src='#' alt='head brother'></img>

                    <p className='head-title'>
                        <span className='head-name'>Ibrahim Qayyum</span>- Head brother
                    </p>
                </div>

            </div>

            <div className='committee-members'>
                
                <div className='column'>
                    <div className='member'>
                        <p className='member-name'>Shahbanno Hussain</p>
                        <hr/>
                        <p className='member-role'>Vice president of Education</p>
                    </div>

                    <div className='member'>
                        <p className='member-name'>Aahnaf Newaz</p>
                        <hr/>
                        <p className='member-role'>Vice president of Careers</p>
                    </div>

                    <div className='member'>
                        <p className='member-name'>Tabiya Syed</p>
                        <hr/>
                        <p className='member-role'>Secretary of Logistics</p>
                    </div>
                    
                    <div className='member'>
                        <p className='member-name'>Aakrati Sharma</p>
                        <hr/>
                        <p className='member-role'>Secretary of Communications</p>
                    </div>
                </div>


                <div className='column'>
                    <div className='member'>
                        <p className='member-name'>Nabil Ahmad</p>
                        <hr/>
                        <p className='member-role'>Treasurer</p>
                    </div>

                    <div className='member'>
                        <p className='member-name'>Majd Yousof</p>
                        <hr/>
                        <p className='member-role'>Sponsorship Officer</p>
                    </div>

                    <div className='member'>
                        <p className='member-name'>Margarita Mordvina</p>
                        <hr/>
                        <p className='member-role'>Outreach Officer</p>
                    </div>

                    <div className='member'>
                        <p className='member-name'>Mohamed Ali</p>
                        <hr/>
                        <p className='member-role'>Alumni liaisons Officer</p>
                    </div>
                </div>

                
                <div className='column'>
                    <div className='member'>
                        <p className='member-name'>Hamna Farooq</p>
                        <hr/>
                        <p className='member-role'>Events Officer</p>
                    </div>

                    <div className='member'>
                        <p className='member-name'>Shahriar Alam</p>
                        <hr/>
                        <p className='member-role'>Events Officer</p>
                    </div>

                    <div className='member'>
                        <p className='member-name'>Safeeyah Ahmed</p>
                        <hr/>
                        <p className='member-role'>General Committee</p>
                    </div>

                    <div className='member'>
                        <p className='member-name'>Rayyan Islam</p>
                        <hr/>
                        <p className='member-role'>General Committee</p>
                    </div>
                </div>

            </div>
        
        <Footer />
    </div>
  )
}
