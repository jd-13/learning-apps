/**
 * Represents a noun and all its declensions.
 */
class Noun {
    constructor(json) {
        this._json = json;
    }

    getRandomCase(excludeCases=undefined, plural) {

        // Use singular here as the result is the same for singular or plural
        let availableCases = Object.keys(this._json.singular);

        // Exclude cases if requested
        if (excludeCases != undefined) {
            availableCases = availableCases.filter(function(element) {
                return excludeCases.indexOf(element) < 0;
            });
        }

        // Randomly choose the case
        const chosenCaseKey = availableCases[Math.floor(Math.random() * availableCases.length)];

        let chosenCase = "";
        if (plural) {
            chosenCase = this._json.plural[chosenCaseKey];
        } else {
            chosenCase = this._json.singular[chosenCaseKey]
        }

        return [chosenCaseKey, chosenCase];
    }

    getSingularDeclensions() { return this._json.singular; }

    getSingularDeclension(caseKey) {
        return this._json.singular[caseKey];
    }

    getPluralDeclensions() { return this._json.plural; }

    getPluralDeclension(caseKey) {
        return this._json.plural[caseKey];
    }

    /**
     * Returns an array of randomly chosen declensions for this noun, all of which are incorrect for
     * the given phrase.substitution.
     */
     getRandomDeclensions(numDeclensions, exludeCase) {
        // Pick two cases at random, exclude the correct case
        let availableCases =
            Object.keys(this._json.singular).filter(word => word !== exludeCase);

        let incorrectChoices = [];
        for (let idx = 0; idx < numDeclensions; idx++) {
            // Choose a case at random
            const caseIdx = Math.floor(Math.random() * availableCases.length);
            incorrectChoices.push(this._json.singular[availableCases[caseIdx]].text);

            // Remove the chosen case from the options
            availableCases = availableCases.slice(caseIdx);
        }

        return incorrectChoices;
    }
}

class NounChoicePhrase {
    constructor(json) {
        this._json = json;
    }

    /**
     * Does all but one of the substitutions in the phrase, returning the phrase and the
     * substitution data for the substitution it hasn't performed.
     */
    getPreparedText(excludeCases=undefined) {
        // Build an array of indicies the represent the possible substitutions and shuffle them so
        // that we can iterate through them randomly
        let shuffledIndicies = [...Array(this._json.substitutions.length).keys()];
        shuffleArray(shuffledIndicies);

        // Stop at the first substitution which we can use
        let questionSubstIdx = undefined;
        let questionSubst = undefined;
        for (const substitutionIndex of shuffledIndicies) {
            const thisSubstitution = this._json.substitutions[substitutionIndex];

            if (excludeCases === undefined) {

                // If no cases are exluded, just return the first phrase
                questionSubstIdx = substitutionIndex;
                questionSubst = thisSubstitution
                break;

            } else {

                // If the phrase contains a case substitution that is not in the exclusion list, return it
                if (!excludeCases.includes(thisSubstitution.targetCase)) {
                    questionSubstIdx = substitutionIndex;
                    questionSubst = thisSubstitution;
                    break;
                }

            }
        }

        // Substitute the correct noun forms into the substitutions that we're not quiz'ing the user
        // on
        let preparedText = this._json.text;
        const substToken = "||";
        let substitutionNumber = 0;
        for (let idx = 0; (idx = preparedText.indexOf(substToken, idx)) > -1; idx++) {

            if (substitutionNumber != questionSubstIdx) {
                const thisSubstitution = this._json.substitutions[substitutionNumber];
                const thisNoun = Dictionary.getRandomNoun(thisSubstitution.nounType === "animate");

                preparedText = preparedText.substring(0, idx)
                               + thisNoun.getSingularDeclension(thisSubstitution.targetCase).text
                               + preparedText.substring(idx + substToken.length);
            }

            substitutionNumber++;
        }


        return [questionSubst, preparedText];
    }
}

/**
 * Represents a personal or possesive pronoun of a particular gender and all its declensions.
 */
class Pronoun {
    constructor(json) {
        this._json = json;
    }

    /**
     * Returns a randomly chosen case and declension for this pronoun.
     */
    getRandomCase(excludeCases=undefined) {
        // Choose a case at random
        let availableCases = Object.keys(this._json);

        // Exclude cases if requested
        if (excludeCases != undefined) {
            availableCases = availableCases.filter(function(element) {
                return excludeCases.indexOf(element) < 0;
            });
        }

        const chosenCaseKey = availableCases[Math.floor(Math.random() * availableCases.length)];
        let chosenCase = this._json[chosenCaseKey];

        // Accusative possesive pronouns have different declensions for animate and inanimate
        // objects, handle this here
        let isAnimate = undefined;
        if (typeof chosenCase === "object") {

            // Choose animate or inanimate randomly
            if (Math.random() > 0.5) {
                chosenCase = chosenCase.animate;
                isAnimate = true;
            } else {
                chosenCase = chosenCase.inanimate;
                isAnimate = false;
            }
        }

        return [chosenCaseKey, isAnimate, chosenCase];
    }

    getDeclension(caseKey) { return this._json[caseKey]; }
}

class PronounChoicePhrase {
    constructor(json) {
        this._json = json;
    }

    _getCorrectPronounDeclension(pronoun) {
        let correctPronounCase = pronoun.getDeclension([this._json.targetCase]);

        // Handle the accusative case
        if (typeof correctPronounCase === "object") {
            if (this._json.isAnimate) {
                correctPronounCase = correctPronounCase.animate;
            } else {
                correctPronounCase = correctPronounCase.inanimate;
            }
        }

        return correctPronounCase;
    }

