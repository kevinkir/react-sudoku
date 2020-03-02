import { actionNames } from './action-names';

export function hideValidityBanner() {
    return { type: actionNames.HIDE_VALIDITY_BANNER };
}

export function showValidityBanner() {
    return { type: actionNames.SHOW_VALIDITY_BANNER };
}
