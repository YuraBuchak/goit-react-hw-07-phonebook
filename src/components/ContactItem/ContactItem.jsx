import css from '../Phonebook.module.css';
import { useDispatch } from 'react-redux';
import { deleteContactThunk, getContactsThunk } from 'redux/thunk/contactThunk';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const { name, number, id } = contact;

  const deleteUpdateContacts = async () => {
    await dispatch(deleteContactThunk(id));
    await dispatch(getContactsThunk());
  };

  return (
    <li className={css.listItem}>
      {name}: <span className={css.number}>{number}</span>
      <button
        className={css.deleteBtn}
        onClick={() => dispatch(deleteUpdateContacts)}
      >
        X
      </button>
    </li>
  );
};
