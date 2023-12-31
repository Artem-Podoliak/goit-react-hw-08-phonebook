import PropTypes from 'prop-types';
import css from './Container.module.css';

export default function Container({ children }) {
  return <div className={css.appWrapper}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
