import React from "react";
import Search from "../Component/Search";
import { Outlet } from "react-router-dom";
function Locate() {
  const searchHistory = ["food", "stack", "bugger", "drink"];
  return (
    <div>
      <div className="h-52 py-2 mt-3 bg-primary flex flex-col justify-center items-center">
        <span className="text-4xl text-white pb-2">Products</span>
        <Search />
        <div className="flex justify-around  mt-2 px-4">
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Locate;
