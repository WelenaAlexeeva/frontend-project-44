import app, { getRandomInt } from '../index.js';

const generateProgression = (progressionLength, startNumber, step) => {
  let number = startNumber;
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(number);
    number += step;
  }
  return progression;
};

const progressionLength = 10;
const firstOperandInterval = [1, 100];
const secondOperandInterval = [1, 20];

const getGameData = () => {
  const startNumber = getRandomInt(firstOperandInterval);
  const step = getRandomInt(secondOperandInterval);

  const progression = generateProgression(progressionLength, startNumber, step);
  const position = getRandomInt([0, progressionLength - 1]);
  const correctAnswer = progression[position].toString();
  progression[position] = '..';
  return [progression.join(' '), correctAnswer];
};

const startProgressionGame = () => {
  const rule = 'What number is missing in the progression?';
  app(getGameData, rule);
};
export default startProgressionGame;
