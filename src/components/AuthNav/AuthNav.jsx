import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <nav className={css.authNavList}>
      <NavLink className={css.authNavLink} to="/login">
        Log In
      </NavLink>
      <NavLink className={css.authNavLink} to="/register">
        Sing Up
      </NavLink>
    </nav>
  );
}
