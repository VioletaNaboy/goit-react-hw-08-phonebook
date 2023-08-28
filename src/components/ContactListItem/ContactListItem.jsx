import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { Button } from '@chakra-ui/react';
export const ContactListItem = ({contact}) => {
  const dispatch = useDispatch();
const handleDelete = () => dispatch(deleteContact(contact.id));
return (
    <li>
      {contact.name} : {contact.phone}
      <Button onClick={handleDelete}>Delete</Button>
    </li>
  );
};
ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
export default ContactListItem;
