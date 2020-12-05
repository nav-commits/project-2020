import React from 'react';
import '../App.scss';
import Header from '../Components/Header';


const Home = () => {
  return (
<div className="Home-section" id="Home">
    <div className="Text">
       <Header 
          name="Navdeep Dhamrait" 
          position="Web Developer"
          Area = "Toronto"
       />
   </div>
    
</div>
  );
}

export default Home;