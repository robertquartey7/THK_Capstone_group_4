import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: {
    firstName: "",
    lastname: "",
    number: "",
    token: "",
    role: "",
    email: "",
    isAuthenticated: false,
  },
  reducers: {
    setUserProfile: (state, actions) => {
      
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload.value;
    },
  },
});

export const { setUserProfile } = user.actions;
export default user;
