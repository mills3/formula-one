import React, { useEffect, useState } from 'react';

const RaceResults = ({ match }) => {

  const [results, setResults] = useState([]);
  
  useEffect(() => {
    const fetchResults = async () => {
      const response = await fetch(`https://ergast.com/api/f1/current/${match.params.round}/results.json`);
      const data = await response.json();
      setResults(data.MRData.RaceTable.Races[0].Results);
    }
    fetchResults();
  }, [match.params.round]);

  return (  
    <div className="race-results view">
      <h1 className="page-heading appear">{match.params.country === 'UK' ? 'GREAT BRITAIN': match.params.country}</h1>
      {/* <h1 className="outlined-text appear delay1">{match.params.round}</h1> */}
      <div className="results-table">
        {results.length > 0 && <div className="results-head">
          <p></p>
          <p>Driver</p>
          <p>Grid</p>
          <p>Status</p>
        </div>}
        <div className="results-body">
          {
            results.map((race, i) => {
              return <div className="result appear" key={race.number} style={{animationDelay: `${i * 50}ms`}}>
                <div className="position">{race.position}</div>
                <div className="name">{race.Driver.familyName}</div>
                <div className="grid">{race.grid}</div>
                <div className="status">{race.status}</div>
              </div>
            })
          }
          </div>
        </div>
    </div>
  );
}

 
export default RaceResults;