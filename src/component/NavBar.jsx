import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className=" w-fit p-5 flex  flex-col h-[700px]  ml-5 mt-5 rounded-xl  gap-16 shadow-md bg-[#202B3B] ">
            <div>
                <img 
                  className="w-10 h-10 mr-auto ml-auto"
                src="/weather-app-icons/logo.png" alt="Main Image" />
            </div>
            <div>
                <ul className="flex  flex-col gap-5 cursor:pointer">

                <NavLink to={'/weather'} className={({isActive})=>{
                    return isActive ? '[&:nth-child(1)]:fill-white *:text-white' : '[&:nth-child(1)]:fill-[#878e97] text-[#878e97]';
                }}>
                    <li className="flex flex-col text-sm gap-2 font-semibold text-center cursor-pointer items-center">
                            <svg className=" w-6 h-6" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                width="800px" height="800px" viewBox="0 0 512 512"  xml:space="preserve">
                            <style type="text/css">
                            </style>
                            <g>
                                <path class="st0" d="M212.969,278.609c15.938-44.594,56.344-76.75,103.688-82.141c-15.469-44.016-57.375-75.5-106.656-75.5
                                    c-62.438,0-113.109,50.594-113.109,113.047c0,29.781,11.531,56.859,30.375,77.078c21.672-20.156,50.734-32.547,82.672-32.547
                                    C210.938,278.547,211.906,278.609,212.969,278.609z"/>
                                <rect x="193.516" y="24.047" class="st0" width="32.938" height="63.406"/>
                                <polygon class="st0" points="117.984,118.734 73.156,73.906 49.859,97.188 94.688,142.031 	"/>
                                <rect y="217.563" class="st0" width="63.406" height="32.938"/>
                                <path class="st0" d="M49.859,370.844l23.266,23.328l17.578-17.594c2.766-14.109,7.969-27.344,15.219-39.266l-11.266-11.266
                                    L49.859,370.844z"/>
                                <polygon class="st0" points="370.125,97.188 346.813,73.891 302,118.734 325.281,142.031 	"/>
                                <path class="st0" d="M422.578,304.344c-9.234-42.828-47.281-74.922-92.859-74.922c-46.063,0-84.438,32.75-93.156,76.25
                                    c-5.156-0.891-10.438-1.453-15.844-1.453c-50.75,0-91.875,41.125-91.875,91.859c0,50.75,41.125,91.875,91.875,91.875
                                    c43.359,0,156.75,0,199.406,0c50.75,0,91.875-41.125,91.875-91.875C512,346.156,472.188,305.641,422.578,304.344z"/>
                            </g>
                            </svg>
                            <p  >Weather</p>
                        </li>

                </NavLink>
                <NavLink 
                    to='/cities' 
                    className={({ isActive }) => isActive ? '[&:nth-child(1)]:stroke-white *:text-white' : '[&:nth-child(1)]:stroke-[#878e97] text-[#878e97]'}
                >
                    <li className="flex flex-col text-sm gap-2 font-semibold text-center cursor-pointer items-center">
                        <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        
                            <path d="M8 6L21 6.00078M8 12L21 12.0008M8 18L21 18.0007M3 6.5H4V5.5H3V6.5ZM3 12.5H4V11.5H3V12.5ZM3 18.5H4V17.5H3V18.5Z" 
                                stroke="currentColor"
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            />
                        </svg>
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
