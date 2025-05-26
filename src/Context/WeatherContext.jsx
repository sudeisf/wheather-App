// src/context/WeatherContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { getData } from '../Service/data';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await getData();
                if (!response) {
                    throw new Error('No data received from API');
                }
                setWeatherData(response);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching weather data:', error);
                setError(error.message || 'Failed to fetch weather data');
                setLoading(false);
            } 
        };
        fetchData();
    }, []);

    return (
        <WeatherContext.Provider value={{ weatherData, loading, error }}>
            {children}
        </WeatherContext.Provider>
    );
};

export const useWeather = () => {
    return useContext(WeatherContext);
};
