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

        // Choose a verb at random
        const chosenVerb = Verbs.getRandomVerb();
        console.log(`Chose verb: ${chosenVerb.getInfinitive()}`);

        // Choose a pronoun at random
        const chosenPronoun = Verbs.getRandomPronoun();
        console.log(`Chose pronoun: ${chosenPronoun}`);

        this._questionText = `${chosenPronoun[0]} (${chosenVerb.getInfinitive()})`;
        this._answer = chosenVerb.getConjugation(chosenPronoun[1]);

        this._feedbackText = [`The correct conjugation is ${this._answer}`, ""]
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

        // Choose a verb at random
        const chosenVerb = Verbs.getRandomVerb();
        console.log(`Chose verb: ${chosenVerb.getInfinitive()}`);

        // Choose a pronoun at random
        const chosenPronoun = Verbs.getRandomPronoun();
        console.log(`Chose pronoun: ${chosenPronoun}`);

        // Lookup the correct conjugation of the verb for this phrase
        const correctConjugation = chosenVerb.getConjugation(chosenPronoun[1]);

        // Pick two other cases at random, exclude the correct case
        this._incorrectChoices = chosenVerb.getRandomConjugations(2, chosenPronoun[1]);
        console.log(`Incorrect choices: ${this._incorrectChoices}`);

        // Store the results
        this._questionText = `${chosenPronoun[0]} `;
        this._answer = correctConjugation;
        this._feedbackText = [`The correct conjugation is ${this._answer}`, ""]
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
