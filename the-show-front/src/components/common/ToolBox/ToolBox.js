import React from 'react';
import { array, func } from 'prop-types';

import CustomSelect from '../CustomSelect';

const ToolBox = ({
  categories,
  onCategoryChange
}) => (
  <div className="toolbox">
    <CustomSelect
      options={categories}
      defaultOption="All categories"
      onChange={onCategoryChange}
      customStyle={{ width: 'auto' }}
    />
  </div>
);

ToolBox.propTypes = {
  categories: array.isRequired,
  onCategoryChange: func.isRequired
};

export default ToolBox;

