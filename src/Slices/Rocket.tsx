import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type launch = {
  mission_name: string;
};
type launchSliceState = {
  launches: launch[];
};

const initialState: launchSliceState = {
  launches: [],
};
export const launchSlice = createSlice({
  name: "launch",
  initialState,
  reducers: {
    addLauches: (state, action: PayloadAction<string>) => {
      state.launches = [
        ...state.launches,
        {
          mission_name: action.payload,
        },
      ];
    },
  },
});
const { actions, reducer } = launchSlice;

export const { addLauches } = actions;

export default reducer;
