import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthProvider";
import { Helmet } from "react-helmet-async";

const AddTouristSpot = () => {
  const {user}=useContext(AuthContext)
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    // Send data to the server
    fetch("https://assignment-10-server-sable-five.vercel.app/tourspots", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Do you want to add the tourist spot?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Save",
          denyButtonText: `Don't save`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            if (data.insertedId) {
              Swal.fire("Saved!", "", "success");
              reset();
            }
          } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
          }
        });
      });
  };
  return (
    <div className="bg-base-200 rounded-lg md:my-5 my-3 container mx-auto max-w-screen-xl">
      <Helmet>
        <title>Add Tourist Spot</title>
      </Helmet>
      <section className="p-6  rounded-xl dark:bg-gray-100 dark:text-gray-900">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className=" container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Add Your Tourist Spot</p>
              <p className="text-xs">
                Please fill out the form below to add your tourist spot.
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Name
                </label>
                <input
                  name="userName"
                  type="text"
                  readOnly
                  defaultValue={user.displayName}
                  placeholder="Write your name"
                  className="input w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  {...register("userName")}
                />
                {errors.userName && (
                  <p className="text-red-500 ">This field is required</p>
                )}
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  User Email
                </label>
                <input
                  name="userEmail"
                  type="email"
                  readOnly
                  defaultValue={user.email}
                  placeholder="User Email"
                  className="input w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  {...register("userEmail")}
                />
                {errors.userEmail && (
                  <p className="text-red-500 ">This field is required</p>
                )}
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Tourist Spot Name
                </label>
                <input
                  name="touristSpotName"
                  type="text"
                  placeholder="Where you want to go ?"
                  className="input w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  {...register("touristSpotName", { required: true })}
                />
                {errors.touristSpotName && (
                  <p className="text-red-500 ">This field is required</p>
                )}
              </div>
              <div className="col-span-full sm:col-span-3 flex flex-col gap-1">
                <label htmlFor="lastname" className="text-sm">
                  Country
                </label>
                <select
                  className=" select select-bordered w-full "
                  {...register("country", { required: true })}
                >
                  <option disabled selected>
                    Select Your Country
                  </option>
                  <option>Bangladesh</option>
                  <option>Thailand</option>
                  <option>Indonesia</option>
                  <option>Malaysia</option>
                  <option>Vietnam</option>
                  <option>Cambodia</option>
                </select>
                {errors.country && (
                  <p className="text-red-500 ">This field is required</p>
                )}
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Location
                </label>
                <input
                  name="location"
                  type="text"
                  placeholder="Enter your location where you want to go"
                  className="input w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  {...register("location", { required: true })}
                />
                {errors.location && (
                  <p className="text-red-500 ">This field is required</p>
                )}
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Photo
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Enter your Photo URL"
                  className="input w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  {...register("photo", { required: true })}
                />
                {errors.photo && (
                  <p className="text-red-500 ">This field is required</p>
                )}
              </div>

              <div className="col-span-full">
                <label htmlFor="address" className="text-sm">
                  Short Description
                </label>
                <textarea
                  name="shortDescription"
                  placeholder="Short Description"
                  className="textarea textarea-bordered textarea-sm w-full "
                  {...register("shortDescription", { required: true })}
                ></textarea>
                {errors.shortDescription && (
                  <p className="text-red-500 ">This field is required</p>
                )}
              </div>
              <div className="col-span-full">
                <label htmlFor="address" className="text-sm">
                  Total Travelers Per Year
                </label>
                <input
                  type="text"
                  placeholder="Total Travelers Per Year"
                  name="totalTravelers"
                  className="input w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  {...register("totalTravellers", { required: true })}
                />
                {errors.totalTravellers && (
                  <p className="text-red-500 ">This field is required</p>
                )}
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="city" className="text-sm">
                  Average Cost
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="Write about your budget"
                  className="input w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  {...register("averageCost", { required: true })}
                />
                {errors.averageCost && (
                  <p className="text-red-500 ">This field is required</p>
                )}
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="city" className="text-sm">
                  Which season you prefer
                </label>
                <select
                  name="season"
                  className="select select-bordered w-full max-w-xs"
                  {...register("season", { required: true })}
                >
                  <option disabled selected>
                    Seasonaility
                  </option>
                  <option>Summer </option>
                  <option>Winter</option>
                  <option>Any</option>
                </select>
                {errors.season && (
                  <p className="text-red-500 ">This field is required</p>
                )}
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="zip" className="text-sm">
                  Travel Time
                </label>
                <input
                  name="travelTime"
                  type="text"
                  placeholder="Travel Time like 7 days"
                  className="input w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  {...register("travelTime", { required: true })}
                />
                {errors.travelTime && (
                  <p className="text-red-500 ">This field is required</p>
                )}
              </div>
            </div>
          </fieldset>
          <div className="flex justify-center md:pb-5 pb-3">
            <button
              type="submit"
              className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Add Spot
              </span>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddTouristSpot;
