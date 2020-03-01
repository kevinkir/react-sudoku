import { grid } from '../../src/reducers/grid';
import { actionNames } from '../../src/actions/action-names';

test('Grid values should be initialized to an empty 9-by-9 array', () => {
  const state = grid(undefined, {});
  
  expect(state.values.length).toEqual(9);
  expect(state.values[0].length).toEqual(9);
  expect(state.values[0][0]).toBeUndefined();
});


test('Grid values should update when the UPDATE_CELL action is dispatched', () => {
  const initialState = grid(undefined, {});

  const state = grid(initialState, {
    type: actionNames.UPDATE_CELL,
    cell: { row: 3, col: 2 },
    value: 5
  });

  expect(state.values[3][2]).toEqual(5);
});

test('Editable should be initialized to a 9-by-9 array with fill value true', () => {
  const state = grid(undefined, {});
  
  expect(state.editable.length).toEqual(9);
  expect(state.editable[0].length).toEqual(9);
  expect(state.editable[0][0]).toEqual(true);
});

test('It should update values and editability when the SET_STARTING_VALUES action is dispatched', () => {
  const initialState = grid(undefined, {});

  const state = grid(initialState, {
    type: actionNames.SET_STARTING_VALUES,
    values: [
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

  expect(state.values[0][0]).toBeUndefined();
  expect(state.values[3][2]).toEqual(5);
  expect(state.values[1][7]).toEqual(6);

  expect(state.editable[0][0]).toEqual(true);
  expect(state.editable[3][2]).toEqual(false);
  expect(state.editable[1][7]).toEqual(false);
});