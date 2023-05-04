import React from "react";
import Map from "../Component/Map";
import LocateShopCard from "../Component/LocateShopCard";

function Locate() {
  return (
    <div className="border w-full flex p-2 h-screen gap-2">
      <div className="border w-3/5 rounded-lg overflow-hidden shadow-lg h-3/4">
        <Map />
      </div>
      <div className="w-2/5">
        <LocateShopCard />
        <LocateShopCard />
        <LocateShopCard />
        <LocateShopCard />
      </div>
    </div>
  );
}

export default Locate;
