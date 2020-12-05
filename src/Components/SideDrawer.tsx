import React from 'react';
import '../App.scss';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';


const SideDrawer = () => {

  return (
    <div>
    <nav className="side-drawer">
      
         <div>
           <h1 className="navd">ND</h1>
        </div>
       
  <div className="Linkers">
       <Link
       activeClass="active"
       to="Home"
       spy={true}
       smooth={true}
       offset={-100}
       duration={500}
       ><FontAwesomeIcon className="home-icon2" size={'2x'} icon={faHome}/>
       <p className="Home-text2">Home</p>
       </Link>

      <Link
       activeClass="active"
       to="About"
       spy={true}
       smooth={true}
       offset={-60}
       duration={500}
       ><FontAwesomeIcon className="about-icon2" size={'2x'} icon={faAddressBook}/>
       <p className="About-text2">About</p>
       </Link>

       <Link
       activeClass="active"
       to="Portfolio"
       spy={true}
       smooth={true}
       offset={20}
       duration={500}
       ><FontAwesomeIcon className="port-icon2" size={'2x'} icon={faFileAlt}/>
       <p className="Port-text2">Portfolio</p>
       </Link>

       <Link
       activeClass="active"
       to="Contact"
       spy={true}
       smooth={true}
       offset={60}
       duration={500}
       ><FontAwesomeIcon className="contact-icon2" size={'2x'} icon={faCommentAlt}/>
       <p className="Contact-text2">Contact</p>
       </Link>
</div>
  </nav>
</div>
  );
}

export default SideDrawer;