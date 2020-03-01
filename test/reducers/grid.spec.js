import { gridReducer } from '../../src/reducers/grid';
import { actionNames } from '../../src/actions/action-names';

test('Grid should be initialized to an empty 9-by-9 array', () => {
  const state = gridReducer(undefined, {});
  
  expect(state.length).toEqual(9);
  expect(state[0].length).toEqual(9);
  expect(state[0][0]).toBeUndefined();
});


test('Grid should update when the UPDATE_CELL action is dispatched', () => {
  const initialState = gridReducer(undefined, {});

  const state = gridReducer(initialState, {
    type: actionNames.UPDATE_CELL,
    cell: { row: 3, col: 2 },
    value: 5
  });

  expect(state[3][2]).toEqual(5);
});