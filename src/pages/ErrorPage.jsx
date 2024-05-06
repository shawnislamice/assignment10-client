import { Link } from "react-router-dom";
import error from "../assets/404.gif";
import { Helmet } from "react-helmet-async";
const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Helmet>
        <title>Ops! Error</title>
      </Helmet>
      <h3 className="font-bold text-4xl text-center">
        Ops! Your Requested Content Was Not Found
      </h3>
      <Link to="/">
        <button
          href="#_"
          className="md:mt-3 rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white"
        >
          <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
            Go Home
          </span>
        </button>
      </Link>
      <img src={error} alt="" />
    </div>
  );
};

export default ErrorPage;
