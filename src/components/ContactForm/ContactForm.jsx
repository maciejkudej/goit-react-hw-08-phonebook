import { useState } from 'react';

import css from './ContactForm.module.css';

export default function ContactForm({ addContact }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const formNameChange = e => {
    setName(e.currentTarget.value);
  };

  const formNumberChange = e => {
    setPhone(e.currentTarget.value);
  };

  const formSubmit = e => {
    e.preventDefault();
    addContact({ name, phone });
    e.currentTarget.reset();
  };

  return (
    <div className={css.container}>
      <form onSubmit={formSubmit}>
        <p className={css.title}>Name</p>
        <input
          className={css.input}
          placeholder="Jacob Mercer"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={formNameChange}
        />
        <p className={css.title}>Number</p>
        <input
          className={css.input}
          placeholder=" 257-42-21"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={formNumberChange}
        />
        <button type="submit" className={css.button__submit}>
          Add contact
        </button>
      </form>
    </div>
  );
}
