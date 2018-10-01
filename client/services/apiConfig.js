import axios from 'axios';

export default function configure() {
  axios.defaults.baseURL = 'http://localhost:3001';
  axios.defaults.headers.common = {
    Accept: 'application/json, application/xml, text/play, text/html, *.*',
    'Content-Type': 'application/json',
  };
}
