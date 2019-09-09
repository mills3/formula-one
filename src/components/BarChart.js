import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

const barData = [
  { race: 'Austarlia', position: 1 },
  { race: 'Bahrain', position: 4 },
  { race: 'China', position: 3 },
  { race: 'Monaco', position: 15 },
  { race: 'Spain', position: 20 },
  { race: 'Germay', position: 1 }
];

const barData2 = [
  { race: 'Austarlia', position: 2 },
  { race: 'Bahrain', position: 1 },
  { race: 'China', position: 7 },
  { race: 'Monaco', position: 5 },
  { race: 'Spain', position: 2 },
  { race: 'Germay', position: 19 }
];

const BarChart = ({ data1, data2 }) => {

  const data = {
    labels: barData.map(d => d.race),
    datasets: [
      {
        label: 'Hamilton' || 1, //complains about key before driver1 is set
        data: barData.map(d => d.position),
        backgroundColor: 'green',
        hoverBackgroundColor: '#fff',
      },
      {
        label: 'Vettel',
        data: barData2.map(d => d.position),
        backgroundColor: 'red'
      }
    ],
  };

  const options = {
    scales: {
      yAxes: [{
        barThickness: 4,
      }],
      xAxes: [{
        ticks: {
          min: 1,
          max: 20,
          
        },
      }]
    }
  }

  return (  
    <div className="line-chart">
      <HorizontalBar data={data} options={options} />
    </div>
  );
}
 
export default BarChart;