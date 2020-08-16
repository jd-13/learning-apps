var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

PRONOUNS = {
    "я": "first singular",
    "ты": "second singular",
    "он": "third singular",
    "она": "third singular",
    "мы": "first plural",
    "вы": "second plural",
    "они": "third plural"

    // TODO: Currently only present tense verbs
};VERBS = [{
    "infinitive": "думать",
    "present": {
        "first singular": "думаю",
        "second singular": "думаешь",
        "third singular": "думает",
        "first plural": "думаем",
        "second plural": "думаете",
        "third plural": "думают"
    }
}, {
    "infinitive": "гулять",
    "present": {
        "first singular": "гуляю",
        "second singular": "гуляешь",
        "third singular": "гуляет",
        "first plural": "гуляем",
        "second plural": "гуляете",
        "third plural": "гуляют"
    }
}, {
    "infinitive": "играть",
    "present": {
        "first singular": "играю",
        "second singular": "играешь",
        "third singular": "играет",
        "first plural": "играем",
        "second plural": "играете",
        "third plural": "играют"
    }
}, {
    "infinitive": "изучать",
    "present": {
        "first singular": "изучаю",
        "second singular": "изучаешь",
        "third singular": "изучает",
        "first plural": "изучаем",
        "second plural": "изучаете",
        "third plural": "изучают"
    }
}, {
    "infinitive": "отдыхать",
    "present": {
        "first singular": "отдыхаю",
        "second singular": "отдыхаешь",
        "third singular": "отдыхает",
        "first plural": "отдыхаем",
        "second plural": "отдыхаете",
        "third plural": "отдыхают"
    }
}, {
    "infinitive": "слушать",
    "present": {
        "first singular": "слушаю",
        "second singular": "слушаешь",
        "third singular": "слушает",
        "first plural": "слушаем",
        "second plural": "слушаете",
        "third plural": "слушают"
    }
}, {
    "infinitive": "читать",
    "present": {
        "first singular": "читаю",
        "second singular": "читаешь",
        "third singular": "читает",
        "first plural": "читаем",
        "second plural": "читаете",
        "third plural": "читают"
    }
}, {
    "infinitive": "говорить",
    "present": {
        "first singular": "говорю",
        "second singular": "говоришь",
        "third singular": "говорит",
        "first plural": "говорим",
        "second plural": "говорите",
        "third plural": "говорят"
    }
}, {
    "infinitive": "ходить",
    "present": {
        "first singular": "хожу",
        "second singular": "ходишь",
        "third singular": "ходит",
        "first plural": "ходим",
        "second plural": "ходите",
        "third plural": "ходят"
    }
}, {
    "infinitive": "ходить",
    "present": {
        "first singular": "хожу",
        "second singular": "ходишь",
        "third singular": "ходит",
        "first plural": "ходим",
        "second plural": "ходите",
        "third plural": "ходят"
    }
}, {
    "infinitive": "танцевать",
    "present": {
        "first singular": "танцую",
        "second singular": "танцуешь",
        "third singular": "танцует",
        "first plural": "танцуем",
        "second plural": "танцуете",
        "third plural": "танцуют"
    }
}, {
    "infinitive": "рисовать",
    "present": {
        "first singular": "рисую",
        "second singular": "рисуешь",
        "third singular": "рисует",
        "first plural": "рисуем",
        "second plural": "рисуете",
        "third plural": "рисуют"
    }
}, {
    "infinitive": "фотографировать",
    "present": {
        "first singular": "фотографирую",
        "second singular": "фотографируешь",
        "third singular": "фотографирует",
        "first plural": "фотографируем",
        "second plural": "фотографируете",
        "third plural": "фотографируют"
    }
}, {
    "infinitive": "путешествовать",
    "present": {
        "first singular": "путешествую",
        "second singular": "путешествуешь",
        "third singular": "путешествует",
        "first plural": "путешествуем",
        "second plural": "путешествуете",
        "third plural": "путешествуют"
    }
}];

var Verb = function () {
    function Verb(json) {
        _classCallCheck(this, Verb);

        this._json = json;
    }

    _createClass(Verb, [{
        key: "getInfinitive",
        value: function getInfinitive() {
            return this._json.infinitive;
        }
    }, {
        key: "getConjugation",
        value: function getConjugation(perspective) {
            return this._json.present[perspective];
        }
    }, {
        key: "getRandomConjugations",
        value: function getRandomConjugations(numConjugations, excludeConjugation) {
            // Pick two conjugations at random, exclude the correct conjugation
            var availableConjugations = Object.keys(this._json.present).filter(function (word) {
                return word !== excludeConjugation;
            });

            var incorrectChoices = [];
            for (var idx = 0; idx < numConjugations; idx++) {
                // Choose a conjugation at random
                var conjugationIdx = Math.floor(Math.random() * availableConjugations.length);
                incorrectChoices.push(this._json.present[availableConjugations[conjugationIdx]]);

                // Remove the chosen conjugation from the options
                availableConjugations = availableConjugations.slice(conjugationIdx);
            }

            return incorrectChoices;
        }
    }]);

    return Verb;
}();

/**
 * Provides the interface to the dictionary data structure. Nothing should access the JSON data
 * directly.
 */


var Verbs = function () {
    function Verbs() {
        _classCallCheck(this, Verbs);
    }

    _createClass(Verbs, null, [{
        key: "getRandomVerb",

        /**
         * Returns a randomly chosen verb from the dictionary.
         */
        value: function getRandomVerb() {
            return new Verb(VERBS[Math.floor(Math.random() * VERBS.length)]);
        }
    }, {
        key: "getRandomPronoun",
        value: function getRandomPronoun() {
            var availablePronouns = Object.keys(PRONOUNS);
            var chosenPronoun = availablePronouns[Math.floor(Math.random() * availablePronouns.length)];

            return [chosenPronoun, PRONOUNS[chosenPronoun]];
        }
    }]);

    return Verbs;
}();