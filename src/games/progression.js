/* eslint linebreak-style: ["error", "windows"] */

import getRandomNumber from '../generatorRandomNumber.js';
import game from '../index.js';

const condition = 'What number is mission in the progression';

const progression = (startNumber, step) => {
  const coll = [startNumber];
  for (let i = 0; i < 10; i += 1) {
    const newItem = coll[i] + step;
    coll.push(newItem);
  }
  return coll;
};

const getCloneArr = (arr) => {
  const newArr = [];
  for (const item of arr) {
    newArr.push(item);
  }
  return newArr;
};

const hintItem = (coll) => {
  const newColl = getCloneArr(coll);
  const randomIndex = Math.floor(Math.random() * (coll.length));
  newColl[randomIndex] = '..';
  return newColl;
};

const checkAnswer = (expression, coll) => {
  let index;
  for (let i = 0; i < expression.length; i += 1) {
    if (expression[i] === '..') {
      index = i;
    }
  }
  const result = coll[index];
  return String(result);
};

const generatorGame = () => {
  const startNumber = getRandomNumber(1, 15);
  const step = getRandomNumber(2, 8);
  const coll = progression(startNumber, step);
  const expression = hintItem(coll);
  const correctAnswer = checkAnswer(expression, coll);
  return [expression, correctAnswer];
};

export default () => game(condition, generatorGame);
