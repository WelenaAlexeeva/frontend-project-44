import app, { getRandomInt } from '../index.js';

const getExpressionAnswer = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return a + b;
  }
};

const firstOperandInterval = [1, 100];
const secondOperandInterval = [1, 20];
const operations = ['+', '-', '*'];

const getGameData = () => {
  const a = getRandomInt(firstOperandInterval);
  const b = getRandomInt(secondOperandInterval);
  const index = getRandomInt([0, operations.length - 1]);

  const operator = operations[index];
  const question = `${a} ${operator} ${b}`;
  const correctAnswer = getExpressionAnswer(a, b, operator).toString();
  return [question, correctAnswer];
};

const startCalcGame = () => {
  const rule = 'What is the result of the expression?';
  app(getGameData, rule);
};
export default startCalcGame;
