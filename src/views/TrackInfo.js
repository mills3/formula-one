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
      <div className="stats">
        <div>
          <h1 className="track-country page-heading appear">{ match.params.country }</h1>
          <h3 className="track-name appear delay1" style={{ color: '#aaa' }}>{ match.params.locale }</h3>
        </div>  
        <h1 className="outlined-text appear delay2">{ match.params.round }</h1>
      </div>
       
      <svg viewBox="0 0 105.83334 79.374998">
        <path d={tracks[match.params.country]} className="path" style={pathStyle} />
      </svg>
     
    </div>
  );
}
 
export default TrackInfo;