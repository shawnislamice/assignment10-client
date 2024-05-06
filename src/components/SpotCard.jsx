import { Link } from "react-router-dom";

const SpotCard = ({ spot }) => {
  const {
    averageCost,
    country,
    location,
    photo,
    season,
    shortDescription,
    touristSpotName,
    travelTime,
    userEmail,
    userName,
    _id,
    totalTravellers,
  } = spot;

  return (
    <div className="px-2 md:px-0">
      <div className=" md:h-[600px] hover:scale-95 duration-300  md:max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
        <img
          src={photo}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2 space-y-2">
          <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">
            Country: {country}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">
            {touristSpotName}
          </h2>
          <p>
            <b>Average Costs:</b> {averageCost} $
          </p>
          <p>
            <b>Visitors: </b>
            {totalTravellers}
          </p>
          <p>
            <b>Travel Time:</b> {travelTime}
          </p>
          <p>
            <b>Season:</b> {season}
          </p>
        </div>

        <Link to={`/alltouristspot/${_id}`}>
          <button className="btn btn-secondary block mx-auto md:mt-3">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SpotCard;
