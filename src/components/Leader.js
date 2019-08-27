import React from 'react';
import { Link } from 'react-router-dom';

const Leader = ({ position, name, points, table, id }) => {

  const path = table === 'drivers' ? 'driverinfo' : 'teaminfo';

  return (  
    <div className="leader">
      {/* equates to '/drivers/vettel' || '/teaminfo/ferrari' */}
      <Link to={`/${path}/${id}`}>
        <div className="position">{ position }</div>
        <div className="name">{ name }</div>
        <div className="points">{ points }</div>
      </Link>
    </div>
  );
}
 
export default Leader;