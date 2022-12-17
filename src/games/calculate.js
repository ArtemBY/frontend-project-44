/* eslint linebreak-style: ["error", "windows"] */

import getRandomNumber from '../generatorRandomNumber.js';
import game from '../index.js';

const condition = 'What is the result of the expression?';

const checkExpression = (value1, value2, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = value1 + value2;
      break;
    case '-':
      result = value1 - value2;
      break;
    case '*':
      result = value1 * value2;
      break;
    default:
      result = null;
  }
  return String(result);
};
const getRandomOperator = () => {
  const operators = ['+', '*', '-'];
  const randomIndex = Math.floor(Math.random() * (operators.length));
  const result = operators[randomIndex];
  return result;
};
const generatorGame = () => {
  const maxNumber = 20;
  const minNumber = 1;
  const value1 = getRandomNumber(minNumber, maxNumber);
  const value2 = getRandomNumber(minNumber, maxNumber);
  const operator = getRandomOperator();
  const expression = `${value1} ${operator} ${value2}`;

  const correctAnswer = checkExpression(value1, value2, operator);
  return [expression, correctAnswer];
};

export default () => game(condition, generatorGame);
