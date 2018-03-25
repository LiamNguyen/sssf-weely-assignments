import React, {Component} from 'react';

import './style.css';
import Tile from '../common/Tile';
import TileList from './TileList';

class Home extends Component {
  render() {
    return (
      <div className="home">
        {TileList.map((tile, key) => (
          <Tile
            key={key}
            title={tile.title}
            link={tile.link}
            imageUrl={tile.imageUrl}
            style={tile.customStyle}
          />
        ))}
      </div>
    );
  }
}

export default Home;