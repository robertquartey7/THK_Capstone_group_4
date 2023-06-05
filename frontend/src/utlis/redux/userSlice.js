import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: {
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

export const { setUserProfile, setAuthenticated } = user.actions;
export default user.reducer;
