import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
    location:{
      lat:0,
      lng:0,
    },
    direction: null,
    directionState:false,
    orders:0,

  },
  reducers: {
    setUserProfile: (state, actions) => {
      

    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload.value;
    },
    setLocation: (state, action)=>{
      state.location.lat = action.payload.lat
      state.location.lng = action.payload.lng
    },
    setDirection: (state, action)=>{
      state.direction = action.payload.direction
    },
    setDirectionState: (state, action)=>{
      state.directionState = action.payload.directionState
    }

  },
});

export const { setUserProfile, setAuthenticated, setLocation, setDirection, setDirectionState } = user.actions;
export default user.reducer;
