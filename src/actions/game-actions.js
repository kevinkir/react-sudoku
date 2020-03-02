import { actionNames } from './action-names';

export function newGame(startingValues) {
    return {
        type: actionNames.NEW_GAME,
        startingValues,
    };
}

export function setLevel(level) {
    return {
        type: actionNames.SET_LEVEL,
        level,
    };
}
