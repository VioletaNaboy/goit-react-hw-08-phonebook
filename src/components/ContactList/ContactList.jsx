import React from 'react';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/contacts/selectors';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import css from './ContactsList.module.css';

export const ContactList = () => {
  const filteredContactsByName = useSelector(selectVisibleContacts)

  return (
    <ul className={css.contactsList}>
      {filteredContactsByName.map(contact => (
        <li key={contact.id}>
          <ContactListItem id={contact.id} contact={contact}/></li>
      ))}
    </ul>
  );
};

export default ContactList;
