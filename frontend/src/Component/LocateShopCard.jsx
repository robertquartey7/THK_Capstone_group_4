import React, { useState } from "react";
import { Link } from "react-router-dom";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch,  } from "react-redux";

import {setDirection} from "../utlis/redux/userSlice";
function LocateShopCard({props}) {
  const [directionState, setDirectionState] = useState(false);
  

  const { lat, lng } = useSelector((state) => state.user.location);
  console.log(lat, lng)
  const dispatch = useDispatch();
  const directionService = new google.maps.DirectionsService();




  async function getDirection() {
    setDirectionState(true);
    const result = await directionService.route({
      origin: {
        lat,
        lng,
      },
      destination: props.location,
      travelMode: google.maps.TravelMode.DRIVING,
    });

    dispatch(
      setDirection({ direction: result})
    );

  
  }


  function cancelDirection(){

    setDirectionState(false)
    dispatch(setDirection({direction:null}))
   
  }

  return (
    <>
      <div className="rounded overflow-hidden shadow-lg flex flex-col gap-1 p-1 mb-4 hover:shadow-xl hover:-translate-y-1 transition-all">
        <div className="relative">
          <Link to={`/locate/products/${props.id}`}>
            <img
              className="w-full h-36"
              src={props.imageUrl}
              alt="Sunset in the mountains"
            />
          </Link>

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

        <div className="flex justify-between p-1 items-center">
          <div>
            <div>
              <span>{props.name}</span>
            </div>
            <div className="flex gap-2">
              <span>
                <span>{props.storehours}</span>
              </span>
              <span className="">{}</span>
            </div>

            {/* favorite */}
          </div>

          {directionState !== true ? (
            <span
              className="border p-1 rounded-lg bg-primary text-white cursor-pointer"
              onClick={getDirection}
            >
              Get Direction
            </span>
          ) : (
            <span
              className="mr-5 border  rounded-full bg-primary text-white cursor-pointer"
              onClick={cancelDirection}
            >
              <XCircleIcon className="h-7" />
            </span>
          )}
        </div>
      </div>
    </>
  );
}

export default LocateShopCard;
