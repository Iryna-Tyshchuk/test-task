import axios from 'axios';

axios.defaults.baseURL = 'https://6414c46d8dade07073c88c9f.mockapi.io/api';

export async function getUsers() {
  const { data } = await axios.get(`/users`);
  return data;
}

export const postUser = async updatedUser => {
  const { data } = await axios.post('/users', updatedUser);
  return data;
};
