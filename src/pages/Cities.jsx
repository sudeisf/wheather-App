import React from "react";
import SideDetail from "../component/SideDetail";
import RightSide from "../component/RightSide";
import { SuggestionProvider } from "../Context/suggestionContext";


function Cities(){
    return (
        <div className="flex w-full mt-10">
        
            <RightSide /> 
            <SideDetail />
         
            
        </div>
    )
}


export default Cities;