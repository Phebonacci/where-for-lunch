import { createActions } from 'redux-actions';
import * as pricingActionTypes from './pricingActionTypes';

const actionTypes = createActions({}, ...Object.values(pricingActionTypes));
export default actionTypes;
