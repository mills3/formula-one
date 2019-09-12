import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Burger from './Burger';

const Nav = ({ handleTheme }) => {
  const [open, setOpen] = useState(false);

  const navClass = open ? 'show-nav' : '';
  const burgerClass = open ? 'show-cross' : '';

  const toggleNav = () => {
    setOpen(!open);
  }

  return (
    <nav>
      {/* <Link to="/"><h1>F1</h1></Link> */}
      <Link to="/"><Logo width={'60px'} /></Link>
      <div className={`nav-links ${navClass}`}>
        <Link to="/" onClick={toggleNav}>LEADERBOARD</Link>
        <Link to="/head-to-head" onClick={toggleNav}>HEAD TO HEAD</Link>
        <Link to="/calendar" onClick={toggleNav}>CALENDAR</Link>
        {/* <button onClick={handleTheme}>Theme</button> */}
      </div>
      <Burger handleClick={toggleNav} dynamicClass={burgerClass}/>
    </nav>
  );
}

export default Nav;