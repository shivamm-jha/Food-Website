import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram' 
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'

import '../styles/Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className="socialMedia">
                <InstagramIcon  className="social-icon"   />  
                <LinkedInIcon  className="social-icon" />
                <TwitterIcon  className="social-icon" />
                <FacebookIcon className="social-icon"  />
            </div>
            <p> &copy; 2022 pedrotechpizza.com</p>
        </div>
    )
}

export default Footer
