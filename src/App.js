import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/Nav';
import LeaderBoards from './views/LeaderBoards';
import DriverInfo from './views/DriverInfo';
import TeamInfo from './views/TeamInfo';
// import HeadToHead from './views/HeadToHead';
import Calendar from './views/Calendar';
import TrackInfo from './views/TrackInfo';
// import LoadingScreen from './components/LoadingScreen';
import NavLoader from './components/NavLoader';
import Comparison from './views/Comparison';


function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [loading, setLoading] = useState(false);

  const toggleTheme = () => {
    //document.body.style.setProperty('--white', 'red');
    if(darkTheme) {
      document.body.style.setProperty('--textColor', '#1f232a');
      document.body.style.setProperty('--bgGradient', 'linear-gradient(to top, #ddd, #fff)');
      setDarkTheme(false);
    } else {
      document.body.style.setProperty('--textColor', '#ddd');
      document.body.style.setProperty('--bgGradient', 'linear-gradient(to top, #000, #3a414e)');
      setDarkTheme(true);
    }
  }

  //Logo loader
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3400);
  }, []);

  return (
    <div className="App">
      { loading && <NavLoader /> }
      <BrowserRouter>
        <Nav onClick={toggleTheme} handleTheme={toggleTheme}/>
        <Route exact path="/" component={LeaderBoards} />
        <Route path="/driverInfo/:id, :position, :points, :name, :nation, :number, :firstName" component={DriverInfo} />
        <Route path="/teaminfo/:id, :position, :points, :name, :nation" component={TeamInfo} />
        <Route path="/head-to-head" component={Comparison} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/trackinfo/:name, :round, :locale, :country, :season" component={TrackInfo} />
      </BrowserRouter>
    </div>
  );
}

export default App;
