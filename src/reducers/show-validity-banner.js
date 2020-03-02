import { actionNames } from '../actions/action-names';

export function showValidityBannerReducer(state = false, action) {
    switch (action.type) {
        case actionNames.NEW_GAME:
        case actionNames.UPDATE_CELL:
        case actionNames.HIDE_VALIDITY_BANNER:
            return false;
        case actionNames.SHOW_VALIDITY_BANNER:
            return true;
        default:
            return state;
    }
}
