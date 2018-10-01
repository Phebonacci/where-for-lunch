import axios from 'axios';
import { PLACES_API_PATH } from 'constants/apiPaths';

export const getPlaceIds = (params) => {
  return axios.get(`${PLACES_API_PATH}/`, {
    params,
  }).then(({ data }) => data);
};

export const getPlaceDetails = (id) => {
  return axios.get(`${PLACES_API_PATH}/${id}`).then(({ data }) => data);
};
