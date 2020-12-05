import React from 'react';
import '../App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
  return (
<div className="Footer-div">
    
    <div className="icon-contain">
       <a href="https://www.linkedin.com/in/nav-dhamrait-20114ab3/"><FontAwesomeIcon icon={faLinkedin} size="2x" className="linked-in"/></a>
       <a href="https://github.com/nav-commits"><FontAwesomeIcon  icon={faGithub} size="2x" className="git" /></a> 
    </div>
    
    <div className="flex-copy">
       <p className="copy"> <FontAwesomeIcon icon={faCopyright}/> Copyright Nav Dhamrait 2020</p>
    </div>
</div>
  );
}

export default Footer;