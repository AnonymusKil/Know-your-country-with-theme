import React from "react";
import FilterBar from "./FilterBar";
import { useState, useEffect } from "react";

function NavBar() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <header className="flex justify-between items-center px-6 py-5 bg-white dark:bg-darkmode shadow-md transition-colors duration-300">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-gray-800 dark:text-darktext">
          Where in the world?
        </h1>
        <nav
          onClick={toggleDarkMode}
          className="flex items-center gap-2 sm:gap-3 group cursor-pointer"
        >
          <i
            className={`fa-solid ${
              darkMode ? "fa-mmon" : "fa-sun"
            } text-2xl sm:text-3xl text-gray-700 dark:text-white transition duration-300 group-hover:text-indigo-600`}
          ></i>
          <span className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white transition duration-300 group-hover:text-indigo-600">
            {darkMode ? "Dark Mode" : "Light Mode"}
          </span>
        </nav>
      </header>

      <FilterBar />
    </>
  );
}

export default NavBar;
