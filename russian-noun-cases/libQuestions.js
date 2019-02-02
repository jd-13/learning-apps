class BaseQuestion {
    constructor() {
        // Do nothing
    }

    /**
     * Inheriting classes must implement this to populate $questionContainer with the HTML elements
     * required by the question, and implement a call back for one of the elements which will enable
     * $nextBtn when the user has provided an answer.
     * 
     * @param {*} $questionContainer 
     * @param {*} $nextBtn 
     * @param {*} $isCorrect 
     * @param {*} $feedbackLine1 
     * @param {*} $feedbackLine2 
     */
    renderQuestion($questionContainer, $nextBtn, $isCorrect, $feedbackLine1, $feedbackLine2) {
        throw new BadMethodCallException();
    }
}

/**
 * Generates and renders a question which asks the user to type the correct case.
 */
class SimpleQuestion extends BaseQuestion {
    constructor(dictionary) {
        super();

        // Choose a noun or pronoun
        if (Math.random() > 0.5) {
            this._setupNoun(dictionary);
        } else {
            this._setupPronoun(dictionary)
        }
    }

    _setupNoun(dictionary) {
        // Choose a noun at random
        const nouns = dictionary.nouns.animate;
        const chosenNoun = nouns[Math.floor(Math.random() * nouns.length)];
        
        // Choose a target case at random, exclude the first case as this will always be nominative
        const availableCases = Object.keys(chosenNoun).slice(1);
        const chosenCaseKey = availableCases[Math.floor(Math.random() * availableCases.length)];
        const chosenCase = chosenNoun[chosenCaseKey];

        // Get the text for the feedback
        const feedbackLine1 = dictionary.caseRules[chosenCaseKey][chosenCase.caseRule];

        // Check if we need to explain a spelling rule
        let feedbackLine2 = "";
        if (chosenCase.hasOwnProperty("spellingRule")) {
            feedbackLine2 = dictionary.spellingRules[chosenCase.spellingRule];
        }

        // Store the results
        this._questionText = `What is the ${chosenCaseKey} case of ${chosenNoun.nominative.text}?`;
        this._answer = chosenNoun[chosenCaseKey].text;
        this._feedbackText = [feedbackLine1, feedbackLine2]
    }

    _setupPronoun(dictionary) {
        let chosenPronoun = undefined;

        // Choose personal or possesive
        if (Math.random() > 0.5) {
            const pronouns = dictionary.pronouns.personal;
            chosenPronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
        } else {
            const pronouns = dictionary.pronouns.possessive;

            // Choose gender
            const genders = Object.keys(pronouns);
            const chosenGender = genders[Math.floor(Math.random() * genders.length)];

            // Choose the pronoun
            chosenPronoun = pronouns[chosenGender][
                Math.floor(Math.random() * pronouns[chosenGender].length)];
        }

        // Choose a target case at random, exclude the first case as this will always be nominative
        const availableCases = Object.keys(chosenPronoun).slice(1);
        const chosenCaseKey = availableCases[Math.floor(Math.random() * availableCases.length)];
        let answer = chosenPronoun[chosenCaseKey];

        let questionSuffix = "";

        // Handle the accusative case
        if (typeof answer === "object") {
            if (Math.random() > 0.5) {
                answer = answer.animate;

                // Specify animate/inanimate if they are different
                if (answer.animate !== answer.inanimate) {
                    questionSuffix = " (animate)";
                }
            } else {
                answer = answer.inanimate;

                // Specify animate/inanimate if they are different
                if (answer.animate !== answer.inanimate) {
                    questionSuffix = " (inanimate)";
                }
            }
        }

        // Get the text for the feedback
        const feedbackLine1 = `The correct answer is ${answer}`;

        // Store the results
        this._questionText = `What is the ${chosenCaseKey} case of ${chosenPronoun.nominative}${questionSuffix}?`;
        this._answer = answer;
        this._feedbackText = [feedbackLine1, ""]
    }

    renderQuestion($questionContainer, $nextBtn, $isCorrect, $feedbackLine1, $feedbackLine2) {
        // Add the question's elements to the document
        let questionHTML = `<div>${this._questionText}</div>`;
        questionHTML = questionHTML.concat("<div><br>");
        questionHTML = questionHTML.concat("<input type=\"text\" name=\"answer\" id=\"answerInput\"/></div>")
        questionHTML = questionHTML.concat("<div><br>");
        questionHTML = questionHTML.concat("<button type=\"button\" class=\"button\" id=\"submitBtn\">Submit</button></div>")

        $questionContainer.append(questionHTML);

        // Set the submit button handler
        let that = this;
        $("#submitBtn").click(function() {

            // Enable the next button
            $nextBtn.prop("disabled", false);

            if ($("#answerInput").val().toLowerCase() === that._answer) {
                $isCorrect.text("Correct!");
            } else {
                $isCorrect.text("Oops!");
                $feedbackLine1.text(that._feedbackText[0]);
                $feedbackLine2.text(that._feedbackText[1]);
            }
        });
    }
}

