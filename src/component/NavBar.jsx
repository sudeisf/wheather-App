import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className=" w-fit p-5 flex  flex-col h-[700px]  ml-5 rounded-xl  gap-16 shadow-md bg-white relative top-[-1.8rem]">
            <div>
                <img 
                  className="w-10 h-10 mr-auto ml-auto"
                src="/weather-app-icons/logo.png" alt="Main Image" />
            </div>
            <div>
                <ul className="flex  flex-col gap-5 cursor:pointer">

                <NavLink to={'/weather'} className={({isActive})=>{
                    return isActive ? 'border-b-2 border-black ' : '';
                }}>
                    <li className="flex flex-col text-sm gap-2 font-semibold text-center cursor-pointer">
                            <img 
                            className="w-6 h-6 mr-auto ml-auto"
                            src="/weather-app-icons/cloudy-day.png" alt="Image 1" />
                            <p className="text-[#0d0635]">Weather</p>
                        </li>

                </NavLink>

                    <NavLink to ={'/cities'} className={({isActive})=>{
                    return isActive ? 'border-b-2 border-black ' : '';
                    }}>
                        <li  className="flex flex-col text-sm gap-2 font-semibold text-center cursor-pointer">
                            <img 
                            className="w-6 h-6 mr-auto ml-auto"
                            src="/weather-app-icons/cities.png" alt="Image 2" />
                            <p>Cities</p>
                        </li>
                    </NavLink>

                    <NavLink>
                        <li  className="flex flex-col text-sm gap-2 font-semibold text-center cursor-pointer">
                            <img 
                            className="w-6 h-6 mr-auto ml-auto"
                            src="/weather-app-icons/map.png" alt="Image 3" />
                            <p>map</p>
                        </li>
                    </NavLink>
                  

                  <NavLink>
                    <li className="flex flex-col text-sm gap-2 font-semibold text-center cursor-pointer">
                            <img
                            className="w-6 h-6 mr-auto ml-auto"
                            src="/weather-app-icons/setting.png" alt="Image 4" />
                            <p>Setting</p>
                        </li>
                  </NavLink>
                   
                </ul>
            </div>
            
        </div>
    );
}

export default NavBar;
