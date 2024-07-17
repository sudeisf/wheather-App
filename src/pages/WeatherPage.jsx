import React from "react";

import TodaysForcast from '../component/TodaysForcast';
import AirConditons from '../component/AirConditions';
import SevenDaysForcast from '../component/SevenDaysForcast';
import { Outlet } from "react-router-dom";
import CurrentWeatherCard from "../component/CurrentWeatherCard";

function WeatherPage(){
    return (
        <>
        <div>
                    <CurrentWeatherCard />
                    <TodaysForcast />
                    <AirConditons />
                    <SevenDaysForcast />      
        </div>
           
        </>
    );

}


export default WeatherPage;