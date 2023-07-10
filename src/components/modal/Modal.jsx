import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';


export default class Modal extends Component {
  static propTypes = {
    selectedImage: PropTypes.string,
    tags: PropTypes.string,
    onClose: PropTypes.func,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keydown', this.handleBackdropClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keydown', this.handleBackdropClick);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };
  render() {
    const { selectedImage, tags } = this.props;

    return (
      <div className={css.Overlay} onClick={this.handleBackdropClick}>
        <div>
          <img src={selectedImage} alt={tags} className={css.Modal} />
        </div>
      </div>
    );
  }
}
