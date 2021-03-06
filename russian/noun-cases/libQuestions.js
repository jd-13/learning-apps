var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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

    function SimpleQuestion() {
        _classCallCheck(this, SimpleQuestion);

        var _this = _possibleConstructorReturn(this, (SimpleQuestion.__proto__ || Object.getPrototypeOf(SimpleQuestion)).call(this));

        console.log("Creating SimpleQuestion");

        // Choose a noun or pronoun
        if (Math.random() > 0.5) {
            _this._setupNoun();
        } else {
            _this._setupPronoun();
        }
        return _this;
    }

    _createClass(SimpleQuestion, [{
        key: "_setupNoun",
        value: function _setupNoun() {

            // Choose a noun at random
            var chosenNoun = Dictionary.getRandomNoun(isAnimate = true);
            console.log("Chose noun: " + chosenNoun.getSingularDeclension("nominative").text);

            // Decide whether to ask for singular or plural
            var plural = Math.random() > 0.5;

            var chosenDeclension = undefined;
            var feedbackLine1 = "";

            if (plural) {
                var chosenCase = undefined;

                var _chosenNoun$getRandom = chosenNoun.getRandomCase(excludeCases = getDisabledCasesList(), plural);

                var _chosenNoun$getRandom2 = _slicedToArray(_chosenNoun$getRandom, 2);

                chosenCase = _chosenNoun$getRandom2[0];
                chosenDeclension = _chosenNoun$getRandom2[1];


                feedbackLine1 = PLURAL_RULES[chosenCase][chosenDeclension.caseRule];
                this._questionText = "What is the plural " + chosenCase + " case of " + chosenNoun.getSingularDeclension("nominative").text + "?";
                this._answer = chosenNoun.getPluralDeclension(chosenCase).text;
            } else {
                var _chosenCase = undefined;
                // Exclude nominative case for singular

                var _chosenNoun$getRandom3 = chosenNoun.getRandomCase(excludeCases = ["nominative"].concat(_toConsumableArray(getDisabledCasesList())), plural);

                var _chosenNoun$getRandom4 = _slicedToArray(_chosenNoun$getRandom3, 2);

                _chosenCase = _chosenNoun$getRandom4[0];
                chosenDeclension = _chosenNoun$getRandom4[1];


                feedbackLine1 = CASE_RULES[_chosenCase][chosenDeclension.caseRule];
                this._questionText = "What is the singular " + _chosenCase + " case of " + chosenNoun.getSingularDeclension("nominative").text + "?";
                this._answer = chosenNoun.getSingularDeclension(_chosenCase).text;
            }

            // Check if we need to explain a spelling rule
            var feedbackLine2 = "";
            if (chosenDeclension.hasOwnProperty("spellingRule")) {
                feedbackLine2 = SPELLING_RULES[chosenDeclension.spellingRule];
            }

            this._feedbackText = [feedbackLine1, feedbackLine2];
        }
    }, {
        key: "_setupPronoun",
        value: function _setupPronoun() {

            // Choose personal or possessive pronouns
            var usePersonal = true;
            if (Math.random() > 0.5) {
                usePersonal = false;
            }
            var chosenPronoun = usePersonal ? Dictionary.getRandomPersonalPronoun() : Dictionary.getRandomPossessivePronoun();
            console.log("Chose pronoun: " + chosenPronoun.getDeclension("nominative"));

            var _chosenPronoun$getRan = chosenPronoun.getRandomCase(excludeCases = ["nominative"].concat(_toConsumableArray(getDisabledCasesList()))),
                _chosenPronoun$getRan2 = _slicedToArray(_chosenPronoun$getRan, 3),
                chosenCaseKey = _chosenPronoun$getRan2[0],
                isAnimate = _chosenPronoun$getRan2[1],
                chosenCase = _chosenPronoun$getRan2[2];

            // For accusative case possessive pronouns we need to specify in the question text whether
            // the object should be animate or inanimate


            var questionSuffix = "";
            if (!usePersonal && chosenCaseKey === "accusative") {
                if (isAnimate) {
                    questionSuffix = " (animate)";
                } else {
                    questionSuffix = " (inanimate)";
                }
            }

            // Get the text for the feedback
            var feedbackLine1 = "The correct answer is " + chosenCase;

            // Store the results
            this._questionText = "What is the " + chosenCaseKey + " case of " + chosenPronoun.getDeclension("nominative") + questionSuffix + "?";
            this._answer = chosenCase;
            this._feedbackText = [feedbackLine1, ""];
        }
    }, {
        key: "renderQuestion",
        value: function renderQuestion() {
            // Render the question
            ReactDOM.render(React.createElement(SimpleQuestionElement, { questionText: this._questionText, answer: this._answer, feedbackLine1: this._feedbackText[0], feedbackLine2: this._feedbackText[1] }), questionDiv);

            // Render the buttons
            var reportTitle = this._questionText;
            var reportBody = "[" + this._answer + "]";
            ReactDOM.render(React.createElement(MainButtonsElement, { reportTitle: reportTitle, reportBody: reportBody, nextButtonDisabled: true }), buttonsDiv);
        }
    }]);

    return SimpleQuestion;
}(BaseQuestion);

