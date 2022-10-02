import { API_URL } from 'app/constants';
import axios from 'axios';

export const syncData = async () => {
  const response = await axios.get(`${API_URL}/jwst/sync`);

  return response.data.data;
}