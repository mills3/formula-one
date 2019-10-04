import React, { useState, useEffect } from 'react';
import DriverList from '../components/DriverList';
import LineChart from '../components/LineChart';

const Comparison = () => {
  const [locations, setLocations] = useState(null);
  const [name1, setName1] = useState('hamilton');
  const [name2, setName2] = useState('vettel');
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);

  const getSelectedDrivers = (d1, d2) => {
    setName1(d1);
    setName2(d2);
  }

  // get race names 
  useEffect(()=> {
    const fetchRaceNames = async () => {
      const res = await fetch('https://ergast.com/api/f1/current/drivers/vettel/results.json');
      const data = await res.json();
      const races = data.MRData.RaceTable.Races.map(d => d.Circuit.Location.country);
      setLocations(races);    
    }
    if(!sessionStorage.getItem('locations')) {
      fetchRaceNames();
    } else {
      setLocations(JSON.parse(sessionStorage.getItem('locations')));
    } 
  }, []);

  // Set locations in sessionStorage
  useEffect(() => {
    if(locations) {
      sessionStorage.setItem('locations', JSON.stringify(locations));
    }
  }, [locations]);

  //get data1 
  useEffect(() => {
    const fetchData1 = async () => {
      const res = await fetch(`https://ergast.com/api/f1/current/drivers/${name1}/results.json`);
      const data = await res.json();
      setData1({
        name: data.MRData.RaceTable.Races[0].Results[0].Driver.familyName,
        dataPoints: data.MRData.RaceTable.Races.map(d => d.Results[0].position),
        team: data.MRData.RaceTable.Races[0].Results[0].Constructor.name
      });    
    }
    fetchData1();
  }, [name1]);

   //get data2
   useEffect(() => {
    const fetchData2 = async () => {
      const res = await fetch(`https://ergast.com/api/f1/current/drivers/${name2}/results.json`);
      const data = await res.json();
      setData2({
        name: data.MRData.RaceTable.Races[0].Results[0].Driver.familyName,
        dataPoints: data.MRData.RaceTable.Races.map(d => d.Results[0].position),
        team: data.MRData.RaceTable.Races[0].Results[0].Constructor.name
      });    
    }
    fetchData2();
  }, [name2]);
  
  if(locations && data1 && data2) {
    return (  
      <div className="comparison view">
        <h1 className="page-heading appear">HEAD TO HEAD</h1>
        <DriverList getDrivers={getSelectedDrivers}/>
        <div className="chart-wrapper">
          <LineChart data1={data1} data2={data2} locations={locations} />
        </div>
        <a className="attribution" href="https://ergast.com/mrd/" target="_blank" rel="noopener noreferrer">Powered by <span>ERGAST.COM</span></a>
      </div>
    );
  }

  return (  
    <div className="comparison view">
      <h1 className="page-heading appear">HEAD TO HEAD</h1>
      <DriverList getDrivers={getSelectedDrivers}/>
      <h2 className="loading">PLOTTING DATA...</h2>
    </div>
  );
  
}
 
export default Comparison;