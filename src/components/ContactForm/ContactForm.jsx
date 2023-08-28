import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import css from './ContactsForm.module.css';
import { selectContacts } from '../../redux/contacts/selectors'; 
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts); 
  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.phone.value;
    const existingContact = contacts.find(contact => contact.name === name);
    if (existingContact) { 
      alert(`${name} is already in contacts.`);
            } else {
              dispatch(addContact({ name, number }))
          }
e.target.reset();}
return (
    <form className={css.formContact} onSubmit={handleSubmit} >
      <FormLabel htmlFor="name">
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Za-яА-Я]+(([' \-][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>
      <FormLabel htmlFor="phone">
        Number
        <Input
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[.\-\s]?\(?\d{1,3}?\)?[.\-\s]?\d{1,4}[.\-\s]?\d{1,4}[.\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </FormLabel>
      <Button type="submit" mt="8">Add Contact</Button>
    </form>
  );
};
export default ContactForm;
