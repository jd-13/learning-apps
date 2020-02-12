DICTIONARY = {
    "caseRules": {
        "genitive": [
            /*0*/"For masculine nouns ending in a consonant, add а",
            /*1*/"For masculine nouns ending in й or ь, replace with я",
            /*2*/"For feminine nouns ending in а, replace with ы",
            /*3*/"For feminine nouns ending in я or ь, replace with и",
            /*4*/"For neuter nouns ending in о, replace with а",
            /*5*/"For neuter nouns ending in е, replace with я"
        ],
        "accusative": [
            /*0*/"For inanimate masculine nouns there is no change",
            /*1*/"For animate masculine nouns ending in a consonant, add а",
            /*2*/"For animate masculine nouns ending in й, replace with я",
            /*3*/"For animate masculine nouns ending in ь, replace with я",
            /*4*/"For feminine nouns ending in а, replace with у",
            /*5*/"For feminine nouns ending in я, replace with ю",
            /*6*/"For inanimate neuter nouns there is no change"
        ],
        "dative": [
            /*0*/"For masculine nouns ending in a consonant, add у",
            /*1*/"For masculine nouns ending in й or ь, replace with ю",
            /*2*/"For feminine nouns ending in а or я, replace with е",
            /*3*/"For feminine nouns ending in ь, replace with и",
            /*4*/"For neuter nouns ending in о, replace with у",
            /*5*/"For neuter nouns ending in е, replace with ю"
        ],
        "instrumental": [
            /*0*/"For masculine nouns ending in a consonant (except й), add ом",
            /*1*/"For masculine nouns ending in й, replace with eм (ём if stressed)",
            /*2*/"For masculing nouns ending in ь, replace with ем (ём if stressed)",
            /*3*/"For feminine nouns ending in а, replace with ой (or rarely ою)",
            /*4*/"For feminine nouns ending in я, replace with ей (ёй if stressed)",
            /*5*/"For feminine nouns ending in ь, add ю",
            /*6*/"For neuter nouns add м"
        ],
        "prepositional": [
            /*0*/"For nouns ending in a consonant, add е",
            /*1*/"For nouns ending in ь (masculine), replace with е",
            /*2*/"For nouns ending in а, я or й, replace with е",
            /*3*/"For nouns ending in ь (feminine), replace with и",
            /*4*/"For nouns ending in о, replace with е",
            /*5*/"For nouns ending in ия, ий, or ие, replace with ии"
        ]
    },

    "spellingRules": [
        // Spelling rules for most cases
        /*0*/"Except here this would put ы after one of 'г, к, х, ж, ч, ш, щ', so instead use и",
        /*1*/"Except here this would put an unstressed о after one of 'ж, ч, ш, щ, ц', so instead use е",
        /*2*/"Except here this would put я after one of 'г, к, х, ж, ч, ш, щ, ц', so instead use а",
        /*3*/"Except here this would put ю after one of 'г, к, х, ж, ч, ш, щ, ц', so instead use у",

        // Spelling rules for instrumental case
        /*0*/"Except here this would put ом after one of 'ж, ч, ш, щ, ц', so instead use ем",
        /*1*/"Except here this would put ой after one of 'ж, ч, ш, щ, ц', so instead use ей"
    ],

    "nounChoicePhrases": [
        { // мяч собаки
            "text": "|| ||",
            "substitutions": [
                {
                    "targetCase": "nominative",
                    "nounType": "inanimate"
                },
                {
                    "targetCase": "genitive",
                    "nounType": "animate"
                }
            ]
        },
        { // у меня есть яблоки
            "text": "у || есть ||",
            "substitutions": [
                {
                    "targetCase": "genitive",
                    "nounType": "animate"
                },
                {
                    "targetCase": "nominative",
                    "nounType": "inanimate"
                }
            ]
        },
        { // чай пожалуйста
            "text": "|| пожалуйста",
            "substitutions": [
                {
                    "targetCase": "nominative",
                    "nounType": "inanimate"
                }
            ]
        },
        { // у неё нет масла
            "text": "у неё нет ||",
            "substitutions": [
                {
                    "targetCase": "genitive",
                    "nounType": "inanimate"
                }
            ]
        },
        { // у ребёнка нет яблоки
            "text": "у || нет ||",
            "substitutions": [
                {
                    "targetCase": "genitive",
                    "nounType": "animate"
                },
                {
                    "targetCase": "genitive",
                    "nounType": "inanimate"
                }
            ]
        },
        { // на доме TODO: на can also take accusative case, need to clarify
            "text": "на ||",
            "substitutions": [
                {
                    "targetCase": "prepositional",
                    "nounType": "inanimate"
                }
            ]
        },
        { // в доме TODO: в can also take nominative case, need to clarify
            "text": "в ||",
            "substitutions": [
                {
                    "targetCase": "prepositional",
                    "nounType": "inanimate"
                }
            ]
        },
        { // яблоко на столе
            "text": "|| на ||",
            "substitutions": [
                {
                    "targetCase": "nominative",
                    "nounType": "inanimate"
                },
                {
                    "targetCase": "prepositional",
                    "nounType": "inanimate"
                }
            ]
        },
        { // девочка видит маму
            "text": "|| видит ||",
            "substitutions": [
                {
                    "targetCase": "nominative",
                    "nounType": "animate"
                },
                {
                    "targetCase": "accusative",
                    "nounType": "inanimate"
                }
            ]
        }
    ],

    "pronounChoicePhrases": [
        // Personal
        {
            "text": "|| учител",
            "targetCase": "nominative",
            "pronounType": "personal",
        },

        // Possessive
        {
            "text": "|| дом",
            "targetCase": "nominative",
            "pronounType": "possessive",
            "gender": "masculine",
            "isAnimate": false
        },
        {
            "text": "|| кошка",
            "targetCase": "nominative",
            "pronounType": "possessive",
            "gender": "feminine",
            "isAnimate": false
        },
        {
            "text": "это || книга",
            "targetCase": "nominative",
            "pronounType": "possessive",
            "gender": "feminine",
            "isAnimate": false
        },
        {
            "text": "я вижу || маму",
            "targetCase": "accusative",
            "pronounType": "possessive",
            "gender": "feminine",
            "isAnimate": false
        }
    ]
};

