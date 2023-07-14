import { FaTrashAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useDeleteContactMutation } from './../../redux/services/phoneBookApi';
import {
  showSuccessMessage,
  showErrorMessage,
} from '../../utils/notifications';
import css from './ContactItem.module.css';

export default function ContactItem({ id, name, number }) {
  const [deleteContact] = useDeleteContactMutation();

  const onContactDelete = async (contactId, contactName) => {
    try {
      await deleteContact(contactId);
      showSuccessMessage(
        `"${contactName}" has been deleted from your phonebook`
      );
    } catch (error) {
      console.log(error.message);
      showErrorMessage(
        `Something goes wrong, "${contactName}" was not deleted`
      );
    }
  };
  console.log(number);
  return (
    <div className={css.contactItemWrapper}>
      <p className={css.contactItemName}>{name}</p>
      <a className={css.contactItemNum} href={`tel:${number}`}>
        {number}
      </a>

      <button
        className={css.deleteBtn}
        type="button"
        onClick={() => onContactDelete(id, name)}
        aria-label="Delete contact"
      >
        <IconContext.Provider value={{ size: '2em' }}>
          <FaTrashAlt />
        </IconContext.Provider>
      </button>
    </div>
  );
}
