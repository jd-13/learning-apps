var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseQuestion = function () {
    function BaseQuestion() {
        _classCallCheck(this, BaseQuestion);
    }
    // Do nothing


    /**
     * Inheriting classes must implement this to populate questionDiv with the HTML elements
     * required by the question, and implement a call back for one of the elements which will enable
     * $nextBtn when the user has provided an answer.
     */


    _createClass(BaseQuestion, [{
        key: "renderQuestion",
        value: function renderQuestion() {
            throw new BadMethodCallException();
        }
    }]);

    return BaseQuestion;
}();

/**
 * Generates and renders a question which asks the user to type the correct case.
 */


var SimpleQuestion = function (_BaseQuestion) {
    _inherits(SimpleQuestion, _BaseQuestion);

    function SimpleQuestion(dictionary) {
        _classCallCheck(this, SimpleQuestion);

        // Choose a noun or pronoun
        var _this = _possibleConstructorReturn(this, (SimpleQuestion.__proto__ || Object.getPrototypeOf(SimpleQuestion)).call(this));

        if (Math.random() > 0.5) {
            _this._setupNoun(dictionary);
        } else {
            _this._setupPronoun(dictionary);
        }
        return _this;
    }

    _createClass(SimpleQuestion, [{
        key: "_setupNoun",
        value: function _setupNoun(dictionary) {
            // Choose a noun at random
            var nouns = dictionary.nouns.animate;
            var chosenNoun = nouns[Math.floor(Math.random() * nouns.length)];

            // Choose a target case at random, exclude the first case as this will always be nominative
            var availableCases = Object.keys(chosenNoun).slice(1);
            var chosenCaseKey = availableCases[Math.floor(Math.random() * availableCases.length)];
            var chosenCase = chosenNoun[chosenCaseKey];

            // Get the text for the feedback
            var feedbackLine1 = dictionary.caseRules[chosenCaseKey][chosenCase.caseRule];

            // Check if we need to explain a spelling rule
            var feedbackLine2 = "";
            if (chosenCase.hasOwnProperty("spellingRule")) {
                feedbackLine2 = dictionary.spellingRules[chosenCase.spellingRule];
            }

            // Store the results
            this._questionText = "What is the " + chosenCaseKey + " case of " + chosenNoun.nominative.text + "?";
            this._answer = chosenNoun[chosenCaseKey].text;
            this._feedbackText = [feedbackLine1, feedbackLine2];
        }
    }, {
        key: "_setupPronoun",
        value: function _setupPronoun(dictionary) {
            var chosenPronoun = undefined;

            // Choose personal or possesive
            if (Math.random() > 0.5) {
                var pronouns = dictionary.pronouns.personal;
                chosenPronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
            } else {
                var _pronouns = dictionary.pronouns.possessive;

                // Choose gender
                var genders = Object.keys(_pronouns);
                var chosenGender = genders[Math.floor(Math.random() * genders.length)];

                // Choose the pronoun
                chosenPronoun = _pronouns[chosenGender][Math.floor(Math.random() * _pronouns[chosenGender].length)];
            }

            // Choose a target case at random, exclude the first case as this will always be nominative
            var availableCases = Object.keys(chosenPronoun).slice(1);
            var chosenCaseKey = availableCases[Math.floor(Math.random() * availableCases.length)];
            var answer = chosenPronoun[chosenCaseKey];

            var questionSuffix = "";

            // Handle the accusative case
            if ((typeof answer === "undefined" ? "undefined" : _typeof(answer)) === "object") {
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
            var feedbackLine1 = "The correct answer is " + answer;

            // Store the results
            this._questionText = "What is the " + chosenCaseKey + " case of " + chosenPronoun.nominative + questionSuffix + "?";
            this._answer = answer;
            this._feedbackText = [feedbackLine1, ""];
        }
    }, {
        key: "renderQuestion",
        value: function renderQuestion() {
            ReactDOM.render(React.createElement(SimpleQuestionElement, { questionText: this._questionText, answer: this._answer, feedbackLine1: this._feedbackText[0], feedbackLine2: this._feedbackText[1] }), questionDiv);
        }
    }]);

    return SimpleQuestion;
}(BaseQuestion);

var CaseChoiceQuestion = function (_BaseQuestion2) {
    _inherits(CaseChoiceQuestion, _BaseQuestion2);

    function CaseChoiceQuestion(dictionary) {
        _classCallCheck(this, CaseChoiceQuestion);

        // Choose a noun or pronoun
        var _this2 = _possibleConstructorReturn(this, (CaseChoiceQuestion.__proto__ || Object.getPrototypeOf(CaseChoiceQuestion)).call(this));

        if (Math.random() > 0.5) {
            _this2._setupNoun(dictionary);
        } else {
            _this2._setupPronoun(dictionary);
        }
        return _this2;
    }

    /**
     * Chooses a phrase from the dictionary, then substitutes a noun for the || characters, choosing
     * the correct form of the noun and two incorrect forms.
     *
     * @param {*} dictionary
     */


    _createClass(CaseChoiceQuestion, [{
        key: "_setupNoun",
        value: function _setupNoun(dictionary) {
            // Choose a phrase from the dictionary
            var phrases = dictionary.nounChoicePhrases;
            var chosenPhrase = phrases[Math.floor(Math.random() * phrases.length)];

            // If there are multiple substitutions available, randomly choose one to quiz the user on
            var questionSubstIdx = Math.floor(Math.random() * chosenPhrase.substitutions.length);
            var questionSubst = chosenPhrase.substitutions[questionSubstIdx];

            // Choose a noun to substitute into the phrase
            var nouns = dictionary.nouns[questionSubst.nounType];
            var chosenNoun = nouns[Math.floor(Math.random() * nouns.length)];

            // Lookup the correct case of the noun for this phrase
            var correctNounCase = chosenNoun[questionSubst.targetCase];

            // Pick two other cases at random, exclude the correct case
            var availableCases = Object.keys(chosenNoun).filter(function (word) {
                return word !== questionSubst.targetCase;
            });

            this._incorrectChoices = [];
            for (var idx = 0; idx < 2; idx++) {
                var caseIdx = Math.floor(Math.random() * availableCases.length);
                this._incorrectChoices.push(chosenNoun[availableCases[caseIdx]].text);
                availableCases = availableCases.slice(caseIdx);
            }

            // Substitute the correct noun forms into the substitutions that we're not quiz'ing the user
            // on
            var questionText = chosenPhrase.text;
            var substToken = "||";
            var substitutionNumber = 0;
            for (var _idx = 0; (_idx = questionText.indexOf(substToken, _idx)) > -1; _idx++) {

                if (substitutionNumber != questionSubstIdx) {
                    var thisSubstitution = chosenPhrase.substitutions[substitutionNumber];
                    var substNouns = dictionary.nouns[thisSubstitution.nounType];
                    var thisNoun = substNouns[Math.floor(Math.random() * substNouns.length)][thisSubstitution.targetCase]["text"];

                    questionText = questionText.substring(0, _idx) + thisNoun + questionText.substring(_idx + substToken.length);
                }

                substitutionNumber++;
            }

            // Get the text for the feedback
            var feedbackLine1 = questionSubst.targetCase + " case";
            feedbackLine1 = feedbackLine1.charAt(0).toUpperCase() + feedbackLine1.slice(1);

            // Nominative case has no case rule
            if (correctNounCase.hasOwnProperty("caseRule")) {
                feedbackLine1 = feedbackLine1.concat(": " + dictionary.caseRules[questionSubst.targetCase][correctNounCase.caseRule]);
            }

            var feedbackLine2 = "";
            if (correctNounCase.hasOwnProperty("spellingRule")) {
                feedbackLine2 = dictionary.spellingRules[correctNounCase.spellingRule];
            }

            // Store the results
            this._questionText = questionText;
            this._answer = correctNounCase.text;
            this._feedbackText = [feedbackLine1, feedbackLine2];
        }
    }, {
        key: "_setupPronoun",
        value: function _setupPronoun(dictionary) {
            // Choose a phrase from the dictionary
            var phrases = dictionary.pronounChoicePhrases;
            var chosenPhrase = phrases[Math.floor(Math.random() * phrases.length)];

            // Get the pronoun
            var chosenPronoun = undefined;
            if (chosenPhrase.pronounType === "personal") {
                var pronouns = dictionary.pronouns.personal;
                chosenPronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
            } else {
                var _pronouns2 = dictionary.pronouns.possessive[chosenPhrase.gender];

                // Choose the pronoun
                chosenPronoun = _pronouns2[Math.floor(Math.random() * _pronouns2.length)];
            }

            // Lookup the correct case of the noun for this phrase
            var correctPronounCase = chosenPronoun[chosenPhrase.targetCase];

            // Handle the accusative case
            if ((typeof correctPronounCase === "undefined" ? "undefined" : _typeof(correctPronounCase)) === "object") {
                if (chosenPhrase.isAnimate) {
                    correctPronounCase = correctPronounCase.animate;
                } else {
                    correctPronounCase = correctPronounCase.inanimate;
                }
            }

            // Pick two other cases at random, exclude the correct case
            var availableCases = Object.keys(chosenPronoun).filter(function (word) {
                return word !== chosenPhrase.targetCase;
            });
            this._incorrectChoices = [];
            for (var idx = 0; idx < 2; idx++) {
                var caseIdx = Math.floor(Math.random() * availableCases.length);
                var incorrectChoice = chosenPronoun[availableCases[caseIdx]];

                // Handle the accusative case
                if ((typeof correctPronounCase === "undefined" ? "undefined" : _typeof(correctPronounCase)) === "object") {
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
            var feedbackLine1 = "The correct answer is " + correctPronounCase;

            // Store the results
            this._questionText = chosenPhrase.text;
            this._answer = correctPronounCase;
            this._feedbackText = [feedbackLine1, ""];
        }
    }, {
        key: "renderQuestion",
        value: function renderQuestion() {
            ReactDOM.render(React.createElement(CaseChoiceQuestionElement, { questionText: this._questionText, answer: this._answer, incorrectChoices: this._incorrectChoices, feedbackLine1: this._feedbackText[0], feedbackLine2: this._feedbackText[1] }), questionDiv);
        }
    }]);

    return CaseChoiceQuestion;
}(BaseQuestion);