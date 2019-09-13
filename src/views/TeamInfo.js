import React, { useState } from 'react';

import Logo from '../components/Logo';

const TeamInfo = ({ match }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleImgLoad = () => {
    setImgLoaded(true);
  }

  //Fade in image once it has loaded by adding 'fade-in' className
  const showImage = imgLoaded ? 'fade-in' : '';

  return (  
    <div className="teaminfo view">
      <h1 className="page-heading appear">{ match.params.name.toUpperCase() }</h1>
      <div className="team-stats">
        <p className="appear delay1">Position: <span>{ match.params.position }</span></p>
        <p className="appear delay2">Points: <span>{ match.params.points }</span></p>
        <p className="appear delay3">Nationality: <span>{ match.params.nation }</span></p>
      </div>
      {/* <img src={require('../assets/cars/mercedes-front.png')} alt="" /> */}
      <img 
        src={`https://res.cloudinary.com/dzll7mejv/image/upload/v1568053287/f1-cars/${match.params.id}.png`} 
        alt="" 
        onLoad={handleImgLoad}
        className={`${showImage}`}
      />
    </div>
  );
}
 
export default TeamInfo;