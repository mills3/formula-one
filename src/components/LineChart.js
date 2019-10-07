import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import teamColors from '../teamColors';

const LineChart = ({ locations, data1, data2 }) => {
  //Team mates will have the same color, so change it
  const [color2, setColor2] = useState(teamColors[data2.team]);

  useEffect(() => {
    if (data2.team === data1.team) {
      let colorArray = teamColors[data2.team].split(',');
      colorArray.splice(3, 1, '0.3)');
      const shade = colorArray.join();
      setColor2(shade);
    } else {
      setColor2(teamColors[data2.team]);
    }
  }, [data1, data2]);

  const data = {
    labels: locations,
    datasets: [
      {
        label: data1.name,
        data: data1.dataPoints,
        fill: false,
        borderColor: teamColors[data1.team],
        backgroundColor: teamColors[data1.team]
      },
      {
        label: data2.name,
        data: data2.dataPoints,
        fill: false,
        borderColor: color2,
        backgroundColor: color2
      }
    ]
  }

  const options = {
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          reverse: true,
          max: 20,
          min: 1
        },
        scaleLabel: {
          display: true,
          labelString: 'Position'
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Race'
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
  }

  return (
    <div className="chart">
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChart;