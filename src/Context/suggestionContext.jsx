import { createContext, useContext, useState } from "react";


const SuggestionContext = createContext();

export const useSuggestion = () => useContext(SuggestionContext);


export function SuggestionProvider({children}) {
     const [suggestion, setSuggestion] = useState({});

    return <SuggestionContext.Provider value ={{ suggestion, setSuggestion}}>
             {children}
            </SuggestionContext.Provider>
}
