import React, { Component } from 'react';
import { string, object } from 'prop-types';

import './style.css';
import history from '../../../history';

class Tile extends Component {
  handleOnClick = () => {
    const { link } = this.props;
    history.push(link);
  };

  handleMouseEnter = () => {
    console.log('enter');
  };

  handleMouseLeave = () => {
    console.log('leave');
  };

  render() {
    const { title, imageUrl } = this.props;
    console.log(`src('${imageUrl}')`);

    return (
      <div
        className="tile"
        onClick={this.handleOnClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        style={{ backgroundImage: `url('${imageUrl}')`, ...this.props.style }}
      >
        <p>{title}</p>
      </div>
    );
  }
}

Tile.propTypes = {
  title: string,
  link: string,
  imageUrl: string,
  style: object
};

export default Tile;