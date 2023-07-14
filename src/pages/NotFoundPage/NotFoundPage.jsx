import css from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <div className={css.notFoundWrapper}>
      <h1 className={css.notFoundMessage}>404 Page not found 📞</h1>
      <button className={css.linkButton} to="/">
        Main page
      </button>
    </div>
  );
}
