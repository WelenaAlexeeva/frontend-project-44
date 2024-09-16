import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const getRandomInt = ([min, max]) => Math.round(Math.random() * (max - min) + min);

const app = (game, rule) => {
  const name = greeting();
  console.log(rule);

  let counter = 0;
  while (counter < 3) {
    const [question, correctAnswer] = game();

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    counter += 1;
  }
  console.log(`Congratulations, ${name}!`);
};

export default app;
