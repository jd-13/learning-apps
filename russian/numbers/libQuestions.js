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

function getRandomNumber(maxNumber) {
    var availableFunctions = [];

    if (enabledNumbers["cardinal"]) {
        availableFunctions.push(Numbers.getRandomCardinal);
    }

    if (enabledNumbers["ordinal"]) {
        availableFunctions.push(Numbers.getRandomOrdinal);
    }

    return availableFunctions[Math.floor(Math.random() * availableFunctions.length)](maxNumber);
}

/**
 * Generates and renders a question which asks the user to type the correct conjugation.
 */

var SimpleQuestion = function (_BaseQuestion) {
    _inherits(SimpleQuestion, _BaseQuestion);

    function SimpleQuestion() {
        _classCallCheck(this, SimpleQuestion);

        var _this = _possibleConstructorReturn(this, (SimpleQuestion.__proto__ || Object.getPrototypeOf(SimpleQuestion)).call(this));

        console.log("Creating SimpleQuestion");
        _this._setup();
        return _this;
    }

    _createClass(SimpleQuestion, [{
        key: "_setup",
        value: function _setup() {
            // Choose a number at random
            var _getRandomNumber = getRandomNumber(selectedMaxNumber),
                _getRandomNumber2 = _slicedToArray(_getRandomNumber, 2),
                chosenNumber = _getRandomNumber2[0],
                translatedString = _getRandomNumber2[1];

            console.log("Chose number: " + chosenNumber);

            this._questionText = "Translate: " + chosenNumber;
            this._answer = translatedString;

            this._feedbackText = ["The correct answer is " + this._answer, ""];
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

var ChoiceQuestion = function (_BaseQuestion2) {
    _inherits(ChoiceQuestion, _BaseQuestion2);

    function ChoiceQuestion() {
        _classCallCheck(this, ChoiceQuestion);

        var _this2 = _possibleConstructorReturn(this, (ChoiceQuestion.__proto__ || Object.getPrototypeOf(ChoiceQuestion)).call(this));

        console.log("Creating ChoiceQuestion");
        _this2._setup();
        return _this2;
    }

    _createClass(ChoiceQuestion, [{
        key: "_setup",
        value: function _setup() {
            // Choose a number at random
            var _getRandomNumber3 = getRandomNumber(selectedMaxNumber),
                _getRandomNumber4 = _slicedToArray(_getRandomNumber3, 2),
                chosenNumber = _getRandomNumber4[0],
                translatedString = _getRandomNumber4[1];

            console.log("Chose number: " + chosenNumber);

            // Select 2 incorrect choices
            this._incorrectChoices = [];
            for (var idx = 0; idx < 2; idx++) {
                var _getRandomNumber5 = getRandomNumber(selectedMaxNumber),
                    _getRandomNumber6 = _slicedToArray(_getRandomNumber5, 2),
                    _ = _getRandomNumber6[0],
                    incorrectChoice = _getRandomNumber6[1];

                this._incorrectChoices.push(incorrectChoice);
            }

            console.log("Incorrect choices: " + this._incorrectChoices);

            // Store the results
            this._questionText = "Choose the correct translation for: " + chosenNumber + " ";
            this._answer = translatedString;
            this._feedbackText = ["The correct answer is " + this._answer, ""];
        }
    }, {
        key: "renderQuestion",
        value: function renderQuestion() {
            // Prepare the answer choices
            shuffledAnswers = [].concat(_toConsumableArray(this._incorrectChoices));
            shuffledAnswers.push(this._answer);
            shuffleArray(shuffledAnswers);

            // Render the question
            ReactDOM.render(React.createElement(ChoiceQuestionElement, { questionText: this._questionText, answer: this._answer, shuffledAnswers: shuffledAnswers, incorrectChoices: this._incorrectChoices, feedbackLine1: this._feedbackText[0], feedbackLine2: this._feedbackText[1] }), questionDiv);

            // Render the buttons
            var reportTitle = this._questionText;
            var reportBody = "[" + this._shuffledAnswers + "][" + this._answer + "]";
            ReactDOM.render(React.createElement(MainButtonsElement, { reportTitle: reportTitle, reportBody: reportBody, nextButtonDisabled: true }), buttonsDiv);
        }
    }]);

    return ChoiceQuestion;
}(BaseQuestion);