/**
 * Represents a noun and all its declensions.
 */
class Noun {
    constructor(json) {
        this._json = json;
    }

    getRandomCase(excludeCase=undefined) {
        let availableCases = Object.keys(this._json.singular);

        if (excludeCase != undefined) {
            availableCases = availableCases.slice(availableCases.indexOf(excludeCase));
        }

        const chosenCaseKey = availableCases[Math.floor(Math.random() * availableCases.length)];
        const chosenCase = this._json.singular[chosenCaseKey];

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
    getPreparedText() {
        const questionSubstIdx = Math.floor(Math.random() * this._json.substitutions.length);
        const questionSubst = this._json.substitutions[questionSubstIdx];

        // Substitute the correct noun forms into the substitutions that we're not quiz'ing the user
        // on
        let preparedText = this._json.text;
        const substToken = "||";
        let substitutionNumber = 0;
        for (let idx = 0; (idx = preparedText.indexOf(substToken, idx)) > -1; idx++) {

            if (substitutionNumber != questionSubstIdx) {
                const thisSubstitution = this._json.substitutions[substitutionNumber];
                const thisNoun = Dictionary.getRandomNoun((thisSubstitution.nounType === "isAnimate"));

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
    getRandomCase() {
        // Choose a case at random, exclude the first case as this will always be nominative
        const availableCases = Object.keys(this._json).slice(1);
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
        const chosenPronoun = Dictionary.getRandomPronoun(this._json.pronounType, this._json.gender);

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
     * Returns a randomly chosen pronoun from the dictionary.
     */
    static getRandomPronoun(pronounType=undefined, gender=undefined) {
        let chosenPronoun = undefined;

        // Pick a pronoun type randomly
        if (pronounType === undefined) {
            const types = ["personal", "posessive"]
            pronounType = types[Math.floor(Math.random() * types.length)];
        }

        // Pick a gender randomly
        if (gender === undefined) {
            const genders = ["masculine", "feminine", "neuter", "plural"];
            gender = genders[Math.floor(Math.random() * genders.length)];
        }

        if (pronounType === "personal") {
            // Choose a personal pronoun
            const pronouns = PRONOUNS.personal;
            chosenPronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
        } else {
            // Choose a possesive pronoun
            const pronouns = PRONOUNS.possessive[gender];
            chosenPronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
        }

        return new Pronoun(chosenPronoun);
    }

    /**
     * Returns a randomly chosen noun phrase.
     */
    static getRandomNounChoicePhrase() {
        // Lookup a random choice phrase from the dictionary
        const phrases = DICTIONARY.nounChoicePhrases;
        return new NounChoicePhrase(phrases[Math.floor(Math.random() * phrases.length)]);
    }

    /**
     * Returns a randomly chosen pronoun phrase from the dictionary.
     */
    static getRandomPronounChoicePhrase() {
        const phrases = DICTIONARY.pronounChoicePhrases;
        return new PronounChoicePhrase(phrases[Math.floor(Math.random() * phrases.length)]);
    }
}