class CaseChoiceQuestion extends BaseQuestion {
    constructor(dictionary) {
        super();

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
        const phrases = dictionary.nounChoicePhrases;
        const chosenPhrase = phrases[Math.floor(Math.random() * phrases.length)];

        // If there are multiple substitutions available, randomly choose one to quiz the user on
        const questionSubstIdx = Math.floor(Math.random() * chosenPhrase.substitutions.length);
        const questionSubst = chosenPhrase.substitutions[questionSubstIdx];

        // Choose a noun to substitute into the phrase
        const nouns = dictionary.nouns[questionSubst.nounType];
        const chosenNoun = nouns[Math.floor(Math.random() * nouns.length)];

        // Lookup the correct case of the noun for this phrase
        const correctNounCase = chosenNoun[questionSubst.targetCase];

        // Pick two other cases at random, exclude the correct case
        let availableCases =
            Object.keys(chosenNoun).filter(word => word !== questionSubst.targetCase);

        this._incorrectChoices = [];
        for (let idx = 0; idx < 2; idx++) {
            const caseIdx = Math.floor(Math.random() * availableCases.length);
            this._incorrectChoices.push(chosenNoun[availableCases[caseIdx]].text);
            availableCases = availableCases.slice(caseIdx);
        }

        // Substitute the correct noun forms into the substitutions that we're not quiz'ing the user
        // on
        let questionText = chosenPhrase.text;
        const substToken = "||";
        let substitutionNumber = 0;
        for (let idx = 0; (idx = questionText.indexOf(substToken, idx)) > -1; idx++) {

            if (substitutionNumber != questionSubstIdx) {
                const thisSubstitution = chosenPhrase.substitutions[substitutionNumber];
                const substNouns = dictionary.nouns[thisSubstitution.nounType];
                const thisNoun = substNouns[Math.floor(Math.random() * substNouns.length)][thisSubstitution.targetCase]["text"];

                questionText = questionText.substring(0, idx)
                               + thisNoun
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
        const phrases = dictionary.pronounChoicePhrases;
        const chosenPhrase = phrases[Math.floor(Math.random() * phrases.length)];

        // Get the pronoun
        let chosenPronoun = undefined;
        if (chosenPhrase.pronounType === "personal") {
            const pronouns = dictionary.pronouns.personal;
            chosenPronoun = pronouns[Math.floor(Math.random() * pronouns.length)];

        } else {
            const pronouns = dictionary.pronouns.possessive[chosenPhrase.gender];

            // Choose the pronoun
            chosenPronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
        }

        // Lookup the correct case of the noun for this phrase
        let correctPronounCase = chosenPronoun[chosenPhrase.targetCase];

        // Handle the accusative case
        if (typeof correctPronounCase === "object") {
            if (chosenPhrase.isAnimate) {
                correctPronounCase = correctPronounCase.animate;
            } else {
                correctPronounCase = correctPronounCase.inanimate;
            }
        }

        // Pick two other cases at random, exclude the correct case
        let availableCases = Object.keys(chosenPronoun).filter(word => word !== chosenPhrase.targetCase);
        this._incorrectChoices = [];
        for (let idx = 0; idx < 2; idx++) {
            const caseIdx = Math.floor(Math.random() * availableCases.length);
            let incorrectChoice = chosenPronoun[availableCases[caseIdx]];

            // Handle the accusative case
            if (typeof correctPronounCase === "object") {
                if (Math.random() > 0.5) {
                    incorrectChoice = incorrectChoice.animate;
                } else {
                    incorrectChoice = incorrectChoice.inanimate;
                }
            }

            this._incorrectChoices.push(incorrectChoice);
            availableCases = availableCases.slice(caseIdx);
        }

        // Get the text for the feedback
        const feedbackLine1 = `The correct answer is ${correctPronounCase}`;

        // Store the results
        this._questionText = chosenPhrase.text;
        this._answer = correctPronounCase;
        this._feedbackText = [feedbackLine1, ""];
    }

    renderQuestion($questionContainer, $nextBtn, $isCorrect, $feedbackLine1, $feedbackLine2) {
        // Prepare the data
        const splitPhrase = this._questionText.split("||");

        let shuffledAnswers = [...this._incorrectChoices];
        shuffledAnswers.push(this._answer);
        shuffleArray(shuffledAnswers);

        // Add the questions elements to the document
        let questionHTML = "<div>Choose the correct case for the noun/pronoun in the below phrase:</div><br>";
        questionHTML = questionHTML.concat("<div class=\"columns is-vcentered is-centered\">");
        questionHTML = questionHTML.concat(`<div class=\"column is-narrow\">${splitPhrase[0]}</div>`);
        questionHTML = questionHTML.concat("<div class=\"column is-narrow\">");
        shuffledAnswers.forEach(entry => {
            questionHTML = questionHTML.concat(`<button type=\"button\" class=\"button multiAnswer\">${entry}</button><br>`);
        });
        questionHTML = questionHTML.concat("</div>")
        questionHTML = questionHTML.concat(`<div class=\"column is-narrow\">${splitPhrase[1]}</div>`);
        questionHTML = questionHTML.concat("</div>");

        $questionContainer.append(questionHTML);

        // Set the button handlers
        let that = this;
        $(".multiAnswer").click(function() {

            // Enable the next button
            $nextBtn.prop("disabled", false);

            if ($(this).text().toLowerCase() === that._answer) {
                $isCorrect.text("Correct!");
            } else {
                $isCorrect.text("Oops!");
                $feedbackLine1.text(that._feedbackText[0]);
                $feedbackLine2.text(that._feedbackText[1]);
            }
        });
    }
}