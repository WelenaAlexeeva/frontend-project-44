import _ from 'lodash';
import app from '../src/index.js';

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

const primeGame = () => {
  const question = _.random(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
export default primeGame;

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
app(primeGame, rule);
