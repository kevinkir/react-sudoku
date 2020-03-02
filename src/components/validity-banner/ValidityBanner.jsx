import React from 'react';
import PropTypes from 'prop-types';

import './ValidityBanner.css';

export const ValidityBanner = ({ hide, isValid, isVisible }) => {
    let containerClass = `validity-banner ${isValid ? 'valid' : 'invalid'}`;
    if (!isVisible) {
        containerClass += ' hidden';
    }
    return (
        <div className={containerClass}>
            {isValid ? 'Success!' : 'Incorrect!'}
            <button className='close-button' onClick={() => hide()}>
                X
            </button>
        </div>
    );
};

ValidityBanner.propTypes = {
    hide: PropTypes.func.isRequired,
    isValid: PropTypes.bool.isRequired,
    isVisible: PropTypes.bool.isRequired,
};
