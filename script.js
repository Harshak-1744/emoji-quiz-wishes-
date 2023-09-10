const phrasesAndEmojis = [
    {
        phrase: "Two bodies One soul",
        emojis: " ✌🏼 + 👥 + 1️⃣ + 👠",
    },
];

const emojiContainer = document.getElementById("emoji");
const guessInput = document.getElementById("guess-input");
const checkBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");
const gameOverImage = document.getElementById("game-over-image"); // Get the image element
const gameContainer = document.querySelector(".container"); // Get the game container element
const h1 = document.querySelector("h1"); // Get the h1 element

let currentEmojiIndex = 0;

function displayNextEmoji() {
    if (currentEmojiIndex < phrasesAndEmojis.length) {
        const emojiSequence = phrasesAndEmojis[currentEmojiIndex].emojis;
        emojiContainer.textContent = emojiSequence;
        guessInput.value = "";
    } else {
        emojiContainer.textContent = "";
        guessInput.style.display = "none";
        checkBtn.style.display = "none";
        resultDiv.classList.remove("wrong-answer");
        resultDiv.classList.add("correct-answer");

        // Show the game container and image
        gameContainer.style.display = "block";
        gameOverImage.style.display = "block";

        // Change the text of the h1 tag to a cake cutting emoji
        h1.innerHTML = "🎂✨💗🎀🥂🍰";
    }
}

displayNextEmoji();

checkBtn.addEventListener("click", () => {
    const guessedPhrase = guessInput.value.trim().toLowerCase();
    const correctPhrase = phrasesAndEmojis[currentEmojiIndex].phrase.toLowerCase();

    if (guessedPhrase === correctPhrase) {
        resultDiv.textContent = "Correct!";
        resultDiv.classList.remove("wrong-answer");
        resultDiv.classList.add("correct-answer");
        currentEmojiIndex++;
        setTimeout(() => {
            resultDiv.textContent = "";
            displayNextEmoji();

            if (currentEmojiIndex >= phrasesAndEmojis.length) {
                // When all phrases are guessed, show the game container and image
                gameContainer.style.display = "block";
                gameOverImage.style.display = "block";

                // Change the text of the h1 tag to a cake cutting emoji
                h1.innerHTML = "🎂✨💗🎀🍰🥂";
            }
        }, 1000);
    } else {
        resultDiv.textContent = "Wrong, try again!";
        resultDiv.classList.remove("correct-answer");
        resultDiv.classList.add("wrong-answer");
    }
});
