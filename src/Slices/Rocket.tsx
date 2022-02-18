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
      state.launches = [
        ...state.launches,
        {
          name: action.payload.name,
          image: action.payload.image,
          details: action.payload.details,
        },
      ];
    },
  },
});
const { actions, reducer } = launchSlice;

export const { addLauches } = actions;

export default reducer;
