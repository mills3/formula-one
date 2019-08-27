import React, { useEffect, useState } from 'react';
import Leader from '../components/Leader';

// placeholder data 
const driversData = [
  {"position":"1",
    "positionText":"1",
    "points":"250",
    "wins":"8",
    "Driver":{
      "driverId":"hamilton",
      "permanentNumber":"44",
      "code":"HAM",
      "url":"http:\/\/en.wikipedia.org\/wiki\/Lewis_Hamilton",
      "givenName":"Lewis",
      "familyName":"Hamilton",
      "dateOfBirth":"1985-01-07",
      "nationality":"British"
      },              
    "Constructors":[
      {"constructorId":"mercedes",
        "url":"http:\/\/en.wikipedia.org\/wiki\/Mercedes-Benz_in_Formula_One",
        "name":"Mercedes",
        "nationality":"German"
      }]
  },{"position":"2","positionText":"2","points":"188","wins":"2","Driver":{"driverId":"bottas","permanentNumber":"77","code":"BOT","url":"http:\/\/en.wikipedia.org\/wiki\/Valtteri_Bottas","givenName":"Valtteri","familyName":"Bottas","dateOfBirth":"1989-08-28","nationality":"Finnish"},              "Constructors":[{"constructorId":"mercedes","url":"http:\/\/en.wikipedia.org\/wiki\/Mercedes-Benz_in_Formula_One","name":"Mercedes","nationality":"German"}]},{"position":"3","positionText":"3","points":"181","wins":"2","Driver":{"driverId":"max_verstappen","permanentNumber":"33","code":"VER","url":"http:\/\/en.wikipedia.org\/wiki\/Max_Verstappen","givenName":"Max","familyName":"Verstappen","dateOfBirth":"1997-09-30","nationality":"Dutch"},              "Constructors":[{"constructorId":"red_bull","url":"http:\/\/en.wikipedia.org\/wiki\/Red_Bull_Racing","name":"Red Bull","nationality":"Austrian"}]},{"position":"4","positionText":"4","points":"156","wins":"0","Driver":{"driverId":"vettel","permanentNumber":"5","code":"VET","url":"http:\/\/en.wikipedia.org\/wiki\/Sebastian_Vettel","givenName":"Sebastian","familyName":"Vettel","dateOfBirth":"1987-07-03","nationality":"German"},              "Constructors":[{"constructorId":"ferrari","url":"http:\/\/en.wikipedia.org\/wiki\/Scuderia_Ferrari","name":"Ferrari","nationality":"Italian"}]},{"position":"5","positionText":"5","points":"132","wins":"0","Driver":{"driverId":"leclerc","permanentNumber":"16","code":"LEC","url":"http:\/\/en.wikipedia.org\/wiki\/Charles_Leclerc","givenName":"Charles","familyName":"Leclerc","dateOfBirth":"1997-10-16","nationality":"Monegasque"},              "Constructors":[{"constructorId":"ferrari","url":"http:\/\/en.wikipedia.org\/wiki\/Scuderia_Ferrari","name":"Ferrari","nationality":"Italian"}]},{"position":"6","positionText":"6","points":"63","wins":"0","Driver":{"driverId":"gasly","permanentNumber":"10","code":"GAS","url":"http:\/\/en.wikipedia.org\/wiki\/Pierre_Gasly","givenName":"Pierre","familyName":"Gasly","dateOfBirth":"1996-02-07","nationality":"French"},              "Constructors":[{"constructorId":"red_bull","url":"http:\/\/en.wikipedia.org\/wiki\/Red_Bull_Racing","name":"Red Bull","nationality":"Austrian"}]},{"position":"7","positionText":"7","points":"58","wins":"0","Driver":{"driverId":"sainz","permanentNumber":"55","code":"SAI","url":"http:\/\/en.wikipedia.org\/wiki\/Carlos_Sainz_Jr.","givenName":"Carlos","familyName":"Sainz","dateOfBirth":"1994-09-01","nationality":"Spanish"},              "Constructors":[{"constructorId":"mclaren","url":"http:\/\/en.wikipedia.org\/wiki\/McLaren","name":"McLaren","nationality":"British"}]},{"position":"8","positionText":"8","points":"31","wins":"0","Driver":{"driverId":"raikkonen","permanentNumber":"7","code":"RAI","url":"http:\/\/en.wikipedia.org\/wiki\/Kimi_R%C3%A4ikk%C3%B6nen","givenName":"Kimi","familyName":"Räikkönen","dateOfBirth":"1979-10-17","nationality":"Finnish"},              "Constructors":[{"constructorId":"alfa","url":"http:\/\/en.wikipedia.org\/wiki\/Alfa_Romeo_in_Formula_One","name":"Alfa Romeo","nationality":"Italian"}]},{"position":"9","positionText":"9","points":"27","wins":"0","Driver":{"driverId":"kvyat","permanentNumber":"26","code":"KVY","url":"http:\/\/en.wikipedia.org\/wiki\/Daniil_Kvyat","givenName":"Daniil","familyName":"Kvyat","dateOfBirth":"1994-04-26","nationality":"Russian"},              "Constructors":[{"constructorId":"toro_rosso","url":"http:\/\/en.wikipedia.org\/wiki\/Scuderia_Toro_Rosso","name":"Toro Rosso","nationality":"Italian"}]},{"position":"10","positionText":"10","points":"24","wins":"0","Driver":{"driverId":"norris","permanentNumber":"4","code":"NOR","url":"http:\/\/en.wikipedia.org\/wiki\/Lando_Norris","givenName":"Lando","familyName":"Norris","dateOfBirth":"1999-11-13","nationality":"British"},              "Constructors":[{"constructorId":"mclaren","url":"http:\/\/en.wikipedia.org\/wiki\/McLaren","name":"McLaren","nationality":"British"}]},{"position":"11","positionText":"11","points":"22","wins":"0","Driver":{"driverId":"ricciardo","permanentNumber":"3","code":"RIC","url":"http:\/\/en.wikipedia.org\/wiki\/Daniel_Ricciardo","givenName":"Daniel","familyName":"Ricciardo","dateOfBirth":"1989-07-01","nationality":"Australian"},              "Constructors":[{"constructorId":"renault","url":"http:\/\/en.wikipedia.org\/wiki\/Renault_in_Formula_One","name":"Renault","nationality":"French"}]},{"position":"12","positionText":"12","points":"18","wins":"0","Driver":{"driverId":"stroll","permanentNumber":"18","code":"STR","url":"http:\/\/en.wikipedia.org\/wiki\/Lance_Stroll","givenName":"Lance","familyName":"Stroll","dateOfBirth":"1998-10-29","nationality":"Canadian"},              "Constructors":[{"constructorId":"racing_point","url":"http:\/\/en.wikipedia.org\/wiki\/Racing_Point_F1_Team","name":"Racing Point","nationality":"British"}]},{"position":"13","positionText":"13","points":"18","wins":"0","Driver":{"driverId":"kevin_magnussen","permanentNumber":"20","code":"MAG","url":"http:\/\/en.wikipedia.org\/wiki\/Kevin_Magnussen","givenName":"Kevin","familyName":"Magnussen","dateOfBirth":"1992-10-05","nationality":"Danish"},              "Constructors":[{"constructorId":"haas","url":"http:\/\/en.wikipedia.org\/wiki\/Haas_F1_Team","name":"Haas F1 Team","nationality":"American"}]},{"position":"14","positionText":"14","points":"17","wins":"0","Driver":{"driverId":"hulkenberg","permanentNumber":"27","code":"HUL","url":"http:\/\/en.wikipedia.org\/wiki\/Nico_H%C3%BClkenberg","givenName":"Nico","familyName":"Hülkenberg","dateOfBirth":"1987-08-19","nationality":"German"},              "Constructors":[{"constructorId":"renault","url":"http:\/\/en.wikipedia.org\/wiki\/Renault_in_Formula_One","name":"Renault","nationality":"French"}]},{"position":"15","positionText":"15","points":"16","wins":"0","Driver":{"driverId":"albon","permanentNumber":"23","code":"ALB","url":"http:\/\/en.wikipedia.org\/wiki\/Alexander_Albon","givenName":"Alexander","familyName":"Albon","dateOfBirth":"1996-03-23","nationality":"Thai"},              "Constructors":[{"constructorId":"toro_rosso","url":"http:\/\/en.wikipedia.org\/wiki\/Scuderia_Toro_Rosso","name":"Toro Rosso","nationality":"Italian"}]},{"position":"16","positionText":"16","points":"13","wins":"0","Driver":{"driverId":"perez","permanentNumber":"11","code":"PER","url":"http:\/\/en.wikipedia.org\/wiki\/Sergio_P%C3%A9rez","givenName":"Sergio","familyName":"Pérez","dateOfBirth":"1990-01-26","nationality":"Mexican"},              "Constructors":[{"constructorId":"racing_point","url":"http:\/\/en.wikipedia.org\/wiki\/Racing_Point_F1_Team","name":"Racing Point","nationality":"British"}]},{"position":"17","positionText":"17","points":"8","wins":"0","Driver":{"driverId":"grosjean","permanentNumber":"8","code":"GRO","url":"http:\/\/en.wikipedia.org\/wiki\/Romain_Grosjean","givenName":"Romain","familyName":"Grosjean","dateOfBirth":"1986-04-17","nationality":"French"},              "Constructors":[{"constructorId":"haas","url":"http:\/\/en.wikipedia.org\/wiki\/Haas_F1_Team","name":"Haas F1 Team","nationality":"American"}]},{"position":"18","positionText":"18","points":"1","wins":"0","Driver":{"driverId":"giovinazzi","permanentNumber":"99","code":"GIO","url":"http:\/\/en.wikipedia.org\/wiki\/Antonio_Giovinazzi","givenName":"Antonio","familyName":"Giovinazzi","dateOfBirth":"1993-12-14","nationality":"Italian"},              "Constructors":[{"constructorId":"alfa","url":"http:\/\/en.wikipedia.org\/wiki\/Alfa_Romeo_in_Formula_One","name":"Alfa Romeo","nationality":"Italian"}]},{"position":"19","positionText":"19","points":"1","wins":"0","Driver":{"driverId":"kubica","permanentNumber":"88","code":"KUB","url":"http:\/\/en.wikipedia.org\/wiki\/Robert_Kubica","givenName":"Robert","familyName":"Kubica","dateOfBirth":"1984-12-07","nationality":"Polish"},              "Constructors":[{"constructorId":"williams","url":"http:\/\/en.wikipedia.org\/wiki\/Williams_Grand_Prix_Engineering","name":"Williams","nationality":"British"}]},{"position":"20","positionText":"20","points":"0","wins":"0","Driver":{"driverId":"russell","permanentNumber":"63","code":"RUS","url":"http:\/\/en.wikipedia.org\/wiki\/George_Russell_(racing_driver)","givenName":"George","familyName":"Russell","dateOfBirth":"1998-02-15","nationality":"British"},              "Constructors":[{"constructorId":"williams","url":"http:\/\/en.wikipedia.org\/wiki\/Williams_Grand_Prix_Engineering","name":"Williams","nationality":"British"}]}];

