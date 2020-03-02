import React from 'react';

import Controls from '../controls/ControlsConatiner';
import ValidityBanner from '../validity-banner/ValidityBannerContainer';
import './Header.css';

export const Header = () => (
    <header>
        <ValidityBanner />
        <h1 className='title'>Sudoku</h1>
        <Controls />
    </header>
);