    _getIncorrectPronounDeclensions(pronoun) {
        // Get the list of cases to choose from, exclude the correct one
        let availableCases = Object.keys(pronoun._json).filter(word => word !== this._json.targetCase);

        let incorrectChoices = [];
        for (let idx = 0; idx < 2; idx++) {
            const caseIdx = Math.floor(Math.random() * availableCases.length);
            let incorrectChoice = pronoun._json[availableCases[caseIdx]];

            // Handle the accusative case
            if (typeof incorrectChoice === "object") {
                if (Math.random() > 0.5) {
                    incorrectChoice = incorrectChoice.animate;
                } else {
                    incorrectChoice = incorrectChoice.inanimate;
                }
            }

            incorrectChoices.push(incorrectChoice);
            availableCases = availableCases.slice(caseIdx);
        }

        return incorrectChoices;
    }

    getText() { return this._json.text; }

    /**
     * Returns the correct and randomly chosen incorrect declensions of the given pronoun to be
     * substituted into the given phrase.
     */
    getCorrectAndIncorrectPronounDeclensions() {
        let chosenPronoun = undefined;
        if (this._json.pronounType === "personal") {
            chosenPronoun = Dictionary.getRandomPersonalPronoun(this._json.isPlural);
        } else {
            chosenPronoun = Dictionary.getRandomPossessivePronoun(this._json.gender);
        }

        const correctPronounCase = this._getCorrectPronounDeclension(chosenPronoun);
        const incorrectChoices = this._getIncorrectPronounDeclensions(chosenPronoun);

        return [correctPronounCase, incorrectChoices];
    }
}

/**
 * Provides the interface to the dictionary data structure. Nothing should access the JSON data
 * directly.
 */
class Dictionary {
    /**
     * Returns a randomly chosen noun from the dictionary.
     */
    static getRandomNoun(isAnimate) {
        let nouns = INANIMATE_NOUNS;
        if (isAnimate) {
            nouns = ANIMATE_NOUNS;
        }

        return new Noun(nouns[Math.floor(Math.random() * nouns.length)]);
    }

    /**
     * Returns a randomly chosen personal pronoun from the dictionary.
     */
    static getRandomPersonalPronoun(isPlural=undefined) {
        let chosenPronoun = undefined;

        // Pick isPlural randomly
        if (isPlural === undefined) {
            isPlural = (Math.random() > 0.5);
        }

        // Choose a personal pronoun
        let pronouns = undefined;
        if (isPlural) {
            pronouns = PRONOUNS.personal.plural;
        } else {
            pronouns = PRONOUNS.personal.singular;
        }

        chosenPronoun = pronouns[Math.floor(Math.random() * pronouns.length)];

        return new Pronoun(chosenPronoun);
    }

    /**
     * Returns a randomly chosen possessive pronoun from the dictionary.
     */
    static getRandomPossessivePronoun(gender=undefined) {
        let chosenPronoun = undefined;

        // Pick a gender randomly
        if (gender === undefined) {
            const genders = ["masculine", "feminine", "neuter", "plural"];
            gender = genders[Math.floor(Math.random() * genders.length)];
        }

        // Choose a possesive pronoun
        const pronouns = PRONOUNS.possessive[gender];
        chosenPronoun = pronouns[Math.floor(Math.random() * pronouns.length)];

        return new Pronoun(chosenPronoun);
    }

    /**
     * Returns a randomly chosen noun phrase.
     */
    static getRandomNounChoicePhrase(excludeCases=undefined) {
        const phrases = CHOICE_PHRASES.nouns;

        // Build an array of the indicies and shuffle them so that we can iterate through the
        // phrases randomly
        let shuffledIndicies = [...Array(phrases.length).keys()];
        shuffleArray(shuffledIndicies);

        // Stop at the first phrase which contains a target case we can use
        for (const phraseIndex of shuffledIndicies) {
            const thisPhrase = phrases[phraseIndex];

            if (excludeCases === undefined) {

                // If no cases are exluded, just return the first phrase
                return new NounChoicePhrase(thisPhrase);

            } else {

                // If the phrase contains a case substitution that is not in the exclusion list, return it
                for (const substitution of thisPhrase.substitutions) {
                    if (!excludeCases.includes(substitution.targetCase)) {
                        return new NounChoicePhrase(thisPhrase);
                    }
                }
            }
        }
    }

    /**
     * Returns a randomly chosen pronoun phrase from the dictionary.
     */
    static getRandomPronounChoicePhrase(excludeCases=undefined) {
        const phrases = CHOICE_PHRASES.pronouns;

        // Build an array of the indicies and shuffle them so that we can iterate through the
        // phrases randomly
        let shuffledIndicies = [...Array(phrases.length).keys()];
        shuffleArray(shuffledIndicies);

        // Stop at the first phrase which contains a target case we can use
        for (const phraseIndex of shuffledIndicies) {
            const thisPhrase = phrases[phraseIndex];

            if (excludeCases === undefined) {

                // If no cases are exluded, just return the first phrase
                return new PronounChoicePhrase(thisPhrase);

            } else if (!excludeCases.includes(thisPhrase.targetCase)) {

                // If the substitution in this pronoun phrase uses a case that isn't excluded, return it
                return new PronounChoicePhrase(thisPhrase);

            }
        }
    }
}