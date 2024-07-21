import React from "react"
import {useWeather} from '../Context/WeatherContext'
import { useVisibility } from "../Context/visibilityContext";
function SevenDaysForcast(){
    const { weatherData , loading , error} = useWeather();
    const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    const {isVisible}= useVisibility();



    if (loading) return <div>Loading...</div>
    if (error) return  <div>{error}</div>

    const {forecast }= weatherData;
    const forecastDay = forecast && forecast.forecastday;
    const forecastDay_One = forecast && forecast.forecastday && forecast.forecastday[0] ? forecast.forecastday[0].hour : {};

    const getClassName = (index) => index < 6 ? "b-b-2" : "";
    return(
        <>
            <div className="flex flex-col gap-2">
            <div className={`bg-white flex flex-col   rounded-lg shadow-md h-2/6  w-[90%] ml-auto mr-auto p-2 `} style={{display : !isVisible ? 'block' : 'none'}} >
                <h1 className='uppercase pt-5 pl-5 pb-3 font-mono font-semibold'>today's forcast</h1>
                <div className='w-full pl-5 pr-5 pb-5'>
                    <ul className='flex gap-3'>
                        {forecastDay_One &&
                           forecastDay_One?.filter((_, index) => index < 3).map((hour, index) => (
                            <li key={index} className={` flex flex-col  w-3/4 text-center  mr-auto ml-auto gap-2 ${index < 2  ? 'border-r-[1px]' : ''}`}>
                                <h1 className='font-sans font-semibold'>{new Date(hour.time).toLocaleTimeString('en-US',{timeStyle:'short' ,hour12:true})}</h1>
                                <img src={hour.condition.icon} alt="icon" className='w-16 h-16 ml-auto mr-auto' />
                                <p className='font-bold font-sans text-lg'>{hour.temp_c}&deg;C</p>
                            </li>
                        ))
                        }
                    </ul>
                </div>
           </div>
            
           <div className="bg-[#ffffffe1] w-[90%] ml-auto mr-auto rounded-xl shadow-md p-5 ">
               <h1 className="uppercase font-mono font-semibold pl-10 py-2">7 day's forcast</h1>
               <div>
                  <ul className="flex flex-col gap-4">
                     {
                      forecastDay.map((day , index)=>(
                        <li key={index} className={`flex items-center mr-auto ml-auto justify-around  ${!isVisible? 'py-[0.035rem] w-4/5': 'py-[0.1rem] w-[95%]'}  ${index < 6  ? 'border-b-[1px]' : ''}`}>
                            <p className="font-mono capitalize text-md ">{days[new Date(day.date).getDay()]}</p>
                            <img src={day.day.condition.icon} alt="icon" className={`${!isVisible? "w-8 h-8" : '' }`} />
                            <p> <span className="font-mono font-bold text-md">{day.day.maxtemp_c}</span> / <span className="text-sm font-mono font-normal">{day.day.mintemp_c}</span></p>
                        </li>
                      ))
                     }
                  </ul>
               </div>
           </div>
           </div>
        </>
    )
}


export default SevenDaysForcast;