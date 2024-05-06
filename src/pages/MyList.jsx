import { useContext } from "react";
import { Link, Navigate, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from "sweetalert2";
import { Typewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet-async";

const MyList = () => {
  const spots = useLoaderData();
  const { user } = useContext(AuthContext);
  const email = user.email;

  const remaining = spots.filter((spot) => spot.userEmail == email);

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
    <div className="bg-base-200 rounded-lg md:my-5 my-3 container mx-auto max-w-screen-xl md:mt-5">
      <Helmet>
        <title>My List: {user?.displayName}</title>
      </Helmet>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
        <h2 className="mb-4 text-2xl font-semibold leading-tight text-center">
          {" "}
          <Typewriter
            words={["Tourist Spot Of"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
          <span className="text-primary">{user.displayName}</span>
        </h2>
        <div className="overflow-x-auto">
          {remaining.length > 0 && (
            <table className="min-w-full text-xs">
              <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
                <col className="w-24" />
              </colgroup>
              <thead className="dark:bg-gray-300">
                <tr className="text-left">
                  <th className="p-3">User ID</th>
                  <th className="p-3">User Email</th>
                  <th className="p-3">Spot Name</th>
                  <th className="p-3">Country</th>
                  <th className="p-3 text-right">Average Cost</th>

                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {remaining.map((item) => (
                  <tr
                    key={item._id}
                    className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
                  >
                    <td className="p-3">
                      <p>{item._id}</p>
                    </td>
                    <td className="p-3">
                      <p>{item.userEmail}</p>
                    </td>
                    <td className="p-3">
                      <p className="dark:text-gray-600">
                        {item.touristSpotName}
                      </p>
                    </td>
                    <td className="p-3">
                      <p className="dark:text-gray-600">{item.country}</p>
                    </td>
                    <td className="p-3 text-right">
                      <p>{item.averageCost}$</p>
                    </td>
                    <td className="p-3 text-right flex flex-col items-center justify-center gap-2">
                      <Link to={`/updatespot/${item._id}`}>
                        <button className="btn btn-primary font-semibold">
                          Update
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-secondary font-semibold"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        {remaining.length == 0 && (
          <div>
            <p className="text-red-600 font-bold text-center text-2xl">
              There has no Data of any Tourist Spots Of Particular User{" "}
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
    </div>
  );
};

export default MyList;
