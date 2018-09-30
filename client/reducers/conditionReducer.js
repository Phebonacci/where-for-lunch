import { handleActions } from 'redux-actions';
import * as actionTypes from 'actions/conditionActionTypes';

const initialState = {
  radius: 500,
  isLocationAvailable: false,
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
  },
  initialState,
);

export default conditionReducer;
