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
  },
  reducers: {
    setUserProfile: (state, actions) => {},
  },
});

export const { setUserProfile } = user.actions;
export default user;
