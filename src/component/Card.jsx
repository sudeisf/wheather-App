import React from "react";
import weatherIcon from "../assets/wheather.svg";
import moment from 'moment' ;// Adjusted path

function Card({ data }) {
    return (
        <div className="w-[20rem] rounded-xl shadow-lg bg-[#c72267a8] text-white hover:shadow-2xl">
            <img src={weatherIcon} alt="Weather Icon" className="w-2/3 h-auto mr-auto ml-auto py-8" />
            <h4 className="text-xl font-thin w-30 text-left pl-16 font-mono">Addis Abeba,{data.sys.country}</h4>
            <div className="border-t-[0.001rem]  w-3/4  mx-auto pb-8 mr-4">
                <p className="text-[3rem] text-left">{Math.round(data.main.temp - 273)}&deg;C</p>
                <p className="text-left font-mono capitalize text-stone-300 text-[1.3rem]">{data.weather[0].description}</p>
                <p className="text-[#d2ccccf4] text-lg text-left font-semibold">
                    {new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-IN')} | {data.sys.country} <br />
                    {moment().format('dddd')}  {moment().format('LL')}
                    </p>
            </div>
        </div>
    );
}

export default Card;
