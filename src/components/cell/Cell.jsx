import React from 'react';
import PropTypes from 'prop-types';

import './Cell.css';

export const Cell = ({ disabled, onChange, value }) => (
    <input
        type='number'
        className='cell-input'
        onChange={(event) => {
            const value =
                event.target.value === '' ? undefined : Number.parseInt(event.target.value);
            onChange(value);
        }}
        value={value || ''}
        disabled={disabled}
    />
);

Cell.propTypes = {
    disabled: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.number,
};
