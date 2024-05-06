import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Link, NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const navigate = useNavigate();
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  };
  return (
    <div className="">
      <div className="navbar bg-base-100 flex items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/planyourtravel">Plan Your Travel</Link>
              </li>

              <li>
                <Link to="/alltouristspot">All Tourists Spot</Link>
              </li>
              <li>
                <Link to="/addtouristspot">Add Tourists Spot</Link>
              </li>
              <li>
                <Link to="/mylist">My List</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className=" text-xl gap-0">
            <img
              src="./logo.PNG"
              className="md:w-[200px] hover:scale-95 duration-300 cursor-pointer"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1  space-x-4">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border  duration-200 border-[#F7424F]  outline-none bg-transparent "
                    : "border-none outline-none "
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border  duration-200 border-[#F7424F]  outline-none bg-transparent "
                    : "border-none outline-none "
                }
                to="/planyourtravel"
              >
                Plan Your Travel
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border duration-200 border-[#F7424F]  outline-none bg-transparent "
                    : "border-none outline-none "
                }
                to="/alltouristspot"
              >
                All Tourists Spot
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border duration-200 border-[#F7424F]  outline-none bg-transparent "
                    : "border-none outline-none "
                }
                to="/addtouristspot"
              >
                Add Tourists Spot
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border duration-200 border-[#F7424F]  outline-none bg-transparent "
                    : "border-none outline-none "
                }
                to="/mylist"
              >
                My List
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border duration-200 border-[#F7424F]  outline-none bg-transparent "
                    : "border-none outline-none "
                }
                to="/gallery"
              >
                Gallery
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          className="navbar-end flex gap-3 "
          data-tip={user?.displayName || "Unknwon User"}
        >
          <div>
            <label className="flex cursor-pointer gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                onChange={handleToggle}
                type="checkbox"
                className="toggle theme-controller"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>
          {user ? (
            <div className="dropdown dropdown-end bg-white">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-10  p-2 shadow bg-base-200 rounded-box w-52"
              >
                <li>
                  <button className="btn btn-sm  btn-ghost">
                    {user?.displayName || "user name not found"}
                  </button>
                </li>
                <li className="btn btn-sm btn-ghost w-full">
                  <Link to="/profile">Your Profile</Link>
                </li>
                <li className="btn btn-sm btn-ghost w-full">
                  <Link to="/mylist">My List</Link>
                </li>
                <li className="btn btn-sm btn-ghost w-full">
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li className="btn btn-sm btn-ghost w-full">
                  <Link to="/countries">Country</Link>
                </li>
                <li className="btn btn-sm btn-ghost w-full">
                  <Link to="/addcountry">Add Country</Link>
                </li>

                <li>
                  <button
                    onClick={() => {
                      window.location.reload();
                      logOut();
                      navigate("/signin");
                    }}
                    className="btn btn-sm  btn-ghost"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-2 md:gap-3">
              <Link to="/login">
                <button className="btn bg-[#23BE0A] text-white border-none outline-none">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="btn btn-secondary text-white border-none outline-none">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
