import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Burger from './Burger';

const Nav = () => {
  const [open, setOpen] = useState(false);

  const navClass = open ? 'show-nav' : '';
  const burgerClass = open ? 'show-cross' : '';

  const toggleNav = () => {
    setOpen(!open);
  }

  return (
    <nav>
      <Link to="/"><h1>F1</h1></Link>
      <div className={`nav-links ${navClass}`}>
        <Link to="/" onClick={toggleNav}>Leaderboard</Link>
        <Link to="/head-to-head" onClick={toggleNav}>Head To Head</Link>
        <Link to="/calendar" onClick={toggleNav}>Calendar</Link>
      </div>
      <Burger handleClick={toggleNav} dynamicClass={burgerClass}/>
    </nav>
  );
}

export default Nav;