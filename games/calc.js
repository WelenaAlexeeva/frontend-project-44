import _ from 'lodash';
import app from '../src/index.js';

// const isCorrect = (number) => number % 2 === 0;

const calcGame = () => {
  const a = _.random(1, 100);
  const b = _.random(1, 20);
  const expression = _.random(1, 3);

  switch (expression) {
    case 1:
      return [`${a} + ${b}`, (a + b).toString()];
    case 2:
      return [`${a} - ${b}`, (a - b).toString()];
    case 3:
      return [`${a} * ${b}`, (a * b).toString()];
    default:
      return [`${a} + ${b}`, (a + b).toString()];
  }
};

export default calcGame;

const rule = 'What is the result of the expression?';
app(calcGame, rule);
