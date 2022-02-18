import { configureStore, PayloadAction } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import launchReducer, { launchSlice } from "Slices/Rocket";

export const store = configureStore({
  reducer: {
    launchList: launchSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
