import React from 'react';

const QualifyingResults = ({match, location}) => {

  return (  
    <div className="race-results view">
      <h1 className="page-heading appear">{match.params.country === 'UK' ? 'GREAT BRITAIN': match.params.country}</h1>
      <div className="results-table">
        {location.state.length > 0 && <div className="results-head">
          <p></p>
          <p>DRIVER</p>
          <p>ROUND</p>
          <p>TIME</p>
        </div>}
        <div className="results-body quali">
          {
            location.state.map((lap, i) => {
              let round = i < 10 ? 'Q3' : i < 15 ? 'Q2' : 'Q1';
              // Visually seperate the qualifying rounds
              let quali3 = i === 10 ? 'quali3' : '';
              let quali2 = i === 15 ? 'quali2' : '';
              return <div className={`result appear ${quali3} ${quali2}`} key={lap.number} style={{animationDelay: `${i * 50}ms`}}>
                <div className="position">{lap.position}</div>
                <div className="name">{lap.Driver.familyName}</div>
                <div className="round">{round}</div>
                <div className="time">{(lap.Q3) ? lap.Q3 : (lap.Q2) ? lap.Q2 : lap.Q1}</div>
              </div>
            })
          }
          </div>
        </div>
    </div>
  );
}
 
export default QualifyingResults;