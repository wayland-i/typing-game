// Sentence to type

const sentence = "Type this sentence correctly letter by letter!";
const targetText = document.getElementById("targetText");
const userInput = document.getElementById("userInput");

// Display sentence with each letter wrapped in a span
targetText.innerHTML = sentence
    .split("")
    .map(letter => `<span>${letter}</span>`)
    .join("");

// Track typed letters
userInput.addEventListener("input", () => {
    const typedText = userInput.value;
    const spans = targetText.querySelectorAll("span");

    // Loop through each letter in the sentence
    for (let i = 0; i < spans.length; i++) {
        // Add 'correct' class if letter is typed correctly, otherwise remove it
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
