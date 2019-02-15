import { log } from './logger';

class Calculator {
  add(x, y) {
    log('Ik zit in add');
    return x + y;
  }

  substract(x, y) {
    return x - y;
  }
}

export default Calculator;
