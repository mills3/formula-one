import React, { createContext, useState } from 'react';

export const TeamColorContext = createContext();

//Dont think i need context for this, just export the object??
export const TeamColorProvider = props => {
  const [color, setColor] = useState({
    "Mercedes": '#00d2be',
    "Ferrari": '#dc0000',
    "Red Bull": '#00327d',
    "McLaren": '#ff8700',
    "Toro Rosso": '#0032ff',
    "Renault": '#fff500',
    "Alfa Romeo": '#9b0000',
    "Racing Point": '#f596c8',
    "Haas F1 Team": '#5a5a5a',
    "Williams": '#fff'
  });

  return (
    <TeamColorContext.Provider value={[color, setColor]}>
      { props.children }
    </TeamColorContext.Provider>
  )
}