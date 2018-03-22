import React from 'react';
import { func, array, string, object } from 'prop-types';

const CustomSelect = ({
  options,
  defaultOption,
  optionValue,
  optionDisplayName,
  onChange,
  customStyle = {}
}) => (
  <select
    className="form-control"
    onChange={onChange}
    style={customStyle}
  >
    {defaultOption &&
      <option value="all">
        {defaultOption}
      </option>}
    {options.map(option => (
      <option
        // If option value is undefined, it is not an array of objects
        value={optionValue ? option[optionValue] : option}
        key={option}
      >
        {optionValue ? option[optionDisplayName] : option}
      </option>
      ))}
  </select>
);

CustomSelect.defaultProps = {
  optionValue: null,
  optionDisplayName: null,
  customStyle: {}
};

CustomSelect.propTypes = {
  options: array.isRequired,
  defaultOption: string.isRequired,
  optionValue: string,
  optionDisplayName: string,
  onChange: func.isRequired,
  customStyle: object
};

export default CustomSelect;

