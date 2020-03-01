import React from 'react';
import PropTypes from 'prop-types';

export const Cell = ({ onChange, value }) => (
  <div className='cell-container'>
    <input
      type='number'
      className='cell-input'
      onChange={(event) => {
        onChange(event.target.value);
      }}
      value={value}
    />
  </div>
);

Cell.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};
