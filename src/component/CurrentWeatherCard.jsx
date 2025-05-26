import React from "react";
import { useWeather } from "../Context/WeatherContext.jsx";

function CurrentWeatherCard(){
    const { weatherData, loading, error } = useWeather();

    if(loading) return <div>loading...</div>
    if(error) return <div>{error}</div>
    if(!weatherData) return <div>No weather data available</div>

    // Get the current weather data from Tomorrow.io API
    const currentWeather = weatherData?.timelines?.hourly?.[0]?.values || {};
    const location = weatherData?.location || {};

    return (
        <>
           <div className="flex justify-between rounded-xl drop-shadow-md h-2/6 pt-4 pl-5 p-5">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-4xl font-semibold font-rubik text-white">{location.name || 'Location'}</h1>
                        <p className="text-sm font-sans font-medium text-[#9399A2]">chance of rain: {currentWeather.precipitationProbability || 0}%</p>
                    </div>
                    <div>
                        <h1 className="text-6xl font-bold font-rubik text-white">{currentWeather.temperature || 0}&deg;</h1>
                    </div>
                </div>

                <div className="pl-5 pr-5">
                    <img src={`/weather-icons/day/${currentWeather.weatherCode || '01d'}.svg`} alt="icon" className="w-40 h-40 drop-shadow-xl" />
                </div>
            </div>
        </>
    );
}

export default CurrentWeatherCard;