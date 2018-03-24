import React, { Component } from 'react';
import { bool, func, string } from 'prop-types';
import { Modal } from 'react-bootstrap';

import './style.css';
import IconButton from '../IconButton';
import OkIcon from '../../../assets/images/okIcon.png';

class ImageModal extends Component {
  render() {
    const {
      show,
      onHide,
      title,
      imageUrl
    } = this.props;

    return (
      <Modal
        show={show}
        onHide={onHide}
        dialogClassName="image-modal"
      >
        <Modal.Header closeButton>
          <h4>{title}</h4>
        </Modal.Header>
        <Modal.Body>
          <img src={imageUrl} alt={title} />
        </Modal.Body>
        <Modal.Footer>
          <IconButton
            onClick={onHide}
            iconSrc={OkIcon}
          />
        </Modal.Footer>
      </Modal>
    );
  }
}

ImageModal.propTypes = {
  show: bool.isRequired,
  onHide: func.isRequired,
  title: string.isRequired,
  imageUrl: string.isRequired
};

export default ImageModal;
