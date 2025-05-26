import React from "react";

import TodaysForcast from '../component/TodaysForcast';
import AirConditons from '../component/AirConditions';
import SevenDaysForcast from '../component/SevenDaysForcast';

import CurrentWeatherCard from "../component/CurrentWeatherCard";
import { WeatherProvider } from "../Context/WeatherContext";
import { VisibilityProvider } from "../Context/visibilityContext";
import { useWeather } from "../Context/WeatherContext";
import LoadingSpinner from "../component/LoadingSpinner";




function WeatherPageContent(){
    const {loading } = useWeather();

    if (loading){
        return <LoadingSpinner />
    }
    
    return (
        <div className="container mx-auto px-4 py-6 mt-4">
            <div className="flex flex-col lg:flex-row gap-6"> 
                <div className="w-full lg:w-3/5 flex flex-col gap-4">
                    <CurrentWeatherCard />
                    <TodaysForcast />
                    <AirConditons />
                </div>

                <div className="w-full lg:w-2/5">
                    <SevenDaysForcast />  
                </div>         
            </div>
        </div>
    );

}


function WeatherPage(){
    return(
        <WeatherProvider>
            <WeatherPageContent />
        </WeatherProvider>
    );
}

export default WeatherPage;