import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  orderNumber: 0,
  orderPrice:5.00,
  orderTotalPrice: 0,
  subTotal:0,

};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrderDetails: (state, action) => {
      state.name = action.payload.name;
      state.orderNumber = action.payload.orderNumber;
      state.orderPrice = action.payload.orderPrice;
    },
   
    addSubtotal:(state,action)=>{
        state.subTotal += action.payload.addPrice
    }
  },
});


export const {addOrderDetails, increment, decrement} = orderSlice.actions

export default orderSlice.reducer