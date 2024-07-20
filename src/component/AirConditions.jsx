import React from "react";

import { useWeather } from "../Context/WeatherContext";
import { useVisibility } from "../Context/visibilityContext";

 function AirConditions(){
    const { weatherData , loading , error} = useWeather();
    const { toggleClick } = useVisibility();

    if (loading) return <div>Loading...</div>
    if (error) return  <div>{error}</div>

    const {current , forecast }= weatherData;
    const forecastDay = forecast && forecast.forecastday && forecast.forecastday[0] ? forecast.forecastday[0].day : {};

    return(
        <>
        <div className="bg-white mt-2 h-2/6 rounded-xl border-2 ">
            <div className="flex p-5 justify-between">
            <h1 className="uppercase font-bold font-mono ">air conditions</h1>
            <button onClick={toggleClick} className="bg-cyan-500 text-white capitalize rounded-2xl px-4 py-1 text-[.8rem] font-mono">see more</button>
            </div>
            <div className="pb-5">

                <div className="grid grid-cols-2 grid-rows-2 pl-5 gap-y-2 ">
                    
                        <div className="flex flex-col ">
                            <div className="flex gap-1 items-center ">
                                <img src="/icon-lab/thermometer.svg" alt="icon"  className="w-6 h-6" />
                                <h1 className="capitalize font-medium">real feel</h1>
                            </div>
                            {
                                weatherData && 
                                <h1 className="font-semibold text-xl pl-5 ">{current?.feelslike_c}&deg;</h1>
                            }
                            
                        </div>

                        <div className="flex flex-col ">
                            <div className="flex gap-2 items-center">
                                <img src="/icon-lab/wind.svg" alt="icon" srcset="" className="w-5 h-5" />
                                <h1 className="capitalize font-medium">wind speed</h1>
                            </div>
                            {weatherData &&
                            <h1 className="font-semibold text-xl pl-5 ">{current?.wind_kph} Km/h</h1>
                        }
                        </div>
                    
                   
            
                    <div className="flex flex-col ">
                            <div className="flex gap-2 items-center">
                                <img src="/icon-lab/raindrops.png" alt="icon" srcset="" className="w-5 h-5" />
                                <h1 className="capitalize font-medium items-center">chance of rain</h1>
                            </div>
                            {weatherData && 
                            <h1 className="font-semibold text-xl pl-5 ">{forecastDay?.daily_chance_of_rain}%</h1>
                            }
                        </div>

                        <div className="flex flex-col ">
                            <div className="flex gap-2 items-center">
                                <img src="/icon-lab/sun.svg" alt="icon" srcset="" className="w-5 h-5"/>
                                <h1 className="capitalize font-semibold">uV index</h1>
                            </div>
                            {weatherData && 
                            <h1 className="font-semibold text-xl pl-5 ">{forecastDay?.uv}</h1>
                        }
                        </div>
                
                   
                </div>
            </div>
        </div>
        </>
    )
}


export default AirConditions;