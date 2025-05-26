import React from "react"
import { useWeather } from '../Context/WeatherContext'
import { useVisibility } from "../Context/visibilityContext";
import imageMap from '../Service/imagePicker';

function SevenDaysForcast(){
    const { weatherData, loading, error } = useWeather();
    const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const { isVisible } = useVisibility();

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>
    if (!weatherData) return <div>No weather data available</div>

    const hourlyForecast = weatherData?.timelines?.hourly || [];
    const dailyForecast = weatherData?.timelines?.daily || [];

    return(
        <>
            <div className="flex flex-col gap-2">
                <div className={`bg-[#202b3b] flex flex-col rounded-2xl shadow-md h-2/6 w-[90%] ml-auto mr-auto p-2`} style={{display : !isVisible ? 'block' : 'none'}}>
                    <h1 className='uppercase pt-5 pl-5 pb-3 font-mono font-semibold text-[#9399a2]'>today's forecast</h1>
                    <div className='w-full pl-5 pr-5 pb-5'>
                        <ul className='flex gap-3'>
                            {hourlyForecast.slice(0, 3).map((hour, index) => (
                                <li key={index} className={`flex flex-col w-3/4 text-center mr-auto ml-auto gap-2 ${index < 2 ? 'border-r-[1px]' : ''}`}>
                                    <h1 className='font-sans font-semibold text-[#9399a2]'>
                                        {new Date(hour.time).toLocaleTimeString('en-US', {timeStyle:'short', hour12:true})}
                                    </h1>
                                    <img src={imageMap[hour.values.weatherCode] || '/weather-icons/day/01d.svg'} alt="icon" className='w-16 h-16 ml-auto mr-auto' />
                                    <p className='font-bold font-sans text-lg text-white'>{hour.values.temperature}&deg;C</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            
                <h1 className={`uppercase font-mono font-semibold w-[90%] ml-auto mr-auto py-2 text-[#9399a2] ${!isVisible ? "text-md" : 'text-xl'}`}>
                    7 day's forecast
                </h1>
                <div>
                    <ul className="flex flex-col gap-4">
                        {dailyForecast.map((day, index) => (
                            <li key={index} className={`flex items-center mr-auto ml-auto justify-between ${!isVisible ? 'py-[0.07rem] w-4/5' : 'py-[0.55rem] w-[90%]'} ${index < 5 ? 'border-b-[1px] border-[#9399a2]' : ''}`}>
                                <p className={`font-rubik capitalize text-[#9399a2] ${!isVisible ? "text-lg" : 'text-xl'}`}>
                                    {days[new Date(day.time).getDay()]}
                                </p>
                                <img 
                                    src={imageMap[day.values.weatherCodeMax] || '/weather-icons/day/01d.svg'} 
                                    alt="icon" 
                                    className={`${!isVisible ? "w-10 h-10" : 'w-16 h-16'}`} 
                                />
                                <p>
                                    <span className="font-rubik font-bold text-md text-white">{day.values.temperatureMax}</span>
                                    <span className="text-[#9399a2]">/</span>
                                    <span className="text-sm font-mono font-normal text-[#9399a2]">{day.values.temperatureMin}</span>
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SevenDaysForcast;