import Orders from "../Component/checkout/Orders";
import Total from "../Component/checkout/Total";
import DeliveryContact from '../Component/checkout/DeliveryContact'
function Checkout() {
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
              <div className="flex flex-grow gap-7">
                <input type="text" className="border w-full rounded-md" />
                <span className="border py-1 px-4 rounded-md border-secondary text-secondary cursor-pointer">
                  Apply
                </span>
              </div>
            </div>
            <Total />
          </div>
        </div>
        {/* order summary button */}
      </div>
      <div>
        {/* delivery and payment */}
        <DeliveryContact/>
        {/* continue button */}
      </div>
    </div>
  );
}

export default Checkout;
