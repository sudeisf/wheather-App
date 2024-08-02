// src/context/WeatherContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { getWeatherForecast } from '../Service/WeatherApiService';
import { getData } from '../Service/data';
const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [weatherTwo , setWeatherTwo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response1 = await  getData();
                const response = await getWeatherForecast();
                setWeatherTwo(response1);
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
        <WeatherContext.Provider value={{ weatherData,weatherTwo, loading, error }}>
            {children}
        </WeatherContext.Provider>
    );
};

export const useWeather = () => {
    return useContext(WeatherContext);
};
