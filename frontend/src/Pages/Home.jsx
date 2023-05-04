import React from "react";

import TopBodega from "../Component/TopBodega";
import Hero from "../Component/Hero";
import Search from "../Component/Search";

function Home() {
  return (
    <>
      <Hero />

      <div className="bg-blue-900 w-full h-64 flex-col justify-center items-center p-2">
        <div className="flex justify-around h-3/4  items-center">
          <img src="/img/EBT.png" alt="" className=" w-36 h-36" />
          <img src="/img/Chef.png" alt="" className=" w-36 h-36" />
          <img src="/img/Bugger.png" alt="" className=" w-36 h-36" />
        </div>
        <Search />
      </div>
      <TopBodega />
    </>
  );
}

export default Home;
