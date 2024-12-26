// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
// Function to start the game
function startGame() {
  let attempts = 0;

  // Function to prompt the user for a guess
  function askForGuess() {
    const userGuess = parseInt(prompt("Guess a number between 1 and 100:"));

    if (isNaN(userGuess)) {
      alert("Please enter a valid number:");
    } else {
      attempts++;
      checkGuess(userGuess);
    }
  }

  // Function to check if the guess is correct and provide feedback
  function checkGuess(userGuess) {
    if (userGuess === randomNumber) {
      alert(`Congratulations! You guessed the correct number (${randomNumber}) in ${attempts} attempts.`);
    } else if (userGuess < randomNumber) {
      alert("Try again! Your guess is too low.");
      askForGuess();
    } else {
      alert("Try again! Your guess is too high.");
      askForGuess();
    }
  }

  // Start the game by asking for the first guess
  askForGuess();
}
startGame();
