import { API_URL } from 'app/constants';
import axios from 'axios';

export const getBlogs = async () => {
  const response = await axios.get(`${API_URL}/jwst`);

  return response.data.data;
}