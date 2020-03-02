import { actionNames } from '../actions/action-names';
import { createGrid } from '../helpers/grid';
import { GRID_WIDTH } from '../constants';

function setStartingValues(startingValues) {
    const editable = createGrid(GRID_WIDTH, true);

    startingValues.forEach(({ row, col }) => {
        editable[row][col] = false;
    });

    return editable;
}

export function editableReducer(state = setStartingValues([]), action) {
    switch (action.type) {
        case actionNames.NEW_GAME:
            return setStartingValues(action.startingValues);
        default:
            return state;
    }
}