const LeaderBoards = () => {
  const [drivers, setDrivers] = useState(driversData);
  const [teams, setTeams] = useState([]);
  const [table, setTable] = useState('drivers');

  // useEffect(() => {
  //   getDriversData();
  // }, []);

  // useEffect(() => {
  //   getTeamsData();
  // }, []);

  const getDriversData = async () => {
    const response = await fetch('https://ergast.com/api/f1/current/driverStandings.json');
    const data = await response.json();
    setDrivers(data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
    //console.log(data);
  }

  const getTeamsData = async () => {
    const response = await fetch('https://ergast.com/api/f1/current/constructorStandings.json');
    const data = await response.json();
    setTeams(data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings);
  }

  return (  
    <div className="leaderboards view">
      <h1 className="page-heading">Current Standings</h1>
      <div className="standings-grid">
        <div className="toggle-standings">
          <button onClick={ () => setTable('drivers') }>Drivers</button>
          <button onClick={ () => setTable('constructors') }>Constructors</button>
        </div>
        <div className="table">
          {/* {
            table === 'drivers' 
              ? drivers.map(d => <p key={d.position}>{ d.Driver.familyName }</p>)
              : teams.map(t => <p key={t.position}>{ t.Constructor.name }</p>)
          } */}

          { drivers.map(d => <Leader key={d.position} position={d.position} name={d.Driver.familyName} points={d.points} />) }
        </div>
      </div>
    </div>
  );
}
 
export default LeaderBoards;