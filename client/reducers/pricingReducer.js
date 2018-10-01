import { handleActions } from 'redux-actions';
import * as actionTypes from 'actions/pricingActionTypes';

const initialState = [];
const pricingReducer = handleActions(
  {
    [actionTypes.SET_PRICING_LEVELS](state, action) {
      console.log('state', state);
      return [...action.payload];
    },
  },
  initialState,
);

export default pricingReducer;
