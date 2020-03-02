import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Controls.css';

export const Controls = ({ validate, newGame }) => {
    const [level, setLevel] = useState(1);
    return (
        <span className='controls-container'>
            <div>
                <label>Level</label>
                <select
                    className='level-dropdown'
                    type='dropdown'
                    value={level}
                    onChange={(event) => setLevel(event.target.value)}
                >
                    <option value={1}>easy</option>
                    <option value={2}>medium</option>
                    <option value={3}>hard</option>
                </select>
                <button className='new-game-button' onClick={() => newGame(level)}>
                    New game
                </button>
                <button className='check-button' onClick={validate}>
                    Check
                </button>
            </div>
        </span>
    );
};

Controls.propTypes = {
    validate: PropTypes.func.isRequired,
    newGame: PropTypes.func.isRequired,
};
