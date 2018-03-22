import React, { Component } from 'react';
import _ from 'lodash';

import './style.css';
import ImageTile from '../common/ImageTile';
import ImageModal from '../common/ImageModal';
import FetchHelper from '../../lib/FetchHelper';

class WeekOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldModalShow: false,
      modalProps: {},
      images: []
    };
  }

  componentWillMount() {
    FetchHelper.fetchWeekOneImages()
      .then(imageFile => {
        this.setState({ images: imageFile.content });
      });
  }

  handleViewImage = id => {
    const selectedImage = this.state.images.find(image => image.id === id);
    this.setState({
      modalProps: _.pick(selectedImage, ['title', 'url']),
      shouldModalShow: true
    });
  };

  handleHideModal = () => {
    this.setState({ shouldModalShow: false });
  };

  render() {
    const {
      images,
      modalProps: { title = '', url: imageUrl = '' }
    } = this.state;

    return (
      <div>
        <div className="week-one">
          {images.map(image =>
            (<ImageTile
              key={image.id}
              id={image.id}
              imageUrl={image.url}
              title={image.title}
              detail={image.details}
              onClick={this.handleViewImage}
              onViewClick={this.handleViewImage}
            />))}
        </div>
        <ImageModal
          onHide={this.handleHideModal}
          show={this.state.shouldModalShow}
          title={title}
          imageUrl={imageUrl}
        />
      </div>
    );
  }
}

export default WeekOne;
