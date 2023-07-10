import PropTypes from 'prop-types';
import css from './button.module.css'

export default function LoadMoreButton({ onClick }) {
  return (
    <button type="button" onClick={onClick} className={css.Button}>
      Load more
    </button>
  );
}

LoadMoreButton.propTypes = {
  onClick: PropTypes.func,
};
