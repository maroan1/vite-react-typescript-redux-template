/* eslint-disable no-param-reassign */
import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
interface CounterState {
  value: number
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
};

export const counter = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
    incrementOne: (state) => {
      state.value += 1;
    },
    decrementOne: (state) => {
      if (state.value > 0) state.value -= 1;
    },
    reset: () => initialState,
  },
});

export const {
  increment,
  decrement,
  incrementOne,
  decrementOne,
  reset,
} = counter.actions;

export const selectCount = (state: RootState) => state.count.value;

export default counter.reducer;
