import axios from 'axios';

axios.defaults.baseURL = 'https://64afb391c60b8f941af4705c.mockapi.io/';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}

export async function addContact(data) {
  const { data: result } = await axios.post(`/contacts/`, data);
  return result;
}
