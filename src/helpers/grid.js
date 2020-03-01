function isValidGridWidth(gridWidth) {
  return Number.isInteger(gridWidth ** 0.5);
}

export function createGrid(gridWidth, initialValue) {
  if (!isValidGridWidth(gridWidth)) {
    throw new Error(
      `Cannot create a grid of width ${gridWidth}. Grid width must be a square number`
    );
  }
  const grid = new Array(gridWidth);
  for (let i = 0; i < gridWidth; i++) {
    grid[i] = new Array(gridWidth);
    if (typeof initialValue !== 'undefined') {
      grid[i].fill(initialValue);
    }
  }
  return grid;
}

export function convert1DIndexTo2DIndex(gridWidth, oneDimensionalIndex) {
  const row = Math.floor(oneDimensionalIndex / gridWidth);
  const col = oneDimensionalIndex % gridWidth;
  return { row, col };
}

export function computeBoxWidth(gridWidth) {
  return gridWidth ** 0.5;
}
