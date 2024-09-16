import app, { getRandomInt } from '../index.js';

const GCD = (a, b) => {
  if (a === 0 || b === 0) {
    return Math.max(a, b);
  }
  return GCD(b, a % b);
};

const firstNumberInterval = [1, 100];
const secondNumberInterval = [1, 100];

const getGameData = () => {
  const a = getRandomInt(firstNumberInterval);
  const b = getRandomInt(secondNumberInterval);

  const question = `${a} ${b}`;
  const correctAnswer = GCD(a, b).toString();
  return [question, correctAnswer];
};

const startGcdGame = () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  app(getGameData, rule);
};
export default startGcdGame;
