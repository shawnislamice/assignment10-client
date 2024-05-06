import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MyList from "../pages/MyList";
import AddTouristSpot from "../pages/AddTouristSpot";
import AllTouristSpot from "../pages/AllTouristSpot";
import PrivateRoute from "./PrivateRoute";
import SpotDetails from "../pages/SpotDetails";
import UpdateSpot from "../pages/UpdateSpot";

import Profile from "../pages/Profile";
import Gallery from "../pages/Gallery";
import PlanYourTravel from "../pages/PlanYourTravel";
import ErrorPage from "../pages/ErrorPage";
import AddCountry from "../pages/AddCountry";
import Countries from "../components/Countries";
import FilterCountries from "../pages/FilterCountries";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://assignment-10-server-sable-five.vercel.app/tourspots"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/mylist",

        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://assignment-10-server-sable-five.vercel.app/tourspots"),
      },
      {
        path: "/addtouristspot",
        element: (
          <PrivateRoute>
            <AddTouristSpot></AddTouristSpot>
          </PrivateRoute>
        ),
      },
      {
        path: "/alltouristspot",
        element: (
          <PrivateRoute>
            <AllTouristSpot></AllTouristSpot>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://assignment-10-server-sable-five.vercel.app/tourspots"),
      },
      {
        path: "/alltouristspot/:id",
        element: (
          <PrivateRoute>
            <SpotDetails></SpotDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-sable-five.vercel.app/tourspots/${params.id}`
          ),
      },
      {
        path: "/updatespot/:id",
        element: (
          <PrivateRoute>
            <UpdateSpot></UpdateSpot>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-sable-five.vercel.app/tourspots/${params.id}`
          ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://assignment-10-server-sable-five.vercel.app/users"),
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/planyourtravel",
        element: (
          <PrivateRoute>
            <PlanYourTravel></PlanYourTravel>
          </PrivateRoute>
        ),
      },
      {
        path: "/countries",
        element: (
          <PrivateRoute>
            <Countries></Countries>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://assignment-10-server-sable-five.vercel.app/country"),
      },
      {
        path: "/countries/:id",
        element: (
          <PrivateRoute>
            <FilterCountries></FilterCountries>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-server-sable-five.vercel.app/country/${params.id}`
          ),
      },
      {
        path: "/addcountry",
        element: (
          <PrivateRoute>
            <AddCountry></AddCountry>
          </PrivateRoute>
        ),
      },
      
    ],
  },
]);
export default router;
