import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import { LoadScript } from "@react-google-maps/api";

function App() {
  const [places] = useState(["places"]);
  return (
    <div>
      <LoadScript
        libraries={places}
        googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}
      >
        <Navbar />
        <Outlet />
        <ToastContainer />
      </LoadScript>
    </div>
  );
}

export default App;
