import { shuffledRange } from './array';
import { convert1DIndexTo2DIndex } from './grid';
import { ManagedGrid } from './managed-grid';
import { GRID_WIDTH } from '../constants';

function fillManagedGrid(managedGrid) {
    if (managedGrid.isFull()) {
        return managedGrid;
    }
    const next = managedGrid.nextCellPossibilities();

    for (let i = 0; i < next.length; i++) {
        const filled = fillManagedGrid(next[i]);
        if (filled) {
            return filled;
        }
    }
    return null;
}

function createSolution(gridWidth) {
    const managedGrid = new ManagedGrid(gridWidth);
    managedGrid.init();

    // Start with a randomized first row, since this is what is going to happen anyways
    // with a bunch of unnecessary cloning.
    const firstRow = shuffledRange(1, gridWidth + 1);
    firstRow.forEach((val) => managedGrid.setNextValue(val));

    const filledManagedGrid = fillManagedGrid(managedGrid);
    filledManagedGrid.print();
    return filledManagedGrid.grid;
}

function numStartingSquaresForLevel(gridWidth, level) {
    const totalSquares = gridWidth ** 2;
    const fractionOfSquares = 0.6 - level / 10;
    return Math.floor(totalSquares * fractionOfSquares);
}

export function getStartingValues(level) {
    // First, compute a valid solution. It is possible that a particular configuration
    // shown to the user may have multiple solutions, but we want to at least make sure
    // that what we show has a possible solution.
    const solution = createSolution(GRID_WIDTH);

    const oneDimensionalIndices = shuffledRange(0, GRID_WIDTH ** 2);
    const numStartingSquares = numStartingSquaresForLevel(GRID_WIDTH, level);

    return oneDimensionalIndices.slice(0, numStartingSquares).map((i) => {
        const { row, col } = convert1DIndexTo2DIndex(GRID_WIDTH, oneDimensionalIndices[i]);
        const value = solution[row][col];
        return { row, col, value };
    });
}
