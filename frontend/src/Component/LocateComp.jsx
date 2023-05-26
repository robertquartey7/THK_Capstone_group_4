import React from "react";
import LocateShopCard from "./LocateShopCard";
import Map from "./Map";
import { Link } from "react-router-dom";

function LocateComp() {
  return (
    <div className="border w-full flex p-2 h-screen gap-2">
      <div className="border w-3/5 h-full rounded-lg overflow-hidden shadow-lg">
        <Map />
      </div>
      <div className="w-2/5 h-full overflow-auto">
        <Link to={'/locate/products'}>
          <LocateShopCard />
        </Link>
      </div>
    </div>
  );
}

export default LocateComp;
