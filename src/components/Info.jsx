import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Profile from "/src/assets/imtiaz.jpg"
function Info(){
    return(
        <div className='info--section'>                
            <img src={Profile} alt="imtiaz" />
            <h1>Imtiaz Ali</h1>
            <h3>Computer Science Engineering</h3>
            <p>American International University-Bangladesh</p>
            <div className="contact-buttons">
            <a href="https://google.com" className='email-button'><FontAwesomeIcon icon={faEnvelope} /> Email</a>
            <a href="https://www.linkedin.com/in/imtiazalirb/" className='linkedin-button'><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
            </div>            
        </div>
    )
}

export default Info