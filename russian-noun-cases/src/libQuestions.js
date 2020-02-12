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
class SimpleQuestion extends BaseQuestion {
    constructor(dictionary) {
        super();

        console.log("Creating SimpleQuestion");

        // Choose a noun or pronoun
        if (Math.random() > 0.5) {
            this._setupNoun(dictionary);
        } else {
            this._setupPronoun(dictionary)
        }
    }

    _setupNoun(dictionary) {

        // Choose a noun at random
        const chosenNoun = Dictionary.getRandomNoun(isAnimate=true);
        console.log(`Chose noun: ${chosenNoun.getSingularDeclension("nominative").text}`);

        const [chosenCase, chosenDeclension] = chosenNoun.getRandomCase();

        // Get the text for the feedback
        const feedbackLine1 = dictionary.caseRules[chosenCase][chosenDeclension.caseRule];

        // Check if we need to explain a spelling rule
        let feedbackLine2 = "";
        if (chosenDeclension.hasOwnProperty("spellingRule")) {
            feedbackLine2 = dictionary.spellingRules[chosenDeclension.spellingRule];
        }

        // Store the results
        this._questionText = `What is the ${chosenCase} case of ${chosenNoun.getSingularDeclension("nominative").text}?`;
        this._answer = chosenNoun.getSingularDeclension(chosenCase).text;
        this._feedbackText = [feedbackLine1, feedbackLine2]
    }

