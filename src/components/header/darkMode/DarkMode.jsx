import { useEffect, useState } from "react";

import "./DarkMode.scss";

const DarkMode = () => {
   const [selectedTheme, setSelectedTheme] = useState(
      localStorage.getItem("theme") || "light",
   );

   const setTheme = theme => {
      document.querySelector("body").setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
   };

   useEffect(() => {
      setTheme(selectedTheme);
   }, [selectedTheme]);

   const toggleTheme = () => {
      const newTheme = selectedTheme === "dark" ? "light" : "dark";
      setSelectedTheme(newTheme);
   };

   return (
      <button className="theme-btn" value={selectedTheme}>
         <label className="switch">
            <input
               onChange={toggleTheme}
               checked={selectedTheme === "dark"}
               type="checkbox"
            />
            <span className="slider"></span>
         </label>
      </button>
   );
};

export default DarkMode;
