import React, { Component } from 'react';
import { object } from 'prop-types';
import { Row } from 'react-bootstrap';
import _ from 'lodash';

import './style.css';
import MUInput from '../common/MUInput';
import Locale from './Locale';
import IconButton from '../common/IconButton';
import OkIcon from '../../assets/images/okIcon.png';
import FetchHelper from '../../lib/FetchHelper';
import BackButton from '../common/BackButton';
import RoutePathConstants from '../../constants/RoutePathConstants';
import GoogleMapCustom from '../common/GoogleMapCustom';

const { home } = RoutePathConstants;

class AddImagePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: '',
      description: '',
      file: null,
      previewImageSrc: null,
      map: {
        zoom: 15,
        latitude: 60.220803,
        longitude: 24.805207
      }
    };
  }

  handleFormSubmit = e => {
    e.preventDefault();

    const data = new FormData();
    data.append('file', this.state.file);
    data.append('filename', this.state.file.name);

    FetchHelper.uploadImageFile(data);
  };

  handleTitleChange = e => {
    const title = e.target.value;

    this.setState({ title });
  };

  handleCategoryChange = e => {
    const category = e.target.value;

    this.setState({ category });
  };

  handleDescriptionChange = e => {
    const description = e.target.value;

    this.setState({ description });
  };

  handleChosenFileChange = e => {
    const input = e.target;

    if (input.files && input.files[0]) {
      const reader = new FileReader();

      reader.onload = event => {
        this.setState({
          file: input.files[0],
          previewImageSrc: event.target.result
        });
      };

      reader.readAsDataURL(input.files[0]);
    }
  };

  handleBackButtonClick = () => {
    this.props.history.push(`/${home}`);
  };

  handleMapMounted = ref => {
    this.map = ref;
  };

  handleMapMarkerChange = e => {
    const mapConfig = _.cloneDeep(this.state.map);
    _.set(mapConfig, 'latitude', e.latLng.lat());
    _.set(mapConfig, 'longitude', e.latLng.lng());
    this.setState({ map: mapConfig });
  };

  handleMapZoomChange = () => {
    const mapConfig = _.cloneDeep(this.state.map);
    _.set(mapConfig, 'zoom', this.map.getZoom());
    this.setState({ map: mapConfig });
  };

  render() {
    const { zoom, latitude, longitude } = this.state.map;

    return (
      <div className="add-image-page">
        <div className="back-button-container">
          <BackButton onClick={this.handleBackButtonClick} />
        </div>
        <form onSubmit={this.handleFormSubmit}>
          <MUInput
            value={this.state.title}
            type="text"
            placeholder={Locale.placeholders.title}
            autoFocus
            onChange={this.handleTitleChange}
          />
          <MUInput
            value={this.state.category}
            type="text"
            placeholder={Locale.placeholders.category}
            onChange={this.handleCategoryChange}
          />
          <MUInput
            value={this.state.description}
            type="text"
            componentClass="textarea"
            placeholder={Locale.placeholders.description}
            onChange={this.handleDescriptionChange}
            rows={3}
            cols={77}
            maxLength={540}
          />
          <input type="file" onChange={this.handleChosenFileChange} />
          {this.state.previewImageSrc &&
            <img
              className="preview-image"
              src={this.state.previewImageSrc}
              alt="Preview"
            />}
          <Row className="button-container">
            <IconButton
              type="submit"
              iconSrc={OkIcon}
            />
          </Row>
        </form>
        <div className="map-container">
          <GoogleMapCustom
            zoom={zoom}
            latitude={latitude}
            longitude={longitude}
            onMounted={this.handleMapMounted}
            onMarkerChange={this.handleMapMarkerChange}
            onZoomChange={this.handleMapZoomChange}
          />
        </div>
      </div>
    );
  }
}

AddImagePage.defaultProps = {
  history: null
};

AddImagePage.propTypes = {
  history: object
};

export default AddImagePage;
