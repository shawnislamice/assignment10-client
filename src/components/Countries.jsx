import { useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import CountryCard from "./CountryCard";
import { Helmet } from "react-helmet-async";

const Countries = () => {
  const countries = useLoaderData();
  console.log(countries);
  return (
    <div className=" md:my-5 my-3 container mx-auto max-w-screen-xl">
      <Helmet>
        <title>Countries</title>
      </Helmet>
      <hr className="my-2 max-w-6xl mx-auto border border-dashed" />
      <h2 className="text-center md:text-3xl font-bold text-xl">
        {" "}
        <Typewriter
          words={["Countries", "All Countries We Covered"]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>
      <p className="text-center opacity-90 md:pt-2 md:max-w-xl mx-auto">
        We Covered All This Countries For Our Customers. We Choose Best Places
        For Our Beloved Customers
      </p>
      <hr className="my-2 max-w-6xl mx-auto border border-dashed" />
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-5 gap-3 place-items-center">
        {countries.map((country) => (
          <CountryCard key={country._id} country={country}></CountryCard>
        ))}
      </div>
    </div>
  );
};

export default Countries;
