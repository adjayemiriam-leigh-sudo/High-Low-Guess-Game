// Pick a random whole number from 0 to 9
const randomNumber = Math.floor(Math.random() * 10);

// Grab the heading1, the input box and the whole game card from the HTML
const result = document.getElementById('result');
const input = document.getElementById('numberInput');
const attempts = document.getElementById('attempts');

// Use the element with id="game" if it exists, otherwise shake the box that holds the input
const game = document.getElementById('game') || input.parentElement;

// Peek at the answer while testing (open the browser console to see it)
console.log(randomNumber);


// Shake the whole game left and right (used when the entry is invalid)
function shakeGame() {
    game.animate(
        [
            { transform: "translateX(0)" },
            { transform: "translateX(-12px)" },
            { transform: "translateX(12px)" },
            { transform: "translateX(-12px)" },
            { transform: "translateX(12px)" },
            { transform: "translateX(0)" }
        ],
        { duration: 400 }
    );
}


// Runs every time the "Guess" button is clicked
function compareNumber() {

    // Remove the old animation class so the animation can play again
    result.className = "";

    // Tiny pause so the browser notices the class was removed
    void result.offsetWidth;

    // Save the guess BEFORE clearing the input, so every check below can use it
    const raw = input.value.trim();   // exactly what the player typed
    const guess = Number(raw);        // the same thing as a number (letters become NaN)

    // 1. Check for an invalid entry FIRST
    if (raw === "" || isNaN(guess) || !Number.isInteger(guess) || guess < 0 || guess > 9) {
        console.log("invalid entry, shaking:", raw);
        input.value = "";
        result.innerHTML = "Invalid Entry";
        result.className = "invalid";
        shakeGame();
        return;   // stop here, so an invalid guess is not counted as an attempt
    }

    // Increment the number of attempts and update the HTML
    attempts.innerHTML = Number(attempts.innerHTML) + 1;

    // 2. Compare the valid guess with the random number (only ONE of these runs)
    if (randomNumber == guess) {
        result.innerHTML = "Yay got the answer";
        result.className = "win";
    } else if (randomNumber > guess) {
        result.innerHTML = "Go Higher";
        result.className = "higher";
    } else {
        result.innerHTML = "Go Lower";
        result.className = "lower";
    }

    input.value = "";

    console.log("function working");
}