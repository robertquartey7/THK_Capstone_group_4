import React from "react";
import useSWR from "swr";
import { fetcher } from "../utlis/dataFetch";
import StoreCard from "../Component/StoreCard";
function Store() {
  const { data, isLoading, error } = useSWR("/v1/stores", fetcher);

  if (data) {
    return (
      <div class=" p-10">
        <p class=" text-green-500 font-semibold place-content:start">
          Bodegas in your Area
        </p>
        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
          {data.data.map((store) => (
            <StoreCard store={store} />
          ))}
        </div>
      </div>
    );
  }

  return <div>nothing</div>;
}

export default Store;
