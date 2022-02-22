import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cartType, launchSliceState } from "../Types";
const initialState: launchSliceState = {
  launches: [],
};
export const launchSlice = createSlice({
  name: "launch",
  initialState,
  reducers: {
    addLauches: (state, action: PayloadAction<cartType>) => {
      state.launches.unshift({
        name: action.payload.name,
        image: action.payload.image,
        details: action.payload.details,
        amount: 0,
      });
    },
    removeLauches: (state, action: PayloadAction<cartType>) => {
      state.launches = state.launches.filter(
        (item, index) => item.name !== action.payload.name
      );
    },
  },
});
const { actions, reducer } = launchSlice;

export const { addLauches, removeLauches } = actions;

export default reducer;
