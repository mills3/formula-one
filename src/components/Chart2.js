import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import teamColors from '../teamColors';

const Chart2 = ({ data1, data2, team1, team2, driver1, driver2 }) => {
  // Get team colors for line chart
  const [team1Color, setTeam1Color] = useState(teamColors['Mercedes']);
  const [team2Color, setTeam2Color] = useState(teamColors['Ferrari']);

  //Team mates will have same color, make 1 darker ( change color codes to rgba )
  useEffect(() => {
    if(team1 === team2) {
      setTeam1Color(teamColors[team1]);
      // Give the second line opacity to differentiate it from team mate
      let shade = teamColors[team1].split(',');
      shade.splice(3, 1, "0.4");
      shade.join(',');
      setTeam2Color(shade);
    } else {
      setTeam1Color(teamColors[team1]);
      setTeam2Color(teamColors[team2]);
    }  
  }, [team1, team2]);

  //Some names have first and last seperated with underscore, remove first name and underscore
  const [driverName1, setDriverName1] = useState('');
  const [driverName2, setDriverName2] = useState('');

  useEffect(() => {
    if(driver1.includes('_')) {
      setDriverName1(driver1.split('_')[1]);
    } else {
      setDriverName1(driver1);
    }
  }, [driver1]);

  useEffect(() => {
    if(driver2.includes('_')) {
      setDriverName2(driver2.split('_')[1]);
    } else {
      setDriverName2(driver2);
    }
  }, [driver2]);
  
  const data = {
    labels: data1.map(d => d.race),
    datasets: [
      {
        label: driverName1 || 1, //complains about key before driver1 is set
        data: data1.map(d => d.position),
        fill: false,          // Don't fill area under the line
        borderColor: team1Color,  // Line color
        backgroundColor: team1Color
      },
      { 
        label: driverName2 || 2,
        data: data2.map(d => d.position),
        fill: false,
        borderColor: team2Color,
        backgroundColor: team2Color
      }
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales:{
      yAxes:[{
        ticks: {
          reverse: true,
          max: 20,
          min: 1
        }
      }]
    },
    tooltips: {
      intersect: false,
      backgroundColor: '#eee',
      bodyFontColor: '#111',
      titleFontColor: '#111'
    },
    legend: {
      labels: {
        fontColor: '#eee'
      }
    }
  };

  return (  
    <div className="chart">
      <Line data={data} options={options} />
    </div>
  );
}
 
export default Chart2;