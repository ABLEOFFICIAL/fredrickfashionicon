const { configureStore } = require("@reduxjs/toolkit");
import contextReducer from "./contextSlice";
import widthReducer from "./widthSlice";
import authReducer from "./authSlice";
import productReducer from "./productSlice";
import adminReducer from "./adminSlice";
import notificationsReducer from "./notificationsSlice";

export const Store = configureStore({
  reducer: {
    auth: authReducer,
    context: contextReducer,
    width: widthReducer,
    product: productReducer,
    admin: adminReducer,
    notifications: notificationsReducer,
  },
});
