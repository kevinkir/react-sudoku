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
    const values = createGrid(GRID_WIDTH);
    const editable = createGrid(GRID_WIDTH, true);

    startingValues.forEach(({ row, col, value }) => {
        values[row][col] = value;
        editable[row][col] = false;
    });

    return { editable, values };
}

export function grid(state = setStartingValues([]), action) {
    switch (action.type) {
        case actionNames.SET_STARTING_VALUES:
            return setStartingValues(action.values);
        case actionNames.UPDATE_CELL:
            return {
                editable: state.editable,
                values: updateCell(state.values, action.cell, action.value),
            };
        default:
            return state;
    }
}
