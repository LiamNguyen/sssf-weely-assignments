import React, {Component} from 'react';
import _ from 'lodash';
import PlusIcon from 'mdi-react/PlusIcon';
import { object } from 'prop-types';
import Draggable from 'react-draggable';

import './style.css';
import ImageTile from '../common/ImageTile';
import ImageModal from '../common/ImageModal';
import FetchHelper from '../../lib/FetchHelper';
import WeekOnePresenter from '../../presenters/WeekOnePresenter';
import ToolBox from '../common/ToolBox';
import FloatingButton from '../common/FloatingButton';
import RoutePathConstants from '../../constants/RoutePathConstants';

const { addImage } = RoutePathConstants;

class HomePage extends Component {
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
      .then(images => {
        this.setState({
          images,
          categoryList: WeekOnePresenter.getCategories(images)
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
    this.setState({shouldModalShow: false});
  };

  handleChangeCategory = e => {
    const selectedCategory = e.target.value;
    if (selectedCategory === 'all') {
      this.setState({filteredImages: []});
    }
    const {images} = this.state;
    const filteredImages = images
      .filter(image => image.category === selectedCategory);
    this.setState({filteredImages});
  };

  handleAddImageOnClick = () => {
    this.props.history.push(`/${addImage}`);
  };

  render() {
    const {
      images,
      filteredImages,
      modalProps: {title = '', url: imageUrl = ''}
    } = this.state;

    const imagesToDisplay = _.isEmpty(filteredImages) ? images : filteredImages;

    return (
      <div>
        <div className="home">
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
        <Draggable
          axis="x"
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
          grid={[25, 25]}
        >
          <FloatingButton
            onClick={this.handleAddImageOnClick}
            icon={
              <PlusIcon style={{ fill: 'white' }} />
            }
          />
        </Draggable>
      </div>
    );
  }
}

HomePage.defaultProps = {
  history: null
};

HomePage.propTypes = {
  history: object
};

export default HomePage;
