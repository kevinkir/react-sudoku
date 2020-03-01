import { random } from './random';

export function range(begin, end) {
    const arr = new Array(end - begin);
    for (let i = begin; i < end; i++) {
        arr[i - begin] = i;
    }
    return arr;
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

export function shuffleInPlace(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        const j = i + random(arr.length - i);
        swap(arr, i, j);
    }
}

export function shuffledRange(begin, end) {
    const arr = range(begin, end);
    shuffleInPlace(arr);
    return arr;
}
