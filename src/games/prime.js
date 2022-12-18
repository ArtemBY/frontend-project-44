/* eslint linebreak-style: ["error", "windows"] */

import getRandomNumber from '../generatorRandomNumber.js';
import game from '../index.js';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getCorrectAnswer = (number) => {
  const result = isPrime(number) ? 'yes' : 'no';
  return result;
};

const generatorGame = () => {
  const minNumber = 1;
  const maxNumber = 100;
  const expression = getRandomNumber(minNumber, maxNumber);
  const correctAnswer = getCorrectAnswer(expression);
  return [expression, correctAnswer];
};

export default () => game(condition, generatorGame);
