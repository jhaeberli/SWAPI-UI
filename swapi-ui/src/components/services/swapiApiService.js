import axios from 'axios';
import { api } from '../../utils/constants';

export async function getPlanets(params) {

  const url = `${api.url}${api.methods.planets}`;

  try {
    const response = await axios.get(url, { params });
    return response.status === 400 ? [] : response.data.results;
  }
  catch (error) {
    console.log(error);
    return [];
  }
}
