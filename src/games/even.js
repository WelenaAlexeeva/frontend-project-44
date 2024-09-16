import app, { getRandomInt } from '../index.js';

const isEven = (number) => number % 2 === 0;

const numberInterval = [1, 1000];

const getGameData = () => {
  const question = getRandomInt(numberInterval);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startEvenGame = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  app(getGameData, rule);
};
export default startEvenGame;
