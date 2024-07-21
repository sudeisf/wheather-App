// src/context/WeatherContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { getWeatherForecast } from '../Service/WeatherApiService';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await getWeatherForecast();
                setWeatherData(response);
                setLoading(false);

            } catch (error) {
                setError(error.message);
                setLoading(false)
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
