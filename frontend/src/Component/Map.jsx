import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
function Map() {
  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat: 40.7128,
    lng: 74.006,
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
        <></>
      </GoogleMap>
    </div>
  );
}

export default Map;
