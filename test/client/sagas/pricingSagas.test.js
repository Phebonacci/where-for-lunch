import { call, put } from 'redux-saga/effects';
import { fetchPricingLevels } from 'sagas/pricingSagas';
import { getPricingLevels } from 'services/pricingApi';
import { SET_PRICING_LEVELS } from 'actions/pricingActionTypes';

jest.mock('axios', () => 'axios');

describe('fetchPricingLevels', () => {
  const gen = fetchPricingLevels();
  test('calls getPricingLevels', () => {
    expect(gen.next().value).toMatchObject(call(getPricingLevels));
  });
  test('dispatches SET_PRICING_LEVELS', () => {
    expect(gen.next().value).toMatchObject(put({ type: SET_PRICING_LEVELS }));
  });
  test('ends fetchPricingLevels saga', () => {
    expect(gen.next()).toMatchObject({ done: true, value: undefined });
  });
});
