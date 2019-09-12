import React from 'react';
import { Link } from 'react-router-dom';

const DriverLeader = ({ position, name, points, id, nation, number, firstName }) => {

  return (  
    <div className="driver-leader leader">
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