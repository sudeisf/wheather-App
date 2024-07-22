import React, { useEffect, useState } from "react";

import { useWeather } from "../Context/WeatherContext";
import { useVisibility } from "../Context/visibilityContext";


 function AirConditions(){
    const { weatherData , loading , error} = useWeather();
    const { toggleClick , isVisible } = useVisibility();
    
    if (loading) return <div>Loading...</div>
    if (error) return  <div>{error}</div>

    const {current , forecast }= weatherData;
    const forecastDay = forecast && forecast.forecastday && forecast.forecastday[0] ? forecast.forecastday[0].day : {};
    const forcast_day = forecast.forecastday[0];
    return(
        <>
        <div className={` mt-2  rounded-xl  ${isVisible? 'bg-[#202b3b] h-fit shadow-md ' : "border-none"} `} >
            {
                isVisible && 
                <div className= 'flex  p-5 justify-between'>
                    <h1 className="uppercase font-bold font-mono text-[#9399a2]">air conditions</h1>
                    <button 
                        onClick={toggleClick}
                        className="bg-[#29aae3] text-white capitalize rounded-2xl px-4 py-1 text-[.8rem] font-mono shadow-md ">
                        see more
                    </button>
            </div>
            }
          

            <div className="flex flex-col gap-5">

                <div className="grid grid-cols-2 grid-rows-2  gap-y-5 gap-x-5 ">
                    
                        <div className={`flex flex-col  rounded-xl ${ isVisible ? '   pl-5':'p-5  bg-[#202b3b] shadow-md'}`}>
                            <div className="flex gap-1 items-center ">
                                <img src="/icon-lab/thermometer.svg" alt="icon"  className="w-6 h-6" />
                                <h1 className="capitalize font-medium text-[#9399a2]">real feel</h1>
                            </div>
                            {
                                weatherData && 
                                <h1 className="font-semibold text-xl pl-5 text-white">{current?.feelslike_c}&deg;</h1>
                            }
                            
                        </div>

                        <div className={`flex flex-col   rounded-xl ${ isVisible ? 'pl-5':'p-5  bg-[#202b3b] shadow-md'}`}>
                            <div className="flex gap-2 items-center">
                                <img src="/icon-lab/wind.svg" alt="icon"  className="w-5 h-5" />
                                <h1 className="capitalize font-medium text-[#9399a2]">wind speed</h1>
                            </div>
                            {weatherData &&
                            <h1 className="font-semibold text-xl pl-5 text-white">{current?.wind_kph} Km/h</h1>
                        }
                        </div>
                    
                   
            
                    <div className={`flex flex-col rounded-xl ${ isVisible ? ' pl-5':'p-5  bg-[#202b3b] shadow-md'}`}>
                            <div className="flex gap-2 items-center">
                                <img src="/icon-lab/raindrops.png" alt="icon"  className="w-5 h-5" />
                                <h1 className="capitalize font-medium items-center text-[#9399a2]">chance of rain</h1>
                            </div>
                            {weatherData && 
                            <h1 className="font-semibold text-xl pl-5 text-white">{forecastDay?.daily_chance_of_rain}%</h1>
                            }
                        </div>

                        <div className={`flex flex-col   rounded-xl ${ isVisible ? ' pb-3  pl-5':'p-5  bg-[#202b3b] shadow-md'}`}>
                            <div className="flex gap-2 items-center">
                                <img src="/icon-lab/sun.svg" alt="icon"  className="w-5 h-5"/>
                                <h1 className="capitalize font-semibold text-[#9399a2]">uV index</h1>
                            </div>
                            {weatherData && 
                            <h1 className="font-semibold text-xl pl-5 text-white">{current.uv}</h1>
                        }
                        </div>
                </div>
                {!isVisible &&
                 <div className='grid grid-cols-2 grid-rows-2  gap-y-5 gap-x-5 ' >
                            <div className="flex flex-col bg-[#202b3b]  p-5 rounded-xl shadow-md">
                                <div className="flex gap-2 items-center">
                                    <img src="/icon-lab/visibility.png" alt="icon"  className="w-5 h-5"/>
                                    <h1 className="capitalize font-semibold text-[#9399a2]">visibility</h1>
                                </div>
                                {weatherData && 
                                <h1 className="font-semibold text-xl pl-5 text-white">{current.vis_km}Km</h1>
                            }
                            </div>

                            <div className="flex flex-col bg-[#202b3b]  p-5 rounded-xl shadow-md">
                                <div className="flex gap-2 items-center">
                                    <img src="/icon-lab/humidity.png" alt="icon"  className="w-5 h-5"/>
                                    <h1 className="capitalize font-semibold text-[#9399a2]">humidity</h1>
                                </div>
                                {weatherData && 
                                <h1 className="font-semibold text-xl pl-5 text-white">{current.humidity}%</h1>
                            }
                            </div>


                            <div className="flex flex-col bg-[#202b3b]  p-5 rounded-xl shadow-md">
                                <div className="flex gap-2 items-center">
                                    <img src="/icon-lab/sunset.png" alt="icon"  className="w-5 h-5"/>
                                    <h1 className="capitalize font-semibold text-[#9399a2]">sunset</h1>
                                </div>
                                {weatherData && 
                                <h1 className="font-semibold text-xl pl-5 text-white">{forcast_day?.astro.sunset}</h1>
                            }
                            </div>

                            <div className="flex flex-col bg-[#202b3b]  p-5 rounded-xl shadow-md">
                                <div className="flex gap-2 items-center">
                                    <img src="/icon-lab/pressure.png" alt="icon"  className="w-5 h-5"/>
                                    <h1 className="capitalize font-semibold text-[#9399a2]">pressure</h1>
                                </div>
                                {weatherData && 
                                <h1 className="font-semibold text-xl pl-5 text-white ">{current.pressure_mb}hPa</h1>
                            }
                            </div>
                        </div>
 }
                
            </div>
        </div>
        </>
    )
}


export default AirConditions;