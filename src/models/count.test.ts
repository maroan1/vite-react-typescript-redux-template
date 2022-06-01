import {
  describe, expect, it, beforeEach,
} from 'vitest';
import { store } from '../store';
import {
  increment,
  incrementOne,
  decrement,
  decrementOne,
  reset,
} from './count';

describe('count model', () => {
  beforeEach(() => {
    store.dispatch(reset());
  });

  it('should have initial state', () => {
    expect(store.getState().count.value).toEqual(0);
  });

  it('increment reducer should increment given a payload', () => {
    store.dispatch(increment(3));

    const countData = store.getState().count.value;
    expect(countData).toEqual(3);
  });

  it('decrement reducer should decrement given a payload', () => {
    store.dispatch(decrement(4));

    const countData = store.getState().count.value;
    expect(countData).toEqual(-4);
  });

  it('incrementOne effect should increment count by 1', () => {
    store.dispatch(incrementOne());

    const countData = store.getState().count.value;
    expect(countData).toEqual(1);
  });

  it('decrementOne effect should decrement count by 1', () => {
    store.dispatch(increment(3));
    store.dispatch(decrementOne());

    const countData = store.getState().count.value;
    expect(countData).toEqual(2);
  });

  it('decrementOne effect should not decrement count by 1 if count is 0', () => {
    store.dispatch(decrementOne());

    const countData = store.getState().count.value;
    expect(countData).toEqual(0);
  });
});
