var enabledCases = {
    "genitive": true,
    "accusative": true,
    "dative": true,
    "instrumental": true,
    "prepositional": true
};

var needsNewQuestion = false;

function getEnabledCasesList() {
    var retVal = [];

    Object.keys(enabledCases).forEach(function (caseKey) {
        if (enabledCases[caseKey]) {
            retVal.push(caseKey);
        }
    });

    return retVal;
}

function getDisabledCasesList() {
    var retVal = [];

    Object.keys(enabledCases).forEach(function (caseKey) {
        if (!enabledCases[caseKey]) {
            retVal.push(caseKey);
        }
    });

    return retVal;
}

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
function newQuestion(dictionary) {
    console.log("New question requested");

    var questionTypes = [SimpleQuestion, CaseChoiceQuestion];

    // Load the next question
    if (getEnabledCasesList().length == 0) {
        $("#warningModal").addClass("is-active");
    } else {
        var question = new questionTypes[Math.floor(Math.random() * questionTypes.length)](dictionary);
        question.renderQuestion();
    }
}

var main = function main() {
    console.log("Initialising");

    // Add empty feedback element
    ReactDOM.render(React.createElement(FeedbackElement, { feedbackLine1: "", feedbackLine2: "" }), feedbackDiv);

    // Render the dropup menu
    ReactDOM.render(React.createElement(CasesDropdownElement, { enabledCases: enabledCases }), dropdownContainer);

    // Allow the dropup to open when clicked
    $("#casesDropdownButton").click(function () {
        var $casesDropdown = $("#casesDropdown");

        // If the menu is being closed, we need to check if the user changed any cases and if so
        // select a new question
        if ($casesDropdown.hasClass("is-active") && needsNewQuestion) {
            // Load the first question
            newQuestion(DICTIONARY);

            // Clear the feedback and text fields
            ReactDOM.render(React.createElement(FeedbackElement, { feedbackLine1: "", feedbackLine2: "" }), feedbackDiv);

            needsNewQuestion = false;
        }

        $casesDropdown.toggleClass("is-active");
    });

    // Hook the dropup's contents
    Object.keys(enabledCases).forEach(function (caseKey) {
        var caseCheckbox = $("#" + caseKey + "checkbox");

        caseCheckbox.click(function () {
            enabledCases[caseKey] = !enabledCases[caseKey];
            ReactDOM.render(React.createElement(CasesDropdownElement, { enabledCases: enabledCases }), dropdownContainer);
            needsNewQuestion = true;
        });
    });

    // Disable the modal when the background is clicked
    $(".modal-background").click(function () {
        $(this).parent().removeClass("is-active");
    });

    // Load the first question
    newQuestion(DICTIONARY);
};

$(document).ready(main);