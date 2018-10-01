import {
  SET_LAT_LNG,
} from 'actions/conditionActionTypes';
import {
  FETCH_PRICING_LEVELS,
} from 'actions/pricingActionTypes';

export function fetchLatLng(store) {
  navigator.geolocation.getCurrentPosition((position) => {
    store.dispatch({
      type: SET_LAT_LNG,
      payload: position.coords,
    });
  }, (err) => {
    console.log('give it to me! ', err);
  });
}

export function fetchPricingLevels(store) {
  store.dispatch({
    type: FETCH_PRICING_LEVELS,
  });
}
