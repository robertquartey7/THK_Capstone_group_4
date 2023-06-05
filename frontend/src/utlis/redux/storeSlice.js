import { Marker } from "@react-google-maps/api";
import { createSlice } from "@reduxjs/toolkit";

const storeInit = {
  marker: [],
};
const storeSlice = createSlice({
  name: "store",
  initialState: storeInit,
  reducers: {
    setMarker: (state, action) => {

      state.marker.push(action.payload)
    },
  },
});
console.log(storeInit.marker)
export const { setMarker } = storeSlice.actions;

export default storeSlice.reducer;


