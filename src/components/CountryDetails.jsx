import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";

function CountryDetails() {
  const { code } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/alpha/${code}`)
      .then((res) => {
        const response = res.data;
        setCountry(Array.isArray(response) ? response[0] : response);
        setError(null);
      })
      .catch((err) => {
        console.error("Error fetching country details:", err);
        setError("Country not found or failed to load.");
      });
  }, [code]);

  return (
    <section>
      <NavBar />
      <div className="px-6 pt-6">
        <button
          onClick={() => navigate(-1)}
          className="bg-white dark:bg-darkmode px-4 py-2 shadow rounded text-sm"
        >
          <i className="fa-solid fa-arrow-left mr-2"></i>Back
        </button>
      </div>

      {error ? (
        <p className="text-red-500 px-6 mt-6">{error}</p>
      ) : !country ? (
        <p className="text-gray-600 px-6 mt-6">Loading...</p>
      ) : (
        <div className="flex flex-col md:flex-row gap-6 px-6 py-6">
          <img
            src={country.flags?.png}
            alt={`${country.name?.common} flag`}
            className="w-full md:w-1/3 h-auto rounded-md shadow-md"
          />
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              {country.name?.common}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Population:</strong>{" "}
              {country.population?.toLocaleString()}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Region:</strong> {country.region}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              <strong>Capital:</strong> {country.capital?.[0]}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default CountryDetails;
