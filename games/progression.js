import _ from 'lodash';
import app from '../src/index.js';

const progressionLength = 10;
const progressionGame = () => {
  let number = _.random(1, 100);
  const step = _.random(1, 20);
  const progression = [number];

  for (let i = 0; i < progressionLength; i += 1) {
    number += step;
    progression.push(number);
  }
  const position = _.random(0, progressionLength - 1);
  const correctAnswer = progression[position].toString();
  progression[position] = '..';

  return [progression.join(' '), correctAnswer];
};
export default progressionGame;

const rule = 'What number is missing in the progression?';
app(progressionGame, rule);
