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
        <div className="w-[14rem] rounded-xl  bg-[#080808] text-white  shadow-lg mr-auto ml-auto mt-5 p-2">
            <h1 className="pt-5  text-center text-xl font-mono capitalize  ">{moment().format("dddd")}</h1>
            <img 
                src={chooser(data)} // Call the chooser function here
                alt="Weather Icon" 
                className="h-auto mr-auto ml-auto py-8 drop-shadow-lg w-2/4 "
            />
            <p className="text-center text-3xl">{data.main.temp}&deg;C</p>
            <h4 className=" font-thin w-30 text-center p-2 font-mono">
                Addis Abeba, {data.sys.country}
            </h4>
            <div className="flex gap-2 pb-5 text-left ml-4 mt-2">
                <h1 className="text-xl text-center">{data.main.temp_max} &deg;C</h1><span className="text-2xl">/</span>
                <h2 className="text-md text-center">{data.main.temp_min} &deg;C</h2>

            </div>
           
        </div>
    );
}

export default Card;
