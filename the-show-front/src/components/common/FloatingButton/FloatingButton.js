import React, { Component } from 'react';
import { func, string, any } from 'prop-types';

import './style.css';

const descriptionStyle = {
  visible: {
    visibility: 'visible',
    opacity: 1
  },
  hidden: {
    visibility: 'hidden',
    opacity: 0
  }
};

class FloatingButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      descriptionStyle: descriptionStyle.hidden
    };
  }

  handleMouseEnter = () => {
    this.setState({ descriptionStyle: descriptionStyle.visible });
  };

  handleMouseLeave = () => {
    this.setState({ descriptionStyle: descriptionStyle.hidden });
  };

  render() {
    const { description, icon } = this.props;
    return (
      <div>
        <div
          className="floating-button"
          onClick={this.props.onClick}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          {icon}
        </div>
        {description &&
          <span
            className="floating-description"
            style={this.state.descriptionStyle}
          >
            {description}
          </span>}
      </div>
    );
  }
}

FloatingButton.defaultProps = {
  description: null
};

FloatingButton.propTypes = {
  onClick: func.isRequired,
  description: string,
  icon: any.isRequired
};

export default FloatingButton;
