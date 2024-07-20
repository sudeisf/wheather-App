import React from "react";

import TodaysForcast from '../component/TodaysForcast';
import AirConditons from '../component/AirConditions';
import SevenDaysForcast from '../component/SevenDaysForcast';

import CurrentWeatherCard from "../component/CurrentWeatherCard";
import { WeatherProvider } from "../Context/WeatherContext";
import { VisibilityProvider } from "../Context/visibilityContext";

function WeatherPage(){
    return (
        <>
        <WeatherProvider>
        <div className="flex h-[625px]"> 
            <div className="w-3/5 flex flex-col gap-2">
                    <CurrentWeatherCard />
                    <TodaysForcast />
                    <AirConditons />
                
                
            </div>

            <div className="w-2/5">
                <SevenDaysForcast />  
            </div>         
        </div>
        </WeatherProvider>
      
           
        </>
    );

}


export default WeatherPage;