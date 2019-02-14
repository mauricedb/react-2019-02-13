export function createIncrement(amount = 1) {
  return {
    type: 'increment',
    payload: amount
  };
}
