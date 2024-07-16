import React from "react";
import moment from 'moment';

function Card({ data }) {
    const chooser = (data) => {
        const day = new Set(['01d', '02d', '03d', '04d', '09d', "10d", '11d', '13d', '50d']);
        const night = new Set(['01n', '02n', '03n', '04n', '09n', '10n', '11n', '13n', '50n']);

        const icon = data.weather[0].icon;
        let src = '';

        if (day.has(icon)) {
            src = `/wheather-icons/day/${icon}.svg`;
        } else if (night.has(icon)) {
            src = `/wheather-icons/night/${icon}.svg`;
        } else {
            src = '/default-icon.svg'; // Default icon if needed
        }

        return src;
    };

    return (
        <div className="w-[20rem] rounded-xl shadow-lg bg-[#ffff] text-white hover:shadow-2xl">
            <img 
                src={chooser(data)} // Call the chooser function here
                alt="Weather Icon" 
                className="h-auto mr-auto ml-auto py-8"
            />
            <h4 className="text-xl font-thin w-30 text-left pl-16 font-mono">
                Addis Abeba, {data.sys.country}
            </h4>
            <div className="border-t-[0.001rem] w-3/4 mx-auto pb-8 mr-4">
                <p className="text-[3rem] text-left">{Math.round(data.main.temp - 273)}&deg;C</p>
                <p className="text-left font-mono capitalize text-stone-300 text-[1.3rem]">
                    {data.weather[0].description}
                </p>
                <p className="text-[#d2ccccf4] text-lg text-left font-semibold">
                    {new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-IN')} | {data.sys.country} <br />
                    {moment().format('dddd')} {moment().format('LL')}
                </p>
            </div>
        </div>
    );
}

export default Card;
