import readlineSync from 'readline-sync';
import greeting from './cli.js';

const app = (game, rule) => {
  const name = greeting();
  console.log(rule);

  let counter = 0;
  while (counter < 3) {
    const gameData = game();
    const question = gameData[0];
    const correctAnswer = gameData[1];

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      break;
    }
  }
  if (counter === 3) console.log(`Congratulations, ${name}!`);
};

export default app;
