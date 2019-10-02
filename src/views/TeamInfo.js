import React, { useState } from 'react';

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
      <div className="team-stats appear delay1">
        <p>Position: <span>{ match.params.position }</span></p>
        <p>Points: <span>{ match.params.points }</span></p>
        <p>Nationality: <span>{ match.params.nation }</span></p>
      </div>
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