import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './component/Card'; // Assuming Card component path is correct
import './App.css';

function App() {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const React_API_Key = '7f5d99e25be05389a99ee06f131ffcdc';
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${React_API_Key}`

  // Getting lat and lon
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        navigator.geolocation.getCurrentPosition((position) => {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        }, (error) => {
          setError(error.message);
        });
      } catch (error) {
        setError(error.message);
      }
    };

    fetchLocation();
  }, []);

  // Fetch weather data
  useEffect(() => {
    const fetchWeather = async () => {
      if (lat && lon) {
        try {
          setLoading(true);
          const response = await axios.get(URL);
          setWeather(response.data);
          setLoading(false);
          console.log(response.data)
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      }
    };

    fetchWeather();
  }, [lat, lon, React_API_Key]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Weather Forecast</h1>
      {weather && <Card data={weather} />}
    </div>
  );
}

export default App;
