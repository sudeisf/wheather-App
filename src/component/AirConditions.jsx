import React from "react";
import { useWeather } from "../Context/WeatherContext";
import { useVisibility } from "../Context/visibilityContext";
import { 
  Thermometer, 
  Wind, 
  CloudRain, 
  Sun, 
  Eye, 
  Droplets, 
  Sunset, 
  Gauge 
} from 'lucide-react';

function AirConditions(){
    const { weatherData, loading, error } = useWeather();
    const { toggleClick, isVisible } = useVisibility();
    
    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>
    if (!weatherData) return <div>No weather data available</div>

    // Get current weather data from Tomorrow.io API
    const currentWeather = weatherData?.timelines?.hourly?.[0]?.values || {};
    const dailyForecast = weatherData?.timelines?.daily?.[0]?.values || {};

    return(
        <>
        <div className={`mt-2 rounded-xl ${isVisible ? 'bg-[#202b3b] h-fit shadow-md' : "border-none"}`}>
            {isVisible && 
                <div className='flex p-5 justify-between'>
                    <h1 className="uppercase font-bold font-mono text-[#9399a2]">air conditions</h1>
                    <button 
                        onClick={toggleClick}
                        className="bg-[#29aae3] text-white capitalize rounded-2xl px-4 py-1 text-[.8rem] font-mono shadow-md">
                        see more
                    </button>
                </div>
            }

            <div className="flex flex-col gap-5">
                <div className="grid grid-cols-2 grid-rows-2 gap-y-5 gap-x-5">
                    <div className={`flex flex-col rounded-xl ${isVisible ? 'pl-5' : 'p-5 bg-[#202b3b] shadow-md'}`}>
                        <div className="flex gap-1 items-center">
                            <Thermometer className="w-6 h-6 text-[#9399a2]" />
                            <h1 className="capitalize font-medium text-[#9399a2]">real feel</h1>
                        </div>
                        {weatherData && 
                            <h1 className="font-semibold text-xl pl-5 text-white">{currentWeather.temperatureApparent || 0}&deg;</h1>
                        }
                    </div>

                    <div className={`flex flex-col rounded-xl ${isVisible ? 'pl-5' : 'p-5 bg-[#202b3b] shadow-md'}`}>
                        <div className="flex gap-2 items-center">
                            <Wind className="w-5 h-5 text-[#9399a2]" />
                            <h1 className="capitalize font-medium text-[#9399a2]">wind speed</h1>
                        </div>
                        {weatherData &&
                            <h1 className="font-semibold text-xl pl-5 text-white">{currentWeather.windSpeed || 0} Km/h</h1>
                        }
                    </div>

                    <div className={`flex flex-col rounded-xl ${isVisible ? 'pl-5' : 'p-5 bg-[#202b3b] shadow-md'}`}>
                        <div className="flex gap-2 items-center">
                            <CloudRain className="w-5 h-5 text-[#9399a2]" />
                            <h1 className="capitalize font-medium items-center text-[#9399a2]">chance of rain</h1>
                        </div>
                        {weatherData && 
                            <h1 className="font-semibold text-xl pl-5 text-white">{currentWeather.precipitationProbability || 0}%</h1>
                        }
                    </div>

                    <div className={`flex flex-col rounded-xl ${isVisible ? 'pb-3 pl-5' : 'p-5 bg-[#202b3b] shadow-md'}`}>
                        <div className="flex gap-2 items-center">
                            <Sun className="w-5 h-5 text-[#9399a2]" />
                            <h1 className="capitalize font-semibold text-[#9399a2]">uV index</h1>
                        </div>
                        {weatherData && 
                            <h1 className="font-semibold text-xl pl-5 text-white">{currentWeather.uvIndex || 0}</h1>
                        }
                    </div>
                </div>

                {!isVisible &&
                    <div className='grid grid-cols-2 grid-rows-2 gap-y-5 gap-x-5'>
                        <div className="flex flex-col bg-[#202b3b] p-5 rounded-xl shadow-md">
                            <div className="flex gap-2 items-center">
                                <Eye className="w-5 h-5 text-[#9399a2]" />
                                <h1 className="capitalize font-semibold text-[#9399a2]">visibility</h1>
                            </div>
                            {weatherData && 
                                <h1 className="font-semibold text-xl pl-5 text-white">{currentWeather.visibility || 0}Km</h1>
                            }
                        </div>

                        <div className="flex flex-col bg-[#202b3b] p-5 rounded-xl shadow-md">
                            <div className="flex gap-2 items-center">
                                <Droplets className="w-5 h-5 text-[#9399a2]" />
                                <h1 className="capitalize font-semibold text-[#9399a2]">humidity</h1>
                            </div>
                            {weatherData && 
                                <h1 className="font-semibold text-xl pl-5 text-white">{currentWeather.humidity || 0}%</h1>
                            }
                        </div>

                        <div className="flex flex-col bg-[#202b3b] p-5 rounded-xl shadow-md">
                            <div className="flex gap-2 items-center">
                                <Sunset className="w-5 h-5 text-[#9399a2]" />
                                <h1 className="capitalize font-semibold text-[#9399a2]">sunset</h1>
                            </div>
                            {weatherData && 
                                <h1 className="font-semibold text-xl pl-5 text-white">{dailyForecast.sunsetTime || 'N/A'}</h1>
                            }
                        </div>

                        <div className="flex flex-col bg-[#202b3b] p-5 rounded-xl shadow-md">
                            <div className="flex gap-2 items-center">
                                <Gauge className="w-5 h-5 text-[#9399a2]" />
                                <h1 className="capitalize font-semibold text-[#9399a2]">pressure</h1>
                            </div>
                            {weatherData && 
                                <h1 className="font-semibold text-xl pl-5 text-white">{currentWeather.pressureSurfaceLevel || 0}hPa</h1>
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