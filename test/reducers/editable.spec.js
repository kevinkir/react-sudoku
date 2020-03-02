import { editableReducer } from '../../src/reducers/editable';
import { actionNames } from '../../src/actions/action-names';

test('Editable should be initialized to a 9-by-9 array with fill value true', () => {
  const editable = editableReducer(undefined, {});
  
  expect(editable.length).toEqual(9);
  expect(editable[0].length).toEqual(9);
  expect(editable[0][0]).toEqual(true);
});

test('NEW_GAME should set editable to false for the starting cells', () => {
  const initialState = editableReducer(undefined, {});

  const editable = editableReducer(initialState, {
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

  expect(editable[0][0]).toEqual(true);
  expect(editable[3][2]).toEqual(false);
  expect(editable[1][7]).toEqual(false);
});

test('NEW_GAME should set editable to true for non-starting cells', () => {
    const initialState = editableReducer(undefined, {
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

    const editable = editableReducer(initialState, {
        type: actionNames.NEW_GAME,
        startingValues: [
          {
            row: 1,
            col: 1,
            value: 5,
          },
        ],
      });
  
    expect(editable[0][0]).toEqual(true);
    expect(editable[1][1]).toEqual(false);
    expect(editable[3][2]).toEqual(true);
    expect(editable[1][7]).toEqual(true);
  });