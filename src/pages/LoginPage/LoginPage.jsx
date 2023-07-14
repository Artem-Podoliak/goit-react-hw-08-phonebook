import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import css from './LoginPage.module.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const onInputChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const formReset = () => {
    setEmail('');
    setPassword('');
  };

  const onFormSubmit = evt => {
    evt.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    formReset();
  };

  return (
    <div className={css.formWrapper}>
      <h1 className={css.formTitle}>Log in to application</h1>

      <form
        className={css.logInForm}
        onSubmit={onFormSubmit}
        autoComplete="off"
      >
        <label className={css.formInputLabel} htmlFor={emailInputId}>
          E-mail
          <input
            className={css.formInput}
            type="email"
            name="email"
            placeholder="Enter e-mail"
            value={email}
            onChange={onInputChange}
            id={emailInputId}
            required
          />
        </label>

        <label className={css.formInputLabel} htmlFor={passwordInputId}>
          Password
          <input
            className={css.formInput}
            type="password"
            name="password"
            placeholder="Enter password"
            value={password}
            onChange={onInputChange}
            id={passwordInputId}
            required
          />
        </label>

        <button className={css.formSubmitBtn} type="submit">
          Log in
        </button>
      </form>
    </div>
  );
}
