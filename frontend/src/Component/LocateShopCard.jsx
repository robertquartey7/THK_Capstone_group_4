import React from "react";

function LocateShopCard() {
  return (
    <>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          class="w-full h-36"
          src="/img/store.png"
          alt="Sunset in the mountains"
        />

        <div class="px-6 pt-4 pb-2 flex">
          <span class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Bodega
          </span>
          <span class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            7 miles
          </span>
        </div>
      </div>
    </>
  );
}

export default LocateShopCard;
