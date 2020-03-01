import React from 'react';
import { hot } from 'react-hot-loader';

import './App.css';

export const App = hot(module)(() => {
    return (
        <div className='App'>
            <h1> Hello, World! </h1>
        </div>
    );
});
