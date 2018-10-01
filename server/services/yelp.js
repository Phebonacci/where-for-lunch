import axios from 'axios';

const YELP_API_URL = 'https://api.yelp.com/v3';

const authedAxios = axios.create({
  baseURL: YELP_API_URL,
  headers: { Authorization: `Bearer ${process.env.YELP_API_KEY}` },
});

export async function searchPlaces(params) {
  try {
    const { data } = await authedAxios.get('/businesses/search', { params });
    return data.businesses;
  } catch (e) {
    console.log('search failed!', e);
  }
}

export function getPricingLevels() {
  return [
    {
      key: '$',
      value: 1,
    },
    {
      key: '$$',
      value: 2,
    },
    {
      key: '$$$',
      value: 3,
    },
    {
      key: '$$$$',
      value: 4,
    },
  ];
}
