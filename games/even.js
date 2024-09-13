import _ from 'lodash';
import app from '../src/index.js';

const isEven = (number) => number % 2 === 0;

const evenGame = () => {
  const question = _.random(1, 1000);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default evenGame;

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
app(evenGame, rule);
