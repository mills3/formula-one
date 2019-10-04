import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// =============TEMP DATA==================
// const data = {"MRData":{"xmlns":"http:\/\/ergast.com\/mrd\/1.4","series":"f1","url":"http://ergast.com/api/f1/current.json","limit":"30","offset":"0","total":"21","RaceTable":{"season":"2019","Races":[{"season":"2019","round":"1","url":"https:\/\/en.wikipedia.org\/wiki\/2019_Australian_Grand_Prix","raceName":"Australian Grand Prix","Circuit":{"circuitId":"albert_park","url":"http:\/\/en.wikipedia.org\/wiki\/Melbourne_Grand_Prix_Circuit","circuitName":"Albert Park Grand Prix Circuit","Location":{"lat":"-37.8497","long":"144.968","locality":"Melbourne","country":"Australia"}},"date":"2019-03-17","time":"05:10:00Z"},{"season":"2019","round":"2","url":"https:\/\/en.wikipedia.org\/wiki\/2019_Bahrain_Grand_Prix","raceName":"Bahrain Grand Prix","Circuit":{"circuitId":"bahrain","url":"http:\/\/en.wikipedia.org\/wiki\/Bahrain_International_Circuit","circuitName":"Bahrain International Circuit","Location":{"lat":"26.0325","long":"50.5106","locality":"Sakhir","country":"Bahrain"}},"date":"2019-03-31","time":"15:10:00Z"},{"season":"2019","round":"3","url":"https:\/\/en.wikipedia.org\/wiki\/2019_Chinese_Grand_Prix","raceName":"Chinese Grand Prix","Circuit":{"circuitId":"shanghai","url":"http:\/\/en.wikipedia.org\/wiki\/Shanghai_International_Circuit","circuitName":"Shanghai International Circuit","Location":{"lat":"31.3389","long":"121.22","locality":"Shanghai","country":"China"}},"date":"2019-04-14","time":"06:10:00Z"},{"season":"2019","round":"4","url":"https:\/\/en.wikipedia.org\/wiki\/2019_Azerbaijan_Grand_Prix","raceName":"Azerbaijan Grand Prix","Circuit":{"circuitId":"BAK","url":"http:\/\/en.wikipedia.org\/wiki\/Baku_City_Circuit","circuitName":"Baku City Circuit","Location":{"lat":"40.3725","long":"49.8533","locality":"Baku","country":"Azerbaijan"}},"date":"2019-04-28","time":"12:10:00Z"},{"season":"2019","round":"5","url":"https:\/\/en.wikipedia.org\/wiki\/2019_Spanish_Grand_Prix","raceName":"Spanish Grand Prix","Circuit":{"circuitId":"catalunya","url":"http:\/\/en.wikipedia.org\/wiki\/Circuit_de_Barcelona-Catalunya","circuitName":"Circuit de Barcelona-Catalunya","Location":{"lat":"41.57","long":"2.26111","locality":"Montmeló","country":"Spain"}},"date":"2019-05-12","time":"13:10:00Z"},{"season":"2019","round":"6","url":"https:\/\/en.wikipedia.org\/wiki\/2019_Monaco_Grand_Prix","raceName":"Monaco Grand Prix","Circuit":{"circuitId":"monaco","url":"http:\/\/en.wikipedia.org\/wiki\/Circuit_de_Monaco","circuitName":"Circuit de Monaco","Location":{"lat":"43.7347","long":"7.42056","locality":"Monte-Carlo","country":"Monaco"}},"date":"2019-05-26","time":"13:10:00Z"},{"season":"2019","round":"7","url":"https:\/\/en.wikipedia.org\/wiki\/2019_Canadian_Grand_Prix","raceName":"Canadian Grand Prix","Circuit":{"circuitId":"villeneuve","url":"http:\/\/en.wikipedia.org\/wiki\/Circuit_Gilles_Villeneuve","circuitName":"Circuit Gilles Villeneuve","Location":{"lat":"45.5","long":"-73.5228","locality":"Montreal","country":"Canada"}},"date":"2019-06-09","time":"18:10:00Z"},{"season":"2019","round":"8","url":"https:\/\/en.wikipedia.org\/wiki\/2019_French_Grand_Prix","raceName":"French Grand Prix","Circuit":{"circuitId":"ricard","url":"http:\/\/en.wikipedia.org\/wiki\/Paul_Ricard_Circuit","circuitName":"Circuit Paul Ricard","Location":{"lat":"43.2506","long":"5.79167","locality":"Le Castellet","country":"France"}},"date":"2019-06-23","time":"13:10:00Z"},{"season":"2019","round":"9","url":"https:\/\/en.wikipedia.org\/wiki\/2019_Austrian_Grand_Prix","raceName":"Austrian Grand Prix","Circuit":{"circuitId":"red_bull_ring","url":"http:\/\/en.wikipedia.org\/wiki\/Red_Bull_Ring","circuitName":"Red Bull Ring","Location":{"lat":"47.2197","long":"14.7647","locality":"Spielburg","country":"Austria"}},"date":"2019-06-30","time":"13:10:00Z"},{"season":"2019","round":"10","url":"https:\/\/en.wikipedia.org\/wiki\/2019_British_Grand_Prix","raceName":"British Grand Prix","Circuit":{"circuitId":"silverstone","url":"http:\/\/en.wikipedia.org\/wiki\/Silverstone_Circuit","circuitName":"Silverstone Circuit","Location":{"lat":"52.0786","long":"-1.01694","locality":"Silverstone","country":"UK"}},"date":"2019-07-14","time":"13:10:00Z"},{"season":"2019","round":"11","url":"https:\/\/en.wikipedia.org\/wiki\/2019_German_Grand_Prix","raceName":"German Grand Prix","Circuit":{"circuitId":"hockenheimring","url":"http:\/\/en.wikipedia.org\/wiki\/Hockenheimring","circuitName":"Hockenheimring","Location":{"lat":"49.3278","long":"8.56583","locality":"Hockenheim","country":"Germany"}},"date":"2019-07-28","time":"13:10:00Z"},{"season":"2019","round":"12","url":"https:\/\/en.wikipedia.org\/wiki\/2019_Hungarian_Grand_Prix","raceName":"Hungarian Grand Prix","Circuit":{"circuitId":"hungaroring","url":"http:\/\/en.wikipedia.org\/wiki\/Hungaroring","circuitName":"Hungaroring","Location":{"lat":"47.5789","long":"19.2486","locality":"Budapest","country":"Hungary"}},"date":"2019-08-04","time":"13:10:00Z"},{"season":"2019","round":"13","url":"https:\/\/en.wikipedia.org\/wiki\/2019_Belgian_Grand_Prix","raceName":"Belgian Grand Prix","Circuit":{"circuitId":"spa","url":"http:\/\/en.wikipedia.org\/wiki\/Circuit_de_Spa-Francorchamps","circuitName":"Circuit de Spa-Francorchamps","Location":{"lat":"50.4372","long":"5.97139","locality":"Spa","country":"Belgium"}},"date":"2019-09-01","time":"13:10:00Z"},{"season":"2019","round":"14","url":"https:\/\/en.wikipedia.org\/wiki\/2019_Italian_Grand_Prix","raceName":"Italian Grand Prix","Circuit":{"circuitId":"monza","url":"http:\/\/en.wikipedia.org\/wiki\/Autodromo_Nazionale_Monza","circuitName":"Autodromo Nazionale di Monza","Location":{"lat":"45.6156","long":"9.28111","locality":"Monza","country":"Italy"}},"date":"2019-09-08","time":"13:10:00Z"},{"season":"2019","round":"15","url":"https:\/\/en.wikipedia.org\/wiki\/2019_Singapore_Grand_Prix","raceName":"Singapore Grand Prix","Circuit":{"circuitId":"marina_bay","url":"http:\/\/en.wikipedia.org\/wiki\/Marina_Bay_Street_Circuit","circuitName":"Marina Bay Street Circuit","Location":{"lat":"1.2914","long":"103.864","locality":"Marina Bay","country":"Singapore"}},"date":"2019-09-22","time":"12:10:00Z"},{"season":"2019","round":"16","url":"https:\/\/en.wikipedia.org\/wiki\/2019_Russian_Grand_Prix","raceName":"Russian Grand Prix","Circuit":{"circuitId":"sochi","url":"http:\/\/en.wikipedia.org\/wiki\/Sochi_Autodrom","circuitName":"Sochi Autodrom","Location":{"lat":"43.4057","long":"39.9578","locality":"Sochi","country":"Russia"}},"date":"2019-09-29","time":"11:10:00Z"},{"season":"2019","round":"17","url":"https:\/\/en.wikipedia.org\/wiki\/2019_Japanese_Grand_Prix","raceName":"Japanese Grand Prix","Circuit":{"circuitId":"suzuka","url":"http:\/\/en.wikipedia.org\/wiki\/Suzuka_Circuit","circuitName":"Suzuka Circuit","Location":{"lat":"34.8431","long":"136.541","locality":"Suzuka","country":"Japan"}},"date":"2019-10-13","time":"05:10:00Z"},{"season":"2019","round":"18","url":"https:\/\/en.wikipedia.org\/wiki\/2019_Mexican_Grand_Prix","raceName":"Mexican Grand Prix","Circuit":{"circuitId":"rodriguez","url":"http:\/\/en.wikipedia.org\/wiki\/Aut%C3%B3dromo_Hermanos_Rodr%C3%ADguez","circuitName":"Autódromo Hermanos Rodríguez","Location":{"lat":"19.4042","long":"-99.0907","locality":"Mexico City","country":"Mexico"}},"date":"2019-10-27","time":"19:10:00Z"},{"season":"2019","round":"19","url":"https:\/\/en.wikipedia.org\/wiki\/2019_United_States_Grand_Prix","raceName":"United States Grand Prix","Circuit":{"circuitId":"americas","url":"http:\/\/en.wikipedia.org\/wiki\/Circuit_of_the_Americas","circuitName":"Circuit of the Americas","Location":{"lat":"30.1328","long":"-97.6411","locality":"Austin","country":"USA"}},"date":"2019-11-03","time":"19:10:00Z"},{"season":"2019","round":"20","url":"https:\/\/en.wikipedia.org\/wiki\/2019_Brazilian_Grand_Prix","raceName":"Brazilian Grand Prix","Circuit":{"circuitId":"interlagos","url":"http:\/\/en.wikipedia.org\/wiki\/Aut%C3%B3dromo_Jos%C3%A9_Carlos_Pace","circuitName":"Autódromo José Carlos Pace","Location":{"lat":"-23.7036","long":"-46.6997","locality":"São Paulo","country":"Brazil"}},"date":"2019-11-17","time":"17:10:00Z"},{"season":"2019","round":"21","url":"https:\/\/en.wikipedia.org\/wiki\/2019_Abu_Dhabi_Grand_Prix","raceName":"Abu Dhabi Grand Prix","Circuit":{"circuitId":"yas_marina","url":"http:\/\/en.wikipedia.org\/wiki\/Yas_Marina_Circuit","circuitName":"Yas Marina Circuit","Location":{"lat":"24.4672","long":"54.6031","locality":"Abu Dhabi","country":"UAE"}},"date":"2019-12-01","time":"13:10:00Z"}]}}}

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
      {/* <div>
        <h1 className="page-heading">Calendar</h1>
        <h1 className="season outlined-text">{season}</h1>
      </div> */}
      <h1 className="page-heading appear">Calendar</h1>
      <h1 className="season outlined-text appear">{season}</h1>
      <div className="calendar-table">
        {
          calendar.map(race => (
            <Link to={`/trackinfo/${race.raceName}, ${race.round}, ${race.Circuit.Location.locality}, ${race.Circuit.Location.country}, ${season}`} key={race.round}>
              <div className="race-component">
                <p>{race.round}.</p> <p className="racename">{race.raceName}</p> <p>{race.date}</p>
              </div>
            </Link>
          ))
        }
      </div>    
    </div>
  );
}
 
export default Calendar;