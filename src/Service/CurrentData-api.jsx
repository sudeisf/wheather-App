// src/services/weatherService.js

import axios from "axios";

const URL = 'http://api.weatherapi.com/v1/current.json';
const API_KEY = 'f12e67f58ada4727b57201316241407'; // Make sure to secure your API key

export const fetchData = async (lat, lon) => {
  try {
    const response = await axios.get(URL, {
      params: {
        key: API_KEY,
        q: `${lat},${lon}`,
      }
    });
    
    return response.data;
  } catch (error) {
    console.error("There is some kind of issue:", error); // Improved logging
    throw error; // Re-throw the error for further handling
  }
};

export const getCurrentLocationWeather = () => {
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
