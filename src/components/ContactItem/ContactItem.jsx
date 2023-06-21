// import PropTypes from 'prop-types';
import css from '../Phonebook.module.css';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/thunk/contactThunk';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const { name, number, id } = contact;

  return (
    <li className={css.listItem}>
      {name}: <span className={css.number}>{number}</span>
      <button
        className={css.deleteBtn}
        onClick={() => dispatch(deleteContactThunk(id))}
      >
        X
      </button>
    </li>
  );
};

// ContactItem.propTypes = {
//   contact: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//     id: PropTypes.string.isRequired,
//   }).isRequired,
// };
