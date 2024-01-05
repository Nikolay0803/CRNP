// axiosRequest.js
import axios from 'axios';

axios.defaults.baseURL = 'https://russianwarship.rip/api/v2';

export const axiosRequest = async ({
  method = 'GET',
  url,
  params = {},
  responseType = 'json',
  data = undefined,
  headers = {
    'Content-Type': 'application/json',
  },
}) => {
  try {
    const response = await axios({
      method,
      url,
      baseURL: axios.defaults.baseURL,
      params,
      responseType,
      data,
      headers,
    });

    return response;
  } catch (error) {
    console.error('Axios Request Error:', error);
    throw error;
  }
};
