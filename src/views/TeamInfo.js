import React from 'react';

const TeamInfo = () => {
  return (  
    <div className="teaminfo view">
      <img src={require('../assets/cars/ferrari1.png')} alt=""  />
      <h1 className="page-heading">Team Info</h1>
    </div>
  );
}

const imgStyles = {
  width: '1000px',
  height: '400px',
  objectFit: 'contain',
}
 
export default TeamInfo;