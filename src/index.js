/* eslint linebreak-style: ["error", "windows"] */

import readlineSync from 'readline-sync';

export default (condition, generatorGame) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(condition);

  for (let i = 1; i < 4; i += 1) {
    const [expression, correctAnswer] = generatorGame();
    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
