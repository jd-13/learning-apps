let needsNewQuestion = false;
let selectedMaxNumber = 1000;
const availableRanges = ["10", "20", "100", "1000"];
let enabledNumbers = { "cardinal": true, "ordinal": true };

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

    const questionTypes = [SimpleQuestion, ChoiceQuestion];

    // Load the next question
    let question = new questionTypes[Math.floor(Math.random() * questionTypes.length)]();
    question.renderQuestion();
}

const main = function() {
    console.log("Initialising");

    // Add empty feedback element
    ReactDOM.render(<FeedbackElement feedbackLine1="" feedbackLine2=""/>, feedbackDiv);

    // Render the dropup menu
    ReactDOM.render(<SettingsDropdownElement selectedMaxNumber={selectedMaxNumber} availableRanges={availableRanges} enabledNumbers={enabledNumbers}/>, dropdownContainer);

    // Allow the dropup to open when clicked
    $("#settingsDropdownButton").click(function () {
        const $settingsDropdown = $("#settingsDropdown");

        // If the menu is being closed, we need to check if the user changed any settings and if so
        // select a new question
        if ($settingsDropdown.hasClass("is-active") && needsNewQuestion) {
            // Load the first question
            newQuestion();

            // Clear the feedback and text fields
            ReactDOM.render(<FeedbackElement feedbackLine1="" feedbackLine2=""/>, feedbackDiv);

            needsNewQuestion = false;
        }

        $settingsDropdown.toggleClass("is-active");
    });

    // Hook the dropup range buttons
    for (let thisRange of availableRanges) {
        const $rangeCheckbox = $(`#${thisRange}checkbox`);

        $rangeCheckbox.click(function () {
            console.log(`Setting max number to ${thisRange}`);
            selectedMaxNumber = Number(thisRange);
            ReactDOM.render(<SettingsDropdownElement selectedMaxNumber={selectedMaxNumber} availableRanges={availableRanges} enabledNumbers={enabledNumbers}/>, dropdownContainer);
            needsNewQuestion = true;
        });
    }

    // Hook the dropup enabled numbers buttons
    for (let thisType of Object.keys(enabledNumbers)) {
        const $typeCheckbox = $(`#${thisType}checkbox`);

        $typeCheckbox.click(function () {
            enabledNumbers[thisType] = !enabledNumbers[thisType];
            ReactDOM.render(<SettingsDropdownElement selectedMaxNumber={selectedMaxNumber} availableRanges={availableRanges} enabledNumbers={enabledNumbers}/>, dropdownContainer);
            needsNewQuestion = true;
        });
    }

    // Load the first question
    newQuestion();
}

$(document).ready(main);
