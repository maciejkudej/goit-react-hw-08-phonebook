import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { contactFilter } from 'redux/slices/filterSlice';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import * as contactsOperations from '../../redux/contactsOperation';

import css from './App.module.css';

export default function App() {
  const contacts = useSelector(state => state.contacts.entities);
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const addContact = ({ name, phone }) => {
    if (
      contacts.find(contact => {
        return contact.name === name;
      })
    ) {
      return alert(`${name} is already in contacts`);
    }
    const contact = {
      name,
      phone,
    };
    dispatch(contactsOperations.addContact(contact));
  };

  const filterChange = e => {
    dispatch(contactFilter(e.currentTarget.value));
  };

  const filterContact = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filterChange} />
      <ContactList filter={filterContact} />
    </div>
  );
}
