import { useEffect, useState } from "react";

export default function SideDetail(){
  
    
    
    return (
        <div className="flex flex-col gap-2 w-1/2 pl-5 pr-5 *:w-[90%] *:ml-auto *:mr-auto">
            <div className="flex justify-between pb-5 border-b-2 border-[#a9a5a5]">
                 <div className="flex flex-col gap-5 ">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-5xl font-medium font-rubik text-white">Madrid</h1>
                        <p className=" font-rubik  text-[#878E97] ">chance of rain: 0%</p>
                    </div>

                    <div>
                        <p className="text-5xl font-semibold font-rubik text-white">31&deg;</p>
                    </div>
                 </div>

                 <div>
                    <img src="../wheather-icons/day/01d.svg" alt="icon" />
                 </div>
            </div>


            <div className="flex flex-col gap-3 border-b-2 border-[#a9a5a5] pb-2 *:font-rubik">
                <h1 className="py-3 uppercase font-semibold font-rubik text-[#878E97]">today's forecast</h1>
                <ul className="flex gap-5 *:mr-auto *:ml-auto pb-5  *:w-4/5 ">
                    <li className="flex flex-col gap-3 pl-2 pr-5 border-r-2 border-[#a9a5a5] items-center ">
                        <p className="text-[#878E97]">6:00 AM</p>
                        <img src="/wheather-icons/day/01d.svg " alt="" className="w-14 h-14"  />
                        <p className="text-white text-2xl font-bold ">28&deg;</p>
                    </li>

                    <li className="flex flex-col gap-3 pl-2 pr-5 border-r-2 border-[#a9a5a5] items-center ">
                        <p className="text-[#878E97]">6:00 AM</p>
                        <img src="/wheather-icons/day/01d.svg " alt="" className="w-14 h-14"  />
                        <p className="text-white text-2xl font-bold ">28&deg;</p>
                    </li>

                    <li className="flex flex-col gap-3 pl-2 pr-5  items-center">
                        <p className="text-[#878E97]">6:00 AM</p>
                        <img src="/wheather-icons/day/01d.svg " alt="" className="w-14 h-14" />
                        <p className="text-white text-2xl font-bold ">28&deg;</p>

                    </li>

                </ul>
            </div>

            <div className="*:font-rubik">
                <h1 className="uppercase py-2 font-semibold text-[#878E97]  ">3-day forcast</h1>
                <ul className=" flex flex-col gap-2 *:items-center ">
                    <li className="flex justify-between border-b-2 border-[#a9a5a5] pb-2">
                        <p className="text-[#878E97]">mon</p>
                        <div className="flex gap-2 items-center">
                        <img src="/wheather-icons/day/01d.svg " alt="" className="w-12 h-12" />

                        <p className="text-white">sunny</p>
                        </div>
                        <p className="text-[#878E97]"><span className="text-white">36</span>/32</p></li>

                    <li className="flex justify-between border-b-2 border-[#a9a5a5] pb-2">
                        <p className="text-[#878E97]">mon</p>
                        <div className="flex gap-2 items-center">
                        <img src="/wheather-icons/day/01d.svg " alt="" className="w-12 h-12" />

                        <p className="text-white">sunny</p>
                        </div>
                        <p className="text-[#878E97]"><span className="text-white">36</span>/32</p></li>

                    <li className="flex justify-between">
                        <p className="text-[#878E97]">mon</p>
                        <div className="flex gap-2 items-center">
                        <img src="/wheather-icons/day/01d.svg " alt="" className="w-12 h-12" />

                        <p className="text-white">sunny</p>
                        </div>
                        <p className="text-[#878E97]"><span className="text-white">36</span>/32</p></li>
                </ul>
            </div>

        </div>
    );
}