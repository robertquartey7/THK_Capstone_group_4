import React from "react";

function LocateShopCard() {
  return (
    <>
      <div class="w-full h-56 flex border rounded-lg overflow-hidden shadow-lg">
        <div className="w-2/5 bg-gray-600">
          <img class="w-full h-full" src="/img/default.png" alt="" />
        </div>
        <div class="w-3/5 flex flex-col justify-around px-4">
          <p>title</p>
          <p>address</p>
          <p>$$$</p>
        </div>
      </div>
    </>
  );
}

export default LocateShopCard;
