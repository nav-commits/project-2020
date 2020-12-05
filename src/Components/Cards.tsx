import React from 'react';
import '../App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

interface Props {
  img:string;
  url: string;
}

const Cards = ({img,url}:Props) => {
  return (
<div className="porto"> 
    <a href={url}className="portfolio-item">
        <img src={img} alt="code" className="portfolio-image"/>
        <div className="overlay">
            <p className="text">Visit Website!</p>
            <FontAwesomeIcon icon={faArrowUp} size='3x' className="arrow"/>
      </div>
    </a>
</div>
  );
}

export default Cards;
