DICTIONARY = {
    "caseRules": {
        // TODO: remove use of masculine/feminine/neuter in rules
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

    "pluralRules": {
        "nominative": [
            /*0*/"For nouns ending in a consonant, add ы",
            /*1*/"For nouns ending in й, я, or ь, replace with и",
            /*2*/"For nouns ending in а, replace with ы",
            /*3*/"For nouns ending in о, replace with а",
            /*4*/"For nouns ending in е, replace with я"
        ],

        "genitive": [
            /*0*/"For nouns ending in a consonant (except ж, ч, ш, щ), add ов",
            /*1*/"For nouns ending in й or ц, add ев",
            /*2*/"For nouns ending in ж, ч, ш, or щ, add ей",
            /*3*/"For nouns ending in а, remove а",
            /*4*/"For nouns ending in a consonant followed by я, replace я with ь",
            /*5*/"For nouns ending in a vowel followed by я, replace я with й",
            /*6*/"For nouns ending in о, remove о",
            /*7*/"For nouns ending in е, add й",
            /*8*/"For nouns ending in ие, replace е with й",
            /*9*/"For nouns ending ь, replace with ей",

        ],

        // TODO: there might be a better way to explain this, as the user might not know the
        // nominative and genitive rules
        "accusative": [
            /*0*/"For inanimate nouns, the accusative plural declension is the same as the nominative plural",
            /*1*/"For animate nouns, the accusative plural declension is the same as the genitive plural"
        ],

        "dative": [
            /*0*/"For nouns ending in a consonant, add ам",
            /*1*/"For nouns ending in й, ь, е, or я, replace with ям",
            /*2*/"For nouns ending in а or о, replace with ам",
        ],

        "instrumental": [
            /*0*/"For nouns ending in a consonant, add ами",
            /*1*/"For nouns ending in а or о, replace with ами",
            /*2*/"For nouns ending in й, ь, е, or я, replace with ями"
        ],

        "prepositional": [
            /*0*/"For nouns ending in a consonant, add ах",
            /*1*/"For nouns ending in а or о, replace with ах",
            /*2*/"For nouns ending in й, ь, е, or я, replace with ях"
        ]
    },

    "spellingRules": [
        // Spelling rules for most cases
        /*0*/"Except here this would put ы after one of 'г, к, х, ж, ч, ш, щ', so instead use и",
        /*1*/"Except here this would put an unstressed о after one of 'ж, ч, ш, щ, ц', so instead use е",
        /*2*/"Except here this would put я after one of 'г, к, х, ж, ч, ш, щ, ц', so instead use а",
        /*3*/"Except here this would put ю after one of 'г, к, х, ж, ч, ш, щ, ц', so instead use у",

        // Spelling rules for instrumental case
        /*4*/"Except here this would put ом after one of 'ж, ч, ш, щ, ц', so instead use ем",
        /*5*/"Except here this would put ой after one of 'ж, ч, ш, щ, ц', so instead use ей",

        // Spelling rule for feminine genitive plural
        /*6*/"Except here an о or е is added before the last letter to aid pronunciation",
    ],

    // Noun choice phrases - these may contain multiple nouns that could be substituted
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
        },
        { // под окном собака
            "text": "под || ||",
            "substitutions": [
                {
                    "targetCase": "instrumental",
                    "nounType": "inanimate"
                },
                {
                    "targetCase": "nominative",
                    "nounType": "animate"
                }
            ]
        },
        { // поговори с женщиной
            "text": "поговори с ||",
            "substitutions": [
                {
                    "targetCase": "instrumental",
                    "nounType": "animate"
                }
            ]
        },
        { // мальчик с медведем читают книгу
            "text": "мальчик с || читают книгу",
            "substitutions": [
                {
                    "targetCase": "instrumental",
                    "nounType": "animate"
                }
            ]
        }
    ],

    // Pronoun choice phrases - these may contain only a single pronoun that could be substituted
    "pronounChoicePhrases": [
        // TODO: restructure this, it's a little messy
        // Personal (uses isPlural but not gender or isAnimate)
        {
            "text": "|| учител",
            "targetCase": "nominative",
            "pronounType": "personal",
            "isPlural": false
        },
        {
            "text": "как || зовут?",
            "targetCase": "genitive",
            "pronounType": "personal",
            "isPlural": false
        },
        {
            "text": "сколько || лет?",
            "targetCase": "dative",
            "pronounType": "personal",
            "isPlural": false
        },
        {
            "text": "он хотел бы поехать с ||?",
            "targetCase": "instrumental",
            "pronounType": "personal",
            "isPlural": true
        },

        // Possessive (uses gender and isAnimate but not isPlural)
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
        const phrases = DICTIONARY.nounChoicePhrases;

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
        const phrases = DICTIONARY.pronounChoicePhrases;

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