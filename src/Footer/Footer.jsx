import githubIcon from '../assets/github.png'
import linkedInIcon from '../assets/linkedIn.png'
import mailIcon from '../assets/mail.png'
import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer>
        <div className="footerContainer">
            <div className="socialIcons">
                <a href="https://www.linkedin.com/in/paul-lacatus">
                    <img src={linkedInIcon} alt="LinkedIn" className='socialIcons' />
                </a>
                <a href="https://github.com/PaulLacatusLucian">
                    <img src={githubIcon} alt="GitHub" className='socialIcons' />
                </a>
                <a href="mailto:paul2003mai@yahoo.com">
                    <img src={mailIcon} alt="Email" className='socialIcons' />
                </a>
            </div>
        </div>
        <div className="footerBottom">
            <p>Copyright &copy;2024; Designed by <span className="designer">Paul</span></p>
        </div>
    </footer>
    
    );
}

export default Footer;
