import React from "react"
import {useWeather} from '../Context/WeatherContext'
function SevenDaysForcast(){
    const { weatherData , loading , error} = useWeather();
    const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];



    if (loading) return <div>Loading...</div>
    if (error) return  <div>{error}</div>

    const {forecast }= weatherData;
    const forecastDay = forecast && forecast.forecastday;
    const getClassName = (index) => index < 6 ? "b-b-2" : "";
    return(
        <>
           <div className="bg-white w-[90%] ml-auto mr-auto rounded-xl shadow-md p-3 ">
               <h1 className="uppercase font-mono font-semibold pl-10 py-2">7 day's forcast</h1>
               <div>
                  <ul className="flex flex-col gap-4">
                     {
                      forecastDay.map((day , index)=>(
                        <li key={index} className={`flex items-center mr-auto ml-auto justify-around py-[0.04rem] w-4/5 ${index < 6  ? 'border-b-[1px]' : ''}`}>
                            <p className="font-mono capitalize text-md ">{days[new Date(day.date).getDay()]}</p>
                            <img src={day.day.condition.icon} alt="icon"  />
                            <p> <span className="font-mono font-bold text-md">{day.day.maxtemp_c}</span> / <span className="text-sm font-mono font-normal">{day.day.mintemp_c}</span></p>
                        </li>
                      ))
                     }
                  </ul>
               </div>
           </div>
        </>
    )
}


export default SevenDaysForcast;