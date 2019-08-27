import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/Nav';
import LeaderBoards from './views/LeaderBoards';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Route exact path="/" component={LeaderBoards} />
      </BrowserRouter>
    </div>
  );
}

export default App;
