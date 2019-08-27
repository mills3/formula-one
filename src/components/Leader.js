import React from 'react';
import { Link } from 'react-router-dom';

const Leader = ({ position, name, points }) => {
  return (  
    <div className="leader">
      <Link to="/driverinfo">
        <div className="position">{ position }</div>
        <div className="name">{ name }</div>
        <div className="points">{ points }</div>
      </Link>
    </div>
  );
}
 
export default Leader;