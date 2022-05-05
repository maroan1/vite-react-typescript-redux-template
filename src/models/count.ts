import { createModel } from '@rematch/core';
import { RootModel } from '.';

const count = createModel<RootModel>()({
  state: 0,
  reducers: {
    increment(state, payload: number) {
      return state + payload;
    },
    decrement(state, payload: number) {
      return state - payload;
    },
    incrementOne(state) {
      return state + 1;
    },
    decrementOne(state) {
      if (state !== 0) return state - 1;
      return state;
    },
  },
  // PARA ACCIONES MÁS COMPLEJAS
  // effects: (dispatch) => ({
  //   incrementOne() {
  //     dispatch.count.increment(1);
  //   },
  // }),
});

export default count;
