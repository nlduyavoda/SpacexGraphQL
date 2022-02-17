import { configureStore, PayloadAction } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import launchReducer from "Slices/Rocket";

export const store = configureStore({
  reducer: {
    launch: launchReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
