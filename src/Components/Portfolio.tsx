import React from 'react';
import '../App.scss';
import Cards from '../Components/Cards';
import Img from '../Components/Images/Form.png';
import Imgtwo from '../Components/Images/Landing.png';
import Imgthree from '../Components/Images/Api.png';


const Portfolio = () => {
  return (
<div className="Portfolio-section" id="Portfolio">
     <h1 className="port">Port <span style={{color:"white"}}>folio</span></h1>
     <div className="porto">
         <Cards img={Imgthree} url="https://theworld-api.netlify.app/"/>
         <Cards img={Img} url="https://monster-code.netlify.app/"/>
         <Cards img={Imgtwo} url="https://huddling.netlify.app/"/>
     </div>
</div>
  );
}

export default Portfolio;
