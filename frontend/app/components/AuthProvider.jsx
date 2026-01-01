"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCurrentUser } from "../utils/helper";

export default function AuthProvider({ children }) {
  const dispatch = useDispatch();

  // Fetch user ONCE when app loads
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return <>{children}</>;
}
