import React from 'react';
import { hot } from 'react-hot-loader';

import { Header } from './header/Header';
import Grid from './grid/GridContainer';
import { GRID_WIDTH } from '../constants';
import './App.css';

export const App = hot(module)(() => {
    return (
        <div className='app-container'>
            <Header />
            <Grid size={GRID_WIDTH} />
        </div>
    );
});
