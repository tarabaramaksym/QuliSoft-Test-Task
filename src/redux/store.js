import { configureStore } from "@reduxjs/toolkit";
import imagesReducer from "./slices/imagesSlice.js";

export const store = configureStore({
  reducer: {
    images: imagesReducer
  }
});
