import './App.css';
import NavBar from './components/NavBar';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import CountryList from './components/CountryList';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountries(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <NavBar>Wiki-Countries</NavBar>

      <div className="container">
        {countries ? (
          <div className="row">
            <CountryList countries={countries} />
            <Routes>
              <Route
                path="/:countryId"
                element={<CountryDetails countries={countries} />}
              />
            </Routes>
          </div>
        ) : (
          <h3>Loading ...</h3>
        )}
      </div>
    </div>
  );
}
export default App;
