import { useParams } from "react-router-dom";
import MultipleItems from "../Component/Slider";
import { fetcher } from "../utlis/dataFetch";
import useSWR from "swr";
import Loading from "../Component/Loading/Loading";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

import { useEffect, useState } from "react";

function Product() {
  const { id } = useParams();
  const [orderClick, setOrderClick] = useState(true);
  const { data, error, isLoading, isValidating } = useSWR(
    `/v1/store/${id}/items?group=true`,
    fetcher
  );

  function getOrder() {
    if (!localStorage.getItem("orders")) {
      console.log("first");
    }
  }

  function addOrder(params) {
    const ordersLocalStorage = JSON.parse(localStorage.getItem("orders"));
    ordersLocalStorage.push(params);

    // newdata in localHost
    localStorage.setItem("orders", JSON.stringify(ordersLocalStorage));
    localStorage.setItem(
      "orderCount",
      parseInt(localStorage.getItem("orderCount")) + 1
    );
  }https://res.cloudinary.com/dsewihcvy/image/upload/v1684961528/stores/Basics_Market_axzper.png

  useEffect(() => {
    if (!localStorage.getItem("orders")) {
      localStorage.setItem("orderCount", 0);
      localStorage.setItem("orders", "[]");
    }
  }, [orderClick]);

  if (isLoading) {
    return <Loading />;
  }
  if (data.data.length === 0) {
    return (
      <div>
        <span></span>

        <span>No products</span>
      </div>
    );
  }

  if (data) {
    return (
      <div>
        <div className="w-screen">
          <img
            src={data.data[0].stores[0].store.imageUrl}
            alt=""
            className="w-full h-40"
          />
        </div>
        <div className="flex px-5 justify-between mb-10">
          <span className="font-semibold text-2xl">
            {data.data[0].stores[0]?.store.name}
          </span>
          <span className="cursor-pointer relative">
            <ShoppingCartIcon className="h-10" />
            <span className="absolute -top-3 -right-1 bg-red-900 border h-6 w-6 text-center rounded-full">
              {localStorage.getItem("orderCount")}
            </span>
          </span>
        </div>

        <div className="border p-2">
          {data.data.map((element) => (
            <MultipleItems
              props={element}
              addOrder={() => {
                addOrder(id);
              }}
              key={element.key}
              setOrderClick={setOrderClick}
              orderClick={orderClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Product;
