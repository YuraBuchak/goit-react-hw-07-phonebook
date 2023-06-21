import axios from 'axios';

axios.defaults.baseURL = 'https://649012571e6aa71680ca7dc5.mockapi.io';

export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts');
  console.log(data);
  return data;
};

export const addContact = async ({ name, number }) => {
  const { data } = await axios.post('/contacts', { name, number });
  console.log(data);
  return data;
};
