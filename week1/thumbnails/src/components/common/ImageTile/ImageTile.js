import React from 'react';
import { func, string, number } from 'prop-types';

import './style.css';
import NotFoundImage from '../../../assets/images/404.jpg';
import IconButton from '../IconButton';
import StarStruckIcon from '../../../assets/images/startStruckIcon.png';

const ImageTile = ({
  id,
  imageUrl = NotFoundImage,
  title,
  detail,
  onViewClick
}) => {
  const handleViewClick = () => {
    onViewClick(id);
  };

  return (
    <div
      className="image-tile"
      onMouseEnter={this.handleMouseEnter}
      onMouseLeave={this.handleMouseLeave}
    >
      <div className="image-tile-header">
        <img src={imageUrl} alt={title} width="300" height="180" />
      </div>
      <div className="image-tile-body">
        <h3>{title}</h3>
        <p>{detail}</p>
      </div>
      <div className="image-tile-footer">
        <IconButton
          onClick={handleViewClick}
          iconSrc={StarStruckIcon}
          animationStyle={{ backgroundColor: '#4CAF50' }}
        />
      </div>
    </div>
  );
};

ImageTile.defaultProps = {
  detail: ''
};

ImageTile.propTypes = {
  id: number.isRequired,
  imageUrl: string.isRequired,
  title: string.isRequired,
  detail: string,
  onViewClick: func.isRequired
};

export default ImageTile;
