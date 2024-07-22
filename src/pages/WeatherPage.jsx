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
        <>
        <div className="flex h-[625px] mt-5"> 
            <div className="w-3/5 flex flex-col gap-2">
                    <CurrentWeatherCard />
                    <TodaysForcast />
                    <AirConditons />
            </div>

            <div className="w-2/5">
                <SevenDaysForcast />  
            </div>         
        </div>

      
           
        </>
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