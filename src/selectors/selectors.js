export function isCellEditable(state, row, col) {
    return state.editable[row][col];
}

export function cellValue(state, row, col) {
    return state.grid[row][col];
}
