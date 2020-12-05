import React from 'react';
import '../App.scss';

interface props {
    name: string;
    position: string;
    Area : string
}

const Header = ({name, position,Area}: props) => {
  return (
<div className="head">
    <h1 className="Intro">Hello, My Name is  
    <span className="Nav"> {name} </span> 
    I'm a <span className="Nav">{position}</span> from {Area}.</h1>  
</div>
  );
}

export default Header;