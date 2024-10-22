import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CurrentWeather from './component/currentweather';
import ForecastWeather from './component/forecastweather';

function App() {
  const [city, setCity] = useState();
  const [clickedcity, setClickedCity] = useState();
  const [citySuggestion, setCitySuggestion] = useState([]);

  const [currentWeather, setCurrentWeather] = useState();
  const [forecast, setForecast] = useState();
  const [location, setLocation] = useState();

  const autoCompleteURL = 'https://api.weatherapi.com/v1/search.json?key=d8653ce062f748cc9b0173619241410&q=';

  const weatherURL = (city) => `https://api.weatherapi.com/v1/forecast.json?key=d8653ce062f748cc9b0173619241410&q=${city}&days=7&aqi=no&alerts=no`;

  useEffect(() => {
    if (city && city.length > 3) {
      fetchCityAPI();
    }

  }, [city])

  const fetchCityAPI = async () => {
    try {
      const response = await axios.get(autoCompleteURL + city);
      const resp = response.data;
      console.log(resp);
      const citydata = resp.map((data) => {
        return `${data.name},${data.region},${data.country}`;
      })
      setCitySuggestion(citydata);
    } catch (e) {
      console.log('error', e);
    }

  };

  const handleSelectedCity = (city) => {
    console.log(city);
    setClickedCity(city);
    fetchWeatherAPI(city);
    setCitySuggestion([]);

  }

  const fetchWeatherAPI = async (city) => {
    try {
      const response = await axios.get(weatherURL(city));
      const resp = response.data;
      console.log(resp);
      setCurrentWeather(resp.current);
      setForecast(resp.forecast);
      setLocation(resp.location);
      console.log(resp.forecast);

    } catch (e) {
      console.log('Error', e);
    }
  }

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid bg bg-primary p-1">
          <span className="navbar-brand mb-0 h1 m-1 p-2 text-white">Weather App</span>
        </div>
      </nav>
      {/* inputbar */}
      <div className='container  bg-primary rounded p-5 mt-5'>
        <div className='d-flex justify-content-center'>
          <div className='input-group w-50'>
          <input type='text' value={clickedcity} placeholder='Enter your Region' className='form-control ' onChange={(e) => {
            setCity(e.target.value);
            if (e.target.value === "") {
              setCitySuggestion([]);
              setClickedCity();
              setCurrentWeather();
              setForecast();
              setLocation();
            }
          }} />
          </div>
          
        </div>
        {citySuggestion &&
        citySuggestion.map((city) => {
          return <div className='d-flex justify-content-center' >
            <div style={{ width: "50%" }}>
              <div className='text-center bg-info rounded bg-opacity-10 border border-info border-opacity-10 p-1 text-white' onClick={() => handleSelectedCity(city)} style={{ cursor: 'pointer' }}>{city}</div>
            </div>
          </div>
        })}



      {currentWeather && <CurrentWeather currentWeather={currentWeather} location={location} />}
      {forecast && <ForecastWeather forecast={forecast} location={location} />}

      </div>
      
    </div>



  );
}

export default App;