import React from 'react';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/contacts/selectors';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import css from './ContactsList.module.css';
import { List, ListIcon, ListItem } from '@chakra-ui/react';
import { PhoneIcon} from '@chakra-ui/icons'
export const ContactList = () => {
  const filteredContactsByName = useSelector(selectVisibleContacts)

  return (
    <List className={css.contactsList}>
      {filteredContactsByName.map(contact => (
        <ListItem>
          <ListIcon as={PhoneIcon} color='green.500' />
          <ContactListItem key={contact.id} contact={contact}/></ListItem>
        
      ))}
    </List>
  );
};

export default ContactList;
