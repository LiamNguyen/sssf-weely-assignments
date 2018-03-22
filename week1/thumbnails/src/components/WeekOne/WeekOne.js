import React, { Component } from 'react';
import _ from 'lodash';

import './style.css';
import ImageTile from '../common/ImageTile';
import ImageModal from '../common/ImageModal';
import FetchHelper from '../../lib/FetchHelper';
import WeekOnePresenter from '../../presenters/WeekOnePresenter';
import ToolBox from '../common/ToolBox';

class WeekOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldModalShow: false,
      modalProps: {},
      images: [],
      filteredImages: [],
      categoryList: []
    };
  }

  componentWillMount() {
    FetchHelper.fetchWeekOneImages()
      .then(imageFile => {
        this.setState({
          images: imageFile.content,
          categoryList: WeekOnePresenter.getCategories(imageFile.content)
        });
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

  handleChangeCategory = e => {
    const selectedCategory = e.target.value;
    if (selectedCategory === 'all') {
      this.setState({ filteredImages: [] });
    }
    const { images } = this.state;
    const filteredImages = images.filter(image => image.category === selectedCategory);
    this.setState({ filteredImages });
  };

  render() {
    const {
      images,
      filteredImages,
      modalProps: { title = '', url: imageUrl = '' }
    } = this.state;

    const imagesToDisplay = _.isEmpty(filteredImages) ? images : filteredImages;

    return (
      <div>
        <div className="week-one">
          <ToolBox
            categories={this.state.categoryList}
            onCategoryChange={this.handleChangeCategory}
          />
          {imagesToDisplay.map(image =>
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
