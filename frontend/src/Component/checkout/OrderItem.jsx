import { TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../utlis/redux/orderSlice";
import { useState } from "react";

function OrderItem() {
  const [initialPrice, setInitialPrice] = useState(5);
  const [price, setPrice] = useState(initialPrice);
  const [orderNumber, setOrderNumber] = useState(1);

  const dispatch = useDispatch();

  async function incrementOrder() {
    const newOrderNumber = orderNumber + 1;
    const newPrice = initialPrice * newOrderNumber;
    setOrderNumber(newOrderNumber);
    setPrice(newPrice);
  }

  function decrementOrder() {
    if (orderNumber > 1) {
      const newOrderNumber = orderNumber - 1;
      const newPrice = initialPrice * newOrderNumber;
      setOrderNumber(newOrderNumber);
      setPrice(newPrice);
    }
  }

  function handleDelete() {}

  return (
    <div className=" h-16 w-full flex mb-4">
      <div className="flex flex-grow ">
        <div className=" w-14">
          <img src="/img/Bugger.png" alt="" className="h-full w-full" />
        </div>
        <div className="flex flex-col justify-between p-1">
          <span>Breakinfast</span>
          <div>
            <span
              className="bg-gray-200 h-5 w-5 cursor-pointer"
              onClick={decrementOrder}
            >
              -
            </span>
            {orderNumber}
            <span
              className="bg-gray-200 h-5 w-5 cursor-pointer"
              onClick={incrementOrder}
            >
              +
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between p-1 items-center">
        <span>${price}</span>
        <span className="cursor-pointer  ml-auto" onClick={handleDelete}>
          <TrashIcon className="h-4" />
        </span>
      </div>
    </div>
  );
}

export default OrderItem;
