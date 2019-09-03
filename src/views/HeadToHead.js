import React, { useState, useEffect } from 'react';
import SelectDriver from '../components/SelectDriver';
import Chart2 from '../components/Chart2';

const HeadToHead = () => {
  // Values for the dropdowns
  const [driver1, setDriver1] = useState('hamilton');
  const [driver2, setDriver2] = useState('vettel');

  //HACKY!!!!!!!!!  dropdown change cause instant rerender 
  //   then when new data arrives there is a second render
  //   so wait for data then set below
  const [d1ToPass, setD1ToPass] = useState('');
  const [d2ToPass, setD2ToPass] = useState('');

  //Fetched data sets to pass to Chart
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  //Set the team names for color coding the chart
  const [team1, setTeam1] = useState('Mercedes');
  const [team2, setTeam2] = useState('Ferrari');
  
  // Reusable func to get new driver data sets
  const getDriverData = async (driver, setData, setTeam) => {
    const response = await fetch(`https://ergast.com/api/f1/current/drivers/${driver}/results.json`);
    const data = await response.json();
    const simple = data.MRData.RaceTable.Races.map(d => ({ x: d.round, y: Number(d.Results[0].position) }));
    setData(simple);
    const teamName = data.MRData.RaceTable.Races[0].Results[0].Constructor.name;
    setTeam(teamName);
    if(data) {
      setD1ToPass(driver1);
      setD2ToPass(driver2);
    }
  }

  // Fetch the default driver data sets to show in chart
  useEffect(() => {
    getDriverData(driver1, setData1, setTeam1);
  }, [driver1]);

  useEffect(() => {
    getDriverData(driver2, setData2, setTeam2);
  }, [driver2]);

  return (  
    <div className="head-to-head view" >
      <h1 className="page-heading">Head To Head</h1>
      <form>
        <SelectDriver selectValue={driver1} handleChange={(e) => setDriver1(e.target.value)}/>
        <SelectDriver selectValue={driver2} handleChange={(e) => setDriver2(e.target.value)}/>
      </form>
      {
        d2ToPass ? 
        <Chart2 
          data1={data1} 
          data2={data2} 
          team1={team1} 
          team2={team2}
          driver1={d1ToPass}
          driver2={d2ToPass} 
        /> : <p>Fetching Data...</p>
      }
      
    </div>
  );
}
 
export default HeadToHead;