import React from "react";
import {fetcher} from '../utlis/dataFetch'
import useSWR from 'swr'






function TopBodega() {

const {data, error, isLoading, isValidating} = useSWR('/v1/stores', fetcher)
 
  console.log(data)
  return (
    <div className="px-20 flex-col py-5 shadow-lg mt-10">
      <div className="py-10">
        <h1 className="text-4xl">Top Bodega In Your Area</h1>
      </div>
      <div className="grid grid-cols-5 gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            alt=""
          />
        </div>
        <div className="bg-gray-300">
          <img
            className="h-auto max-w-full rounded-lg bg-gray-300"
            src=""
            alt=""
          />
        </div>
        <div className="bg-gray-300">
          <img
            className="h-auto max-w-full rounded-lg"
            src=""
            alt=""
          />
        </div>
        <div className="bg-gray-300">
          <img
            className="h-auto max-w-full rounded-lg"
            src=""
            alt=""
          />
        </div>
        <div className="bg-gray-300">
          <img
            className="h-auto max-w-full rounded-lg"
            src=""
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default TopBodega;
