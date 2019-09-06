import React, { useState } from 'react';

const DriverInfo = ({ match }) => {

  const [imgLoaded, setImgLoaded] = useState(false);

  const handleImageLoad = () => {
    setImgLoaded(true);
  }
  
  //Fade in image once it has loaded by adding 'fade-in' className
  const showImage = imgLoaded ? 'fade-in' : '';

  return (  
    <div className="driverinfo view">
      <img src={`https://res.cloudinary.com/dzll7mejv/image/upload/v1566914937/f1-drivers/${match.params.id}.jpg`} alt="" onLoad={handleImageLoad} className={`${showImage}`} />
      <div className="aboveBgImg">
        <div className="driver-name">
            <h2>{ match.params.firstName }</h2>
            <h2>{ match.params.name }</h2>
          </div>
          <h1 className="outlined-text driver-number">{ match.params.number }</h1>
        <div className="stats">  
          <p>points - { match.params.points }</p>        
          <p>position - { match.params.position }</p>          
          <p>nationality - { match.params.nation }</p>
        </div>
      </div>      
    </div>
  );
}

 
export default DriverInfo;