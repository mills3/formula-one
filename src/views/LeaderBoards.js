import React, { useEffect, useState } from 'react';
import DriverLeader from '../components/DriverLeader';
import TeamLeader from '../components/TeamLeader';

const activeStyles = {
  background: '#0c0e11',
  color: '#fff'
}

const LeaderBoards = ({ driversData, teamsData }) => {
  const [table, setTable] = useState('Drivers');
  const [driverBtn, setDriverBtn] = useState(activeStyles);
  const [constructorBtn, setConstructorBtn] = useState({});
  
  // Set active button styles
  useEffect(() => {
    if(table === 'Drivers') {
      setDriverBtn(activeStyles);
      setConstructorBtn({});
    } else {
      setDriverBtn({});
      setConstructorBtn(activeStyles);
    }
  }, [table]);

  return (  
    <div className="leaderboards view">
      <h1 className="page-heading">Championship</h1>
      <div className="standings-grid">
        <div className="toggle-standings">
          <button onClick={() => setTable('Drivers')} style={driverBtn}>Drivers</button>
          <button onClick={() => setTable('Constructors')} style={constructorBtn}>Constructors</button>
        </div>
        <div className="table">
          {
            table === 'Drivers' 
              ? driversData.map((d, i) => <DriverLeader 
                  index={i}
                  number={d.Driver.permanentNumber} 
                  position={d.position} 
                  name={d.Driver.familyName} 
                  points={d.points} 
                  key={d.Driver.familyName} 
                  id={d.Driver.driverId} 
                  nation={d.Driver.nationality} 
                  firstName={d.Driver.givenName}
                />)
              : teamsData.map((t, i) => <TeamLeader 
                  index={i}
                  position={t.position} 
                  name={t.Constructor.name} 
                  points={t.points} 
                  key={t.Constructor.name} 
                  id={t.Constructor.constructorId} 
                  nation={t.Constructor.nationality} />)
          }
        </div>
      </div>
      <a className="attribution" href="https://ergast.com/mrd/" target="_blank" rel="noopener noreferrer">Powered by <span>ERGAST.COM</span></a>
    </div>
  );
}
 
export default LeaderBoards;