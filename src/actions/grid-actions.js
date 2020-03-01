import { actionNames } from './action-names';

export function updateCell(row, col, value) {
  return {
    type: actionNames.UPDATE_CELL,
    cell: { row, col },
    value,
  };
}

export function setStartingValues(values) {
  return {
    type: actionNames.SET_STARTING_VALUES,
    values,
  };
}