    _setupPronoun(dictionary) {

        const chosenPronoun = Dictionary.getRandomPronoun();
        console.log(`Chose pronoun: ${chosenPronoun.nominative}`);

        const [chosenCaseKey, isAnimate, chosenCase] = chosenPronoun.getRandomCase();

        // For the accusative case we need to specify in the question text whether the object should
        // be animate or inanimate
        let questionSuffix = "";
        if (chosenCaseKey === "accusative") {
            if (isAnimate) {
                questionSuffix = " (animate)";
            } else {
                questionSuffix = " (inanimate)";
            }
        }

        // Get the text for the feedback
        const feedbackLine1 = `The correct answer is ${chosenCase}`;

        // Store the results
        this._questionText = `What is the ${chosenCaseKey} case of ${chosenPronoun.nominative}${questionSuffix}?`;
        this._answer = chosenCase;
        this._feedbackText = [feedbackLine1, ""]
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

class CaseChoiceQuestion extends BaseQuestion {
    constructor(dictionary) {
        super();

        console.log("Creating CaseChoiceQuestion");

        // Choose a noun or pronoun
        if (Math.random() > 0.5) {
            this._setupNoun(dictionary);
        } else {
            this._setupPronoun(dictionary)
        }
    }

    /**
     * Chooses a phrase from the dictionary, then substitutes a noun for the || characters, choosing
     * the correct form of the noun and two incorrect forms.
     *
     * @param {*} dictionary
     */
    _setupNoun(dictionary) {
        // Choose a phrase from the dictionary
        const chosenPhrase = Dictionary.getRandomNounChoicePhrase();
        console.log(`Chose noun phrase: ${chosenPhrase.text}`);

        // If there are multiple substitutions available, randomly choose one to quiz the user on
        const questionSubstIdx = Math.floor(Math.random() * chosenPhrase.substitutions.length);
        const questionSubst = chosenPhrase.substitutions[questionSubstIdx];

        // Choose a noun to substitute into the phrase
        const chosenNoun = Dictionary.getRandomNoun(isAnimate=(questionSubst.nounType === "animate"));
        console.log(`Chose noun: ${chosenNoun.getSingularDeclension("nominative").text}`);

        // Lookup the correct case of the noun for this phrase
        const correctNounCase = chosenNoun.getSingularDeclension(questionSubst.targetCase);
        console.log(`Correct noun case: ${correctNounCase.text}`);

        // Pick two other cases at random, exclude the correct case
        this._incorrectChoices = chosenNoun.getRandomDeclensions(2, questionSubst.targetCase);
        console.log(`Incorrect choices: ${this._incorrectChoices}`);

        // Substitute the correct noun forms into the substitutions that we're not quiz'ing the user
        // on
        let questionText = chosenPhrase.text;
        const substToken = "||";
        let substitutionNumber = 0;
        for (let idx = 0; (idx = questionText.indexOf(substToken, idx)) > -1; idx++) {

            if (substitutionNumber != questionSubstIdx) {
                console.log(`Subtitution number ${substitutionNumber}`);

                const thisSubstitution = chosenPhrase.substitutions[substitutionNumber];
                const thisNoun = Dictionary.getRandomNoun(isAnimate=(thisSubstitution.nounType === "isAnimate"));

                questionText = questionText.substring(0, idx)
                               + thisNoun.getSingularDeclension(thisSubstitution.targetCase).text
                               + questionText.substring(idx + substToken.length);
            }

            substitutionNumber++;
        }

        // Get the text for the feedback
        let feedbackLine1 = `${questionSubst.targetCase} case`;
        feedbackLine1 = feedbackLine1.charAt(0).toUpperCase() + feedbackLine1.slice(1);

        // Nominative case has no case rule
        if (correctNounCase.hasOwnProperty("caseRule")) {
            feedbackLine1 = feedbackLine1.concat(`: ${dictionary.caseRules[questionSubst.targetCase][correctNounCase.caseRule]}`);
        }

        let feedbackLine2 = "";
        if (correctNounCase.hasOwnProperty("spellingRule")) {
            feedbackLine2 = dictionary.spellingRules[correctNounCase.spellingRule];
        }

        // Store the results
        this._questionText = questionText;
        this._answer = correctNounCase.text;
        this._feedbackText = [feedbackLine1, feedbackLine2];
    }

    _setupPronoun(dictionary) {
        // Choose a phrase from the dictionary
        const chosenPhrase = Dictionary.getRandomPronounChoicePhrase();
        console.log(`Chose pronoun phrase: ${chosenPhrase.text}`);

        // Get the pronoun
        let chosenPronoun = Dictionary.getRandomPronoun(chosenPhrase.pronounType, chosenPhrase.gender);
        console.log(`Chosen pronoun: ${chosenPronoun.getDeclension("nominative")}`);

        // Lookup the correct case of the noun for this phrase
        let correctPronounCase = Dictionary.getCorrectPronounDeclensionForPronounChoicePhrase(chosenPhrase, chosenPronoun);
        console.log(`Correct case: ${correctPronounCase}`);

        // Pick two other cases at random, exclude the correct case
        this._incorrectChoices = Dictionary.getIncorrectPronounCasesForPronounChoicePhrase(chosenPhrase, chosenPronoun);

        // Get the text for the feedback
        const feedbackLine1 = `The correct answer is ${correctPronounCase}`;

        // Store the results
        this._questionText = chosenPhrase.text;
        this._answer = correctPronounCase;
        this._feedbackText = [feedbackLine1, ""];
    }

    renderQuestion() {
        // Prepare the answer choices
        shuffledAnswers = [...this._incorrectChoices];
        shuffledAnswers.push(this._answer);
        shuffleArray(shuffledAnswers);

        // Render the question
        ReactDOM.render(<CaseChoiceQuestionElement questionText={this._questionText} answer={this._answer} shuffledAnswers={shuffledAnswers} incorrectChoices={this._incorrectChoices} feedbackLine1={this._feedbackText[0]} feedbackLine2={this._feedbackText[1]}/>, questionDiv);

        // Render the buttons
        const reportTitle = this._questionText;
        const reportBody = `[${this._shuffledAnswers}][${this._answer}]`;
        ReactDOM.render(<MainButtonsElement reportTitle={reportTitle} reportBody={reportBody} nextButtonDisabled={true}/>, buttonsDiv);
    }
}
