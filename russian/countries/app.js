function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

/**
 * Randomly generates and renders a new question from the provided dictionary.
 */
function newQuestion() {
    console.log("New question requested");

    var questionTypes = [TypedQuestion, ChoiceQuestion];

    // Load the next question
    var question = new questionTypes[Math.floor(Math.random() * questionTypes.length)]();
    question.renderQuestion();
}

var main = function main() {
    console.log("Initialising");

    // Add empty feedback element
    ReactDOM.render(React.createElement(FeedbackElement, { feedbackText: "" }), feedbackDiv);

    // Load the first question
    newQuestion();
};

$(document).ready(main);