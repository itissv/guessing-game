document.addEventListener("DOMContentLoaded", () => {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;

  const guessInput = document.getElementById("guessInput");
  const message = document.getElementById("message");
  const guessDisplay = document.getElementById("guessDisplay");

  function checkGuess() {
      const userGuess = parseInt(guessInput.value);

      if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
          message.textContent = "⚠️ Please enter a number between 1 and 100.";
          message.style.color = "red";
          return;
      }

      attempts++;
      guessDisplay.textContent = userGuess;

      if (userGuess === randomNumber) {
          message.textContent = `🎉 Correct! You guessed it in ${attempts} attempts.`;
          message.style.color = "green";
      } else if (userGuess < randomNumber) {
          message.textContent = "🔼 Too low! Try a greater number.";
          message.style.color = "orange";
      } else {
          message.textContent = "🔽 Too high! Try a smaller number.";
          message.style.color = "orange";
      }

      guessInput.value = "";
      guessInput.focus();
  }

  function restartGame() {
      randomNumber = Math.floor(Math.random() * 100) + 1;
      attempts = 0;
      message.textContent = "";
      guessDisplay.textContent = "--";
      guessInput.value = "";
      guessInput.focus();
  }

  // Attach event listeners
  document.querySelector("button").addEventListener("click", checkGuess);
  document.querySelector(".restart-btn").addEventListener("click", restartGame);
  guessInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
          checkGuess();
      }
  });

  // Focus the cursor on the input field when the page loads
  guessInput.focus();
});
