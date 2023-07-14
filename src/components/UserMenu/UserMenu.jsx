import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import { FaMailchimp, FaSignOutAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const userName = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();

  return (
    <div className={css.userMenuWrapper}>
      <div className={css.avatar}>
        <IconContext.Provider value={{ size: '3.5em' }}>
          <FaMailchimp />
        </IconContext.Provider>
      </div>
      <span className={css.userName}>{userName}</span>
      <button
        className={css.logOutBtn}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        <IconContext.Provider value={{ size: '3em' }}>
          <FaSignOutAlt />
        </IconContext.Provider>
      </button>
    </div>
  );
}
