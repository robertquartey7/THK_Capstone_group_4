import React, { useEffect, useState } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserLocation } from "../utlis/utlis";
function StoreCard({ store }) {
  // const [distance, setDistance] = useState(null);
  // const { lat, lng } = useSelector((state) => state.user.location);
  // const directionService = new google.maps.DirectionsService();

  // async function getDistance() {
  //   console.log(lat, lng);
    
  //   const result = await directionService.route({
  //     origin: {
  //       lat,
  //       lng,
  //     },
  //     destination: store.location,
  //     travelMode: google.maps.TravelMode.DRIVING,
  //   });
  //   setDistance(result)
  // }

  // useEffect(() => {
  //   getDistance();
  //   console.log(distance);
  // }, []);

  return (
    <div className="bg-gray-200 h-40 w-full ">
      <Link to={`/locate/products/${store.id}`}>
        <div className="flex h-40 w-full ">
          <div className="w-2/5 relative shadow-lg">
            <div className=" border-black h-full w-full">
              <img src={store.imageUrl} alt="" className="h-full w-full " />
            </div>
            <span className="absolute top-0 right-1 cursor-pointer">
              <HeartIcon className="h-6 w-6 hover:text-gray-500 transition-all duration-300" />
            </span>
          </div>
          <div className="p-2 flex flex-col justify-between">
            <div>
              <span>{store.name}</span>
            
            </div>
            <span>$$$</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default StoreCard;
