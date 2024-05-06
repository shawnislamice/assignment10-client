import { Helmet } from "react-helmet-async";
import { CiSearch } from "react-icons/ci";
import { Typewriter } from "react-simple-typewriter";

const PlanYourTravel = () => {
  return (
    <div className="container mx-auto max-w-screen-xl  mt-3">
      <h2 className="text-center font-bold text-2xl">
        {" "}
        <Typewriter
          words={["Plan Your Travel", "You Can Easily Plan Your Travel"]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>
      <section className="p-6 bg-base-200 md:my-5 my-3 rounded-lg dark:bg-gray-100 dark:text-gray-900">
        <Helmet>
          <title>Plan Your Travel</title>
        </Helmet>
        <form
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="container mx-auto  grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Plan Your Travel</p>
              <p className="text-xs">
                You can customize your travel as you need
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Check In
                </label>
                <input
                  id="firstname"
                  type="date"
                  className=" input w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Check Out
                </label>
                <input
                  id="lastname"
                  type="date"
                  className="input w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Location
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="Choose location"
                  className="w-full rounded-md input focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="address" className="text-sm">
                  No Of Child
                </label>
                <input
                  type="text"
                  placeholder="Add Guests"
                  className="w-full input rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
            </div>
          </fieldset>
          <button className="block mx-auto btn btn-primary">Find Now</button>
        </form>
      </section>
    </div>
  );
};

export default PlanYourTravel;
