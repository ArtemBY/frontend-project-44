/* eslint linebreak-style: ["error", "windows"] */

import getRandomNumber from '../generatorRandomNumber.js';
import game from '../index.js';

const condition = 'Find the greatest common divisor of given numbers.';

const getGcd = (value1, value2) => {
  const result = ((value1 % value2) ? getGcd(value2, value1 % value2) : Math.abs(value2));
  return String(result);
};

const generatorGame = () => {
  const minNumber = 1;
  const maxNumber = 20;
  const value1 = getRandomNumber(minNumber, maxNumber);
  const value2 = getRandomNumber(minNumber, maxNumber);
  const expression = `${value1} ${value2}`;
  const correctAnswer = getGcd(value1, value2);
  return [expression, correctAnswer];
};

export default () => game(condition, generatorGame);
