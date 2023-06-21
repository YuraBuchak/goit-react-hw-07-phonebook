import { useSelector } from 'react-redux';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './Phonebook.module.css';
import { fetchContacts } from 'api/api';
import { selectError, selectIsLoading } from 'redux/selectors';

export const App = () => {
  fetchContacts();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      {isLoading && !error && <p>Request in progress...</p>}
      <AddContactForm />
      <h2 className={css.titleFilter}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
