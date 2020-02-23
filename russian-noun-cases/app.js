var enabledCases = {
    "genitive": true,
    "accusative": true,
    "dative": true,
    "instrumental": true,
    "prepositional": true
};

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
 * Randomly generates a new question from the provided dictionary.
 */
function newQuestion(dictionary) {
    console.log("New question requested");

    var questionTypes = [SimpleQuestion, CaseChoiceQuestion];
    return new questionTypes[Math.floor(Math.random() * questionTypes.length)](dictionary);
}

var main = function main() {
    console.log("Initialising");

    // Add empty feedback element
    ReactDOM.render(React.createElement(FeedbackElement, { feedbackLine1: "", feedbackLine2: "" }), feedbackDiv);

    // Set up the drop-up menu
    ReactDOM.render(React.createElement(CasesDropdownElement, { enabledCases: enabledCases }), dropdownContainer);
    $("#casesDropdownButton").click(function () {
        $("#casesDropdown").toggleClass("is-active");
    });
    Object.keys(enabledCases).forEach(function (caseKey) {
        var caseCheckbox = $("#" + caseKey + "checkbox");

        caseCheckbox.click(function () {
            enabledCases[caseKey] = !enabledCases[caseKey];
            ReactDOM.render(React.createElement(CasesDropdownElement, { enabledCases: enabledCases }), dropdownContainer);
        });
    });

    // Disable the modal when the background is clicked
    $(".modal-background").click(function () {
        $(this).parent().removeClass("is-active");
    });

    // Load the first question
    var question = newQuestion(DICTIONARY);
    question.renderQuestion();
};

$(document).ready(main);