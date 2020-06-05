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
 * Generates and renders a question which asks the user to type the correct case.
 */
class TypedQuestion extends BaseQuestion {
    constructor() {
        super();

        console.log("Creating TypedQuestion");

        // Choose a country at random
        const chosenCountry = Countries.getRandomCountry();
        console.log(`Chose country: ${chosenCountry.getCountryName()}`);

        const questions = [
            "_setupCountry",
            "_setupGenitive",
            "_setupLanguage",
            "_setupNationality"
        ];

        const chosenQuestion = questions[Math.floor(Math.random() * questions.length)];
        this[chosenQuestion](chosenCountry);
    }

    _setupCountry(chosenCountry) {
        this._flagURL = chosenCountry.getFlagURL();
        this._questionText = "Что это за страна?";
        this._answers = [chosenCountry.getCountryName()];
        this._feedbackText = `Это ${chosenCountry.getCountryName()}`;
    }

    _setupGenitive(chosenCountry) {
        this._flagURL = chosenCountry.getFlagURL();
        this._questionText = "Они из ...";
        this._answers = [chosenCountry.getGenitive()];
        this._feedbackText = `Они из ${chosenCountry.getGenitive()}`;
    }

    _setupLanguage(chosenCountry) {
        this._flagURL = chosenCountry.getFlagURL();
        this._questionText = "Они говорят по- ...";
        this._answers = chosenCountry.getLanguages();
        this._feedbackText = `Они говорят по-${chosenCountry.getLanguages()}`;
    }

    _setupNationality(chosenCountry) {
        // Choose a random gender
        const [chosenGender, chosenPronoun] = Countries.getRandomGender();

        this._flagURL = chosenCountry.getFlagURL();
        this._questionText = `${chosenPronoun} - это ...`;
        this._answers = [chosenCountry.getNationality(chosenGender)];
        this._feedbackText = `${chosenPronoun} ${chosenCountry.getNationality(chosenGender)}`;
    }

    renderQuestion() {
        // Render the question
        ReactDOM.render(<TypedQuestionElement flagURL={this._flagURL} questionText={this._questionText} answers={this._answers} feedbackText={this._feedbackText}/>, questionDiv);

        // Render the buttons
        const reportTitle = this._questionText;
        const reportBody = `[${this._answers}]`;
        ReactDOM.render(<MainButtonsElement reportTitle={reportTitle} reportBody={reportBody} nextButtonDisabled={true}/>, buttonsDiv);
    }
}

class ChoiceQuestion extends BaseQuestion {
    constructor() {
        super();

        console.log("Creating ChoiceQuestion");

        // Choose a country at random
        const chosenCountry = Countries.getRandomCountry();
        console.log(`Chose country: ${chosenCountry.getCountryName()}`);

        const questions = [
            "_setupCountry",
            "_setupGenitive",
            "_setupLanguage",
            "_setupNationality"
        ];

        const chosenQuestion = questions[Math.floor(Math.random() * questions.length)];
        this[chosenQuestion](chosenCountry);
    }

    _setupCountry(chosenCountry) {
        // Choose two incorrect countries at random
        // TODO: there may be duplicates
        this._incorrectChoices = [Countries.getRandomCountry().getCountryName(),
                                  Countries.getRandomCountry().getCountryName()];
        console.log(`Incorrect choices: ${this._incorrectChoices}`);

        // Store the results
        this._flagURL = chosenCountry.getFlagURL();
        this._questionText = "Что это за страна?";
        this._answers = [chosenCountry.getCountryName()];
        this._feedbackText = `Это ${chosenCountry.getCountryName()}`;
    }

    _setupGenitive(chosenCountry) {
        // Choose two incorrect countries at random
        // TODO: there may be duplicates
        this._incorrectChoices = [Countries.getRandomCountry().getGenitive(),
                                  Countries.getRandomCountry().getGenitive()];
        console.log(`Incorrect choices: ${this._incorrectChoices}`);

        // Store the results
        this._flagURL = chosenCountry.getFlagURL();
        this._questionText = "Они из ...";
        this._answers = [chosenCountry.getGenitive()];
        this._feedbackText = `Они из ${chosenCountry.getGenitive()}`;
    }

    _setupLanguage(chosenCountry) {
        // Choose two incorrect countries at random
        // TODO: there may be duplicates
        this._incorrectChoices = [Countries.getRandomCountry().getRandomLanguage(),
                                  Countries.getRandomCountry().getRandomLanguage()];
        console.log(`Incorrect choices: ${this._incorrectChoices}`);

        // Store the results
        this._flagURL = chosenCountry.getFlagURL();
        this._questionText = "Они говорят по- ...";
        this._answers = chosenCountry.getLanguages();
        this._feedbackText = `Они говорят по-${chosenCountry.getLanguages()}`;
    }

    _setupNationality(chosenCountry) {
        // Choose a random gender
        const [chosenGender, chosenPronoun] = Countries.getRandomGender();

        // Collect all gender versions for this country
        const nationalities = {
            "masculine": chosenCountry.getNationality("masculine"),
            "feminine": chosenCountry.getNationality("feminine"),
            "plural": chosenCountry.getNationality("plural")
        }

        // Store the answer and remove it from the dictionary
        this._answers = [nationalities[chosenGender]];
        console.log(this.answer);
        delete nationalities[chosenGender];


        // Use the remaining values in the dictionary as incorrect options
        this._incorrectChoices = Object.values(nationalities);

        // Store the results
        this._flagURL = chosenCountry.getFlagURL();
        this._questionText = `${chosenPronoun} - это ...`;
        this._feedbackText = `${chosenPronoun} ${chosenCountry.getNationality(chosenGender)}`;
    }

    renderQuestion() {
        // Prepare the answer choices
        shuffledAnswers = [...this._incorrectChoices];
        shuffledAnswers.push(this._answers);
        shuffleArray(shuffledAnswers);

        // Render the question
        ReactDOM.render(<ChoiceQuestionElement flagURL={this._flagURL} questionText={this._questionText} answers={this._answers} shuffledAnswers={shuffledAnswers} incorrectChoices={this._incorrectChoices} feedbackText={this._feedbackText}/>, questionDiv);

        // Render the buttons
        const reportTitle = this._questionText;
        const reportBody = `[${this._shuffledAnswers}][${this._answers}]`;
        ReactDOM.render(<MainButtonsElement reportTitle={reportTitle} reportBody={reportBody} nextButtonDisabled={true}/>, buttonsDiv);
    }
}
