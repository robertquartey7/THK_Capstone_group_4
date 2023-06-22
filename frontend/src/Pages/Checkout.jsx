import Orders from "../Component/checkout/Orders";
import Total from "../Component/checkout/Total";
import DeliveryContact from "../Component/checkout/DeliveryContact";

import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { discountCodeApply } from "../utlis/redux/orderSlice";
function Checkout() {
  const [discount, setDiscount] = useState("");
  const [error, seterror] = useState(false);
  const [message, setMessage] = useState("");
  const [click, setclick] = useState(false);

  const orderObj = useSelector((state) => state.order);
  const dispatch = useDispatch();
  function handleDiscountClick() {
    setclick(true);

    if(orderObj.discountApply && orderObj.discountCode[discount] ) {
     
      seterror(false);
      setMessage("Discount Code Already Applied");
    }else if (orderObj.discountCode[discount]) {
      seterror(true);
      setMessage("Discount Code Apply");
      dispatch(discountCodeApply({ discountCode: discount }));
    }else {
      setMessage("Invalid Discount Code");
      seterror(false);
      
    }
  }

  return (
    <div className="grid grid-cols-2">
      <div className=" m-10 h-full">
        {/* order summary */}
        <div className="px-1 pl-2">
          <span>Order Summary</span>
          <Orders />
          <div className="w-full">
            <div className="flex flex-col w-full mb-2">
              <span>Gift Card / Discount code</span>
              <div>
                <div className="flex flex-grow md:gap-7 gap-1">
                  <input
                    type="text"
                    className="border w-full rounded-md"
                    value={discount}
                    onChange={(e) => {
                      setclick(false);
                      seterror(false);
                      setDiscount(e.target.value);
                    }}
                  />
                  <span
                    className="border py-1 px-4 rounded-md border-secondary text-secondary cursor-pointer"
                    onClick={handleDiscountClick}
                  >
                    Apply
                  </span>
                </div>
                {click && (
                  <span
                    class={`flex items-center font-medium tracking-wide text-${
                      !error ? "red-500" : "green-500"
                    } text-xs mt-1 ml-1`}
                  >
                    {message}
                  </span>
                )}
              </div>
            </div>
            <Total />
          </div>
        </div>
        {/* order summary button */}
      </div>
      <div>
        <div className="flex items-center justify-center">
          <span>Delivery --- </span> <CheckCircleIcon className="h-7 w-7" />
          ---<span></span> <span>Payment</span>
        </div>
        {/* delivery and payment */}
        <DeliveryContact />
        {/* continue button */}
      </div>
    </div>
  );
}

export default Checkout;
