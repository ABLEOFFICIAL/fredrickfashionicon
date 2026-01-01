"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screenWidth: 0,
};

const widthSlice = createSlice({
  name: "width",
  initialState,
  reducers: {
    setScreenWidth: (state, action) => {
      state.screenWidth = action.payload;
    },
  },
});

export const { setScreenWidth } = widthSlice.actions;
export default widthSlice.reducer;
