import { createContext, useContext, useState } from "react";
import { categories } from "./conversionData"; 


const ConversionContext = createContext();

export const ConversionProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedConverter, setSelectedConverter] = useState(null);
 
  return (
    <ConversionContext.Provider
      value={{
        categories,
        selectedCategory,
        setSelectedCategory,
        selectedConverter,
        setSelectedConverter,
       
      }}
    >
      {children}
    </ConversionContext.Provider>
  );
};


export const useConversion = () => {
  return useContext(ConversionContext);
};