import app, { getRandomInt } from '../index.js';

const isPrime = (number) => {
  if (number <= 1) return false;
  if (number === 2) return true;
  if (number % 2 === 0) return false;
  const limit = Math.ceil(Math.sqrt(number) + 1);
  for (let i = 3; i < limit; i += 2) {
    if (number % i === 0) return false;
  }
  return true;
};

const numberInterval = [1, 100];

const getGameData = () => {
  const question = getRandomInt(numberInterval);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startPrimeGame = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  app(getGameData, rule);
};
export default startPrimeGame;
