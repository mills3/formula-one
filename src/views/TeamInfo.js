import React from 'react';

import Logo from '../components/Logo';

const TeamInfo = ({ match }) => {
  return (  
    <div className="teaminfo view">
      <h1>{ match.params.name.toUpperCase() }</h1>
      <div className="team-stats">
        <p>Position: <span>{ match.params.position }</span></p>
        <p>Points: <span>{ match.params.points }</span></p>
        <p>Nationality: <span>{ match.params.nation }</span></p>
      </div>
      <img src={require('../assets/cars/mercedes-front.png')} alt="" />
    </div>
  );
}
 
export default TeamInfo;