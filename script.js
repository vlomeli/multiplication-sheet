
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const answers = []; // Array to store the correct answers outside of the function

function generateMultiplicationSheet() {
    const problemsContainer = document.getElementById("problems");
    problemsContainer.innerHTML = ""; // Clear any previous problems

    // Clear the answers array when generating a new sheet
    answers.length = 0;

    for (let i = 1; i <= 24; i++) {
        const num1 = getRandomNumber(1, 10);
        const num2 = getRandomNumber(1, 10);
        const ans = num1 * num2;

        answers.push(ans); // Add the correct answer to the array

        const problemElement = document.createElement("div");
        problemElement.className = "problem";

        problemElement.textContent = `${i}. ${num1} x ${num2} =`;

        // Create an input element for the user's answer
        const answerInput = document.createElement("input");
        answerInput.type = "number";

        // Create a span element for the checkmark icon
        const checkIcon = document.createElement("span");
        checkIcon.className = "check-icon";
        checkIcon.textContent = "✅"; // You can change this to your desired checkmark emoji
        checkIcon.style.visibility = "hidden"; // Initially hide the checkmark icon

         // Create a span element for the red "X" icon
         const xIcon = document.createElement("span");
         xIcon.className = "x-icon";
         xIcon.textContent = "❌"; // You can change this to your desired "X" emoji
         xIcon.style.visibility = "hidden"; // Initially hide the "X" icon

        problemElement.appendChild(answerInput);
        problemElement.appendChild(checkIcon); // Append the checkmark icon
        problemElement.appendChild(xIcon); // Append the "X" icon

        problemsContainer.appendChild(problemElement);
    }
        // Create a button to check the user's answer
        const checkButton = document.createElement("button");
        checkButton.textContent = "Check Answers";
        checkButton.className = "check-button"; // Add a class to the button for styling
        checkButton.addEventListener("click", function() {
            const userAnswers = Array.from(document.querySelectorAll(".problem input")).map(input => parseInt(input.value));

            let correctCount = 0;
            for (let i = 0; i < answers.length; i++) {
                if (userAnswers[i] === answers[i]) {
                correctCount++;
                // Show the checkmark icon when the answer is correct
                document.querySelectorAll(".check-icon")[i].style.visibility = "visible";
                // Hide the "X" icon
                document.querySelectorAll(".x-icon")[i].style.visibility = "hidden";
            } else {
                // Show the "X" icon for incorrect answers
                document.querySelectorAll(".x-icon")[i].style.visibility = "visible";
                // Hide the checkmark icon
                document.querySelectorAll(".check-icon")[i].style.visibility = "hidden";
                }
            }

        alert(`You answered ${correctCount} out of 24 correctly.`);
    });

        problemsContainer.appendChild(checkButton);
    }
// Call the function to generate the sheet when the page loads
generateMultiplicationSheet();