let enabledCases = {
    "genitive": true,
    "accusative": true,
    "dative": true,
    "instrumental": true,
    "prepositional": true
};

let needsNewQuestion = false;

function getEnabledCasesList() {
    let retVal = [];

    Object.keys(enabledCases).forEach(function(caseKey) {
        if (enabledCases[caseKey]) {
            retVal.push(caseKey);
        }
    });

    return retVal;
}

function getDisabledCasesList() {
    let retVal = [];

    Object.keys(enabledCases).forEach(function(caseKey) {
        if (!enabledCases[caseKey]) {
            retVal.push(caseKey);
        }
    });

    return retVal;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

/**
 * Randomly generates and renders a new question from the provided dictionary.
 */
function newQuestion() {
    console.log("New question requested");

    const questionTypes = [SimpleQuestion, CaseChoiceQuestion];

    // Load the next question
    if (getEnabledCasesList().length == 0) {
        $("#warningModal").addClass("is-active");
    } else {
        let question = new questionTypes[Math.floor(Math.random() * questionTypes.length)]();
        question.renderQuestion();
    }
}

const main = function() {
    console.log("Initialising");

    // Add empty feedback element
    ReactDOM.render(<FeedbackElement feedbackLine1="" feedbackLine2=""/>, feedbackDiv);

    // Render the dropup menu
    ReactDOM.render(<CasesDropdownElement enabledCases={enabledCases}/>, dropdownContainer);

    // Allow the dropup to open when clicked
    $("#casesDropdownButton").click(function () {
        const $casesDropdown = $("#casesDropdown");

        // If the menu is being closed, we need to check if the user changed any cases and if so
        // select a new question
        if ($casesDropdown.hasClass("is-active") && needsNewQuestion) {
            // Load the first question
            newQuestion();

            // Clear the feedback and text fields
            ReactDOM.render(<FeedbackElement feedbackLine1="" feedbackLine2=""/>, feedbackDiv);

            needsNewQuestion = false;
        }

        $casesDropdown.toggleClass("is-active");
    });

    // Hook the dropup's contents
    Object.keys(enabledCases).forEach(function (caseKey) {
        const caseCheckbox = $(`#${caseKey}checkbox`);

        caseCheckbox.click(function () {
            enabledCases[caseKey] = !enabledCases[caseKey];
            ReactDOM.render(<CasesDropdownElement enabledCases={enabledCases}/>, dropdownContainer);
            needsNewQuestion = true;
        });
    });

    // Disable the modal when the background is clicked
    $(".modal-background").click(function() {
        $(this).parent().removeClass("is-active");
    });

    // Load the first question
    newQuestion();
}

$(document).ready(main);
