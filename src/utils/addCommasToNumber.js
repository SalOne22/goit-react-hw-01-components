export const addCommasToNumber = number =>
  number.toLocaleString('en', { useGrouping: true });
