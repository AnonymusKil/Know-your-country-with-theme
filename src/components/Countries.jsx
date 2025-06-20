import React, { useContext } from "react";
import { Link } from "react-router-dom";
import countries from "../data/countries.json";
import { UserContext } from "../context/userContext";

function Countries() {
  const { value, result } = useContext(UserContext);

  const dataToDisplay = value?.trim() ? result : countries.slice(0, 20);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-6 py-8">
      {dataToDisplay?.map((country, index) => (
        <Link
          to={`/country/${country.cca3}`}
          key={index}
          className="bg-white dark:bg-darkmode text-gray-800 dark:text-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
        >
          {/* Flag */}
          <img
            src={country.flags?.png}
            alt={`${country.name?.common || country.name} flag`}
            className="w-full h-48 object-cover cursor-pointer"
          />

          <div className="p-6 space-y-2">
            <h2 className="text-lg font-extrabold mb-2">
              {country.name?.common || country.name}
            </h2>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Population:</strong>{" "}
              {country.population?.toLocaleString()}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Region:</strong> {country.region}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Capital:</strong> {country.capital}
            </p>
          </div>
        </Link>
      ))}
    </section>
  );
}

export default Countries;
