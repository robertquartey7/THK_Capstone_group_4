import React from "react";
import { fetcher } from "../utlis/dataFetch";
import useSWR from "swr";
import Loading from "./Loading";

function TopBodega() {
  const { data, error, isLoading, isValidating } = useSWR(
    "/v1/stores",
    fetcher
  );
  if (isLoading) {
    return <Loading />;
  }
 

  console.log(data);
  return (
    <div className="px-20 flex-col py-5 shadow-lg mt-10">
      <div className="py-10">
        <h1 className="text-4xl">Top Bodega In Your Area</h1>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {data ?
          data.data?.map((element) => {
            return (
              <div key={element.id}>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={element.imageURL}
                  alt=""
                />
                <p>{element.name}</p>
              </div>
            );

          })
          :
          <div>
            error
          </div>
          }

      </div>
    </div>
  );
}

export default TopBodega;
