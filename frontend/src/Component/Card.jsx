import React from "react";

function Card() {
  return (
    <div className="flex border mx-10 h-36 ">
      <div className="border">
        
        <img src="/img/logo.png" alt="" className="w-full h-full" />
      </div>
      <div className="pl-4 flex justify-center gap-7 items-center flex-col">
        <p className="">Lorem, ipsum dolor.</p>
        <p>Lorem, ipsum dolor.</p>
        <p>Lorem, ipsum dolor.</p>
      </div>
    </div>
  );
}

export default Card;
