import { gridReducer } from '../../src/reducers/grid';
import { actionNames } from '../../src/actions/action-names';

test('Grid values should be initialized to an empty 9-by-9 array', () => {
  const grid = gridReducer(undefined, {});
  
  expect(grid.length).toEqual(9);
  expect(grid[0].length).toEqual(9);
  expect(grid[0][0]).toBeUndefined();
});


test('UPDATE_CELL should set a single grid value', () => {
  const initialState = gridReducer(undefined, {});

  const grid = gridReducer(initialState, {
    type: actionNames.UPDATE_CELL,
    cell: { row: 3, col: 2 },
    value: 5
  });

  expect(grid[3][2]).toEqual(5);
});

test('NEW_GAME should set grid values', () => {
  const initialState = gridReducer(undefined, {
    type: actionNames.UPDATE_CELL,
    cell: { row: 0, col: 0 },
    value: 5
  });

  const grid = gridReducer(initialState, {
    type: actionNames.NEW_GAME,
    startingValues: [
      {
        row: 3,
        col: 2,
        value: 5,
      },
      {
        row: 1,
        col: 7,
        value: 6,
      },
    ],
  });

  expect(grid[0][0]).toBeUndefined();
  expect(grid[3][2]).toEqual(5);
  expect(grid[1][7]).toEqual(6);
});