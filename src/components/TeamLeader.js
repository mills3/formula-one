import React from 'react';
import { Link } from 'react-router-dom';

const TeamLeader = ({ position, name, points, id, nation }) => {
  return (  
    <div className="team-leader leader">
      <Link to={`/teaminfo/${id}, ${position}, ${points}, ${name}, ${nation}`}>
        <div className="position">{ position }</div>
        <div className="name">{ name }</div>
        <div className="points">{ points }</div>
      </Link>
    </div>
  );
}
 
export default TeamLeader;