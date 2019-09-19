import React from 'react';
import { Link } from 'react-router-dom';

// NEED TO STAGGER THE FADE INS (in LeaderBoard.js, react-spring????)

const DriverLeader = ({ index, position, name, points, id, nation, number, firstName }) => {

  return (  
    <div className="driver-leader leader appear" style={{ animationDelay: `${index * 50}ms` }}>
      {/* equates to '/drivers/vettel'  */}
      <Link to={`/driverinfo/${id}, ${position}, ${points}, ${name}, ${nation}, ${number}, ${firstName}`}>
        <div className="position">{ position }</div>
        <div className="name">{ name }</div>
        <div className="points">{ points }</div>
      </Link>
    </div>
  );
}
 
export default DriverLeader;