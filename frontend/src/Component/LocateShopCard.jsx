import React from "react";

function LocateShopCard() {
  return (
    <>
      <div class="w-full h-56 flex-col ">
        <div className="h-4/5 border ">
          <img class="h-full" src="/img/default.png" alt="" />
        </div>
        <div class="flex gap-4">
          <span>name</span>
          <span>distance</span>
        </div>
      </div>
    </>
  );
}

export default LocateShopCard;
