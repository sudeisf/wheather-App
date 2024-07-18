
import { useEffect, useState } from "react"
import { getData } from "../Service/helper-1"



export default function AirConditions(){
   const [weatherData, setWeatherData] = useState([]);
   const [loading , setLoading] = useState(false);
   const [error , setError] = useState(null);

   useEffect(() => {
    const  fetchData =  () =>{
        try{
            const response =  getData();
            setWeatherData(response);
            setLoading(false);
        } catch(error){
            setError(error);
        }finally{
            setLoading(false);
        }
    }
    fetchData();
},[])


if (loading) return <div>Loading...</div>
if (error) return  <div>{error}</div>



    return(
        <>
        <div className="bg-white mt-2 h-2/6 rounded-xl shadow-md ">
            <div className="flex p-5 justify-between">
            <h1 className="uppercase font-bold font-mono ">air conditions</h1>
            <button className="bg-black text-white capitalize rounded-2xl px-4 py-1 text-[.8rem] font-mono">see more</button>
            </div>
            <div className="pb-5">

                <div className="grid grid-cols-2 grid-rows-2 pl-5 gap-y-2 ">
                    
                        <div className="flex flex-col ">
                            <div className="flex gap-1 items-center ">
                                <img src="/icon-lab/thermometer.svg" alt="icon" srcset="" className="w-6 h-6" />
                                <h1 className="capitalize font-medium">real feel</h1>
                            </div>
                            {
                                weatherData && 
                                <h1 className="font-bold text-2xl pl-5 ">{weatherData.current.feelslike_c}&deg;</h1>
                            }
                            
                        </div>

                        <div className="flex flex-col ">
                            <div className="flex gap-2 items-center">
                                <img src="/icon-lab/wind.svg" alt="icon" srcset="" className="w-5 h-5" />
                                <h1 className="capitalize font-medium">wind speed</h1>
                            </div>
                            {weatherData &&
                            <h1 className="font-bold text-2xl pl-5 ">{weatherData.current.wind_kph} Km/h</h1>
                        }
                        </div>
                    
                   
            
                    <div className="flex flex-col ">
                            <div className="flex gap-2 items-center">
                                <img src="/icon-lab/raindrops.png" alt="icon" srcset="" className="w-5 h-5" />
                                <h1 className="capitalize font-medium items-center">chance of rain</h1>
                            </div>
                            {weatherData && 
                            <h1 className="font-bold text-2xl pl-5 ">{weatherData.forecast.forecastday[0].day.daily_chance_of_rain}%</h1>
                            }
                        </div>

                        <div className="flex flex-col ">
                            <div className="flex gap-2 items-center">
                                <img src="/icon-lab/sun.svg" alt="icon" srcset="" className="w-5 h-5"/>
                                <h1 className="capitalize font-semibold">uV index</h1>
                            </div>
                            {weatherData && 
                            <h1 className="font-bold text-2xl pl-5 ">{weatherData.forecast.forecastday[0].day.uv}</h1>
                        }
                        </div>
                
                   
                </div>
            </div>
        </div>
        </>
    )
}