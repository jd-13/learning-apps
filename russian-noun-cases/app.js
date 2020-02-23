var enabledCases = {
    "Genitive": true,
    "Accusative": true,
    "Dative": true,
    "Instrumental": true,
    "Prepositional": true
};

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

    // Load the first question
    var question = newQuestion(DICTIONARY);
    question.renderQuestion();
};

$(document).ready(main);