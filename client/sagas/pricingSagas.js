import { call, takeEvery, put } from 'redux-saga/effects';
import { getPricingLevels } from 'services/pricingApi';
import pricingActions from 'actions/pricingActions';
import {
  FETCH_PRICING_LEVELS,
} from 'actions/pricingActionTypes';

export function* fetchPricingLevels() {
  try {
    const pricingLevels = yield call(getPricingLevels);
    yield put(pricingActions.setPricingLevels(pricingLevels));
  } catch (e) {
    yield put(pricingActions.fetchPricingLevelsFailed(e));
  }
}

function* pricingLevelSagas() {
  yield takeEvery(FETCH_PRICING_LEVELS, fetchPricingLevels);
}

export default pricingLevelSagas;
