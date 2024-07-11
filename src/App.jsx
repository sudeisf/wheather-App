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

  const API_key = "e13ecdc32fb3523f8b1a68cdf0dde72b";

  // Getting lat and lon
  useEffect(() => {
    const handleSuccess = (position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
      setLoading(false);
    };

    const handleError = (error) => {
      setError(error.message);
      setLoading(false);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    } else {
      setError("Geolocation is not supported by this browser.");
      setLoading(false);
    }

    // Cleanup function
    return () => {
      // Cleanup logic if any
    };
  }, []);

  // Fetch weather data
  useEffect(() => {
    if (lat && lon) {
      const fetchWeather = async () => {
        try {
          setLoading(true);
          const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`);
          setWeather(result.data);
          setLoading(false);
          console.log(result.data)
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };
      fetchWeather();
    }
  }, [lat, lon, API_key]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Weather Forecast</h1>
      {weather &&
        <Card
        data ={ weather }
        />
      }
    </div>
  );
}

export default App;
