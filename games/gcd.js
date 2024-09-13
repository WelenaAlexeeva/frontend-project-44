import _ from 'lodash';
import app from '../src/index.js';

const GCD = (a, b) => {
  if (a === 0 || b === 0) {
    return Math.max(a, b);
  }
  return GCD(b, a % b);
};

const gcdGame = () => {
  const a = _.random(1, 100);
  const b = _.random(1, 100);

  const question = `${a} ${b}`;
  const correctAnswer = GCD(a, b).toString();
  return [question, correctAnswer];
};

export default gcdGame;

const rule = 'Find the greatest common divisor of given numbers.';
app(gcdGame, rule);
