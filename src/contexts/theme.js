import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

//Dont think i need context for this, just export the object??
export const ThemeProvider = props => {
  const [theme, setTheme] = useState({
    teamColor: {
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
    }
  });

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      { props.children }
    </ThemeContext.Provider>
  )
}