import { combineReducers } from 'redux';

import { editableReducer } from './editable';
import { gridReducer } from './grid';

export const rootReducer = combineReducers({
    editable: editableReducer,
    grid: gridReducer,
});
