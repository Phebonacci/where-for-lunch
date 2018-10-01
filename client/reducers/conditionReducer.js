import { handleActions } from 'redux-actions';
import * as actionTypes from 'actions/conditionActionTypes';

const initialState = {
  radius: 500,
  isLocationAvailable: false,
  price: '',
};

const getPriceSeparator = (currentPrice) => {
  return currentPrice ? ',' : '';
};

const removePriceFromState = (state, price) => {
  return state.price.split(',').reduce((accum, value) => {
    const isPayload = value === price;
    return isPayload ? accum : `${accum}${getPriceSeparator(accum)}${value}`;
  }, '');
};

export const setPriceSelection = function (state, action) {
  if (!state.price) return { ...state, price: action.payload };
  const payloadExists = state.price.includes(action.payload);
  const price = !payloadExists ?
    state.price.concat(`${getPriceSeparator(state.price)}${action.payload}`) :
    removePriceFromState(state, action.payload);
  return { ...state, price };
};

const conditionReducer = handleActions(
  {
    [actionTypes.SET_RADIUS](state, action) {
      return { ...state, radius: action.payload };
    },
    [actionTypes.SET_LAT_LNG](state, action) {
      const { latitude, longitude } = action.payload;
      const isLocationAvailable = typeof latitude !== 'undefined';
      return { ...state, latitude, longitude, isLocationAvailable };
    },
    [actionTypes.SET_PRICE_SELECTION]: setPriceSelection,
  },
  initialState,
);

export default conditionReducer;
