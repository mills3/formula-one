import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import tracks from '../tracks';

const TrackInfo = ({ match }) => {
  const [pathLength, setPathLength] = useState('');
  const [fastestLap, setFastestLap] = useState(null);

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

  //Get the fastest lap time 
  useEffect(() => {
    const fetchLapTime = async () => {
      const response = await fetch(`https://ergast.com/api/f1/${match.params.season}/${match.params.round}/fastest/1/results.json`);
      const data = await response.json();
      if(data.MRData.RaceTable.Races[0]) {
        const lastName = data.MRData.RaceTable.Races[0].Results[0].Driver.familyName;
        const firstName = data.MRData.RaceTable.Races[0].Results[0].Driver.givenName;
        const lapTime = data.MRData.RaceTable.Races[0].Results[0].FastestLap.Time.time;
        setFastestLap({firstName, lastName, lapTime});
      }
    }
    fetchLapTime();
  }, [match.params.round, match.params.season]);

  return (  
    <div className="trackinfo view">
      <div className="stats">
        <div>
          <h1 className="track-country page-heading appear">{match.params.country === 'UK' ? 'GREAT BRITAIN': match.params.country}</h1>
          <h3 className="track-name appear delay1">{ match.params.locale }</h3>
        </div>  
        <h1 className="outlined-text appear delay2">{ match.params.round }</h1>
        {fastestLap && <div className="lap appear delay3">
          <h4>FASTEST LAP</h4>
          <p>{fastestLap.firstName} {fastestLap.lastName}</p>
          <p>{fastestLap.lapTime}</p>
        </div>}
      </div>
       
      <svg viewBox="0 0 105.83334 79.374998">
        <path d={tracks[match.params.country]} className="path" style={pathStyle} />
      </svg>

      {fastestLap && <div className="result-btns appear delay4">
        <Link to={`/raceResults/${match.params.round}, ${match.params.country}`}>RACE RESULTS</Link>
        <Link to={`/qualifying-results/${match.params.round}, ${match.params.country}`}>QUALIFYING RESULTS</Link>
      </div>}
{/* 
      {fastestLap && <Link to={`/raceResults/${match.params.round}, ${match.params.country}`}>RACE RESULTS</Link>}

      {fastestLap && <Link to={`/qualifying-results/${match.params.round}, ${match.params.country}`}>QUALIFYING RESULTS</Link>} */}
     
    </div>
  );
}
 
export default TrackInfo;