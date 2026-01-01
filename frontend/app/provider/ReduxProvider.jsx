"use client";
import React from "react";
import { Provider } from "react-redux";
import { Store } from "../store/store";

export default function ReduxProvider({ children }) {
  return <Provider store={Store}>{children}</Provider>;
}
