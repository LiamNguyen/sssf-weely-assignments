import React, { Component } from 'react';
import { string } from 'prop-types';

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
        style={{ backgroundImage: `url('${imageUrl}')` }}
      >
        <p>{title}</p>
      </div>
    );
  }
}

Tile.propTypes = {
  title: string,
  link: string,
  imageUrl: string
};

export default Tile;