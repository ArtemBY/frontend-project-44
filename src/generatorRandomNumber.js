/* eslint linebreak-style: ["error", "windows"] */

const getRandomNumber = (min, max) => {
  const result = Math.floor(Math.random() * (max - min)) + min;
  return result;
};
export default getRandomNumber;
