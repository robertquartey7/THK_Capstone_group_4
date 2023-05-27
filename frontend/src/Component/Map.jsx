import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { getUserLocation } from "../utlis/utlis";

function Map() {
  const { lat, lng } = getUserLocation();
  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat,
    lng,
  };

  return (
    <div className="h-full">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        mapContainerClassName=""
      >
        {/* Child components, such as markers, info windows, etc. */}
        <Marker position={center} />
        <></>
      </GoogleMap>
    </div>
  );
}

export default Map;
