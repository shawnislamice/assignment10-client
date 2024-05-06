import { Link } from "react-router-dom";

const CountryCard = ({country}) => {
    const {userName,userEmail,countryName,image,shortDescription,_id}=country
    
    return (
      <Link to={`/countries/${_id}`}>
        <div className="mx-2 md:mx-0 hover:scale-105 duration-300 md:h-[500px]  p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
          <img
            src={image}
            alt=""
            className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <h2 className="text-xl font-semibold tracking-wide">
              <b> Country:</b> {countryName}
            </h2>
          </div>
          <p className="dark:text-gray-800">
            <b>Description:</b> {shortDescription.slice(0,100)}
          </p>
        </div>
      </Link>
    );
};
// Just For Commit
// Just For Commit
// Just For Commit
export default CountryCard;