import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Calendar = () => {
  const [calendar, setCalendar] = useState([]);
  const [season, setSeason] = useState('');

  useEffect(() => {
    const getCalendarData = async () => {
      const response = await fetch('https://ergast.com/api/f1/current.json');
      const data = await response.json();
      setSeason(data.MRData.RaceTable.season)
      setCalendar(data.MRData.RaceTable.Races);
    }

    if(!sessionStorage.getItem('calendar')) {
      getCalendarData();
    } else {
      setSeason(JSON.parse(sessionStorage.getItem('season')));
      setCalendar(JSON.parse(sessionStorage.getItem('calendar')));
    }
  }, []);

  //Set sessionStorage 
  useEffect(() => {
    if(calendar.length > 0) {
      sessionStorage.setItem('calendar', JSON.stringify(calendar));
    }

    if(season !== '') {
      sessionStorage.setItem('season', JSON.stringify(season));
    }
  }, [calendar, season]);

  return (  
    <div className="calendar view">
      <h1 className="page-heading appear">Calendar</h1>
      <h1 className="season outlined-text appear delay1">{season}</h1>
      <div className="calendar-table">
        {
          calendar.map((race, i) => (
            <Link to={`/trackinfo/${race.raceName}, ${race.round}, ${race.Circuit.Location.locality}, ${race.Circuit.Location.country}, ${season}`} key={race.round}>
              <div className="race-component appear" style={{ animationDelay: `${i * 50}ms` }}>
                <p>{race.round}.</p> <p className="racename">{race.raceName}</p> <p>{race.date}</p>
              </div>
            </Link>
          ))
        }
      </div>  
      <a className="attribution" href="https://ergast.com/mrd/" target="_blank" rel="noopener noreferrer">Powered by <span>ERGAST.COM</span></a>  
    </div>
  );
}
 
export default Calendar;