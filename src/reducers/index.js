import { combineReducers } from 'redux';

import { disabledCells } from './grid';
import { grid } from './grid';

export const rootReducer = combineReducers({
  disabledCells,
  grid,
});
