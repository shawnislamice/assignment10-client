import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./contexts/AuthProvider.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
