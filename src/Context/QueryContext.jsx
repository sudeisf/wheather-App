import { createContext, useContext, useState } from "react";

// Create a context
const QueryContext = createContext();

// Custom hook to use the QueryContext
export const useQuery = () => {
    return useContext(QueryContext);
};

// Provider component
export const QueryProvider = ({ children }) => {
    const [query, setQuery] = useState('');

    return (
        <QueryContext.Provider value={{ query, setQuery }}>
            {children}
        </QueryContext.Provider>
    );
};
