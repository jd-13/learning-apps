class BaseQuestion {
    constructor() {
        // Do nothing
    }

    /**
     * Inheriting classes must implement this to populate questionDiv with the HTML elements
     * required by the question, and implement a call back for one of the elements which will enable
     * $nextBtn when the user has provided an answer.
     */
    renderQuestion() {
        throw new BadMethodCallException();
    }
}

/**
 * Generates and renders a question which asks the user to type the correct conjugation.
 */
class SimpleQuestion extends BaseQuestion {
    constructor() {
        super();
        console.log("Creating SimpleQuestion");
        this._setup();
    }

    _setup() {
        // Choose a number at random
        const [chosenNumber, translatedString] =
            Math.random() > 0.5 ? Numbers.getRandomCardinal(selectedMaxNumber) : Numbers.getRandomOrdinal(selectedMaxNumber);

        console.log(`Chose number: ${chosenNumber}`);

        this._questionText = `Translate: ${chosenNumber}`;
        this._answer = translatedString;

        this._feedbackText = [`The correct answer is ${this._answer}`, ""]
    }

    renderQuestion() {
        // Render the question
        ReactDOM.render(<SimpleQuestionElement questionText={this._questionText} answer={this._answer} feedbackLine1={this._feedbackText[0]} feedbackLine2={this._feedbackText[1]}/>, questionDiv);

        // Render the buttons
        const reportTitle = this._questionText;
        const reportBody = `[${this._answer}]`;
        ReactDOM.render(<MainButtonsElement reportTitle={reportTitle} reportBody={reportBody} nextButtonDisabled={true}/>, buttonsDiv);
    }
}

class ChoiceQuestion extends BaseQuestion {
    constructor() {
        super();
        console.log("Creating ChoiceQuestion");
        this._setup();
    }

    _setup() {
        // Choose a number at random
        const [chosenNumber, translatedString] =
            Math.random() > 0.5 ? Numbers.getRandomCardinal(selectedMaxNumber) : Numbers.getRandomOrdinal(selectedMaxNumber);

        console.log(`Chose number: ${chosenNumber}`);

        // Select 2 incorrect choices
        this._incorrectChoices = []
        for (let idx = 0; idx < 2; idx++) {
            const [_, incorrectChoice] =
                Math.random() > 0.5 ? Numbers.getRandomCardinal(selectedMaxNumber) : Numbers.getRandomOrdinal(selectedMaxNumber);

            this._incorrectChoices.push(incorrectChoice);
        }

        console.log(`Incorrect choices: ${this._incorrectChoices}`);

        // Store the results
        this._questionText = `Choose the correct translation for: ${chosenNumber} `;
        this._answer = translatedString;
        this._feedbackText = [`The correct answer is ${this._answer}`, ""]
    }

    renderQuestion() {
        // Prepare the answer choices
        shuffledAnswers = [...this._incorrectChoices];
        shuffledAnswers.push(this._answer);
        shuffleArray(shuffledAnswers);

        // Render the question
        ReactDOM.render(<ChoiceQuestionElement questionText={this._questionText} answer={this._answer} shuffledAnswers={shuffledAnswers} incorrectChoices={this._incorrectChoices} feedbackLine1={this._feedbackText[0]} feedbackLine2={this._feedbackText[1]}/>, questionDiv);

        // Render the buttons
        const reportTitle = this._questionText;
        const reportBody = `[${this._shuffledAnswers}][${this._answer}]`;
        ReactDOM.render(<MainButtonsElement reportTitle={reportTitle} reportBody={reportBody} nextButtonDisabled={true}/>, buttonsDiv);
    }
}
