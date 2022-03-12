import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { launchSliceState, cartType } from "../Types";
const initialState: launchSliceState = {
  launches: [],
};
export const launchSlice = createSlice({
  name: "launch",
  initialState,
  reducers: {
    addLauches: (state, action: PayloadAction<cartType>) => {
      if (state.launches.length === 0) {
        let cart = {
          name: action.payload.name,
          image: action.payload.image,
          details: action.payload.details,
          price: action.payload.price,
          amount: 1,
        };
        state.launches.push(cart);
      } else {
        let check = false;
        state.launches.map((item, key) => {
          if (item.name == action.payload.name) {
            state.launches[key].amount++;
            check = true;
          }
        });
        if (!check) {
          let newCart = {
            name: action.payload.name,
            image: action.payload.image,
            details: action.payload.details,
            price: action.payload.price,
            amount: 1,
          };
          state.launches.unshift(newCart);
        }
      }
    },
    reduceLauches: (state, action: PayloadAction<cartType>) => {
      if (action.payload.amount <= 1) {
        state.launches = state.launches.filter(
          (item, index) => item.name !== action.payload.name
        );
      } else {
        state.launches.map((item, key) => {
          if (item.name == action.payload.name) {
            state.launches[key].amount--;
          }
        });
      }
    },
    removeLauches: (state, action: PayloadAction<cartType>) => {
      state.launches = state.launches.filter(
        (item, index) => item.name !== action.payload.name
      );
    },
  },
});
const { actions, reducer } = launchSlice;

export const { addLauches, removeLauches, reduceLauches } = actions;

export default reducer;
