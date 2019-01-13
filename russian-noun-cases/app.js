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

    // Collect the necessary elements
    let $questionContainer = $("#questionContainer");
    let $nextBtn = $("#nextBtn");
    let $isCorrect = $("#isCorrect");
    let $feedbackLine1 = $("#feedbackLine1");
    let $feedbackLine2 = $("#feedbackLine2");

    // Load the first question
    let question = newQuestion(DICTIONARY);
    question.renderQuestion($questionContainer,
                            $nextBtn,
                            $isCorrect,
                            $feedbackLine1,
                            $feedbackLine2);

    // Set the next button handler
    $nextBtn.click(function() {
        // Disable this button
        $(this).prop("disabled", true);

        // Clear the feedback and text fields
        $questionContainer.empty();
        $isCorrect.text("");
        $feedbackLine1.text("");
        $feedbackLine2.text("");

        // Load the next question
        question = newQuestion(DICTIONARY);
        question.renderQuestion($questionContainer,
                                $nextBtn,
                                $isCorrect,
                                $feedbackLine1,
                                $feedbackLine2);
    });
}

$(document).ready(main);