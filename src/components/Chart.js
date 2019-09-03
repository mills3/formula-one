import React, {useEffect, useState} from 'react';
import { VictoryChart, VictoryAxis, VictoryLine, VictoryTheme } from 'victory';

const Chart = ({ data1, data2 }) => {
  // const [set1, setSet1] = useState([]);

  // const getDataPoints = (data) => {
  //   const arr = data.map(d => {
  //     return { x: Number(d.round), y: Number(d.Results[0].position) }
  //   });
  //   // console.log(arr);
  //   // return arr;
  //   setSet1(arr);
  // }

  // useEffect(() => {
  //   getDataPoints(data1);
  // }, [data1]);
  
  return (  
    <div className="chart">
      <VictoryChart domainPadding={{ y: 5 }}>
        <VictoryAxis 
          tickValues={data1.map((d, i) => i + 1)}
          label="Round"
          style={{ axisLabel: { padding: 30 } }}
        />
        <VictoryAxis
           dependentAxis
           invertAxis
           tickValues={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]}
           tickCount={20}
           label="Position"
           style={{ axisLabel: { padding: 30 }, tickLabels: {fontSize: 8} }}
          // tickValues={[2,4,6,8,10,12,14,16,18,20]}
        />
        <VictoryLine 
          data={data1} 
          x="x" 
          y="y" 
          animate
        />
        {/* <VictoryLine 
          data={getDataPoints(data2)}
          x="x" y="y"
          style={{  data: { stroke: 'red' }}}
          animate={{ duration: 500, delay: 200 }}
        /> */}
      </VictoryChart>

{/* 
 <VictoryChart
  theme={VictoryTheme.material}
>
  <VictoryAxis 
    dependentAxis
    invertAxis
    tickCount={5}
    domain={[1, 20]}
  />
  <VictoryLine
  animate
    style={{
      data: { stroke: "#c43a31" },
      parent: { border: "1px solid #ccc"}
    }}
    data={[
      {x: 1, y: 4},
      {x: 2, y: 7},
      {x: 3, y: 1},
      {x: 4, y: 3}
    ]}
  />
</VictoryChart> */}
    </div>
  );
}
 
export default Chart;