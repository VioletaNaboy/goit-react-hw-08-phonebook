import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { Button } from '@chakra-ui/react';
import { PhoneIcon} from '@chakra-ui/icons'
export const ContactListItem = ({id, contact}) => {
  const dispatch = useDispatch();
const handleDelete = () => dispatch(deleteContact(id));
return (
    <div>
      <PhoneIcon color='green.500' mr='3'/>
      {contact.name} : {contact.phone}
      <Button onClick={handleDelete}>Delete</Button>
    </div>
  );
};
ContactListItem.propTypes = {
  id:PropTypes.string.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
export default ContactListItem;
