import React from 'react';
import { func } from 'prop-types';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

import './style.css';

const BackButton = ({ onClick }) => (
  <IconButton onClick={onClick}>
    <ArrowBack className="arrow-back-icon" />
  </IconButton>
);

BackButton.propTypes = {
  onClick: func
};

export default BackButton;
