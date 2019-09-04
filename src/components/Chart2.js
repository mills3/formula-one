/*
////////////// maybe horizontal bar chart for mobile screens???
*/



import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import teamColors from '../teamColors';

const Chart2 = ({ data1, data2, team1, team2, driver1, driver2 }) => {
  // Get team colors for line chart
  const [team1Color, setTeam1Color] = useState(teamColors['Mercedes']);
  const [team2Color, setTeam2Color] = useState(teamColors['Ferrari']);

  useEffect(() => {
    if(team1 === team2) {
      setTeam1Color(teamColors[team1]);
      setTeam2Color('#000');
    } else {
      setTeam1Color(teamColors[team1]);
      setTeam2Color(teamColors[team2]);
    }
    
  }, [team1, team2]);
  
  const data = {
    labels: data1.map(d => d.x),
    datasets: [
      {
        label: driver1 || 1, //complains about key before driver1 is set
        data: data1.map(d => d.y),
        fill: false,          // Don't fill area under the line
        borderColor: team1Color  // Line color
      },
      { 
        label: driver2 || 2,
        data: data2.map(d => d.y),
        fill: false,
        borderColor: team2Color
      }
    ],
  };

  const options = {scales:{yAxes:[{ticks: {
    reverse: true,
    max: 20,
    min: 1
  }}]}};

  return (  
    <>
      <Line data={data} options={options} />
    </>
  );
}
 
export default Chart2;