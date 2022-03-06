import { configureStore } from "@reduxjs/toolkit";
import { launchSlice } from "Slices/Rocket";

export const store = configureStore({
  reducer: {
    launchList: launchSlice.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
