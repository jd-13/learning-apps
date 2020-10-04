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
};VERBS = [
// Easy (0-14)
{
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
    "infinitive": "готовить",
    "present": {
        "first singular": "готовлю",
        "second singular": "готовишь",
        "third singular": "готовит",
        "first plural": "готовим",
        "second plural": "готовите",
        "third plural": "готовят"
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
    "infinitive": "жить",
    "present": {
        "first singular": "живу",
        "second singular": "живёшь",
        "third singular": "живёт",
        "first plural": "живём",
        "second plural": "живёте",
        "third plural": "живут"
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
    "infinitive": "петь",
    "present": {
        "first singular": "пою",
        "second singular": "поёшь",
        "third singular": "поёт",
        "first plural": "поём",
        "second plural": "поёте",
        "third plural": "поют"
    }
}, {
    "infinitive": "писать",
    "present": {
        "first singular": "пишу",
        "second singular": "пишешь",
        "third singular": "пишет",
        "first plural": "пишем",
        "second plural": "пишете",
        "third plural": "пишут"
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
    "infinitive": "спать",
    "present": {
        "first singular": "сплю",
        "second singular": "спишь",
        "third singular": "спит",
        "first plural": "спим",
        "second plural": "спите",
        "third plural": "спят"
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
    "infinitive": "уметь",
    "present": {
        "first singular": "умею",
        "second singular": "умеешь",
        "third singular": "умеет",
        "first plural": "умеем",
        "second plural": "умеете",
        "third plural": "умеют"
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
    "infinitive": "читать",
    "present": {
        "first singular": "читаю",
        "second singular": "читаешь",
        "third singular": "читает",
        "first plural": "читаем",
        "second plural": "читаете",
        "third plural": "читают"
    }
},

// Intermediate (15:)
{
    "infinitive": "есть",
    "present": {
        "first singular": "ем",
        "second singular": "ешь",
        "third singular": "ест",
        "first plural": "едим",
        "second plural": "едите",
        "third plural": "едят"
    }
}, {
    "infinitive": "жевать",
    "present": {
        "first singular": "жую",
        "second singular": "жуёшь",
        "third singular": "жуёт",
        "first plural": "жуем",
        "second plural": "жуёте",
        "third plural": "жуют"
    }
}, {
    "infinitive": "идти",
    "present": {
        "first singular": "иду",
        "second singular": "идёшь",
        "third singular": "идёт",
        "first plural": "идём",
        "second plural": "идёте",
        "third plural": "идут"
    }
}, {
    "infinitive": "обедать",
    "present": {
        "first singular": "обедаю",
        "second singular": "обедаешь",
        "third singular": "обедает",
        "first plural": "обедаем",
        "second plural": "обедаете",
        "third plural": "обедают"
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
    "infinitive": "помочь",
    "present": {
        "first singular": "помогу",
        "second singular": "поможешь",
        "third singular": "поможет",
        "first plural": "поможем",
        "second plural": "поможете",
        "third plural": "помогут"
    }
}, {
    "infinitive": "предлагать",
    "present": {
        "first singular": "предлагаю",
        "second singular": "предлагаешь",
        "third singular": "предлагает",
        "first plural": "предлагаем",
        "second plural": "предлагаете",
        "third plural": "предлагают"
    }
}, {
    "infinitive": "принимать",
    "present": {
        "first singular": "принимаю",
        "second singular": "принимаешь",
        "third singular": "принимает",
        "first plural": "принимаем",
        "second plural": "принимаете",
        "third plural": "принимают"
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
    "infinitive": "сказать",
    "present": {
        "first singular": "скажу",
        "second singular": "скажешь",
        "third singular": "скажет",
        "first plural": "скажем",
        "second plural": "скажете",
        "third plural": "скажут"
    }
}, {
    "infinitive": "ужинать",
    "present": {
        "first singular": "ужинаю",
        "second singular": "ужинаешь",
        "third singular": "ужинает",
        "first plural": "ужинаем",
        "second plural": "ужинаете",
        "third plural": "ужинают"
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
    "infinitive": "завтракать",
    "present": {
        "first singular": "завтракаю",
        "second singular": "завтракаешь",
        "third singular": "завтракает",
        "first plural": "завтракаем",
        "second plural": "завтракаете",
        "third plural": "завтракают"
    }
}, {
    "infinitive": "загорать",
    "present": {
        "first singular": "загораю",
        "second singular": "загораешь",
        "third singular": "загорает",
        "first plural": "загораем",
        "second plural": "загораете",
        "third plural": "загорают"
    }
}, {
    "infinitive": "сообщать",
    "present": {
        "first singular": "сообщаю",
        "second singular": "сообщаешь",
        "third singular": "сообщает",
        "first plural": "сообщаем",
        "second plural": "сообщаете",
        "third plural": "сообщают"
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
            return new Verb(VERBS[Math.floor(Math.random() * selectedDifficulty)]);
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