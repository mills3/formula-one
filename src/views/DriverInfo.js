import React, { useEffect, useState } from 'react';

//EXAMPLE RESPONSE 
const data = {
  MRData: {
    xmlns: "",
    series: "",
    url: "",
    DriverTable: {
      driverId: "verstappen",
      Drivers: {
        0: {
          permanentNumber: "33",
          givenName: "Max",
          familyName: "Verstappen",
          dateOfBirth: "1997-09-30",
          nationality: "Dutch" 
        }
      }
    }
  }
}

const DriverInfo = ({ match }) => {
  //DONT NEED ANY OF THIS!!!!!!!!   I THINK....................
  // const [info, setInfo] = useState({});

  // useEffect(() => {
  //   getDriverInfo();
  // }, []);

  // const getDriverInfo = async () => {
  //   const response = await fetch(`https://ergast.com/api/f1/drivers/${match.params.id}.json`);
  //   const data = await response.json();
  //   console.log(data);
  //   setInfo(data.MRData.DriverTable.Drivers[0]);
  // }

  const [info, setInfo] = useState(data.MRData.DriverTable.Drivers[0]);

  return (  
    <div className="driverinfo view">
      <img src={`https://res.cloudinary.com/dzll7mejv/image/upload/v1566914937/f1-drivers/${match.params.id}.jpg`} alt="" />
      <div className="aboveBgImg">
        {/* <h1 className="page-heading">Driver Info</h1> */}
        <div className="driver-name">
            <h2>{ match.params.firstName }</h2>
            <h2>{ match.params.name }</h2>
          </div>
          <h1 className="outlined-text driver-number">{ match.params.number }</h1>
        <div className="stats">  
          <p>points - { match.params.points }</p>        
          <p>position - { match.params.position }</p>          
          <p>nationality - { match.params.nation }</p>
        </div>
      </div>      
    </div>
  );
}
 
export default DriverInfo;