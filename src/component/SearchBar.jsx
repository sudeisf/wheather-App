import React from "react";


function SearchBar(){
    return (
        <>
        <div className=" mt-5 pl-5 pt-1">
            <form action="" >
            <input type="search"
            id="search"
             placeholder="Search for Cities"
             className="border-[0] border-black rounded-lg w-3/5 h-11 drop-shadow-xl placeholder:text-black placeholder:p-2 font-medium focus:border-none p-2" />
            </form>

        </div>
        </>
    );
}
export default SearchBar;