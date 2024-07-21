import React from "react";


function SearchBar(){
    return (
        <>
        <div className=" mt-5 relative top-[-3rem]">
            <form action="" >
            <input type="search"
            id="search"
             placeholder="Search for Cities"
             className=" rounded-2xl w-3/5 h-12 shadow-md placeholder:text-black placeholder:p-2 font-medium focus:border-none p-2" />
            </form>

        </div>
        </>
    );
}
export default SearchBar;