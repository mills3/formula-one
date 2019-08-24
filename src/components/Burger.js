import React from 'react';

const Burger = ({ handleClick, dynamicClass }) => {
  return (  
    <div className={`burger ${dynamicClass}`} onClick={handleClick}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  );
}
 
export default Burger;