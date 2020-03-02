import { actionNames } from '../actions/action-names';
import { createGrid } from '../helpers/grid';
import { GRID_WIDTH } from '../constants';

function updateCell(rows, cell, value) {
    return rows.map((row, rowIndex) => {
        const updatedRow = [...row];
        if (rowIndex === cell.row) {
            updatedRow[cell.col] = value;
        }
        return updatedRow;
    });
}

function setStartingValues(startingValues) {
    const grid = createGrid(GRID_WIDTH);
    startingValues.forEach(({ row, col, value }) => {
        grid[row][col] = value;
    });
    return grid;
}

export function gridReducer(state = setStartingValues([]), action) {
    switch (action.type) {
        case actionNames.NEW_GAME:
            return setStartingValues(action.startingValues);
        case actionNames.UPDATE_CELL:
            return updateCell(state, action.cell, action.value);
        default:
            return state;
    }
}
