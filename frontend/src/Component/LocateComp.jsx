import React, { useCallback, useEffect, useState } from "react";
import LocateShopCard from "./LocateShopCard";
import Map from "./Map";
import { Link } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../utlis/dataFetch";


function LocateComp() {
  const { data, error, isLoading, isValidating } = useSWR(
    "/v1/stores",
    fetcher
  );
  const [selectedStore, setSelectedStore] = useState('')


  return (
    <div className="border w-full flex p-2 h-screen gap-2">
      <div className="border w-3/5 h-full rounded-lg overflow-hidden shadow-lg">
        {data && <Map data={data} />}
      </div>
      <div className="w-2/5 h-full  overflow-auto  border border-solid px-2 lg:px-20 ">
        {data &&
          data.data?.map((item) => (
            <Link to={`/locate/products/${item.id}`} key={item.id}>
              <LocateShopCard props={item} />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default LocateComp;
