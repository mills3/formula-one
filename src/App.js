import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/Nav';
import LeaderBoards from './views/LeaderBoards';
import DriverInfo from './views/DriverInfo';
import TeamInfo from './views/TeamInfo';
import HeadToHead from './views/HeadToHead';
import Calendar from './views/Calendar';
import TrackInfo from './views/TrackInfo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Route exact path="/" component={LeaderBoards} />
        <Route path="/driverInfo/:id" component={DriverInfo} />
        <Route path="/teaminfo" component={TeamInfo} />
        <Route path="/head-to-head" component={HeadToHead} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/trackinfo/:name, :round, :locale, :country" component={TrackInfo} />
      </BrowserRouter>
    </div>
  );
}

export default App;
