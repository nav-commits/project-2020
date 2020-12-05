import React from 'react';
import '../App.scss';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import ToggleButton from '../Components/ToggleButton';

type useprops ={
  clicker:()=> void;
  };

const Navbar = ({clicker}:useprops) => {
  return (
<div>
     <nav className="navbar">
       <div>
           <ToggleButton clicked={clicker}  />
       </div>
       
          <div>
            <h1 className="nav-Name">ND</h1>
         </div>
        
   <div className="Links">
        <Link
        activeClass="active"
        to="Home"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        ><FontAwesomeIcon className="home-icon" size={'2x'} icon={faHome}/>
        <p className="Home-text">Home</p>
        </Link>

       <Link
        activeClass="active"
        to="About"
        spy={true}
        smooth={true}
        offset={-60}
        duration={500}
        ><FontAwesomeIcon className="about-icon" size={'2x'} icon={faAddressBook}/>
        <p className="About-text">About</p>
        </Link>

        <Link
        activeClass="active"
        to="Portfolio"
        spy={true}
        smooth={true}
        offset={20}
        duration={500}
        ><FontAwesomeIcon className="port-icon" size={'2x'} icon={faFileAlt}/>
        <p className="Port-text">Portfolio</p>
        </Link>

        <Link
        activeClass="active"
        to="Contact"
        spy={true}
        smooth={true}
        offset={60}
        duration={500}
        ><FontAwesomeIcon className="contact-icon" size={'2x'} icon={faCommentAlt}/>
        <p className="Contact-text">Contact</p>
        </Link>
 </div>
   </nav>
</div>
  );
}

export default Navbar;
