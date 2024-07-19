import React from "react";
import { useWeather } from "../useContext/WeatherContext";
  function CurrentWeatherCard(){
    const { weatherData , loading ,error} = useWeather();

  

    if(loading) return <div>loading...</div>
    if(error) return <div>{error}</div>

    const {current , forecast }= weatherData;
    const forecastDay = forecast && forecast.forecastday && forecast.forecastday[0] ? forecast.forecastday[0].day : {};

    return (
        <>
           {weatherData && 
           <div className=" flex justify-between rounded-xl drop-shadow-md h-2/6 pt-2 pl-5 p-5">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-4xl font-semibold">{weatherData?.location.name}</h1>
                        <p className="text-sm font-sans font-medium">chance of rain: 0%</p>
                    </div>
                    <div>
                        <h1 className="text-6xl font-bold font-sans">{current?.temp_c}&deg;</h1>
                    </div>
                </div>

                <div className="pl-5 pr-5">
                    <img src="//cdn.weatherapi.com/weather/64x64/night/116.png" alt="icon" className="w-40 h-40 drop-shadow-xl" />
                </div>
            </div>}
            
        </>
    );
}

export default CurrentWeatherCard;