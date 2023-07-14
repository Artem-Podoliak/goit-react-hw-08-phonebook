import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <div className={css.appNav}>
      <NavLink className={css.appNavLink} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.appNavLink} to="/contacts">
          Contacts
        </NavLink>
      )}
    </div>
  );
}
