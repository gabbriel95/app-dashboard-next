import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  count: number;
  isReady: boolean;
}

const initialState: CounterState = {
  count: 0,
  isReady: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    initiCounterState: (state, action: PayloadAction<number>) => {
      if (state.isReady) return;

      state.count = action.payload;
      state.isReady = true;
    },
    addOne: (state) => {
      state.count += 1;
    },
    substractOne: (state) => {
      if (state.count === 0) return;
      state.count -= 1;
    },
    resetCount: (state, action: PayloadAction<number>) => {
      if (action.payload < 0) action.payload = 0;

      state.count = action.payload;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const {
  addOne,
  substractOne,
  resetCount,
  incrementByAmount,
  initiCounterState,
} = counterSlice.actions;

export default counterSlice.reducer;
