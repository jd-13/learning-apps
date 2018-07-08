
/**
 * Contains all the fields that define a generated question.
 */
class Question {
    constructor(questionText, answer, feedbackText) {
        this._questionText = questionText;
        this._answer = answer;
        this._feedbackText = feedbackText;
    }

    get questionText() { return this._questionText; }
    get answer() { return this._answer; }
    get feedbackText() { return this._feedbackText; }
}

/**
 * Randomly generates a new question from the provided JSON dictionary.
 */
function newQuestion(dictionary) {

    // Choose a noun at random
    const chosenNoun = dictionary.nouns[Math.floor(Math.random() * dictionary.nouns.length)];
    
    // Choose a target case at random, exclude the first case as this will always be nominative
    const availableCases = Object.keys(chosenNoun).slice(1);
    const chosenCaseKey = availableCases[Math.floor(Math.random() * availableCases.length)];
    const chosenCase = chosenNoun[chosenCaseKey];

    // Get the text for the feedback
    const feedbackLine1 = dictionary.caseRules[chosenCaseKey][chosenCase.caseRule];

    // Check if we need to explain a spelling rule
    let feedbackLine2 = "";
    if (chosenCase.hasOwnProperty("spellingRule")) {
        feedbackLine2 = dictionary.spellingRules[chosenCase.spellingRule];
    }

    return new Question(`What is the ${chosenCaseKey} case of ${chosenNoun.nominative}?`,
                        chosenNoun[chosenCaseKey].text,
                        [feedbackLine1, feedbackLine2]);
}

const main = function() {

    // Collect the necessary elements
    let $questionText = $("#question");
    let $nextBtn = $("#nextBtn");
    let $isCorrect = $("#isCorrect");
    let $feedbackLine1 = $("#feedbackLine1");
    let $feedbackLine2 = $("#feedbackLine2");
    let $answerInput = $("#answerInput");

    $questionText.text("Loading dictionary...");
    let dictionary = undefined;

    // We need to load the nouns from our JSON before we can do anything, so the app begins on
    // success of the AJAX request
    $.getJSON("nouns.json", function(data) {

        dictionary = data;

        // Load the first question
        let question = newQuestion(dictionary);
        $questionText.text(question.questionText);

        // Set the submit button handler
        $("#submitBtn").click(function() {

            // Enable the next button
            $nextBtn.prop("disabled", false);

            if ($answerInput.val() === question.answer) {
                $isCorrect.text("Correct!");
            } else {
                $isCorrect.text("Oops!");
                $feedbackLine1.text(question.feedbackText[0]);
                $feedbackLine2.text(question.feedbackText[1]);
            }
        });

        // Set the next button handler
        $nextBtn.click(function() {
            // Disable this button
            $(this).prop("disabled", true);

            // Clear the feedback and text fields
            $isCorrect.text("");
            $feedbackLine1.text("");
            $feedbackLine2.text("");
            $answerInput.val("");

            // Load the next question
            question = newQuestion(dictionary);
            $questionText.text(question.questionText);
        });

    });
}

$(document).ready(main);