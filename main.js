document.addEventListener('DOMContentLoaded', event => {
  console.log('DOM loaded');
  let answer = Math.floor(Math.random() * 100) + 1;
  let input = document.querySelector('#guess');
  let paragraph = document.querySelector('p');
  paragraph.textContent = 'Guess a number from 1 to 100!';
  let submit = document.querySelector('#submit');
  let numGuesses = 0;

  let form = document.querySelector('form');
  form.addEventListener('submit', event => {
    event.preventDefault();
    let guess = parseInt(input.value, 10);
    numGuesses += 1;
    let message;
    if (Number.isNaN(guess)) {
      message = "That's not a valid number!  Guess again.";
    } else if (guess > answer) {
      message = `The answer is lower than ${String(guess)}!`;
    } else if (guess < answer) {
      message = `The answer is higher than ${String(guess)}!`;
    } else {
      message = `You got it! The answer is ${String(answer)}.  You got it in ${String(numGuesses)} guesses!`;
      submit.setAttribute('disabled', true);
    }

    paragraph.textContent = message;
    input.value = '';
  });

  let newGame = document.querySelector('a');
  newGame.addEventListener('click', event => {
    answer = Math.floor(Math.random() * 100) + 1;
    numGuesses = 0;
    submit.removeAttribute('disabled');
    paragraph.textContent = 'Guess a number from 1 to 100!';
  })
});