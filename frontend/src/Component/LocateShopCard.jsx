import React from "react";

function LocateShopCard() {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="relative">
          <img
            className="w-full h-36"
            src="/img/store.png"
            alt="Sunset in the mountains"
          />
          <span className="absolute top-2 right-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </span>
        </div>

        <div className="">
          <div>
            <div>
              <span>store name</span>
            </div>
            <div>
              <span>
                <span>Opens</span> . closes at 7:00pm
              </span>
              <span className="">7 miles</span>
            </div>

            {/* favorite */}
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default LocateShopCard;
