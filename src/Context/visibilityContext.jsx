import React, { useContext, createContext, useState } from "react";

const VisibilityContext = createContext();

export const useVisibility = () => {
  return useContext(VisibilityContext);
};

export const VisibilityProvider =  ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleClick = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <VisibilityContext.Provider value={{ isVisible, toggleClick }}>
      {children}
    </VisibilityContext.Provider>
  );
};
