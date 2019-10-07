import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';
import Burger from './Burger';

const Nav = ({ loading }) => {
  const [open, setOpen] = useState(false);

  const navClass = open ? 'show-nav' : '';
  const burgerClass = open ? 'show-cross' : '';

  const toggleNav = () => {
    setOpen(!open);
  }

  const dunLoading = loading ? '' : 'loaded';

  return (
    <nav className={`nav ${dunLoading}`}>
      <Link to="/"><Logo width={'60px'} /></Link>
      <div className={`nav-links ${navClass}`}>
        <NavLink exact to="/" onClick={toggleNav} activeClassName="active">LEADERBOARD</NavLink>
        <NavLink to="/head-to-head" onClick={toggleNav} activeClassName="active">HEAD TO HEAD</NavLink>
        <NavLink to="/calendar" onClick={toggleNav} activeClassName="active">CALENDAR</NavLink>
      </div> 
      <Burger handleClick={toggleNav} dynamicClass={burgerClass}/>
    </nav>
  );
}

export default Nav;