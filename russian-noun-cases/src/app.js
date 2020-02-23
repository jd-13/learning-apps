let enabledCases = {
    "Genitive": true,
    "Accusative": true,
    "Dative": true,
    "Instrumental": true,
    "Prepositional": true
};

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
    console.log("New question requested");

    const questionTypes = [SimpleQuestion, CaseChoiceQuestion];
    return new questionTypes[Math.floor(Math.random() * questionTypes.length)](dictionary);
}

const main = function() {
    console.log("Initialising");

    // Add empty feedback element
    ReactDOM.render(<FeedbackElement feedbackLine1="" feedbackLine2=""/>, feedbackDiv);

    // Set up the drop-up menu
    ReactDOM.render(<CasesDropdownElement enabledCases={enabledCases}/>, dropdownContainer);
    $("#casesDropdownButton").click(function () {
        $("#casesDropdown").toggleClass("is-active");
    });
    Object.keys(enabledCases).forEach(function (caseKey) {
        const caseCheckbox = $(`#${caseKey}checkbox`);

        caseCheckbox.click(function () {
            enabledCases[caseKey] = !enabledCases[caseKey];
            ReactDOM.render(<CasesDropdownElement enabledCases={enabledCases}/>, dropdownContainer);
        });
    });


    // Load the first question
    let question = newQuestion(DICTIONARY);
    question.renderQuestion();
}

$(document).ready(main);
