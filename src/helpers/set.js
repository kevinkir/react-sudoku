export function union(...sets) {
  const unionSet = new Set();
  sets.forEach((set) => {
    set.forEach((value) => {
      unionSet.add(value);
    });
  });
  return unionSet;
}

export function intersection(...sets) {
  const unionSet = union(...sets);
  const intersectionSet = new Set();
  unionSet.forEach((val) => {
    if (sets.every((set) => set.has(val))) {
      intersectionSet.add(val);
    }
  });
  return intersectionSet;
}
