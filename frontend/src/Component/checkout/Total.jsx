import {useSelector} from 'react-redux'

function Total() {
  const subTotal = useSelector(state=>state.order.subTotal)

  return (
    <div className="text-gray-600">
       
      <div className="flex justify-between px mb-2">
        <span>Subtotal</span>
        <span>${subTotal}</span>
      </div>
      <hr />
      <div className="flex justify-between px mb-2">
      <span>Sales tax(6.5%) </span>
        <span>$0.70</span>
      </div>
      <hr />
      <div className="flex justify-between px mb-2">
      <span>Delivery fee</span>
        <span>$4.00</span>
      </div>
      <hr />
      <div className="flex justify-between px mb-2">
      <span>Total</span>
        <span>$10.00</span>
      </div>
      <hr />
    </div>
  );
}

export default Total;
