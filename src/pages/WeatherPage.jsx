import React from "react";

import TodaysForcast from '../component/TodaysForcast';
import AirConditons from '../component/AirConditions';
import SevenDaysForcast from '../component/SevenDaysForcast';
import { Outlet } from "react-router-dom";
import CurrentWeatherCard from "../component/CurrentWeatherCard";

function WeatherPage(){
    return (
        <>
        <div className="flex h-[625px]"> 
            <div className="w-3/5 flex flex-col gap-2">
                    <CurrentWeatherCard />
                    <TodaysForcast />
                    {/* <AirConditons /> */}
            </div>
            <div className="w-2/5">
                <SevenDaysForcast />  
            </div>
                 
                     
        </div>
           
        </>
    );

}


export default WeatherPage;