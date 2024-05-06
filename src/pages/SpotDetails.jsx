import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { MdOutlineSettings } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
const SpotDetails = () => {
  const spot = useLoaderData();
  const {user}=useContext(AuthContext)
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
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const navigate = useNavigate();
  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(
            `https://assignment-10-server-sable-five.vercel.app/tourspots/${id}`,
            {
              method: "DELETE",
              headers: {
                "content-type": "application/json",
              },
            }
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                navigate("/alltouristspot");
                swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "Your selected travel spot has been deleted.",
                  icon: "success",
                });
              }
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };
  return (
    <div className="md:my-5 my-3 container mx-auto max-w-screen-xl flex md:flex-row flex-col justify-between items-center">
      <Helmet>
        <title>{touristSpotName}</title>
      </Helmet>
      <div>
        <img
          src={photo}
          className="object-cover rounded-lg md:w-[600px]"
          alt=""
        />
      </div>
      <div className="md:w-[48%]">
        <hr className="md:my-3 my-2 border border-dashed" />
        <h1 className="text-2xl font-bold text-center">{touristSpotName}</h1>
        <hr className="md:my-3 my-2 border border-dashed" />
        <div className="space-y-1">
          <p className="text-xl font-bold">Added By:</p>
          <p>
            <b>User Name: </b>
            {userName}
          </p>
          <p>
            <b>User Email: </b>
            {userEmail}
          </p>
        </div>
        <hr className="md:my-3 my-2 border border-dashed" />
        <p className="  opacity-90  text-center md:pt-2">{shortDescription}</p>
        <hr className="md:my-3 my-2 border border-dashed" />
        <div className="space-y-2">
          <p>
            <b>Country:</b> {country}
          </p>
          <p>
            <b>Location:</b> {location}
          </p>
          <p>
            <b>Season:</b> {season}
          </p>
          <p>
            <b>Tavel Time:</b> {travelTime}
          </p>
          <p>
            <b>Travellers Per Year:</b> {totalTravellers || "Unknwon"}
          </p>
          <p>
            <b>Average Cost:</b> {averageCost || "Unknwon"}
          </p>
        </div>
        <hr className="md:my-3 my-2 border border-dashed" />
        <div className="flex items-center gap-2">
          <Link to={`/updatespot/${_id}`}>
            <button
              href="#_"
              className="hover:scale-95 duration-300 inline-flex overflow-hidden text-white bg-primary rounded group"
            >
              <span className="px-3.5 py-2 text-white bg-purple-500 group-hover:bg-purple-600 flex items-center justify-center">
                <MdOutlineSettings size={28}></MdOutlineSettings>
              </span>
              <span className="pl-4 pr-5 py-2.5 font-semibold">Update</span>
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            href="#_"
            className="hover:scale-95 duration-300 inline-flex overflow-hidden text-white bg-[#F7424F] rounded group"
          >
            <span className="px-3.5 py-2 text-white bg-purple-500 group-hover:bg-purple-600 flex items-center justify-center">
              <AiOutlineDelete size={28}></AiOutlineDelete>
            </span>
            <span className="pl-4 pr-5 py-2.5 font-semibold">Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpotDetails;
