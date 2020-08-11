PRONOUNS =
{
    "я": "first singular",
    "ты": "second singular",
    "он": "third singular",
    "она": "third singular",
    "мы": "first plural",
    "вы": "second plural",
    "они": "third plural",
}

// TODO: Currently only present tense verbs
VERBS =
[
    {
        "infinitive": "думать",
        "present":
        {
            "first singular": "думаю",
            "second singular": "думаешь",
            "third singular": "думает",
            "first plural": "думаем",
            "second plural": "думаете",
            "third plural": "думают"
        }
    },
    {
        "infinitive": "гулять",
        "present":
        {
            "first singular": "гуляю",
            "second singular": "гуляешь",
            "third singular": "гуляет",
            "first plural": "гуляем",
            "second plural": "гуляете",
            "third plural": "гуляют"
        }
    },
    {
        "infinitive": "играть",
        "present":
        {
            "first singular": "играю",
            "second singular": "играешь",
            "third singular": "играет",
            "first plural": "играем",
            "second plural": "играете",
            "third plural": "играют"
        }
    },
    {
        "infinitive": "изучать",
        "present":
        {
            "first singular": "изучаю",
            "second singular": "изучаешь",
            "third singular": "изучает",
            "first plural": "изучаем",
            "second plural": "изучаете",
            "third plural": "изучают"
        }
    },
    {
        "infinitive": "отдыхать",
        "present":
        {
            "first singular": "отдыхаю",
            "second singular": "отдыхаешь",
            "third singular": "отдыхает",
            "first plural": "отдыхаем",
            "second plural": "отдыхаете",
            "third plural": "отдыхают"
        }
    },
    {
        "infinitive": "слушать",
        "present":
        {
            "first singular": "слушаю",
            "second singular": "слушаешь",
            "third singular": "слушает",
            "first plural": "слушаем",
            "second plural": "слушаете",
            "third plural": "слушают"
        }
    },
    {
        "infinitive": "читать",
        "present":
        {
            "first singular": "читаю",
            "second singular": "читаешь",
            "third singular": "читает",
            "first plural": "читаем",
            "second plural": "читаете",
            "third plural": "читают"
        }
    },
    {
        "infinitive": "говорить",
        "present":
        {
            "first singular": "говорю",
            "second singular": "говоришь",
            "third singular": "говорит",
            "first plural": "говорим",
            "second plural": "говорите",
            "third plural": "говорят"
        }
    },
    {
        "infinitive": "ходить",
        "present":
        {
            "first singular": "хожу",
            "second singular": "ходишь",
            "third singular": "ходит",
            "first plural": "ходим",
            "second plural": "ходите",
            "third plural": "ходят"
        }
    },
]

class Verb {
    constructor(json) {
        this._json = json;
    }

    getInfinitive() { return this._json.infinitive; }
    getConjugation(perspective) { return this._json.present[perspective]; }

    getRandomConjugations(numConjugations, excludeConjugation) {
        // Pick two conjugations at random, exclude the correct conjugation
        let availableConjugations =
            Object.keys(this._json.present).filter(word => word !== excludeConjugation);

        let incorrectChoices = [];
        for (let idx = 0; idx < numConjugations; idx++) {
            // Choose a conjugation at random
            const conjugationIdx = Math.floor(Math.random() * availableConjugations.length);
            incorrectChoices.push(this._json.present[availableConjugations[conjugationIdx]]);

            // Remove the chosen conjugation from the options
            availableConjugations = availableConjugations.slice(conjugationIdx);
        }

        return incorrectChoices;
    }
}

/**
 * Provides the interface to the dictionary data structure. Nothing should access the JSON data
 * directly.
 */
class Verbs {
    /**
     * Returns a randomly chosen verb from the dictionary.
     */
    static getRandomVerb() {
        return new Verb(VERBS[Math.floor(Math.random() * VERBS.length)]);
    }

    static getRandomPronoun() {
        const availablePronouns = Object.keys(PRONOUNS);
        const chosenPronoun = availablePronouns[Math.floor(Math.random() * availablePronouns.length)];

        return [chosenPronoun, PRONOUNS[chosenPronoun]];
    }
}