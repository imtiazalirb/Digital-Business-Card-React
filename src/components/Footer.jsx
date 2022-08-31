import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer(){
    return(
        <footer>
            <ul>
                <li><a href="http://twitter.com"><FontAwesomeIcon icon = {faTwitter} /></a></li>
                <li><a href="http://facebook.com"><FontAwesomeIcon icon = {faFacebook} /></a></li>
                <li><a href="http://instagram.com"><FontAwesomeIcon icon = {faInstagram} /></a></li>
                <li><a href="https://github.com/imtiazalirb"><FontAwesomeIcon icon = {faGithub} /></a></li>
            </ul>
        </footer>
    )
}

export default Footer