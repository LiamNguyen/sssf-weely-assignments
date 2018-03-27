import React, { Component } from 'react';
import { func, object, string } from 'prop-types';
import { zoomIn, zoomOut } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

import './style.css';

const zoomInAnimationStyle = {
  zoomIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(zoomIn, 'zoomIn')
  }
};

const zoomOutAnimationStyle = {
  zoomOut: {
    animation: 'x 1s',
    animationName: Radium.keyframes(zoomOut, 'zoomOut')
  }
};

class IconButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animationStyle: {},
      iconAnimationStyle: {}
    };
  }

  handleOnClick = () => {
    const { onClick, animationStyle } = this.props;

    if (!onClick) return;

    this.setState({ iconAnimationStyle: zoomInAnimationStyle.zoomIn });

    if (animationStyle) {
      this.setState({ animationStyle });
      // Delay for animation
      setTimeout(() => {
        this.setState({
          animationStyle: {},
          iconAnimationStyle: zoomOutAnimationStyle.zoomOut
        });
        setTimeout(() => {
          onClick();
        }, 500);
      }, 1000);
    } else {
      onClick();
    }
  };

  render() {
    const { type, style, iconSrc } = this.props;

    return (
      <button
        type={type}
        className="icon-button"
        style={{ ...style, ...this.state.animationStyle }}
        onClick={this.handleOnClick}
      >
        <StyleRoot>
          <img
            src={iconSrc}
            width="30px"
            alt="icon"
            style={this.state.iconAnimationStyle}
          />
        </StyleRoot>
      </button>
    );
  }
}

IconButton.defaultProps = {
  type: 'button',
  style: {},
  animationStyle: null,
  onClick: null
};

IconButton.propTypes = {
  type: string,
  onClick: func,
  style: object,
  iconSrc: string.isRequired,
  animationStyle: object
};

export default IconButton;
