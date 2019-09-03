import React, {useEffect, useState} from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';

const Rechart = ({ data1, data2 }) => {
  const [data, setData] = useState([]);

  const getDataPoints = (data) => {
    const arr = data.map(d => {
      return { x: Number(d.round), y: Number(d.Results[0].position) }
    });

    return arr;
  }

  useEffect(() => {
    setData(getDataPoints(data1));
  }, [data1]);


  return (  
    <LineChart width={600} height={400} data={data} margin={{
      top: 5, right: 30, left: 20, bottom: 5,
    }}>
      <XAxis dataKey="x" height={100}>
        <Label value="Round" />
      </XAxis>
      <YAxis reversed domain={[1, 20]} interval="preserveStart" label={{ value: "Position", angle: -90 }} />
      <CartesianGrid strokeDasharray="3 3" />
      <Line dataKey="y" />
    </LineChart>
                             
    // <LineChart width={730} height={250} data={data}
    //   margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
    //   <CartesianGrid strokeDasharray="3 3" />
    //   <XAxis dataKey="name" />
    //   <YAxis />
    //   <Tooltip />
    //   <Legend />
    //   <Line type="monotone" dataKey="pv" stroke="#8884d8" />
    //   <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    // </LineChart>
  );
}
 
export default Rechart;