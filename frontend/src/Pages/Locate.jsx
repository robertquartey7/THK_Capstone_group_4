import React from "react";
import Map from "../Component/Map";
import LocateShopCard from "../Component/LocateShopCard";
import Search from "../Component/Search";
function Locate() {
  const searchHistory = ["food", "stack", "bugger", "drink"];
  return (
    <div>
      <div className="h-36 py-2">
        <Search />
        <div className="flex justify-around  mt-2 px-4">
          {searchHistory.map((element) => (
            <div className="border-blue-900 border flex p-2 px-4 rounded-full cursor-pointer gap-3">
              <span>{element}</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>
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
    </div>
  );
}

export default Locate;
