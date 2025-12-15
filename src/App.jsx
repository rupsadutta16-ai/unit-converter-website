import ConverterBlock from "./Coderef";
import { useConversion } from "./ConverterContext";
import { currencyLogic } from "./customLogic";
import { useState } from "react";
import Navbar from "./Navbar";
import Body from "./Mainbody";
import Footer from "./Footer";

function App() {
  const { categories } = useConversion();



  const [darkMode, setDarkMode] = useState(false);
  return (


    <div className={`${darkMode ? "bg-gray-950 text-white" : "bg-gray-100 text-black"} font-body `}>
      <Navbar onToggleTheme={setDarkMode} />
      <Body dark={darkMode} />
      <Footer dark={darkMode} />
    </div>

  );

};

export default App;