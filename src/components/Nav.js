import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [open, setOpen] = useState(false);

  const navClass = open ? 'show-nav' : '';
  const burgerIcon = open ? 'X' : 'M';

  const toggleNav = () => {
    setOpen(!open);
  }

  return (
    <nav>
      <Link to="/">F1</Link>
      <div className={`nav-links ${navClass}`}>
        <Link to="/">Leaderboard</Link>
        <Link to="/head-to-head">Head To Head</Link>
        <Link to="/calendar">Calendar</Link>
        <div className="burger" onClick={toggleNav}>
          { burgerIcon }
        </div>
      </div>
    </nav>
  );
}

export default Nav;