var CaseChoiceQuestion = function (_BaseQuestion2) {
    _inherits(CaseChoiceQuestion, _BaseQuestion2);

    function CaseChoiceQuestion() {
        _classCallCheck(this, CaseChoiceQuestion);

        var _this2 = _possibleConstructorReturn(this, (CaseChoiceQuestion.__proto__ || Object.getPrototypeOf(CaseChoiceQuestion)).call(this));

        console.log("Creating CaseChoiceQuestion");

        // Choose a noun or pronoun
        if (Math.random() > 0.5) {
            _this2._setupNoun();
        } else {
            _this2._setupPronoun();
        }
        return _this2;
    }

    /**
     * Chooses a phrase from the dictionary, then substitutes a noun for the || characters, choosing
     * the correct form of the noun and two incorrect forms.
     */


    _createClass(CaseChoiceQuestion, [{
        key: "_setupNoun",
        value: function _setupNoun() {
            // Choose a phrase from the dictionary
            var chosenPhrase = Dictionary.getRandomNounChoicePhrase(excludeCases = getDisabledCasesList());
            console.log("Chose noun phrase: " + chosenPhrase._json.text);

            // Prepare the question text

            var _chosenPhrase$getPrep = chosenPhrase.getPreparedText(excludeCases = getDisabledCasesList()),
                _chosenPhrase$getPrep2 = _slicedToArray(_chosenPhrase$getPrep, 2),
                questionSubst = _chosenPhrase$getPrep2[0],
                questionText = _chosenPhrase$getPrep2[1];

            // Choose a noun to substitute into the phrase


            var chosenNoun = Dictionary.getRandomNoun(isAnimate = questionSubst.nounType === "animate");
            console.log("Chose noun: " + chosenNoun.getSingularDeclension("nominative").text);

            // Lookup the correct case of the noun for this phrase
            var correctNounCase = chosenNoun.getSingularDeclension(questionSubst.targetCase);
            console.log("Correct noun case: " + correctNounCase.text);

            // Pick two other cases at random, exclude the correct case
            this._incorrectChoices = chosenNoun.getRandomDeclensions(2, questionSubst.targetCase);
            console.log("Incorrect choices: " + this._incorrectChoices);

            // Get the text for the feedback
            var feedbackLine1 = questionSubst.targetCase + " case";
            feedbackLine1 = feedbackLine1.charAt(0).toUpperCase() + feedbackLine1.slice(1);

            // Nominative case has no case rule
            if (correctNounCase.hasOwnProperty("caseRule")) {
                feedbackLine1 = feedbackLine1.concat(": " + CASE_RULES[questionSubst.targetCase][correctNounCase.caseRule]);
            }

            var feedbackLine2 = "";
            if (correctNounCase.hasOwnProperty("spellingRule")) {
                feedbackLine2 = SPELLING_RULES[correctNounCase.spellingRule];
            }

            // Store the results
            this._questionText = questionText;
            this._answer = correctNounCase.text;
            this._feedbackText = [feedbackLine1, feedbackLine2];
        }
    }, {
        key: "_setupPronoun",
        value: function _setupPronoun() {
            // Choose a phrase from the dictionary
            var chosenPhrase = Dictionary.getRandomPronounChoicePhrase(excludeCases = getDisabledCasesList());
            console.log("Chose pronoun phrase: " + chosenPhrase.getText());

            // Lookup the correct case of the noun for this phrase

            var _chosenPhrase$getCorr = chosenPhrase.getCorrectAndIncorrectPronounDeclensions(),
                _chosenPhrase$getCorr2 = _slicedToArray(_chosenPhrase$getCorr, 2),
                correctPronounCase = _chosenPhrase$getCorr2[0],
                incorrectChoices = _chosenPhrase$getCorr2[1];

            this._incorrectChoices = incorrectChoices;
            console.log("Correct case: " + correctPronounCase);

            // Get the text for the feedback
            var feedbackLine1 = "The correct answer is " + correctPronounCase;

            // Store the results
            this._questionText = chosenPhrase.getText();
            this._answer = correctPronounCase;
            this._feedbackText = [feedbackLine1, ""];
        }
    }, {
        key: "renderQuestion",
        value: function renderQuestion() {
            // Prepare the answer choices
            shuffledAnswers = [].concat(_toConsumableArray(this._incorrectChoices));
            shuffledAnswers.push(this._answer);
            shuffleArray(shuffledAnswers);

            // Render the question
            ReactDOM.render(React.createElement(CaseChoiceQuestionElement, { questionText: this._questionText, answer: this._answer, shuffledAnswers: shuffledAnswers, incorrectChoices: this._incorrectChoices, feedbackLine1: this._feedbackText[0], feedbackLine2: this._feedbackText[1] }), questionDiv);

            // Render the buttons
            var reportTitle = this._questionText;
            var reportBody = "[" + this._shuffledAnswers + "][" + this._answer + "]";
            ReactDOM.render(React.createElement(MainButtonsElement, { reportTitle: reportTitle, reportBody: reportBody, nextButtonDisabled: true }), buttonsDiv);
        }
    }]);

    return CaseChoiceQuestion;
}(BaseQuestion);