import { useState } from "react";

export const getUserLocation = () => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  function showPosition(position) {
    setLat(position.coords.latitude);
    setLng(position.coords.longitude);
  }
  getLocation();
  return { lat, lng };
};
