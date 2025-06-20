import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/userContext";

function FilterBar() {
  const { value, setValue, setResult } = useContext(UserContext);
  const [region, setRegion] = useState("");
  const [open, setOpen] = useState(false);

  const handleDropdownToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (!value) {
      setResult(null);
      return;
    }
    axios
      .get(`https://restcountries.com/v3.1/name/${value}`)
      .then((res) => {
        setResult(res.data);
        console.log(res.data);
        setRegion(""); // Reset filter
      })
      .catch(() => setResult(null));
  }, [value, setResult], []);

  useEffect(() => {
    if (!region) return;
    axios
      .get(`https://restcountries.com/v3.1/region/${region}`)
      .then((res) => {
        setResult(res.data);
        setValue(""); // Clear search
        setOpen(false); // Close dropdown
      })
      .catch(() => setResult(null));
  }, [region, setResult, setValue]);

  return (
    <section className="flex flex-col gap-6 px-6 py-6 md:flex-row md:justify-between md:items-center">
      <div className="flex items-center gap-3 w-full md:max-w-md bg-white dark:bg-gray-800 shadow-md px-4 py-3 rounded-md">
        <i className="fa-solid fa-magnifying-glass text-gray-400 text-lg"></i>
        <input
          type="text"
          placeholder="Search for a country..."
          className="w-full outline-none text-sm bg-transparent text-gray-700 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-300"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <div className="relative w-60">
        <button
          className="w-full bg-white dark:bg-gray-800 shadow-md px-4 py-3 rounded-md text-left text-sm font-medium text-gray-700 dark:text-white flex justify-between items-center"
          onClick={handleDropdownToggle}
        >
          Filter by Region
          <i className="fa-solid fa-chevron-down text-gray-500 ml-2 text-xs"></i>
        </button>

        {open && (
          <ul className="absolute z-10 mt-2 w-full bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 text-sm text-gray-700 dark:text-white transition-opacity duration-300 ease-in-out">
            {["Africa", "Americas", "Asia", "Europe", "Oceania"].map((r) => (
              <li
                key={r}
                onClick={() => setRegion(r)}
                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
              >
                {r}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default FilterBar;
