import React from "react";

import TopBodega from "../Component/TopBodega";
import Hero from "../Component/Hero";
import Search from "../Component/Search";

function Home() {
  return (
    <>
      <Hero />
      <div className="">
      <Search/>
      </div>
      <TopBodega />
     
    </>
  );
}

export default Home;
