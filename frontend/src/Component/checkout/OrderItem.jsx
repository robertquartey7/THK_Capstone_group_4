import { TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { addSubtotal } from "../../utlis/redux/orderSlice";
import { useEffect, useState } from "react";

function OrderItem({ orders, orderDetails }) {
  const [initialPrice, setInitialPrice] = useState(
    parseFloat(orders.price.slice(1))
  );
  const [orderNumber, setOrderNumber] = useState(orderDetails[orders.id]);
  const [price, setPrice] = useState(initialPrice * orderNumber);

  const subTotal = useSelector((state) => state.order.subTotal);

  useEffect(() => {
    console.log()
    dispatch(addSubtotal({ addPrice: price }));

  }, []);
  const dispatch = useDispatch();

  function incrementOrder() {
    const newOrderNumber = orderNumber + 1;
    const newPrice = initialPrice * newOrderNumber;
    setOrderNumber(newOrderNumber);
    setPrice(newPrice);
    dispatch(addSubtotal({ addPrice: initialPrice }));
  }

  function decrementOrder() {
    if (orderNumber > 1) {
      const newOrderNumber = orderNumber - 1;
      const newPrice = initialPrice * newOrderNumber;
      setOrderNumber(newOrderNumber);
      setPrice(newPrice);
      dispatch(addSubtotal({ addPrice: -initialPrice }));
    }
  }

  function handleDelete() {}

  return (
    <div className=" h-16 w-full flex mb-4">
      <div className="flex flex-grow ">
        <div className=" w-14">
          <img src={orders.imageUrl} alt="" className="h-full w-full" />
        </div>
        <div className="flex flex-col justify-between p-1">
          <span>{orders.name}</span>
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
