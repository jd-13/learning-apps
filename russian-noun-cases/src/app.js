function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

/**
 * Randomly generates a new question from the provided dictionary.
 */
function newQuestion(dictionary) {
    const questionTypes = [SimpleQuestion, CaseChoiceQuestion];

    return new questionTypes[Math.floor(Math.random() * questionTypes.length)](dictionary);
}

const main = function() {

    // Add empty feedback element
    ReactDOM.render(<FeedbackElement feedbackLine1="" feedbackLine2=""/>, feedbackDiv);

    // Load the first question
    let question = newQuestion(DICTIONARY);
    question.renderQuestion();

    // Disable the next button
    ReactDOM.render(<NextButtonElement disabled={true}/>, nextButton);
}

$(document).ready(main);
