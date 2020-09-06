var needsNewQuestion = false;
var selectedMaxNumber = 1000;
var availableRanges = ["10", "20", "100", "1000"];

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

    var questionTypes = [SimpleQuestion, ChoiceQuestion];

    // Load the next question
    var question = new questionTypes[Math.floor(Math.random() * questionTypes.length)]();
    question.renderQuestion();
}

var main = function main() {
    console.log("Initialising");

    // Add empty feedback element
    ReactDOM.render(React.createElement(FeedbackElement, { feedbackLine1: "", feedbackLine2: "" }), feedbackDiv);

    // Render the dropup menu
    ReactDOM.render(React.createElement(CasesDropdownElement, { selectedMaxNumber: selectedMaxNumber, availableRanges: availableRanges }), dropdownContainer);

    // Allow the dropup to open when clicked
    $("#casesDropdownButton").click(function () {
        var $casesDropdown = $("#casesDropdown");

        // If the menu is being closed, we need to check if the user changed any settings and if so
        // select a new question
        if ($casesDropdown.hasClass("is-active") && needsNewQuestion) {
            // Load the first question
            newQuestion();

            // Clear the feedback and text fields
            ReactDOM.render(React.createElement(FeedbackElement, { feedbackLine1: "", feedbackLine2: "" }), feedbackDiv);

            needsNewQuestion = false;
        }

        $casesDropdown.toggleClass("is-active");
    });

    // Hook the dropup's contents

    var _loop = function _loop(thisRange) {
        var $rangeCheckbox = $("#" + thisRange + "checkbox");

        $rangeCheckbox.click(function () {
            console.log("Setting max number to " + thisRange);
            selectedMaxNumber = Number(thisRange);
            ReactDOM.render(React.createElement(CasesDropdownElement, { selectedMaxNumber: selectedMaxNumber, availableRanges: availableRanges }), dropdownContainer);
            needsNewQuestion = true;
        });
    };

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = availableRanges[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var thisRange = _step.value;

            _loop(thisRange);
        }

        // Load the first question
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    newQuestion();
};

$(document).ready(main);