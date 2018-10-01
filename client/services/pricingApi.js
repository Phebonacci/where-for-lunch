import axios from 'axios';
import { PRICING_API_PATH } from 'constants/apiPaths';

export const getPricingLevels = () => {
  return axios.get(`${PRICING_API_PATH}/levels`).then(({ data }) => data);
};
