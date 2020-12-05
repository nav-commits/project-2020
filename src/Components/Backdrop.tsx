import React from 'react';
import '../App.scss';

type useprops ={
  closer: ()=> void;
  };

const Backdrop = ({closer}:useprops) => {

  return (
<div className="backdrop" onClick={closer}/>
  );
}

export default Backdrop;