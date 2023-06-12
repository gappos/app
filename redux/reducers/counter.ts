import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Counter {
  count: number;
}

const initialState: Counter = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    addAmount(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
  },
});

export const { reducer: counter } = counterSlice;
export const { increment, decrement, addAmount } = counterSlice.actions;
