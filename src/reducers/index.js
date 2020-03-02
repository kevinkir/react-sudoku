import { combineReducers } from 'redux';

import { editableReducer } from './editable';
import { gridReducer } from './grid';
import { showValidityBannerReducer } from './show-validity-banner';

export const rootReducer = combineReducers({
    editable: editableReducer,
    grid: gridReducer,
    showValidityBanner: showValidityBannerReducer,
});
