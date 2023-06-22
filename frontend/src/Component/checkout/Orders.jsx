import React, { useEffect, useState } from "react";
import OrderItem from "./OrderItem";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";

function Orders() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const discountCode = useSelector((state) => state.order.discountCode);
  const [orders, setorders] = useState({});
  const [orderData, setorderData] = useState(null);
  const [orderChange, setOrderChange] = useState(false);
  async function getOrders() {
    const order = JSON.parse(localStorage.getItem("orders"));
    const result = {};

    for (const ord of order) {
      // console.log(ord)
      result[ord] = result[ord] + 1 || 1 + 0;
    }
    setorders(result);
  }

  async function getOrderApi() {
    const orderItems = [];
    for (const ids in orders) {
      const {
        data: { data },
      } =
        await axios.get(`https://tkhcapstonegroup4-production.up.railway.app/v1/items/${ids}
    `);
      orderItems.push(data);
    }
    setorderData(orderItems);
    setOrderChange(true);
  }

  useEffect(() => {
    getOrders();
    getOrderApi();
  }, [orderChange]);

  return (
    <div>
      {
        <div>
          {orderData?.map((items) => {
            return (
              <div key={items.id}>
                <OrderItem orders={items} orderDetails={orders} />
              </div>
            );
          })}
        </div>
      }
    </div>
  );
}

export default Orders;
