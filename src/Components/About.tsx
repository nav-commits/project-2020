import React from 'react';
import '../App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faNode } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { DiMongodb} from "react-icons/di";
import { DiMysql} from "react-icons/di";
import { DiSass} from "react-icons/di";

const About = () => {
  return (
<div className="About-section" id="About">
    <h1 className="Abt">About<span className="out">Me</span></h1>
          <div className="img-txt">
             <img className="code-pic" 
             src="https://www.enginess.io/assets/enginess/images/insights/2015/10/web-development-e1444737604137.jpg" 
             alt="pic"/>
                  <p className="web-dev"> 
                  My name is Navdeep and I have been developing for over a year. My journey began when I wrote my first line of code in Python. After that, I wanted to pursue a career in programming, which I then learned through Web Development Bootcamp on Udemy, this is where I learned Full-Stack Web Development completely  Though, I have knowledge on Full-Stack Development, however, my preference is Front-End Development because of my passion of building User Interface with famous JavaScript frameworks such as React.js.
                  </p>
            </div>

      <h2 className="skills">My <span className="tech">Tools</span></h2>
            <div className="program">
              <FontAwesomeIcon icon={faJsSquare} size='6x' className="js-script"/>
              <FontAwesomeIcon icon={faHtml5} size='6x' className="html"/>
              <FontAwesomeIcon icon={faCss3} size='6x' className="css"/>
              <DiSass size="80px" className="sass"/>
              <FontAwesomeIcon icon={faReact} size='6x' className="react"/>
              <FontAwesomeIcon icon={faNode} size='6x' className="node"/>
              <FontAwesomeIcon icon={faBootstrap} size='6x' className="boot"/>
              <DiMongodb size="80px" className="Mongo"/>
              <DiMysql size="80px" className="sql"/>
            </div>
  </div>
  );
}

export default About;
