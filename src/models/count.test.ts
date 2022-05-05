import { init } from '@rematch/core';
import { describe, expect, it } from 'vitest';
import { models, RootModel } from '.';

describe('count model', () => {
  it('should have initial state', () => {
    const store = init<RootModel>({
      models,
    });

    expect(store.getState().count).toEqual(0);
  });

  it('increment reducer should increment given a payload', () => {
    const store = init<RootModel>({
      models,
    });

    store.dispatch.count.increment(3);

    const countData = store.getState().count;
    expect(countData).toEqual(3);
  });

  it('decrement reducer should decrement given a payload', () => {
    const store = init<RootModel>({
      models,
    });

    store.dispatch.count.decrement(4);

    const countData = store.getState().count;
    expect(countData).toEqual(-4);
  });

  it('incrementOne effect should increment count by 1', () => {
    const store = init<RootModel>({
      models,
    });

    store.dispatch.count.incrementOne();

    const countData = store.getState().count;
    expect(countData).toEqual(1);
  });

  it('decrementOne effect should decrement count by 1', () => {
    const store = init<RootModel>({
      models,
    });

    store.dispatch.count.increment(3);
    store.dispatch.count.decrementOne();

    const countData = store.getState().count;
    expect(countData).toEqual(2);
  });

  it('decrementOne effect should not decrement count by 1 if count is 0', () => {
    const store = init<RootModel>({
      models,
    });

    store.dispatch.count.decrementOne();

    const countData = store.getState().count;
    expect(countData).toEqual(0);
  });
});
