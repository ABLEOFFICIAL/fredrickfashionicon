import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSideideBar: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setShowSideideBar: (state, action) => {
      state.showSideideBar = action.payload;
    },
  },
});

export const { setShowSideideBar } = productSlice.actions;
export default productSlice.reducer;
