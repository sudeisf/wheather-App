import React from 'react'
import { useWeather } from '../Context/WeatherContext';
import { useVisibility } from '../Context/visibilityContext';

function TodaysForcast(){
    const { weatherData, loading, error } = useWeather();
    const { isVisible } = useVisibility();

    if (loading) return <div>loading</div>
    if (error) return <div>{error}</div>
    if (!weatherData) return <div>No weather data available</div>

    const { forecast } = weatherData || {};
    const forecastDay = forecast?.forecastday?.[0]?.hour || [];

    return(
        <>
           <div className='bg-[#202B3B] flex flex-col rounded-2xl shadow-sm h-2/6' style={{display : isVisible ? 'block' : 'none'}}>
                <h1 className='uppercase pt-5 pl-5 pb-3 font-mono font-semibold text-[#9399a2]'>today's forcast</h1>
                <div className='w-full pl-5 pr-5 pb-5'>
                    <ul className='flex gap-3'>
                        {forecastDay?.map((hour, index) => (
                            <li key={index} className={`flex flex-col w-3/4 text-center mr-auto ml-auto gap-2 ${index < 5 ? 'border-r-[1px] border-[#9399a2]' : ''}`}>
                                <h1 className='font-sans font-semibold text-[#9399a2]'>{new Date(hour.time).toLocaleTimeString('en-US',{timeStyle:'short', hour12:true})}</h1>
                                <img src={hour.condition.icon} alt="icon" className='w-16 h-16 ml-auto mr-auto' />
                                <p className='font-bold font-sans text-lg text-white'>{hour.temp_c}&deg;C</p>
                            </li>
                        ))}
                    </ul>
                </div>
           </div>
        </>
    )
}
export default TodaysForcast;