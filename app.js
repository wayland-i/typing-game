
const sentenceInput = document.getElementById("sentenceInput");
const startButton = document.getElementById("startButton");
const targetText = document.getElementById("targetText");
const userInput = document.getElementById("userInput");

let sentence = ""; // Variable to store the sentence

// Start button event to set up the typing sentence
startButton.addEventListener("click", () => {
    // Store the custom sentence entered by the user
    sentence = sentenceInput.value;

    // Display the sentence if not empty
    if (sentence.trim()) {
        targetText.innerHTML = sentence
            .split("")
            .map(letter => `<span>${letter}</span>`)
            .join("");
        
        // Enable the typing input box and clear previous input
        userInput.value = "";
        userInput.disabled = false;
        userInput.focus();
    } else {
        alert("Please enter a sentence to practice.");
    }
});

// Track typed letters in real-time
userInput.addEventListener("input", () => {
    const typedText = userInput.value;
    const spans = targetText.querySelectorAll("span");

    for (let i = 0; i < spans.length; i++) {
        if (typedText[i] === sentence[i]) {
            spans[i].classList.add("correct");
            spans[i].classList.remove("incorrect");
        } else if (typedText[i] !== undefined) {
            spans[i].classList.add("incorrect");
            spans[i].classList.remove("correct");
        } else {
            spans[i].classList.remove("correct", "incorrect");
        }
    }
});
