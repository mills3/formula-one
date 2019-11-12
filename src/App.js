import React, { useState, useEffect } from 'react';
// import './App.css';
import './App2.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/Nav';
import LeaderBoards from './views/LeaderBoards';
import DriverInfo from './views/DriverInfo';
import TeamInfo from './views/TeamInfo';
import Calendar from './views/Calendar';
import TrackInfo from './views/TrackInfo';
import Comparison from './views/Comparison';
import RaceResults from './views/RaceResults';
import QualifyingResults from './views/QualifyingResults';

function App() {
  const [loading, setLoading] = useState(true);
  const [drivers, setDrivers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [lastRound, setLastRound] = useState('');

  // SET AND GET DRIVERS DATA
  useEffect(() => {
    const getDriversData = async () => {
      const response = await fetch('https://ergast.com/api/f1/current/driverStandings.json');
      const data = await response.json();
      setDrivers(data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
    }
    if(!sessionStorage.getItem('driversData')) {
        getDriversData();
    } else {
        setDrivers(JSON.parse(sessionStorage.getItem('driversData')));  
    }
  }, []);

  // Set driversData in sessionStorage 
  useEffect(() => {
    if(drivers.length > 0) {
      sessionStorage.setItem('driversData', JSON.stringify(drivers));
    }
  }, [drivers]);

  // SET AND GET TEAMS DATA
  useEffect(() => {
    const getTeamsData = async () => {
      const response = await fetch('https://ergast.com/api/f1/current/constructorStandings.json');
      const data = await response.json();
      setTeams(data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings);
    }
    if(!sessionStorage.getItem('teamsData')) {
      getTeamsData();
    } else {
      setTeams(JSON.parse(sessionStorage.getItem('teamsData')));
      setLastRound(JSON.parse(sessionStorage.getItem('lastRound')));
    }
  }, []);

  // Set teamsData in sessionStorage 
  useEffect(() => {
    if(teams.length > 0) {
      sessionStorage.setItem('teamsData', JSON.stringify(teams));
    }
  }, [teams]);

  // SET AND GET LAST ROUND
  useEffect(() => {
    const getLastRound = async () => {
      const response = await fetch('https://ergast.com/api/f1/current/constructorStandings.json');
      const data = await response.json();
      setLastRound(data.MRData.StandingsTable.StandingsLists[0].round);
    }
    if(!sessionStorage.getItem('lastRound')) {
        getLastRound();
    } else {
        setLastRound(JSON.parse(sessionStorage.getItem('lastRound')));  
    }
  }, []);

  // Set lastRound in sessionStorage 
  useEffect(() => {
    if(lastRound) {
      sessionStorage.setItem('lastRound', lastRound);
    }
  }, [lastRound]);
  
  // If data loaded and animation complete
  useEffect(() => {
    setTimeout(() => {
      if(drivers.length > 0) {
        setLoading(false);
      }
    }, 2000);
  }, [drivers]);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav loading={loading}/>
        <Route exact path="/" render={()=> <LeaderBoards driversData={drivers} teamsData={teams} />} />
        <Route path="/driverInfo/:id, :position, :points, :name, :nation, :number, :firstName" component={DriverInfo} />
        <Route path="/teaminfo/:id, :position, :points, :name, :nation" component={TeamInfo} />
        <Route path="/head-to-head" component={Comparison} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/trackinfo/:name, :round, :locale, :country, :season" component={TrackInfo} />
        <Route path="/raceResults/:round, :country" component={RaceResults} />
        <Route path="/qualifying-results/:country" component={QualifyingResults} />
      </BrowserRouter>
    </div>
  );
}

export default App;
