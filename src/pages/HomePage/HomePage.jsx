import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import css from './HomePage.module.css';

export default function HomePage() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <span className={css.phoneIcon}>☎️</span>
      {isLoggedIn ? (
        <h1 className={css.mainMassage}>
          Create a personal PhoneBook
          <br /> and manage your contacts
        </h1>
      ) : (
        <>
          <h1 className={css.mainMassage}>Welcome in PhoneBook application!</h1>
          <p className={css.additionalText}>
            In order to get started, create a new account or log in to the app
          </p>
        </>
      )}
    </>
  );
}
