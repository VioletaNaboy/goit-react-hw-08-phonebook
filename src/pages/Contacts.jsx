import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";
import { selectError, selectIsLoading } from "../redux/contacts/selectors";
import { Helmet } from 'react-helmet';
export default function Contacts () {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
        <Helmet>
        <title>Your Phonebook</title>
      </Helmet>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter/>
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList
      />
    </div>
  );
};
