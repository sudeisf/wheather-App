import React from "react";
import { useNavigate } from "react-router-dom";

function SearchBar(){
    const navigate = useNavigate();
    function handleChange(){
        return navigate('/cities')
    }
    return (
        <>
        <div className=" mt-5">
            <form action="" >
            <input type="search"
            id="search"
            onChange={handleChange}
             placeholder="Search for Cities"
             className=" rounded-2xl w-3/5 h-12 shadow-md bg-[#202B3B] placeholder:text-white placeholder:p-2 font-medium focus:border-none p-2 focus:outline-none " />
            </form>

        </div>
        </>
    );
}
export default SearchBar;