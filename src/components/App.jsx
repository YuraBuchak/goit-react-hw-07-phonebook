import { AddContactForm } from './AddContactForm/AddContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './Phonebook.module.css';

import { selectError, selectIsLoading } from 'redux/selectors';
import { ClockLoader } from 'react-spinners';
import { useSelector } from 'react-redux';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>

      <AddContactForm />
      <h2 className={css.titleFilter}>
        {isLoading && !error ? (
          <ClockLoader className="spiner" color="#8a2be2" size={40} />
        ) : (
          ' Contacts'
        )}
      </h2>
      <Filter />
      <ContactList />
    </div>
  );
};
