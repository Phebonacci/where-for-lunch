import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import conditionReducer from './conditionReducer';
import placeReducer from './placeReducer';
import pricingReducer from './pricingReducer';

export default combineReducers({
  condition: conditionReducer,
  place: placeReducer,
  routing: routerReducer,
  pricingLevels: pricingReducer,
});
