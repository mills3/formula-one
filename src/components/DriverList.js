import React, { useEffect, useState } from 'react';

const DriverList = ({ getDrivers }) => {
  const [list, setList] = useState([]);
  const [open, setOpen] = useState(false);
  const [driver1, setDriver1] = useState('');
  const [driver2, setDriver2] = useState('');

  const toggleMenu = () => {
    setOpen(!open);
  }

  const handleClick = (id) => {
    if(!driver1) {
      setDriver1(id);
    } else if(id !== driver1) {
      setDriver2(id);
    }
  }

  const handleCompare = () => {
    if(driver1 !== '' && driver2 !== '') {
      getDrivers(driver1, driver2);
      setDriver1('');
      setDriver2('');
      setOpen(false);
    }
  }

  useEffect(() => {
    const fetchDrivers = async () => {
      const res = await fetch('https://ergast.com/api/f1/current/drivers.json');
      const data = await res.json();
      setList(data.MRData.DriverTable.Drivers);
    }
    if(!sessionStorage.getItem('driverList')) {
      fetchDrivers();
    } else {
      setList(JSON.parse(sessionStorage.getItem('driverList')));
    }
  }, []);

  // Set driverList in sessionStorage
  useEffect(() => {
    if(list.length > 0) {
      sessionStorage.setItem('driverList', JSON.stringify(list));
    }
  }, [list]);

  return (  
    <div className={`driver-list ${open ? 'open' : ''}`}>
      {
        list.map(item => {
          const first = item.driverId === driver1 ? 'first-selection' : '';
          const second = item.driverId === driver2 ? 'second-selection' : '';
          return <p 
            key={item.driverId} 
            data-id={item.driverId} 
            onClick={e => handleClick(item.driverId)}
            className={`${first} ${second}`}>
             {item.familyName.toUpperCase()}
          </p>
        })
      }
      <div className='label' onClick={toggleMenu}>
        <p>Select Drivers</p>
      </div>
      <button onClick={handleCompare}>COMPARE</button>
    </div>
  );
}
 
export default DriverList;