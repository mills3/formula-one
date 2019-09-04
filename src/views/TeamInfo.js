import React from 'react';

import Logo from '../components/Logo';

const TeamInfo = ({ match }) => {

  const example = {
    MRData: {
      ConstructorTable: {
        constructorId: 'ferrari',
        Constructors: {
          0: {
            constructorId: 'ferrari',
            name: 'Ferrari',
            nationality: 'Italian'
          }
        }
      }
    }
  }

  return (  
    <div className="teaminfo view">
      <h1>{ example.MRData.ConstructorTable.Constructors[0].name }</h1>
      <div className="team-stats">
        <p>Position: <span>2</span></p>
        <p>Points: <span>138</span></p>
        <p>Nationality: <span>{ example.MRData.ConstructorTable.Constructors[0].nationality }</span></p>
      </div>
      <img src={require('../assets/cars/ferrari-front.png')} alt="" />
    </div>
  );
}
 
export default TeamInfo;