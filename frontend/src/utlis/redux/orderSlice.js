import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  orderNumber: 0.0,
  orderPrice: 5.0,

  subTotal: 0.0,
  total: 0.0,
  discountCode: {
    PAYLESSCR: 10,
    ROBERT: 30,
    DIANA: 20,
  },
  totalPrice: 0.0,
  discountApply: false,
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

    addSubtotal: (state, action) => {
      console.log(state.subTotal)
      state.subTotal += action.payload.addPrice;
      state.totalPrice += action.payload.addPrice;
    },
    discountCodeApply: (state, action) => {
      if (
        state.discountCode[action.payload.discountCode] &&
        state.discountApply === false
      ) {
        state.totalPrice =
          ((100-state.discountCode[action.payload.discountCode]) / 100) *
          state.totalPrice;
          console.log(state.totalPrice)
        console.log(state.totalPrice);
        state.discountApply = true;
      }
    },
  },
});

export const {
  addOrderDetails,
  increment,
  decrement,
  addSubtotal,
  discountCodeApply,
} = orderSlice.actions;

export default orderSlice.reducer;
