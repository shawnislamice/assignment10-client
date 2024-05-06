import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import SpotCard from "../components/SpotCard";
import { Helmet } from "react-helmet-async";

const FilterCountries = () => {
  const country = useLoaderData();
  const [allSPots, setAllSpots] = useState([]);

  const { userName, userEmail, countryName, image, shortDescription, _id } =
    country;

  useEffect(() => {
    fetch("https://assignment-10-server-sable-five.vercel.app/tourspots")
      .then((res) => res.json())
      .then((data) => setAllSpots(data));
  }, []);
  const filteredSpots = allSPots.filter((spot) => spot.country == countryName);
  console.log(filteredSpots);
  return (
    <div className="container mx-auto max-w-screen-xl md:my-5 my-3">
      <Helmet>
        <title>Country: {countryName}</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center lg:gap-5">
        {filteredSpots.map((spot) => (
          <SpotCard key={spot._id} spot={spot}></SpotCard>
        ))}
      </div>
      {filteredSpots.length == 0 && (
        <div>
          <p className="text-red-600 font-bold text-center text-2xl">
            There has Data of any Tourist spots{" "}
          </p>
          <div className="flex justify-center items-center md:my-3">
            <div>
              <button
                href="#_"
                className=" relative inline-block px-4 py-2 font-medium group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">
                  <Link to="/addtouristspot">Add Tourist Spot</Link>
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterCountries;
