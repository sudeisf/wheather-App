

import axios from "axios";
import {filterHours} from '../utils/hourFilter';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY; 

export const fetchData = async (lat, lon) => {
  try {
    const response = await axios.get('http://api.weatherapi.com/v1/forecast.json', {
      params: {
        key: API_KEY,
        q: `${lat},${lon}`,
        days: 7,
      }
    });
    const forecastData = response.data;

    if (forecastData.forecast && forecastData.forecast.forecastday) {
      forecastData.forecast.forecastday = forecastData.forecast.forecastday.map(day => {
        day.hour = filterHours(day.hour);
        return day;
      });
    }
    console.log(forecastData);
    return forecastData;
  } catch (error) {
    console.error("There is some kind of issue:", error); 
    
  }
};

export const getWeatherForecast = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        fetchData(lat, lon).then(resolve).catch(reject);
      },
      (error) => {
        console.error("Geolocation error:", error); 
        reject(error); 
      }
    );
  });
};

