/* eslint linebreak-style: ["error", "windows"] */

import getRandomNumber from '../src/generatorRandomNumber.js';
import game from './index.js';

const isEven = (number) => (number % 2 === 0);
const check = (number) => {
  const result = isEven(number) ? 'yes' : 'no';
  return result;
};

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

const generatorGame = () => {
  const expression = getRandomNumber(0, 100);
  const correctAnswer = check(expression);
  return [expression, correctAnswer];
};

export default () => game(condition, generatorGame);
