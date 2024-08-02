import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../Context/QueryContext";
import { fetchData } from "../Service/weatherSearchApiService";
import { useSuggestion } from "../Context/suggestionContext";

function SearchBar(){
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const { setQuery } = useQuery();
    const { setSuggestion} = useSuggestion();

    const handleInputChange = async (event) => {
        navigate('./cities')
        const value = event.target.value;
        setInputValue(value)
        if(value){
            const data = await fetchData(value);
            setSuggestion(data);
        }
       
    
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            setQuery(inputValue); 
            setInputValue('')

        }
    };

            
       
    return (
        <>
        <div className=" mt-5">
            <form action=""  >
            <input type="search"
             id="search"
             onChange={handleInputChange}
             onKeyDown={handleKeyPress}
             value={inputValue}
             placeholder="Search for Cities"
             className=" rounded-2xl w-3/5 h-12 shadow-md bg-[#202B3B] p-4 placeholder:text-white text-white  font-medium focus:border-none  focus:outline-none " />
            </form>

        </div>
        </>
    );
}
export default SearchBar;