import React, { useState, useEffect } from 'react';
import tracks from '../tracks';

const TrackInfo = ({ match }) => {
  const [pathLength, setPathLength] = useState('');

  useEffect(() => {
    const path = document.querySelector('.path');
    const length = path.getTotalLength();
    setPathLength(length);
  }, []);

  //Set the strokeDashArray / offset

  const pathStyle = {
    strokeDasharray: pathLength,
    strokeDashoffset: pathLength
  };

  return (  
    <div className="trackinfo view">
      {/* <h1 className="page-heading">Track Info</h1> */}
      <h1>{ match.params.country }</h1>
      <h1 className="outlined-text">{ match.params.round }</h1>
      <h1>{ match.params.locale }</h1>
      <svg viewBox="0 0 105.83334 79.374998">
        <path d={tracks[match.params.country]} className="path" style={pathStyle} />
      </svg>
    </div>
  );
}
 
export default TrackInfo;