import { handleActions } from 'redux-actions';
import * as actionTypes from 'actions/pricingActionTypes';

const initialState = {
  pricingLevels: [],
};
const pricingReducer = handleActions(
  {
    [actionTypes.SET_PRICING_LEVELS](state, action) {
      return { ...state, ...action.payload };
    },
  },
  initialState,
);

export default pricingReducer;
