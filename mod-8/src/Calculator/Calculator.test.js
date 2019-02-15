import Calculator from './Calculator';

jest.mock('./logger');

test('een rekenmachine kan 1 + 1 optellen', () => {
  const calc = new Calculator();

  const sum = calc.add(1, 1);

  expect(sum).toBe(2);
});

test('een rekenmachine kan 0.1 + 0.2 optellen', () => {
  const calc = new Calculator();

  const sum = calc.add(0.1, 0.2);

  expect(sum).toBeCloseTo(0.3, 15);
});

test('snapshot', () => {
  const calc = new Calculator();

  const sum = calc.add(0.1, 0.2);

  expect(sum).toMatchSnapshot();

  expect([{ theSum: sum }]).toMatchSnapshot();
});

test('een rekenmachine kan true + false optellen', () => {
  const calc = new Calculator();

  const sum = calc.add(true, false);

  expect(sum).toBe(1);
});

test('een rekenmachine kan [] + [] optellen', () => {
  const calc = new Calculator();

  const sum = calc.add([], []);

  expect(sum).toBe('');
});
