import { configureStore } from "@reduxjs/toolkit";
import { user } from "./store/userSlice";
import { storeInfo } from "./store/productSlice";

export default configureStore({
  reducer: {
    user: user.reducer,
    storeInfo : storeInfo.reducer,
  }
}) 