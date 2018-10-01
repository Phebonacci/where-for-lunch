import { all } from 'redux-saga/effects';

import placeSagas from './placeSagas';
import pricingLevelSagas from './pricingSagas';

export default function* rootSagas() {
  yield all([
    placeSagas(),
    pricingLevelSagas(),
  ]);
}
