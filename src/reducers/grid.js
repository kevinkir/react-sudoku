import { actionNames } from '../actions/action-names';
import { createGrid } from '../helpers/grid';

const GRID_WIDTH = 9;

function updateCell(grid, cell, value) {
  return grid.map((row, rowIndex) => {
    const updatedRow = [...row];
    if (rowIndex === cell.row) {
      updatedRow[cell.col] = value;
    }
    return updatedRow;
  });
}

export function gridReducer(state = createGrid(GRID_WIDTH), action) {
  switch (action.type) {
    case actionNames.UPDATE_CELL:
      return updateCell(state, action.cell, action.value);
    default:
      return state;
  }
}
