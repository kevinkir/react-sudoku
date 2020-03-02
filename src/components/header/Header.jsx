import React from 'react';

import Controls from '../controls/ControlsConatiner';
import './Header.css';

export const Header = () => (
    <header>
        <h1 className='title'>Sudoku</h1>
        <Controls />
    </header>
);
