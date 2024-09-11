import readlineSync from 'readline-sync';
import _ from 'lodash';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const isEven = (number) => number % 2 === 0;

export const evenGame = () => {
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let counter = 0;
  while (counter < 3) {
    const number = _.random(1, 1000);
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    console.log(`Question: ${number}`);

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
